import React from 'react';
import Managerbutton from './Managerbutton';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const Loginmanager = () => {
  const navigate=useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const handleloginmanger = (e) => {
    if(email === "boys@gmail.com" && password ==="1234")
    {
      navigate("/updatestock")
    }else if(email === "girls@gmail.com" && password ==="1234")
      {
        navigate("/item")
      }else if(email === "day@gmail.com" && password ==="1234")
      {
        navigate("/item")
      }else{
      alert('Invalid email or password. Please try again.');
    }
  }
  return (
    <div className='homepage'>
      <div className='login-manager container-row'>
        <div className="button-container">
          <Managerbutton buttontext={"BOYS MESS"} handleloginmanger={handleloginmanger}/>
        </div>
        <div className="button-container">
          <Managerbutton buttontext={"GIRLS MESS"} />
        </div>
        <div className="button-container">
          <Managerbutton buttontext={"DAY SCHOLAR MESS"} />
        </div>
      </div>
    </div>
  );
}

export default Loginmanager;
