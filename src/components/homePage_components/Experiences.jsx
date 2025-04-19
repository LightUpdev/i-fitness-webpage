import React from "react";
import "../../../style_components/experiences.css";

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="experiences">
        <img src="/images/gym-image.jpg" alt="gym-image" data-aos="fade-right"/>
        <div className="why-i-fitness" data-aos="fade-left">
          <h3>WHY i-FITNESS</h3>
          <h1>Unique Experiences Tailored To Your Lifestyle</h1>
          <div className="programs">
            <div className="icon">
              <img src="/images/dumbell.png" alt="gym-image" />
            </div>
            <div className="info">
              <h2>Wide Range of Fitness Programs</h2>
              <p>
                Our timetable offers a wide range of low to high-intensity
                fitness programmes to suit your fitness lifestyle. There’s
                something for everyone!
              </p>
            </div>
          </div>
          <div className="programs">
            <div className="icon">
              <img src="../../../images/people.png" alt="gym-image" />
            </div>
            <div className="info">
              <h2>Supportive Community</h2>
              <p>
                Enjoy a sense of belonging in a community that supports your
                fitness goals and reminds you that you are not alone!
              </p>
            </div>
          </div>
          <div className="programs">
            <div className="icon">
              <img src="/images/gym-house.png" alt="gym-image" />
            </div>
            <div className="info">
              <h2>Ultra-Modern Facilities</h2>
              <p>
                We have over 200 professionally certified personal trainers and
                ultra-modern facilities across all our branches in Lagos, Port
                Harcourt, Abuja and Ibadan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
