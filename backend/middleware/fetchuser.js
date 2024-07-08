const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });
const JWT_SECRET = process.env.JWT_SECRET_KEY;

//console.log(JWT_SECRET);

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ message: "Please login to access this resource" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Invalid token. Authentication failed.",
    });
  }
};


module.exports = fetchuser;
