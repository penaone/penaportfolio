import React from 'react';
import PortfolioList from '../Portfoliolist';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PortfolioList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;