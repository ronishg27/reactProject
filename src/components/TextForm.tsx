import { useState } from "react";

function TextForm(props: any) {
  const handleUpClick = () => {
    // console.log("UpperCase was triggered.");
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    // console.log("LowerCase was triggered.");
    setText(text.toLowerCase());
  };

  const handleOnChange = (event: any) => {
    // console.log("OnChange was triggered");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here.");

  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn green" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container">
        <h3>Your text summary.</h3>
        <p>343 words, 3423 characters</p>
      </div>
    </>
  );
}

export default TextForm;
