import React from 'react';
import coverImage from "../../assets/cover/stephen-image.jpg";
import resume from '../../assets/small/resume/resume.pdf'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};


function Resume() {
  return (
    <section className="my-5">
      <img src={coverImage} className="my-2" style={{ width: "15%" }} alt="cover" />
      <h1 id="resume">Marketable Skills</h1>
      <div>
     <button> <a className="download" style={buttonStyle} href={resume} download>Download Resume</a> </button>
        <ul>
          <li>Mature, Teacher, Web Developer, Accountant</li>
          <li>Full Stack Web Developer</li>
          <li> -----Debugging is a strength</li>
          <li>--- Javascript</li>
          <li>---React</li>
          <li>---MongoDB</li>
          <li>---MYSQL</li>
          <li>---CSS</li>
          <li>---HTML</li>

          <li>Strong People Skills</li>
          <li>Business Knowledge/Money Skills</li>
          <li>Teaching and Learning Skills</li>
          <li>Problem Solving</li>
          <li>Liftime Learner</li>
        </ul>

        

        

        
      </div>
      
    </section>
    
  );
}

export default Resume;