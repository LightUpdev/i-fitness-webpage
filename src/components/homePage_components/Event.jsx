import React from "react";
import "../../../style_components/event.css";

const Event = () => {
  return (
    <div className="event">
      <div className="event-info" data-aos="fade-right">
        <h1>Latest News, Events & Updates</h1>
        <p>
          Never miss a beat! Get all the latest news and events at i-Fitness.
        </p>
      </div>
      <div className="event-action" data-aos="fade-left">
        <button>Stay Updated</button>
      </div>
    </div>
  );
};

export default Event;
