const express = require("express");
const router = express.Router();
const User = require("../Models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const JWT_SECRET = process.env.JWT_SECRET_KEY || 'this_is_a_jwt_secret_key';


const { body, validationResult } = require("express-validator");
const Fetchuser = require("../Middleware1/Fetchuser1.js");

//registration route
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, this user already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secretPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secretPassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      return res.json({ authToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
);

//login route
router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password", "password cannot be left blank ").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(400)
          .json({ error: "Sorry, credintials are invalid " });
      }

      const password = req.body.password;
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Sorry, credintials are invalid " });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      return res.json({ authToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
);


router.post("/getuser", Fetchuser, async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.status(200).json(user);
      //console.log(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  });
  

module.exports = router;
