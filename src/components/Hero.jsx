import React from "react";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id ="hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <p className="hero-tag">WELCOME TO ELITEFIT</p>

          <h1 className="hero-title">
            BUILD YOUR <span>BEST SELF</span>
          </h1>

          <p className="hero-subtitle">
            Build your strength, boost your confidence, and become the best
            version of yourself with <strong>EliteFit</strong>.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Join Now
            </button>

            <button className="btn-secondary">
              Explore Programs
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;