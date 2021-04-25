import React from "react";

import "../scss/_aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>About Us</h1>
        <p className="subtitle">Conscienscious Pizza</p>
        <div className="content">
          <p>
            We believe in quality. Quality in our ingredients. Quality in our
            people. We believe in love and pizza for all.
          </p>
          
          <img
            src="https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            alt="happy picture"
            className="happy-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
