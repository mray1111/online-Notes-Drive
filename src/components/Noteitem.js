import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = ({ note, updateNote }) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const handleEdit = () => {
        updateNote(note);
    };

    const handleDelete = () => {
        deleteNote(note._id);
    };

    return (
        <div className="card bg-blue-300 text-black p-4 m-3 w-64 h-64 border-black rounded-lg shadow-lg">
            <h5 className="text-center font-bold">{note.title}</h5>
            <div className="mt-3 flex justify-between">
                <button
                    className="text-red-600 hover:text-red-900 focus:outline-none text-end"
                    onClick={handleDelete} // Call handleDelete directly
                >
                    Delete
                </button>
            </div>
            <p className="mt-2">{note.description}</p>
        </div>
    );
};

export default Noteitem;
