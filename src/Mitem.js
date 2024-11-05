import React from 'react';
import Nav from './Nav';
import Item from './Item';
import Loginbutton from './Loginbutton';

const Mitem = () => {
  return (
    <div className='item'>
      <Nav />
      <Item/>
      <div className='button-wrapper'> 
          <Loginbutton buttontext={"Add Item"} />
        </div>
      <div></div>
    </div>
  );
};

export default Mitem;
