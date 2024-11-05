import React, { useState, useEffect } from 'react';
import Gnav from './Gnav';

const Girlsrequest = () => {
  const [items, setItems] = useState([]); // Initialize as an empty array
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [hostel, setHostel] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch('http://localhost:8080/grocery/get-item');
        const data = await response.json();
        setItems(data); // Set fetched data as the array of items
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItem();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const detail = {
      item: selectedItem,
      quantity,
      orderDate,
      hostel,
    };

    fetch('http://localhost:8080/grocery/girl-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(detail),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((message) => {
        window.alert(message);
        // Clear the form fields
        setSelectedItem('');
        setQuantity('');
        setOrderDate('');
        setHostel('');
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        window.alert('Failed to update stock. Please try again.');
      });
  };

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='item'>
      <Gnav/>
      <div className='update'>
        <div className='item-form'>
          <div className='list-container'>
            <form onSubmit={handleClick}>
              <div className='frm-div'>
                <div className="label-container">
                  <label htmlFor='itm'>Item :</label>
                  <select
                    id='itm'
                    className='space'
                    required
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                  >
                    <option value="">--Select Item--</option>
                    {items.map((show, index) => (
                      <option key={index} value={show.item}>
                        {toTitleCase(show.item)}
                      </option>
                    ))}
                  </select>
                </div><br/>
                <div className="label-container">
                  <label htmlFor='pur'>Quantity :</label>
                  <input
                    type='text'
                    className='space'
                    required
                    id='pur'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div><br/>
                <div className="label-container">
                  <label htmlFor='date'>Date :</label>
                  <input
                    type="date"
                    className='space'
                    required
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                  />
                </div><br/>
                <div className="label-container">
                  <label htmlFor='hostel'>Mess :</label>
                  <select
                    id='hostel'
                    className='space'
                    required
                    value={hostel}
                    onChange={(e) => setHostel(e.target.value)}
                  >
                    <option value="select">--Select--</option>
                    <option value="Boys">Boys</option>
                    <option value="Girls">Girls</option>
                    <option value="Day Scholar">Day Scholar</option>
                  </select>
                </div><br/>
                <button className='manage-but' type='submit'>
                  REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girlsrequest;