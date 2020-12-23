import React, { useState } from 'react';
import MaM from '../../assets/small/Portfolio/0.jpg';
import MyHaus from '../../assets/small/Portfolio/1.jpg';
import Pssword from  '../../assets/small/Portfolio/2.jpg';
import FFest from  '../../assets/small/Portfolio/3.jpg';
import NewCode from'../../assets/small/Portfolio/4.jpg';
import RunBdy from '../../assets/small/Portfolio/5.jpg';



const PortfolioList = ({ category }) => {
  
    
    
  

    

  const [projects] = useState([
    {
      
      category: 'Portfolio',
      links:  'https://richardflores009.github.io/Munch-A-Movie/',
      image: MaM,
      name: 'Munch A Movie'
      
      
    },
    {
      
      category: 'Portfolio',
      links:  'https://my-haus.herokuapp.com/',
      image: MyHaus,
      name: 'MyHaus - Landlord Tenant Database'
    },
    {
      
      category: 'Portfolio',
      links:  "https://penaone.github.io/passwordchallenge/",
      image: Pssword,
      name:'Password Genarator'
    },
    {
      
      category: 'Portfolio',
      links:  'https://penaone.github.io/food-festival/',
      image: FFest,
      name: 'Food Festival'
    },
    {
      
      category: 'Portfolio',
      links:  'https://penaone.github.io/NewCodingquiz',
      image: NewCode,
      name: 'Coding Quiz'
    },
    {
      
      category: 'Portfolio',
      links:  'https://penaone.github.io/run-buddy',
      image: RunBdy,
      name: 'Run Buddy'
    },
   
    {
      
      category: 'resume',
    },
      
    {
      
      category: 'resume',
      
    },
    {
      
      category: 'resume',
    },
      
    {
      
      category: 'resume',
      
    },
    {
      
      category: 'resume',
      
    },
  ]);

  const currentProjects = projects.filter((project) => project.category === category);
  

    // current project
  

  return (
    <div>
    
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <a href ={image.links} target='_blank' rel='noreferrer'key= {i}><img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            
            key={image.name}
          /></a>
        ))}
      </div>
    </div>
  );
};
<div>
      {/* <a className="img-thumbnail mx-1"/'><img src={MaM} alt="Munch-A-Movie link"/></a> */}
       {/* <a className="img-thumbnail mx-1" href='https://my-haus.herokuapp.com/'><img src={MyHaus} alt="My Haus link"height="55" width="55"/></a> */}
       {/* <a className="img-thumbnail mx-1" href="https://penaone.github.io/passwordchallenge/"><img src={Pssword} alt="Password Generator link"height="55" width="55"/></a> */}
       {/* <a className="img-thumbnail mx-1" href='https://penaone.github.io/food-festival/'><img src={FFest} alt="Food Festival link"height="55" width="55"/></a> */}
       {/* <a className="img-thumbnail mx-1" href='https://penaone.github.io/NewCodingquiz'><img src={NewCode} alt="Coding Quiz link"height="55" width="55"/></a> */} 
       {/* <a className="img-thumbnail mx-1" href='https://penaone.github.io/run-buddy'><img src={RunBdy} alt="Coding Quiz link"height="55" width="55"/></a> */}

    </div>

export default PortfolioList;