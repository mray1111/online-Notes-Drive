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
        <div className="card bg-[#e2e8f0] text-black p-4 m-WW20 w-64 h-80 border-black rounded-lg shadow-lg overflow-y-auto">
            <h5 className="text-center font-bold">{note.title}</h5>
            <div className="mt-3 flex justify-end">
                <button
                    className="text-red-600 hover:text-red-900 focus:outline-none text-end font-bold text-xs "
                    onClick={handleDelete}
                >
                    Delete This Note
                </button>
            </div>
            <p className="mt-2">{note.description}</p>
        </div>
    );
};

export default Noteitem;
