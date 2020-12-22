import React, { useState } from 'react';
import Modal from '../Modal';
import MaM from '../../assets/small/Portfolio/0.jpg';
import MyHaus from '../../assets/small/Portfolio/1.jpg';
import Pssword from  '../../assets/small/Portfolio/2.jpg';
import FFest from  '../../assets/small/Portfolio/3.jpg';
import NewCode from'../../assets/small/Portfolio/4.jpg';
import RunBdy from '../../assets/small/Portfolio/5.jpg';



const PortfolioList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setcurrentProject] = useState();

  
    <div>
       <a className="p-5" href='https://richardflores009.github.io/Munch-A-Movie/'><img src={MaM} alt="Munch-A-Movie link"height="55" width="55"/></a>
       <a className="p-5" href='https://my-haus.herokuapp.com/'><img src={MyHaus} alt="My Haus link"height="55" width="55"/></a>
       <a className="p-5" href="https://penaone.github.io/passwordchallenge/"><img src={Pssword} alt="Password Generator link"height="55" width="55"/></a>
       <a className="p-5" href='https://penaone.github.io/food-festival/'><img src={FFest} alt="Food Festival link"height="55" width="55"/></a>
       <a className="p-5" href='https://penaone.github.io/NewCodingquiz'><img src={NewCode} alt="Coding Quiz link"height="55" width="55"/></a>
       <a className="p-5" href='https://penaone.github.io/run-buddy'><img src={RunBdy} alt="Coding Quiz link"height="55" width="55"/></a>

    </div>
  

    

  const [projects] = useState([
    {
      
      category: 'Portfolio',
      
      
    },
    {
      
      category: 'Portfolio',
      
    },
    {
      
      category: 'Portfolio',
      
    },
    {
      
      category: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      
      category: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      
      category: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
   
    {
      
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentProjects = projects.filter((project) => project.category === category);
  const toggleModal = (image, i) => {
  setcurrentProject({...image, index: i})
  setIsModalOpen(!isModalOpen);
};
    // current project
  

  return (
    <div>
    {isModalOpen && (<Modal currentProject={currentProject} onClose={toggleModal} />)}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;