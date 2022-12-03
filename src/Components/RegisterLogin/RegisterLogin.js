import axios from 'axios';
import { useState } from 'react';

function RegisterLogin() {
	const [ usernamereg, setUsernamereg ] = useState('');
	const [ passwordreg, setPasswordreg ] = useState('');
	const [ emailreg, setEmailreg ] = useState('');

	const register = () => {
		axios
			.post('http://localhost:5000/register', {
				username: usernamereg,
				password: passwordreg,
				email: emailreg
			})
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<div>
			<input
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

			<button onClick={register}>register</button>

			{/* <form action='/register' method='POST'>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Email address
					</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<div id="emailHelp" class="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">
						Password
					</label>
					<input type="password" class="form-control" id="exampleInputPassword1" />
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form> */}
		</div>
	);
}

export default RegisterLogin;
