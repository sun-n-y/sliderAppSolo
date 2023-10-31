import { useEffect, useState } from 'react';
import { list, longList, shortList } from './data';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa';

const Carosuel = () => {
  const [people, setPeople] = useState(longList);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((old) => {
      let newIndex = old - 1;
      if (newIndex < 0) {
        return (newIndex = people.length - 1);
      }
      return newIndex;
    });
  };
  const nextSlide = () => {
    setCurrentIndex((old) => {
      let newIndex = old + 1;
      if (newIndex > people.length - 1) {
        return (newIndex = 0);
      }
      return newIndex;
    });
  };

  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       nextSlide();
  //     }, 3000);
  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, [currentIndex]);

  return (
    <div className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, quote, title } = person;
        return (
          <div
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - currentIndex)}%)`,
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h2 className="name">{name}</h2>
            <h3 className="title">{title}</h3>
            <p className="quote">{quote}</p>
            <FaQuoteRight className="quote-icon" />
          </div>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FaChevronCircleLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FaChevronCircleRight />
      </button>
    </div>
  );
};
export default Carosuel;
