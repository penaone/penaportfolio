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
        
       

      </div>
      
    </section>
    
  );
}

export default About;