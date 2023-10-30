import { React, useRef, useState } from "react";
// import React from 'react'
import "../App.css";
// import { InputNumber } from "primereact/inputnumber";

export default function Inputs(props) {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  //   const buttonRef = useRef(null);
  function handleFocus(i) {
    if (i === 1) {
      inputRef.current = inputRef1.current;
    } else if (i === 2) {
      inputRef.current = inputRef2.current;
    } else if (i === 3) {
      inputRef.current = inputRef3.current;
    }
    const input = inputRef.current;
    input.selectionStart = input.selectionEnd = input.value.length;

    // setFocused(i);
  }

  return (
    <>
    
      <div style={{ marginBottom: "23px", marginTop: "9px" }}>
       <label>{props.firstName}</label>
        <input
          placeholder="Use me for single value calculation"
          onFocus={() => handleFocus(1)}
          value={props.valueO}
          onChange={props.handleChangeO}
          id="inputO"
          className="w3-input w3-border"
          type="number"
          // onClick={handleInputClick}
          ref={inputRef1}
        />
        <label>{props.secondName}</label>
        <input
          placeholder="You can also use me for 2nd values calculations"
          onFocus={() => handleFocus(2)}
          value={props.valueT}
          onChange={props.handleChangeT}
          id="inputT"
          // onClick={handleInputClick}
          className="w3-input w3-border"
          type="number"
          ref={inputRef2}
        />
        <label>Result</label>
        <input
          placeholder="Your result will appear here"
          onFocus={() => handleFocus(3)}
          value={props.valueR}
          // onChange={handleChangeTh}
          className="w3-input w3-border"
          type="number"
          ref={inputRef3}
      />
      
      </div>
      

    </>
  );
}
