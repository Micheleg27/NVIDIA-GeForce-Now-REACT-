// import axios from 'axios';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Login from './Login';

function Register() {
	// const [ usernamereg, setUsernamereg ] = useState('');
	// const [ passwordreg, setPasswordreg ] = useState('');
	// const [ emailreg, setEmailreg ] = useState('');

	// const register = () => {
	// 	axios
	// 		.post('http://localhost:5000/register', {
	// 			username: usernamereg,
	// 			password: passwordreg,
	// 			email: emailreg
	// 		})
	// 		.then((response) => {
	// 			console.log(response);
	// 		});
	// };

	return (
		<div>
			<form
				action="/register"
				method="POST"
				className="text-light"
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'20px' }}
			>
				<h1>Register</h1>
				<div>
					<input type="text" id="username" name="username" placeholder="Username" />
				</div>
				<div>
					<input type="email" id="email" name="email" placeholder="Email" />
				</div>
				<div>
					<input type="password" id="password" name="password" placeholder="Password" />
				</div>
				<button type="submit">register</button>
			</form>
			{/* <a href="./login">Login</a> */}

			{/* <input
				placeholder="Username"
				onChange={(e) => {
					setUsernamereg(e.target.value);
				}}
			/>
			<input
				placeholder="Email"
				type="email"
				onChange={(e) => {
					setEmailreg(e.target.value);
				}}
			/>
			<input
				placeholder="Password"
				type="password"
				onChange={(e) => {
					setPasswordreg(e.target.value);
				}}
			/>

			<button onClick={register}>register</button> */}
		</div>
	);
}

export default Register;
