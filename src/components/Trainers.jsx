import React from "react";
import { trainerData } from "../Data/Data";
import "./styles/Trainers.css";

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <h2 className="section-title">MEET OUR TRAINERS</h2>

      <div className="trainers-grid">
        {trainerData.map((trainer) => (
          <div className="trainer-card" key={trainer.id}>
            <div className="trainer-image">
              <img src={trainer.img} alt={trainer.name} />
            </div>

            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;