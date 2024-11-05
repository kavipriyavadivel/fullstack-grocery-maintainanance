import React, { useState } from 'react'
import './Additem.css'
import Adminnav from './Adminnav'


const Additem = () => {
    const[item,setItem]=useState('');

    const handleclick=(e)=>{
        e.preventDefault();
        const items={item};
        fetch("http://localhost:8080/grocery/add-item",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(items),
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then((message)=>{
            window.alert(message);
            setItem('');
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
            window.alert("Failed to add user details. Please try again.");
          });
    }
  return (
    <div className='item'>
      <Adminnav />
        <div className='item-form'>
            <div className='list-container'>
            <form onSubmit={(e) => e.preventDefault()} className='frm'>
                <div className='frm-div'>
                    <div className="label-container"><br/><br/><br/><br/>
                        <label htmlFor='itm'>Item :</label>
                        <input type='text' className='space' required id='itm' value={item}
                        onChange={(e)=>{
                            setItem(e.target.value)
                        }} style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                    </div>
                </div>
                    <button className='manage-but' onClick={handleclick}>
                        ADD
                    </button>
            </form>
        </div>
        </div>
        <div></div>
      
    </div>
  )
}

export default Additem
