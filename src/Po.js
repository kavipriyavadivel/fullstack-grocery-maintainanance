import React from 'react'
import Adminnav from './Adminnav'

const Po = () => {
  return (
    <div className='aitem'>
      <Adminnav />
        <div className='aitem-form'>
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
                    <div className="res-container">
                        <label htmlFor='res'>Supplier :</label>
                        <input type='text' className='space' required id='res'style={{ width: '190px',height:'30px',borderRadius:'15px' ,border:'none'}}></input><br/><br/><br/><br/><br/>
                    </div>
                </div>
                <button className='manage-but' onClick={(e)=>(alert('Request Submitted Successfully'))}>
                    ORDER
                </button>                
            </form>

        </div>
      
    </div>
  )
}

export default Po
