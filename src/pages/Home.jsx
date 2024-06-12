import React from "react";
import { Button } from "react-bootstrap";
import bgImage from "../assets/images/bg-image.png";
import CarouselComponent from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="container-fluid wrapper">
      <div className="container gap-2 d-flex flex-row justify-content-around align-items-center">
        <div className="section-heading-1">
          <h2 className="landing_page_title">
            Welcome to <br />
            100 Books store
          </h2>
          <p>
            At 100 Books Store, we believe in the magic of books and the worlds
            they open up. Whether you're a lifelong bibliophile or just
            beginning your literary journey, our store is here to inspire,
            inform, and ignite your imagination. Dive into our diverse
            collection and discover your next great read!
          </p>
          <Button variant="dark" href="/store">
            Explore Books
          </Button>
        </div>
        <div className="image-section">
          <img src={bgImage} width="500" alt="section" />
        </div>
      </div>
      <div className="container section-2">
        <div className="section-container m-3">
          <h3 className="text-center pt-3">Our Collections</h3>
          <p className="text-center">
            Discover Your Next Adventure: A World of Books Awaits
          </p>
          <CarouselComponent />
        </div>
      </div>
      <div className="container section-2 pt-3">
        <div className="container section-container m-3 d-flex flex-row gap-5 align-items-center">
          <div className="image-section">
            <img
              src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="section"
              width={580}
              className="rounded-1"
            />
          </div>
          <div>
            <h4 className="section-heading-3">Our Journey</h4>
            <p>
              Founded 2024, 100 Books Store was born out of a deep love for
              books and a desire to create a space where readers could immerse
              themselves in the wonders of literature. What started as a humble
              bookstore has since blossomed into a thriving community hub, where
              bookworms gather to browse, connect, and celebrate the written
              word.
              <br />
              <br />
              At 100 Books Store, our mission is simple: to inspire, educate,
              and empower through the power of books. Whether you're searching
              for the latest bestseller, exploring niche genres, or seeking
              timeless classics, we're here to help you find the perfect read
              for every occasion. With an extensive collection curated by our
              team of passionate bibliophiles, we strive to ignite curiosity,
              spark imagination, and foster a lifelong love of reading in
              readers of all backgrounds.
            </p>
          </div>
        </div>
      </div>
      <div className="container p-2">
        <div className="container section-container m-3">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
