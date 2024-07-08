import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
const Noteitem = (props) => {
  const context=useContext(noteContext)
  const {deleteNote}=context;

  const { note } = props;

  return (
    <div className='card bg-blue-300 text-black p-4 m-3 w-2/5 h-64 border-black '>
      <h5 className='text-center font-bold'>{note.title}</h5>
      <div>{note.description}</div>
      <div className="mt-3 flex justify-between">
        <i className="fa-regular fa-plus cursor-pointer font-bold">Add</i>
        <i className="fa-sharp fa-solid fa-trash cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>
      </div>
    </div>
  );
};

export default Noteitem;
