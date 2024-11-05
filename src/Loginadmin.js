import React from 'react';
import Managerbutton from './Managerbutton';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
const Loginadmin = () => {
  const navigate=useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const handlelogin = (e) => {
    if(email === "admin@gmail.com" && password ==="1234")
    {
      navigate("/aitem")
    }else if(email === "boys@gmail.com" && password ==="1234")
    {
      navigate("/updatestock")
    }else if(email === "girls@gmail.com" && password ==="1234")
      {
        navigate("/gupdate")
      }else if(email === "day@gmail.com" && password ==="1234")
      {
        navigate("/dupdate")
      }else{
      alert('Invalid email or password. Please try again.');
    }
  }
  return (
    <div className='homepage'>
      <div className="login-admin container-row">
        <div className="form-container">
          <form onSubmit={handlelogin} className='form'>
            <label htmlFor='username-la'>USER ID :</label>
            <input
              id='username'
              type='text'
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='form-control'
            />
            <br />
            <label htmlFor='password-la'>PASSWORD : </label>
            <input
              type='password'
              id='password'
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='form-control'
            />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginadmin;
