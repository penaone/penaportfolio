import React from 'react';
import coverImage from "../../assets/cover/stephen-image.jpg";


function About() {
  return (
    <section className="my-5">
      <h1 id="about">Biography</h1>
      <div>
        <p>I am a late comer to the Web Development World. I am a High School Math/Business/Economics Teacher.
          I have a Bachelors Degree in Accounting and 10+ years experience in the field. I have a Masters Degree
          in Curriculum, Instruction and Assesment and will soon have a Certificate in Full Stack Web Development
          from the University of Arizona. I have been teaching Mathematics, Business and Economics at the High School
          level for 18 years. I am a Father of four children and have a desire to work the the Web Development field
          for the next several years.
        </p>
      </div>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
    </section>
    
  );
}

export default About;