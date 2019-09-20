import React, { useState } from "react";
import { axiosWithAuth } from './axiosWithAuth';
const Login = (props) => {
  const [credentials, setCredentials] = useState({username:'', password:''});



    
  let handleChange = e => {
    
    setCredentials( {
      ...credentials,
      [e.target.name]: e.target.value
    }
    )
};


let login = e => {
  e.preventDefault();
axiosWithAuth()
  .post('/login', credentials)
  .then(res => { 
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected')
  })
  .catch(err => console.log(err));
}

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login} >
                    <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    />
                   <input 
                   type="password"
                   name="password"
                   value={credentials.password}
                   onChange={handleChange}
                   />
                   <button type='submit'>Login</button>
       </form>
    </div>
  );
};

export default Login;
