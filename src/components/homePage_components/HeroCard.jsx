import React from "react";
import "../../../style_components/heroCard.css";
import { Link } from "react-router-dom";
import { centres } from "../../utils/centres";

const HeroCard = () => {
  return (
    <div className="hero-card" data-aos="fade-up">
      <div className="gym-centre">
        <h1>Find a centre close to you</h1>
        <div className="centre-menu">
          {centres.map((centre) => {
            const { id, state, location } = centre;
            return (
              <div key={id} className="state">
                <h3>{state}</h3>
                <div className="centres">
                  {location.map((cities, index) => {
                    const { id, city, link } = cities;
                    return (
                      <Link key={index} id={id} to={link}>
                        {city}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
