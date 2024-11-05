import Loginbutton from './Loginbutton';
import React, { useEffect, useState } from 'react';
const Item = () => {

  const[item,setItem] = useState([]);

  useEffect(()=>{
    const fetchItem = async()=>{
      const response = await fetch(
        "http://localhost:8080/grocery/get-item"
      );
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  },[]);

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='item-form'>
        <div className='list-container'>
          {item.map((show)=>(
            <li>
              <ul>{toTitleCase(show.item)}</ul>
            </li>
          ))}
        </div>  
        <div className='button-wrapper'> 
           <Loginbutton buttontext={"Add Items"} />
        </div>
    </div> 
  );
};

export default Item;
