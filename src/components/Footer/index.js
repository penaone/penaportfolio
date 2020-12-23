import React from "react";
import githubLogo from '../../assets//large/linkimages/github.png'
import linkedInLogo from '../../assets/large/linkimages/linkedin.jpg'
import twitterLogo from '../../assets/large/linkimages/twitter.png'



const Footer = () => (
  <footer className="flex justify-center bg-pink-400">
     <a className="p-5" href="https://github.com/penaone"><img src={githubLogo} alt="Github Link"height="55" width="55"/></a>
     <a className="p-5" href="https://www.linkedin.com/in/stephen-pena-6772b73a/"><img src={linkedInLogo} alt="linkedin Link"height="55" width="55"/></a>
     <a className="p-5" href="https://www.twitter.com/rvteacher"><img src={twitterLogo} alt="Twitter Link"height="55" width="55"/></a>
         
  </footer>
);

export default Footer;