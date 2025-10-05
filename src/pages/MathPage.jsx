import React from "react";
import { Link } from "react-router-dom";

import data from "../data/math";
import "../styles/MathPage.css";

export default function MathPage() {
  const algebraTopics = data.filter(t => t.type === "algebra");
  const arithmeticTopics = data.filter(t => t.type === "arithmetic");

  return (
    
      <div className="container-fluid">
        <section>
          <h1 className="text-center mt-3">Математика</h1>
          
          <h2 className="text-center mt-3">Алгебра</h2>
          <article className="algebra mx-2">
            {algebraTopics.map(topic => (
              <Link
                key={topic.id}
                to={`/math/${topic.id}`}
                className="btn btn-primary m-2"
              >
                {topic.title}
              </Link>
            ))}
          </article>

          <h2 className="text-center mt-3">Арифметика</h2>
          <article className="arithmetic mx-2">
            {arithmeticTopics.map(topic => (
              <Link
                key={topic.id}
                to={`/math/${topic.id}`}
                className="btn btn-success m-2"
              >
                {topic.title}
              </Link>
            ))}
          </article>
        </section>
      </div>

  );
}
