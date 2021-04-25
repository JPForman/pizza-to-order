import React from "react";

import "../scss/_aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>Conscienscious Pizza</h1>
        <div className="content">
          <p>Our pizza is made in true Detroit Deep Dish Style!</p>
          <p>
            We believe in quality. Quality in our ingredients. Quality in our
            people. We believe in love and pizza for all.
          </p>

          <img
            src="https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            alt="happy picture"
            className="happy-pic"
          />
          <p>
            We source all of our produce locally from friendly people. We pay
            our employees a decent wage because we believe they are worth it :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
