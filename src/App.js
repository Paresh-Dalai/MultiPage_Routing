

import React from 'react';
import './App.css';
import {BrowserRouter as Routers , Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import About from "./Pages/About";
import Contact from "./Pages/Contact"

function App() {
  return (
    <div className="app">
        
    <Routers>
       <Routes>

        <Route path='/'
         element = { <Home/> } />

         <Route path='/About'
         element = { <About />} />

         <Route path='/Contact'
          element = { <Contact /> } />
         
       </Routes>
     </Routers>
    

    </div>
  );
}

export default App;
