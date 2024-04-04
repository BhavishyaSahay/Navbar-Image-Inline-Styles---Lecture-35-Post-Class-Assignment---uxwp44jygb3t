import "./App.css";
import pic from "./assets/NewtonSchool.jpg";

const App = () => {
  var style={
    width: '130px',
    height: '100px',
    margin: '10px',
  }
  return (
    <div id="navbar">
      <div>NavBar</div>
      <img src={pic} style={style}/>
    </div>
  );
};

export default App;
