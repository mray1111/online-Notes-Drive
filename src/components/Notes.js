import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from "./Addnote"
import Noteitem from './Noteitem'

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;

    useEffect(() => {
        const fetchData = async () => {
            await getNotes();
        };
        fetchData();
    }, [getNotes]);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: '', etitle: '', edescription: '', etag: '' });

    const updateNote = (currentNote) => {
        if (ref.current) ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag,
        });
    };

    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        if (refClose.current) refClose.current.click();
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
                })}
            </div>
        </>
    );
};

export default Notes;
