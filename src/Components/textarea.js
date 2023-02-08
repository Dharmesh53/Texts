import React, { useState } from "react";

export default function Textarea(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleclearclick = () => {
    setText("");
  };
  const handlecopyclick=()=>{
    let input=document.querySelector("#mybox")
    input.select()
    input.setSelectionRange(0,9999)
    navigator.clipboard.writeText(input.value)
  }
  const handleremovespaces=()=>{
    setText(text.split(/[ ]+/).join(" "))
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h1 htmlFor="mybox">{props.heading}</h1>
          <textarea
            className={`form-control bg-${props.mode}`}
            id="mybox"
            rows="15"
            value={text}
            onChange={handleonchange}
            placeholder="Enter the Text"
          ></textarea>
          <button className="btn btn-primary my-2 mx-1" onClick={handleupclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleloclick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-dark my-2 mx-1 " onClick={handleclearclick}>
            Clear Text
          </button>
          <button className="btn btn-secondary my-2 mx-1" onClick={handlecopyclick}>
            Copy Text
          </button>
          <button className="btn btn-danger my-2 mx-1" onClick={handleremovespaces}>
             Remove extra spaces</button>
        </div>
        <div className="container  text-center">
          <div className="row ">
            <div className="col p-1">
              <div className="p-0">
                <input type="" className="form-control" placeholder="Find" />
              </div>
            </div>
            <div className="col p-1">
              <div className="p-0">
                <input type="" className="form-control" placeholder="Replace" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Letters
        </p>
        <p>It takes {0.008 * text.split(" ").length} mintues to read</p>
      </div>
    </>
  );
}
