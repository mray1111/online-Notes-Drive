import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Function to get auth token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('token');
  };

  // Get all Notes
  const getNotes = async () => {
    const token = getAuthToken();
    if (!token) {
      alert("No auth token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (response.status === 401) {
        alert("Invalid auth token. Please log in again.");
        localStorage.removeItem('token');
        return;
      }

      const json = await response.json();
      if (Array.isArray(json)) {
        setNotes(json);
      } else {
        console.error("API response is not an array:", json);
        setNotes([]); // Set to an empty array if the response is not an array
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      setNotes([]); // Set to an empty array on error
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const token = getAuthToken();
    if (!token) {
      alert("No auth token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (response.status === 401) {
        alert("Invalid auth token. Please log in again.");
        localStorage.removeItem('token');
        return;
      }

      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const token = getAuthToken();
    if (!token) {
      alert("No auth token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (response.status === 401) {
        alert("Invalid auth token. Please log in again.");
        localStorage.removeItem('token');
        return;
      }

      const json = await response.json();
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const token = getAuthToken();
    if (!token) {
      alert("No auth token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (response.status === 401) {
        alert("Invalid auth token. Please log in again.");
        localStorage.removeItem('token');
        return;
      }

      const json = await response.json();

      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
