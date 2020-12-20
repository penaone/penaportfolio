import React, { useState } from 'react';
import Modal from '../Modal';


const PortfolioList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setcurrentProject] = useState();

  const [projects] = useState([
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
            //src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            // className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;