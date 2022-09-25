import React from "react";

export interface CarouselProps {
  carouselHeading: string;
  carouselItems: any[];
}

const Carousel: React.FC<CarouselProps> = ({
  carouselHeading,
  carouselItems,
}) => {
  return (
    <section
      className="carousel"
      role="carousel"
      aria-labelledby={carouselHeading}
    >
      <h3 id="carousel-heading" className="visuallyhidden">
        {carouselHeading}
      </h3>
      <ul>
        {carouselItems.map((item) => (
          <li className="slide">item.title</li>
        ))}
      </ul>
      <div className="carousel__controls">
        <button
          className="carousel__control carousel__control--prev"
          onClick={console.log}
        >
          Previous
        </button>
        <button
          className="carousel__control carousel__control--next"
          onClick={console.log}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Carousel;
