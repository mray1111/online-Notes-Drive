import React, { useContext } from "react";
import Noteitem from "./Noteitem";
import noteContext from "../context/notes/noteContext";
import AddNote from "./Addnote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <div>
      <AddNote />
      <div className="flex flex-wrap justify-around w-full min-h-screen">
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};


export default Notes;
