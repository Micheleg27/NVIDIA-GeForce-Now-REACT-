import React from 'react';
import '../../SASS/button.css';

const STYLE = [ ' BTN--primary--green', 'BTN--secondary--outline' ];

const SIZE = [ 'BTN--small', 'BTN--medium', 'BTN--large' ];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

	const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

	return (
		<button className={`BTN ${checkButtonStyle} ${checkButtonSize} alignLeft` } onClick={onClick} type={type}>
			{children}
		</button>
	);
};
