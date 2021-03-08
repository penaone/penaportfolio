import React, { useState } from 'react';
import MaM from '../../assets/small/Portfolio/0.jpg';
import MyHaus from '../../assets/small/Portfolio/1.jpg';
import Pssword from  '../../assets/small/Portfolio/2.jpg';
import MamaEmp from  '../../assets/small/Portfolio/3.jpg';
import NewCode from'../../assets/small/Portfolio/4.jpg';
import RunBdy from '../../assets/small/Portfolio/5.jpg';
import Sum1 from '../../assets/small/Summary/0.jpg';
import Sum2 from '../../assets/small/Summary/1.jpg';
import Sum3 from '../../assets/small/Summary/2.jpg';
import Sum4 from '../../assets/small/Summary/3.jpg';
import Sum5 from '../../assets/small/Summary/4.jpg';
import Sum6 from '../../assets/small/Summary/5.jpg';

const PortfolioList = ({ category }) => { 
    
  

    // MY portfolios pages
   

  const [projects] = useState([
    
    
    {
       
      category: 'Portfolio',
      links:  'https://penaone.github.io/M-A-M/',
      github: 'https://github.com/penaone/M-A-M',
      image: MaM,
      name: 'Munch A Movie',
      summary: Sum1 
      
    },
    {
      
      category: 'Portfolio',
      links:  'https://my-haus.herokuapp.com/',
      github: 'https://github.com/Richardflores009/MyHaus',
      image: MyHaus,
      name: 'MyHaus - Landlord Tenant Database',
      summary: Sum2
    },
    {
      
      category: 'Portfolio',
      links:  "https://penaone.github.io/passwordchallenge/",
      github: 'https://github.com/penaone/passwordchallenge',
      image: Pssword,
      name:'Password Genarator',
      summary: Sum3
    },
    {
      
      category: 'Portfolio',
      links:  'https://mamasita-empanadas.herokuapp.com/',
      github: 'https://github.com/Richardflores/Mamasita-Empanadas',
      image: MamaEmp,
      name: 'Mamasitas Empanadas',
      summary: Sum4
    },
    {
      
      category: 'Portfolio',
      links:  'https://penaone.github.io/NewCodingquiz',
      github: 'https://github.com/penaone/NewCodingquiz',
      image: NewCode,
      name: 'Coding Quiz',
      summary: Sum5
    },
    {
      
      category: 'Portfolio',
      links:  'https://penaone.github.io/run-buddy',
      github: 'https://github.com/penaone/run-buddy',
      image: RunBdy,
      name: 'Run Buddy',
      summary: Sum6
    },
   
    
  ]);

  const currentProjects = projects.filter((project) => project.category === category);
      
  

  return (
    <div>
      
      
    
      <div className="flex-row">
      
        {currentProjects.map((image, i) => (
          
          <div key= {i} style= {{textAlign:"center"}}>
          <a href ={image.links} target='_blank' rel='noreferrer'><img
           style={{marginBottom:'0px'}}
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          /></a>
           <a href ={image.summary} target='_blank' rel='noreferrer'><img
           style={{marginBottom:'0px'}}
            src={require(`../../assets/small/Summary/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          /></a>
          
          <a href ={image.github} target='_blank' rel='noreferrer'><p style={{marginBottom:'0px'}}>Github Link</p></a>
          <a href ={image.links} target='_blank' rel='noreferrer'><p>Deployed Link</p></a>
          
          
          </div>
          
        ))}
 
      </div>
     
    </div>
  );
};


export default PortfolioList;