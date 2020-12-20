import React from 'react';
import coverImage from "../../assets/cover/stephen-image.jpg";


function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Marketable Skills</h1>
      <div>
        <ul>
          <li>Mature, Teacher, Web Developer, Accountant</li>
          <li>Full Stack Web Developer</li>
              <li> ---Debugging is a strength</li>
          <li>Strong People Skills</li>
          <li>Business Knowledge/Money Skills</li>
          <li>Teaching and Learning Skills</li>
          <li>Liftime Learner</li>
        </ul>

        
      </div>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
    </section>
    
  );
}

export default Resume;