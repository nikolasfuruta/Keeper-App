import GenerateNote from "./GenerateNote";
import Note from "./Note";
import { useState } from 'react';

export default function Body() {
  const [note, setNote] = useState({ title:"", content:"" })
  const [listOfNotes, setList] = useState([])

  function handleChange(event) {
    const {name, value} = event.target;
      setNote((prev) => { return {...prev, [name]:value} })
  }

  function addNote() {
    setList((prev) => {return [...prev, note]})
    setNote({ title:"", content:"" })
  }

  function deleteNote(id) {
    setList((prev)=>{
      return prev.filter((_,index)=>{return index!==id})
    })
  }

  return (
    <div className="body-container">

      <GenerateNote 
        title={note.title} 
        content={note.content}
        handleChange={handleChange}
        addNote={addNote}
        defaultValue={note}
      />

      <div className="note-container">
        {listOfNotes.map((note,index) => {
          return <Note
                  key={index}
                  id={index}
                  title={note.title}
                  content={note.content}
                  deleteNote={deleteNote}
                />
        })}
      </div>
      
    </div>
  );
}