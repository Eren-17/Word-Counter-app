import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () =>{
   let newText = text.toLowerCase();
    setText(newText)
  }


  const handleOnChange = (event) =>{
    console.log("On Change")
    setText(event.target.value);
  }
  const [text, setText] = useState("App Created By EREN");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} chracters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
