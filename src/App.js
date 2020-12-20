import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
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
      </main>
    </div>
  );
}

export default App;