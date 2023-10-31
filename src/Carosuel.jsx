import { useState } from 'react';
import { shortList } from './data';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa';

const Carosuel = () => {
  const [people, setPeople] = useState(shortList);
  return (
    <div className="slider-container">
      {people.map((person) => {
        const { id, image, name, quote, title } = person;
        return (
          <div className="slide" key={id}>
            <img src={image} alt={name} />
            <h2 className="name">{name}</h2>
            <h3 className="title">{title}</h3>
            <p className="quote">{quote}</p>
          </div>
        );
      })}
      <button type="button" className="prev">
        <FaChevronCircleLeft />
      </button>
      <button type="button" className="next">
        <FaChevronCircleRight />
      </button>
      <FaQuoteRight />
    </div>
  );
};
export default Carosuel;
