import React from 'react';
import Adminnav from './Adminnav';
import { useEffect, useState } from "react";

const Adreturn = () => {
  const [approved, setapproved] = useState([]);

  useEffect(() => {
    const fetchApproved = async () => {
      const response = await fetch(
        "http://localhost:8080/grocery/get-return-list"
      );
      const data = await response.json();
      setapproved(data);
    };

    fetchApproved();
  }, []);
  return (
    <div className='returned-item'>
      <Adminnav/>
      <div className='returned-item-container'>
      <div className="returned-table">
        <div style={{ textAlign: "center" }}>
          <h1>Returned List</h1>
        </div>
        <div style={{marginLeft:"50px",marginRight:"50px"}}>

        <table>
          <tr>
            <th>Id</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Hostel</th>
          </tr>
          {approved.map((show) => (
            <tr>
              <th>{show.id}</th>
              <th>{show.item}</th>
              <th>{show.quantity}</th>
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

export default Adreturn;
// import React from 'react'
// import Adminnav from './Adminnav'
// const Adreturn = () => {
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
//                 <th>BOYS</th>
//                 <th>GIRLS</th>
//                 <th>DS</th>
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

// export default Adreturn
