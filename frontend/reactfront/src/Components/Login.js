//import React from 'react'
import React, { useState } from 'react';
import './Login.css';


function Login() {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
confirmPassword: '',
});
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value,
});
};
const handleSubmit = (e) => {
e.preventDefault();
// Ajouter ici la logique pour traiter les données du formulaire
console.log('Form Data: ', formData);
};
return (
<div className="register-container">
<h2>Register</h2>
<form onSubmit={handleSubmit}>
<div className="input-field">
<label htmlFor="name">Name</label>
<input
type="text"
id="name"
name="name"
value={formData.name}
onChange={handleChange}
required
/>
</div>
<div className="input-field">
<label htmlFor="email">Email</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleChange}
required
/>
</div>
<div className="input-field">
<label htmlFor="password">Password</label>
<input
type="password"
id="password"
name="password"
value={formData.password}
onChange={handleChange}
required
/>
</div>
<div className="input-field">
<label htmlFor="confirmPassword">Confirme Password</label>
<input
type="password"
id="confirmPassword"
name="confirmPassword"
value={formData.confirmPassword}
onChange={handleChange}
required
/>
</div>
<button type="submit" className="submit-button">
Connecter
</button>
</form>
</div>
);
}
export default Login;
