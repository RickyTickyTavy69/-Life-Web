import './App.css'
//react
import {useState} from "react";

//react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

// components
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Navigation from "./components/Header/Navigation/Navigation.jsx";
import Auth from "./components/Auth/Auth.jsx";


function App() {

    //auth states
    const [auth, setAuth] = useState(false);
    const [username, setUserName] = useState(false);



  return (
      <BrowserRouter>
    <div className="App">
        <Navigation/>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={!auth && <Auth/>} />
        </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App
