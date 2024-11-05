import React from 'react';
import { Link } from 'react-router-dom';

const Loginbutton = ({ buttontext }) => {
  return (
    <>
      {buttontext === 'LOGIN AS MANAGER' && (
        <Link to={'/loginadmin'} className="button-link">
          <button className="login-button">
            {buttontext}
          </button>
        </Link>
      )}
      {buttontext === 'LOGIN AS ADMIN' && (
        <Link to={'/loginadmin'} className="button-link">
          <button className="login-button">
            {buttontext}
          </button>
        </Link>
      )}
      {buttontext === 'Add Item' && (
        <Link to={'/additem'} className="button-link">
          <button className="login-button">
            {buttontext}
          </button>
        </Link>
      )}
      {buttontext === 'Add Items' && (
        <Link to={'/adadditem'} className="button-link">
          <button className="login-button">
            {buttontext}
          </button>
        </Link>
      )}
      {buttontext === 'Add Supplier' && (
        <Link to={'/addsupplier'} className="button-link">
          <button className="login-button">
            {buttontext}
          </button>
        </Link>
      )}
    </>
  );
};

export default Loginbutton;
