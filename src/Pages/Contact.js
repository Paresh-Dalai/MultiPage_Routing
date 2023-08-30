

import React from "react";
import "./Contact.css"



function Contact () {
      
    return (
         <div className="Contact_Page">

            <h1>Feel Free To Contact Me...</h1>

            <form 
            method="post"
            className="Contact_form"
            action="https://formspree.io/f/xqkvbzwq"
            >

                <input 
                 placeholder="Please Enter Your Name Here.."
                 type="text"
                 name="username"
                 required
                 
                />

                <input 
                 placeholder=" Enter Your Email Id Here.."
                 type="email"
                 name="email"
                 required
                 
                />

                <textarea
                name="Message"
                placeholder="Type your Issue Here..."
                cols="30"
                rows="10"
                required
                >
                </textarea>

                <button type="submit">Submit</button>


            </form>
            

         </div>
    )
}

export default Contact ;