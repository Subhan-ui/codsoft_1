import { React, useRef, useState } from "react";
import "../App.css";
import Inputs from "./Inputs";

function Button() {
  // button's design
  const style = {
    display: "relative",
    justifyContent: "center",
    alignItems: "center",
    textalign: "center",
    width: "100px",
    height: "50px",
    borderRadius: "50px",
    flexDirection: "row",
    margin: "2px",
    fontSize: "25px",
  };
  // whole container design
  const divStyle = {
    width: "424px",
    alignItems: "center",
    height: "73vh",
    // opacity: 0.78,
    backgroundColor: 'transparent', 
    backdropFilter: 'blur()',
    border: "1px solid",
    boxShadow: "5px 10px 8px #888888",
  };
  // defined variables written below
  const [inputO, setInputO] = useState();
  const [inputT, setInputT] = useState();
  const [result, setResult] = useState(0n);
  const buttonRef = useRef(null);

  // const handleClick = (btnText1) => {
  //   const btnText = buttonRef.current.textContent;
  //   const input = inputRef.current;
  //   const inputValue = input.value;
  //   const selectionStart = input.selectionStart;
  //   const selectionEnd = input.selectionEnd;
  //   input.value =
  //     btnText1 +
  //     inputValue.slice(0, selectionStart) +
  //     inputValue.slice(selectionEnd);
  //   input.selectionStart = input.selectionEnd = selectionStart + btnText.length;
  //   input.focus();
  //   Number(btnText1);
  // };
  // const handleInputClick = (e) => {
  //   setFocused(e.target.name);
  // };

  const handleChangeO = ({ target }) => {
    setInputO(target.value);
  };
  const handleChangeT = ({ target }) => {
    setInputT(target.value);
  };

  const handlePlus = () => {
    let sum = parseFloat(inputO) + parseFloat(inputT);
    setResult((e) => (e = +sum));
  };
  // ForMinus
  const handleMinus = () => {
    let minus = parseFloat(inputO) - parseFloat(inputT);
    setResult((e) => (e = +minus));
  };

  const handleMultiply = () => {
    let multiply = parseFloat(inputO) * parseFloat(inputT);
    setResult((e) => (e = +multiply));
  };
  const handleDivide = () => {
    let divide = parseFloat(inputO) / parseFloat(inputT);
    setResult((e) => (e = +divide));
  };

  const handlePercent = () => {
    let percent = (parseFloat(inputO) / parseFloat(inputT)) * 100;
    setResult((e) => (e = +percent));
  };
  const handleInverse = () => {
    let inverse = 1 / parseFloat(inputO);
    setResult((e) => (e = +inverse));
  };
  const handleSquare = () => {
    let square = parseFloat(inputO) * parseFloat(inputO);
    setResult((e) => (e = +square));
  };
  const handleSquareRoot = () => {
    let squareRoot = Math.sqrt(parseFloat(inputO));
    setResult((e) => (e = +squareRoot));
  };
  const handleFactorial = () => {
    
    let answer = 1;
    let n = parseFloat(inputO);
    if (n === 0 || n == 1) {
      setResult((e) => (e = +answer));
    } else if (n > 1) {
      for (let i = n; i >= 1; i--) {
        answer = answer * i;
      }
      setResult((e) => (e = +answer));
    } else {
      alert("number has to be positive.");
     
    }
  };
  const handleNL = () => {
    let n = parseFloat(inputO);
    setResult((e) => (e = +Math.log(n)));
  };
  const handlePower = () => {
    let power = parseFloat(inputO);
    let power2 = parseFloat(inputT);
    if (result.isFinite) {
      setResult((e) => (e = +Math.pow(power, power2)));
    }else{
      
      alert("Number is infinity")
    }
  };

  const handleCube = () => {
    let cube = parseFloat(inputO);
    setResult((e) => (e = +cube * cube * cube));
  };
  const handleCubeRoot = () => {
    let cubeRoot = Math.cbrt(parseFloat(inputO));
    setResult((e) => (e = +cubeRoot));
  };
  const handleSin = () => {
    let sin = Math.sin(parseFloat(inputO));
    setResult((e) => (e = +sin));
  };
  const handleCos = () => {
    let cos = Math.cos(parseFloat(inputO));
    setResult((e) => (e = +cos));
  };
  const handleTan = () => {
    let tan = Math.tan(parseFloat(inputO));
    setResult((e) => (e = +tan));
  };
  return (

    <>
    
      <div style={divStyle}>
        <Inputs
          valueO={inputO}
          valueT={inputT}
          valueR={result}
          handleChangeO={handleChangeO}
          handleChangeT={handleChangeT}
          firstName="First Value"
          secondName="Second Value"
        />

        <button
          style={style}
          onClick={handlePlus}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          +
        </button>
        <button
          style={style}
          onClick={() => handleSquare()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          x<sup>2</sup>
        </button>
        <button
          style={style}
          onClick={() => handleSquareRoot()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          &#8730;x
        </button>
        <button
          style={style}
          onClick={() => handleSin()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          sin(x)
        </button>
        <button
          style={style}
          onClick={handleMinus}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          -
        </button>
        <button
          style={style}
          onClick={() => handleCube()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          x<sup>3</sup>
        </button>
        <button
          style={style}
          onClick={() => handleCubeRoot()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          &#8731;x
        </button>
        <button
          style={style}
          onClick={() => handleCos()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          cos(x)
        </button>
        <button
          style={style}
          onClick={handleMultiply}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          x
        </button>
        <button
          style={style}
          onClick={() => handlePower()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          x<sup>y</sup>
        </button>

        <button
          style={style}
          onClick={() => handleInverse()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          1/x
        </button>
        <button
          style={style}
          onClick={() => handleTan()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          tan(x)
        </button>
        <button
          style={style}
          onClick={handleDivide}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          ÷
        </button>
        <button
          style={style}
          onClick={() => handleFactorial()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          x!
        </button>
        <button
          style={style}
          onClick={() => handleNL()}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          ln
        </button>
        <button
          style={style}
          onClick={handlePercent}
          ref={buttonRef}
          className="w3-button w3-border w3-hover-purple"
        >
          %
        </button>
      </div>
    </>
  );
}

export default Button;
