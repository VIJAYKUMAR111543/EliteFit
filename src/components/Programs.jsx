import React from "react";
import { programData } from "../Data/Data";
import "./styles/Programs.css"

const Programs = () => {
  return (
    <section className="programs" id ="programs">
      <h2 className="section-title">OUR TRAINING PROGRAMS</h2>

      <div className="program-grid">
        {programData.map((program) => {
          return (
            <div className="card" key={program.id}>
              <img src={program.img} alt={program.title} />

              <h3>{program.title}</h3>

              <p>{program.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;