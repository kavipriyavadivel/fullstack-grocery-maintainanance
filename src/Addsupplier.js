import React from 'react'
import './Additem.css'
import { Link } from 'react-router-dom'
import Adminnav from './Adminnav'


const Addsupplier = () => {
  return (
    <div className='aitem'>
      <Adminnav />
        <div className='aitem-form'>
            <form onSubmit={(e) => e.preventDefault()} className='frm'>
                <div className='frm-div'>
                    <div className="label-container"><br/><br/><br/><br/>
                        <label htmlFor='supplier'>Item :</label>
                        <input type='text' className='space' required id='supplier' style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                    </div>
                    <div className="labell-container">
                        <label htmlFor='item'>Suppliers :</label>
                        <input type='text' className='space' required id='item'style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                    </div>
                </div>
                <Link to={'/supplier'}>
                    <button className='manage-but'>
                        ADD
                    </button>
                </Link>
            </form>
        </div>      
    </div>
  )
}

export default Addsupplier
