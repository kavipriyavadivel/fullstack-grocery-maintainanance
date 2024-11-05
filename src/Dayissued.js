import React from 'react';
import { useEffect, useState } from "react";
import Dnav from './Dnav';

const Dayissued = () => {
  const [approved, setapproved] = useState([]);

  useEffect(() => {
    const fetchApproved = async () => {
      const response = await fetch(
        "http://localhost:8080/grocery/get-day-request"
      );
      const data = await response.json();
      setapproved(data);
    };

    fetchApproved();
  }, []);
  return (
    <div className='issue-item'>
      <Dnav/>
      <div className='issue-item-container'>
      <div className="issue-table">
        <div style={{ textAlign: "center" }}>
          <h1>Issued List</h1>
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
          {approved.map((show) => (
            <tr>
              <th>{show.id}</th>
              <th>{show.item}</th>
              <th>{show.quantity}</th>
              <th>{show.orderDate}</th>
              <th>{show.issuedDate}</th>
              <th>{show.hostel}</th>
              <th>{show.status}</th>
            </tr>
          ))}
        </table>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dayissued;
