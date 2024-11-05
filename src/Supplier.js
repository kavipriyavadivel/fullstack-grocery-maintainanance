import React from 'react'
import Adminnav from './Adminnav'
import Loginbutton from './Loginbutton'

const Supplier = () => {
  return (
    <div className='item'>
      <Adminnav />
      <div className='item-form'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input id='search'placeholder="Search Here..."></input>
        </form>
        <div className='but-wrapper'> 
          <Loginbutton buttontext={"Add Supplier"} />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Supplier
