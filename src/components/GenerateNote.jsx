export default function GenerateNote(props){
  return (
    <div className="generate-container">
      <div className="input-container">
        <input onChange={props.handleChange} className="input-text" type="text" placeholder="Title" name="title" value={props.title}></input>
        <textarea onChange={props.handleChange} id="input-text" className="input-text" type="text" placeholder="Content" name="content" value={props.content}></textarea>
      </div>
      <button onClick={props.addNote} className="input-btn">Add</button>
    </div>
  );
}