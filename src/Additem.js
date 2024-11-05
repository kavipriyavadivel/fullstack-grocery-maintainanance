import React from 'react'
import './Additem.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'


const Additem = () => {
  return (
    <div className='aitem'>
      <Nav />
        <div className='aitem-form'>
            <form onSubmit={(e) => e.preventDefault()} className='frm'>
                <div className='frm-div'>
                    <div className="label-container"><br/><br/><br/><br/>
                        <label htmlFor='itm'>Item :</label>
                        <input type='text' className='space' required id='itm' style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                    </div>
                    <div className="labell-container">
                        <label htmlFor='pur'>Purpose :</label>
                        <input type='text' className='space' required id='pur'style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                    </div>
                </div>
                <Link to={'/aitem'}>
                    <button className='manage-but'>
                        ADD
                    </button>
                </Link>
            </form>

        </div>
      
    </div>
  )
}

export default Additem
