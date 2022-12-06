function Register() {
	return (
		<div>
			<div class="alert alert-warning alert-dismissible fade show" role="alert">
				<h3>Error !</h3>
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
			</div>

			<form
				action="/register"
				method="POST"
				className="text-light"
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
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
		</div>
	);
}

export default Register;
