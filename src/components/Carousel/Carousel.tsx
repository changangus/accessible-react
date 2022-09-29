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
    }
  }));

  const classes = useStyles();

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
        {carouselItems.map((item) => (
          <div className={classes.card}>
            <h3>{item.title}</h3>
            <img src={item.image.src} alt={item.image.alt} />
            <div className="carousel__card-body">{item.body}</div>
          </div>
        ))}
      </div>
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
