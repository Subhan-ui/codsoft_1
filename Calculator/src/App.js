import bg from "./bg2.jpg";
import "./App.css";
import Button from "./components/Button";


function App() {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };
  const divStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <span>
    <div style={style} className="container">
      <center style={divStyle} className="center">
        <Button /> 
      </center>
    </div>
    
    </span>
  );
}

export default App;