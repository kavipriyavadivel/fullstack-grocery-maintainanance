import React from 'react'
import './boyspr.css'
import Adminnav from './Adminnav'
const Girlspr = () => {
  return (
    <div>
        <div className='boys'>
            <Adminnav />
            <div className='boys-form'>
                <form onSubmit={(e) => e.preventDefault()} className='frm'>
                    <div className='frm-div'>
                        <div className="label-container"><br/><br/><br/>
                            <label htmlFor='itm'>Item :</label>
                            <input type='text' className='space' required id='itm' style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                        </div>
                        <div className="labell-container">
                            <label htmlFor='pur'>Quantity :</label>
                            <input type='text' className='space' required id='pur'style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/>
                        </div>
                    </div>                          
                </form><br/><br/><br/><br/>
                <div className='but-container'>
                    <button className='manage-but' onClick={(e)=>(alert('Approved!!!'))}>
                        APPROVE
                    </button> 
                    <button className='manage-but' onClick={(e)=>(alert('Issued!!!'))}>
                        ISSUE
                    </button>  
                </div>  
            </div>      
        </div>
    </div>
  )
}

export default Girlspr
