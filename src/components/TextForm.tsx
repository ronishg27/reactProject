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

  function countWords(text: string) {
    if (text.length === 0) {
      return 0;
    }
    // Trim leading and trailing white spaces
    text = text.trim();

    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Return the count of words
    return words.length;
  }
  const handleOnChange = (event: any) => {
    // console.log("OnChange was triggered");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h2>{props.heading}</h2>
      <div className="mb-3 mt-3">
        <textarea
          className="form-control mb-2"
          id="myBox"
          rows={8}
          value={text}
          placeholder="Enter your text here."
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className="btn green" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary.</h3>
        <p>
          {/* {text.split(" ").length} words, {text.length} characters */}
          {countWords(text)} words, {text.length} characters
        </p>
        <p>
          {" "}
          <strong> Reading time:</strong> {countWords(text) * 0.008} minutes
        </p>
        <h3>Preview</h3>
        <p>{text} </p>
      </div>
    </>
  );
}

export default TextForm;
