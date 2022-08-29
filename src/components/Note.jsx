export default function Note(props) {
  return (
    <div className="note-card">
      <div className="note-text-container">
        <h1 className="note-title">{props.title}</h1>
        <p className="note-content">{props.content}</p>
      </div>
      <button onClick={()=>{ props.deleteNote(props.id) }} className="note-btn" type="submit">Delete</button>
    </div>
  );
}