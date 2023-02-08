import './App.css';
import React, { useState } from 'react';
import About from './Components/about';
import Navbar from './Components/navbar';
import Textarea from './Components/textarea';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light")
  const togglemode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#181b1f"
      document.body.style.color="white"
      document.title="Textutils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"  
      document.title="Textutils - Light Mode"
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Babies" about="About babies" mode={mode} toggle={togglemode} />
        <Routes>
          <Route path='/' element={<Textarea heading='Input'/>}/>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
