import React from 'react';
import { Link } from 'react-router-dom';

const Managerbutton = ({ buttontext ,handlelogin,handleloginmanager}) => {
  return (
    <div className="text-center mb-3">
      {buttontext === 'DAY SCHOLAR MESS' && (
        <button className='manage-but'onClick={handlelogin}>
        {buttontext}
      </button>
      ) }
       {buttontext === 'BOYS MESS' && (
        <button className='manage-but'onClick={handleloginmanager}>
        {buttontext}
      </button>
      ) }
      {buttontext === 'GIRLS MESS' && (
        <button className='manage-but'onClick={handlelogin}>
        {buttontext}
      </button>
      ) }
    </div>
  );
};

export default Managerbutton;
