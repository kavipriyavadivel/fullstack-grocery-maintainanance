import React from 'react';
import Adminnav from './Adminnav';
import { useEffect, useState } from "react";

const Co = () => {
  const [approved, setapproved] = useState([]);

  useEffect(() => {
    const fetchApproved = async () => {
      const response = await fetch(
        "http://localhost:8080/grocery/get-updated-stock"
      );
      const data = await response.json();
      setapproved(data);
    };

    fetchApproved();
  }, []);
  return (
    <div className='issue-item'>
      <Adminnav/>
      <div className='issue-item-container'>
      <div className="issue-table">
        <div style={{ textAlign: "center" }}>
          <h1>Consumed List</h1>
        </div>
        <div style={{marginLeft:"50px",marginRight:"50px"}}>

        <table>
          <tr>
            <th>Id</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Session</th>
            <th>Hostel</th>
          </tr>
          {approved.map((show) => (
            <tr>
              <th>{show.id}</th>
              <th>{show.item}</th>
              <th>{show.quantity}</th>
              <th>{show.date}</th>
              <th>{show.session}</th>
              <th>{show.hostel}</th>
            </tr>
          ))}
        </table>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Co;

// import React from 'react'
// import Adminnav from './Adminnav'
// import './co.css';
// const Co = () => {
//   return (
//     <div className='uitem'>
//       <Adminnav />
//       <div className='uitem-form'>
//         <div>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <input id='search' placeholder="Search Here..."></input>
//           </form>
//         </div>
//         <div className='button-wrapper'> 
//           <table>
//             <tbody>
//               <tr>
//                 <th>ITEMS</th>
//                 <th>BREAKFAST</th>
//                 <th>LUNCH</th>
//                 <th>DINNER</th>
//                 <th>MESS</th>
//                 <th>DATE</th>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div>
//       </div>
//     </div>
//   )
// }

// export default Co
