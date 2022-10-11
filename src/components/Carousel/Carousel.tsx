import React from "react";
import { createUseStyles } from "react-jss";
import StyleTheme from "../../types/StyleTheme";

interface Item {
  title: string;
  image: { src: string; alt: string };
  body: JSX.Element;
}

export interface CarouselProps {
  carouselHeading: string;
  carouselItems: Item[];
}

const Carousel: React.FC<CarouselProps> = ({
  carouselHeading,
  carouselItems,
}) => {
  const useStyles = createUseStyles((theme: StyleTheme) => ({
    carousel: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    carouselHeading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    cardContainer:{
      display: "flex",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      width: "200px",
      backgroundColor: theme.colors.primary,
      margin: "0.5rem",
    },
    visuallyHidden: {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: "0",
    },
  }));

  const classes = useStyles();

  const [currentItemIdx, setCurrentItemIdx] = React.useState(0);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    currentItemIdx >= carouselItems.length - 1 ? setCurrentItemIdx(0) : setCurrentItemIdx(currentItemIdx + 1);
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    currentItemIdx <= 0 ? setCurrentItemIdx(carouselItems.length - 1) : setCurrentItemIdx(currentItemIdx - 1);
  };

  return (
    <section
      className={classes.carousel}
      role="carousel"
      aria-labelledby={carouselHeading}
    >
      <h2 id="carousel__heading" className={classes.carouselHeading}>
        {carouselHeading}
      </h2>
      <div className={classes.cardContainer}>
        <div 
          className={classes.visuallyHidden}
          aria-live="polite"
          aria-atomic="true"
        >
          {carouselItems[currentItemIdx].title}
        </div>
        <h3>{carouselItems[currentItemIdx].title}</h3>
        <img
          src={carouselItems[currentItemIdx].image.src}
          alt={carouselItems[currentItemIdx].image.alt}
          />
        {carouselItems[currentItemIdx].body}
      </div>
      <div>
        <button
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div>
        {carouselItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentItemIdx(idx)}
            aria-label={`Go to ${item.title}, slide ${idx + 1} of ${carouselItems.length}`}
            ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
