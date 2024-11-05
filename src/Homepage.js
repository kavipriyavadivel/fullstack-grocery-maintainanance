import React from 'react';
import Loginbutton from './Loginbutton';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="title-container">
        <h1 className="title">
          <span>B</span>ANNARI AMMAN{' '}
          <span>I</span>NSTITUTE OF{' '}
          <span>T</span>ECHNOLOGY
        </h1>
      </div>
      <div className="button-container">
        <div className="button-item">
          <Loginbutton buttontext={"LOGIN AS ADMIN"} />
        </div>
        <div className="button-space"></div>
        <div className="button-item">
          <Loginbutton buttontext={"LOGIN AS MANAGER"} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
