// import { useState } from "react";

function Login() {
	// const [ password, setPassword ] = useState('');
	// const [ email, setEmail ] = useState('');

	return (
		<div>
			<form
				action="/login"
				method="POST"
				className="text-light"
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
			>
				<h1>Login</h1>
				<div>
					<input type="email" id="email" name="email" placeholder="Email" />
				</div>
				<div>
					<input type="password" id="password" name="password" placeholder="Password" />
				</div>
				<button type="submit">Login</button>
			</form>
			{/* <input
				placeholder="Email"
				type="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				placeholder="Password"
				type="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<button>login</button> */}
		</div>
	);
}

export default Login;
