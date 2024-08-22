/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const ProjectCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`project-thumbnail-${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
