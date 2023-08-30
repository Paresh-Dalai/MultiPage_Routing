


import React from "react";
import "./About.css"



function About () {
      
    return (
         <div className="Header">
              <h1>Projects Developed By Me Through Out My Journey Of Full-Stack Development</h1>
              <div className="Projects">
                  <div className="first_Section">
                     <h2>Ticket-Management Application</h2>
                     <p>An app with multiple type of user-Types 
(Admin,Engineer,Customer) and their respective roles , where customer can 
able to raise a ticket , engineer will solve the issue and if any update on ticket 
will occur, an email will be sent to the customer(who has raised the ticket).Admin can get all the ticket raised by customers and the updation stage of all those tickts.also admin can edit the ticket.admin have that ability that admin can get all customers list and enginers list.</p>
                  </div>

                  <div className="second_Section">
                     <h2>Movie-Booking Application</h2>
                     <p>
                     Allows users to select movies, view theatres and book 
tickets on selected theatre. Users can also make payments and receive 
confirmation for their booked tickets.In This App Also Admin can get all bookings done by custtomers and movies running on screen data and can have the capability of edit and delete Movies.
                     </p>
                  </div>

                  <div className="third_Section">
                     <h2>Weather-App</h2>
                     <p>
                     User can search a particular city or area to know the 
weather status. When user will search a particular city, temperature, humidity, 
weather, visibility will show for that location
                     </p>
                  </div>

                  <div className="Fourth_Section">
                     <h2>Shopping Site</h2>
                     <p>
                     Developed this project by using React Js., axios, Css, 
expressJs with a responsive UI. User can search for products, get a brief 
overlook before buy a product, add a product to cart, then proceed for 
checkout. also user can share any complaints with admin through contact 
page
                     </p>
                  </div>

                  <div className="Fifth_Section">
                     <h2>To-Do App</h2>
                     <p>
                     Allows users to add and manage task lists , helping them stay 
organized and track their daily activities efficiently. Users can add, edit and 
delete tasks within the app.When a user will add a task to our To-Do App, Then the task will get listed
in out To-Do's List.if that task will be complted, then user can mark that as completed and if user will want then 
can remove the task.
                     </p>
                  </div>
                 
              </div>

         </div>
    )
}

export default About ;