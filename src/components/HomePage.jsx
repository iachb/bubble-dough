import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Our Restaurant</h1>
        <p>Delicious meals served with passion</p>
      </header>

      <section className="specials">
        <h2>Today's Specials</h2>
        <div className="special-item">
          <h3>Special Dish 1</h3>
          <img
            src="https://www.allrecipes.com/thmb/imrP1HYi5pu7j1en1_TI-Kcnzt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20513-classic-waffles-mfs-025-4x3-81c0f0ace44d480ca69dd5f2c949731a.jpg"
            className="special-dish-img"
          />
          <p>Description of the special dish. Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="special-item">
          <h3>Special Dish 2</h3>
          <p>Another tasty dish to try. Consectetur adipiscing elit...</p>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Our Restaurant, where we take pride in serving delicious
          and high-quality meals. Our chefs use the finest ingredients to create
          mouthwatering dishes that will leave you coming back for more.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have a question or want to make a reservation? Contact us and we'll be
          happy to assist you.
        </p>
        {/* Add a contact form or other contact information here */}
      </section>
    </div>
  );
};

export default HomePage;
