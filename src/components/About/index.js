import React from 'react';
import coverImage from "../../assets/cover/stephen-image.jpg";


function About() {
  return (
    <section className="my-5">
      <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="Stephen Peña" />
      <h1 id="about">Biography</h1>
      <div>
        <p>I am a full stack web developer with a background in Business and education. I am a lifetime learner with a
         Web Development Certificate from the University of Arizona. I have a Bachelors Degree in Accounting and 10+ years experience
          in the field. I have a Masters Degree in Curriculum, Instruction and Assesment.I have been teaching Mathematics,
           Business and Economics at the High School level for 18 years. I am a Father of four children and have a desire
            to work the the Web Development field for the next several years.
        </p>
        <p>Project Summaries:
            The first project is Munch-A-Movie. This is a group project using Javascript, html and Css along with Jquery. 
            We fetched two web API's one a movie api and another a recipe API. This site allows a person to search a movie and 
            have upto 3 recipes to choose from be fetched as well.
        </p>
        <p>The next project, named MyHaus,is also a group project that is a landlord and tenant site that was built
          using Node.js, Express, Express-Session, Express-Handlebars, Handlebars, Sequelize, Bcrypt, Dotenv, MySql2,
          Connect-Session Sequelize and Nodemon. Tenants are assigned a login by the landlord and can enter information
          that will be helpful to them and the landlord. The landlord portal allows them to track the tenants and there
          needs. 
          </p>

          <p>The next project was a password generator that allows the user to create an advanced password. 
          Password Generator is a website will build passwords with multiple levels of complexity in password
           security. The user can choose up to 4 different types of characters, Uppercase, lowercase, certain
           special characters and numbers 0-9.The code requires for loops and if statements. There are
           various functions that are required. I used arrays vs a string value, for complexity and security.The
           javascript code is then linked to and css to provide the page structure and design elements.
          </p>

          <p>The next project I have listed in my portfolio is the last group project that I completed, Mamasitas Empanadas. This site has both front 
            end and backend with a server. It is a retail site where one cas sell empanadas or if reworked any product that they wish to sell. It was built with the following
            languages, tools and libraries: html, css, Javascript, Apollo, Bcrypt, Express, GraphQL, Mongoose, Node.js, Nodemon, React, Redux 
            and Stripe.
          </p>
          <p>The following site is coding quiz. It is an early venture into using javascript to create a website. It
            has a timer and a scoreboard that tracks the number of correct answers that the quiz taker gets. 
            Each time I answer a question another question is presented. Incorrect answers subtract time from the 
            timer. The quiz or game is over when the user answers all the questions or the timer reaches zero, whichever
            comes first. Upon completion of the quiz I can enter my initials and save the high score using local 
            storage. The code requires using multiple functions and at least 1 for loop.I needed to work with the
            DOM to complete this assignment.
          </p>
          <p>The final project is my very first website called RunBuddy. It is entirely an html and css website.
            It uses flexbox grid tools to format the information on the page. It is a simple website by design but 
            is a very functional design for small businesses that are just advertising who thier employees and other
            services.
          </p>

      </div>
      
    </section>
    
  );
}

export default About;