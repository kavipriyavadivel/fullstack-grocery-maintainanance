import React from 'react';
import Adminnav from './Adminnav';
import { useEffect, useState } from "react";

const Admingirlreq = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
             "http://localhost:8080/grocery/girl-pending-list"
          );
          if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
          }
          const result = await response.json();
          setDetails(result);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const handleStatus = async (id) =>{
  
      try{
         await fetch( `http://localhost:8080/grocery/girl-status-change/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          }
        })
        window.location.reload();
      }
      catch(error)
      {
        console.error("Error in Updating Status",error);
      }
    }

  return (
    <div className='issue-item'>
      <Adminnav/>
      <div className='issue-item-container'>
      <div className="issue-table">
        <div style={{ textAlign: "center" }}>
          <h1>Girls Request List</h1>
        </div>
        <div style={{marginLeft:"50px",marginRight:"50px"}}>

        <table>
          <tr>
            <th>Id</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Order Date</th>
            <th>Isseued Date</th>
            <th>Hostel</th>
            <th>Status</th>
          </tr>
          {details.map((show) => (
            <tr>
              <th>{show.id}</th>
              <th>{show.item}</th>
              <th>{show.quantity}</th>
              <th>{show.orderDate}</th>
              <th>{show.issuedDate}</th>
              <th>{show.hostel}</th>
              <th>{show.status}</th>
              <th> <button className="btn-approval" onClick={() =>{handleStatus(show.id)}}>
                Accept
              </button></th>
            </tr>
          ))}
        </table>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Admingirlreq;

// import React from 'react'
// import Adminnav from './Adminnav'
// const Adminrequest = () => {
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
//                 <th>QUANTITY</th>
//                 <th>MESS</th>
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

// export default Adminrequest
