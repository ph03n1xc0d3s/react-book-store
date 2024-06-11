import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Books from "./Books";

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const books = [
    {
      name: "The Bourne Identity",
      author: "By Gillian Flynn",
      category: "Action",
      rating: 2,
      inStock: true,
      img: "./images/action-book.jpg",
    },
    {
      name: "Frankenstein",
      author: "By Gillian Flynn",
      category: "Horror",
      rating: 3.2,
      inStock: true,
      img: "./images/horror-book.jpg",
    },
    {
      name: "Foundation",
      author: "By Gillian Flynn",
      category: "Sci-Fi",
      rating: 4.5,
      inStock: true,
      img: "./images/scifi-book.jpg",
    },
    {
      name: "Gone Girl",
      author: "By Gillian Flynn",
      category: "Thriller",
      rating: 5,
      inStock: true,
      img: "./images/action-book.jpg",
    },
  ];
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {books.map((e, index) => (
        <Books
          key={index}
          name={e.name}
          rating={e.rating}
          img={e.img}
          author={e.author}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
