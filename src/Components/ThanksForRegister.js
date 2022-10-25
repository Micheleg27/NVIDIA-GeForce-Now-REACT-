import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './BasicComponents/Button';

function ThanksForRegister() {
	const navigate = useNavigate();
	return (
		<div className="TFR-background">
			<div className="container TFR-container">
				<div className="d-flex justify-content-center">
					<img
						className="ad-logo-Nvidia"
						src="https://login.nvgs.nvidia.com/NVIDIA-Logo.dark.33f4916f178880192ae7.svg"
						alt="nvidia-logo"
					/>
				</div>
				<h3 className="TFR-title">Grazie per esserti iscritto/a alla nostra Newsletter!</h3>
				<Button
					className="TFR-button"
					buttonSize="BTN--large"
					buttonStyle="btn--primary--green"
					onClick={() => navigate(-1)}
				>
					Torna alla Home
				</Button>
			</div>
		</div>
	);
}

export default ThanksForRegister;
