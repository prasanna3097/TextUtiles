
import React, { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] =useState(null)

  const showAlert = (message, type) => {
    setAlert({message: message, type: type})
    setTimeout(() =>{
        setAlert(null)
    },2500)
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#333333"
      showAlert( "Dark mode enabled", "Success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert( "Light mode enabled" , "Success")
    }
  }
  return (
    <>
    {/*<BrowserRouter>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about"  element={<About />} />
          <Route exact path="/" element={<TextForm showAlert ={showAlert} heading="Enter the text to convert" mode={mode}/>} />
    </Switch>

    </div>
  </BrowserRouter> */}
  <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <TextForm showAlert ={showAlert} heading="Enter the text to convert" mode={mode}/>
  </div>
</>
  );
}

export default App;
