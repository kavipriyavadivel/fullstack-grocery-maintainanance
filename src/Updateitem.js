import React from 'react'
import './updateitem.css'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Updateitem = () => {
    const [date, setDate] = useState("none");
    const onDateChange = (event) => {
      setDate(event.target.value);
    };
     const dateStyle = {
        backgroundColor: "white",
        width: "12.0rem",
        height: "2rem",
        fontSize: "1.2rem",
     };
    return (
        <div className='uiitem'>
        <Nav />
            <div className='uiitem-form'>
                <form onSubmit={(e) => e.preventDefault()} className='frm'>
                    <div className='frm-div'>
                        <div className="label-container"><br/><br/><br/>
                            <label htmlFor='itm'>Item :</label>
                            <input type='text' className='space' required id='itm' style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/>
                        </div>
                        <div className="labell-container">
                            <label htmlFor='pur'>Quantity :</label>
                            <input type='text' className='space' required id='pur'style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/>
                        </div>
                        <div className="drop">
                            <label htmlFor='sel'>Session : </label>
                            <select id='sel'className='space'>
                                <option value="select">--Select--</option>
                                <option value="breakfast">Break Fast</option>
                                <option value="lunch">Lunch</option>
                                <option value="evening">Evening</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div><br/><br/>
                        <div className="date">
                            <label htmlFor='date'>Date :</label>
                            <input  className='space'
                                    type="date"
                                    style={dateStyle}
                                    value={date}
                                    onChange={onDateChange}
                            /><br/><br/><br/><br/>
                        </div>
                    </div>
                    <Link to={'/updatestock'}>
                        <button className='manage-but'>
                            UPDATE
                        </button>
                    </Link>
                </form>

            </div>
        
        </div>
  )
}

export default Updateitem
