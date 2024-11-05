import React from 'react'
import Adminnav from './Adminnav'

const Remain = () => {
  return (
    <div className='uitem'>
      <Adminnav />
      <div className='uitem-form'>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input id='search' placeholder="Search Here..."></input>
          </form>
        </div>
        <div className='button-wrapper'> 
          <table>
            <tbody>
              <tr>
                <th>ITEMS</th>
                <th>BOYS</th>
                <th>GIRLS</th>
                <th>DS</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Remain
