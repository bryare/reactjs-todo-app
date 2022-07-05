import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    // console.log(newValue); Event is being logged, entry is monitored
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          // console.log(inputText);InNPUT TEXT CONSOLE BEING LOGGED
          props.addingItem(inputText);
          setInputText("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
