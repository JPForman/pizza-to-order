import React from "react";

import "../scss/_contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact">
        <h1>Contact Us!</h1>
        <div className="content">
          <p>Feel free to give us a call!</p>
          <p>810-555-5555</p>
          <p>555 Central</p>
          <p>Somewhere, New Mexico</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
