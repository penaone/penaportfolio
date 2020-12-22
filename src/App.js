import React, { useState } from 'react';
import Title from './components/Title';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './Footer.css';
import './App.css';



function App() {
  const [categories] = useState([
    <Title></Title>,
    { name: 'about Me',
      description: <About></About>},
    {
      name: 'Portfolio',
      description: 'My projects',
    },
    
    { name: 'resume',
      description: <Resume></Resume> },

    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
  <>
    <Gallery currentCategory={currentCategory}></Gallery>
    
  </>
) : (
    <ContactForm></ContactForm>
  )}
  <div className="page-container">
    <div className="content-wrap">

    </div>
  </div>
  <Footer/>
      </main>
    </div>
  );
}

export default App;