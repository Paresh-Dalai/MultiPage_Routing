



import React from "react";

import "./Home.css";
import TypeWriting from "../Type_Writing";
import { useNavigate } from "react-router-dom";


function Home () {

    const navigate = useNavigate();
      
    return (
        <>
         <div className="Header">
              <h1>Multi-Page Routing</h1>
              <div className="Elements">
                  <span onClick={() => navigate("/About")}>About</span>
                  <span onClick={() => navigate("/Contact")}>Contact</span>
              </div>

         </div>

         <div className="Second_section">
            <TypeWriting />
         </div>
         </>
    )
}

export default Home;