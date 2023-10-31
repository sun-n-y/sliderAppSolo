import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { list, longList, shortList } from './data';
import { FaQuoteRight } from 'react-icons/fa';

const ReactSlickSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {longList.map((person, personIndex) => {
          const { id, image, name, quote, title } = person;
          return (
            <div className="react-slider" key={id}>
              <img src={image} alt={name} className="person-img" />
              <h2 className="name">{name}</h2>
              <h3 className="title">{title}</h3>
              <p className="quote">{quote}</p>
              <FaQuoteRight className="quote-icon" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default ReactSlickSlider;
