import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState=(props)=>{

    const host="http://localhost:5000"

    const notesInitial=[
        {
          "_id": "6689623b9f4e718ccb8ddfca2",
          "user": "668960726b808a43ca2f974b",
          "title": "my tiltle1",
          "description": "this is description 1 lorem20  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus aliquam, eius nam quis ipsum necessitatibus quas veritatis voluptate, tenetur laborum laboriosam expedita cum iure, nihil nostrum quibusdam possimus repudiandae?",
          "tag": "personal",
          "date": "2024-07-06T15:26:51.203Z",
          "__v": 0
        },
        {
          "_id": "668962459f4e78c55cb8ddfca4",
          "user": "668960726b808a43ca2f974b",
          "title": "my tiltle1",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus aliquam, eius nam quis ipsum necessitatibus quas veritatis voluptate, tenetur laborum laboriosam expedita cum iure, nihil nostrum quibusdam possimus repudiandae?",
          "tag": "personal",
          "date": "2024-07-06T15:27:01.673Z",
          "__v": 0
        },
        {
            "_id": "6689623b459f4e78ccb8ddfca2",
            "user": "668960726b808a43ca2f974b",
            "title": "my tiltle1",
            "description": "this is description 1 lorem20  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus aliquam, eius nam quis ipsum necessitatibus quas veritatis voluptate, tenetur laborum laboriosam expedita cum iure, nihil nostrum quibusdam possimus repudiandae?",
            "tag": "personal",
            "date": "2024-07-06T15:26:51.203Z",
            "__v": 0
          },
          {
            "_id": "668962459f477e78ccb8ddfca4",
            "user": "668960726b808a43ca2f974b",
            "title": "my tiltle1",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus aliquam, eius nam quis ipsum necessitatibus quas veritatis voluptate, tenetur laborum laboriosam expedita cum iure, nihil nostrum quibusdam possimus repudiandae?",
            "tag": "personal",
            "date": "2024-07-06T15:27:01.673Z",
            "__v": 0
          }
      ]

    const s1={
        "name":"manish",
        "class":"vi"
    }

    const [state,setState]=useState(s1)
    const [notes,setNotes]=useState(notesInitial)

    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"manish updated after 1 mins ",
                "class":"7"
            })
        }, 1000);
    }


    const addNote=(title,description,tag)=>{
        console.log("adding a new note ")
        const note={
            "_id": "668962459f4e78ccb8ddfca4",
            "user": "668960726b808a43ca2f974b",
            "title":title,
            "description":description,
            "date": "2024-07-06T15:27:01.673Z",
            "__v": 0
        }

        setNotes(notes.concat(note))
    }

     // Delete a Note
     const deleteNote = (id)=>{
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }


      //edit a Note
      const editNote=(id,title,description,tag)=>{
            for (let index = 0; index < notes.length; index++) {
                const element = notes[index];

                if (element._id ===id){
                    element.title=title;
                    element.description=description;
                    element.tag=tag
                }
                
            }
      }

    return( <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState