import React, { useState } from 'react';


const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const login = async () => {
	const response = await fetch('http://localhost:8000/api/token/', {
  	method: 'POST',
  	headers: {
    	'Content-Type': 'application/json',
  	},
  	body: JSON.stringify(credentials),
	});
	const data = await response.json();

	if (response.ok) {
	
		console.log(data.access);
  	// Store the token in localStorage or sessionStorage
  	localStorage.setItem('access_token', data.access);
  	localStorage.setItem('refresh_token', data.refresh);
	 
		
	  
	} else {
  	console.log('Login failed:', data);
	}
  };

  return (
	<div>
  	<input
    	type="text"
    	placeholder="Username"
    	onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
  	/>
  	<input
    	type="password"
    	placeholder="Password"
    	onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
  	/>
  	<button onClick={login}>Login</button>
	  
	</div>
  );
};

export default Login;
