import React from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;