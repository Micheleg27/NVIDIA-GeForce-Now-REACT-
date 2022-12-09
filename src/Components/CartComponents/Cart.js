import {Button}  from '../BasicComponents/Button';
import React, { useState, useEffect } from 'react';


const Cart = ({ cart, setCart, handleChange }) => {
	const [ price, setPrice ] = useState(0);

	const handleRemove = (id) => {
		const arr = cart.filter((item) => item.id !== id);
		setCart(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		cart.map((item) => (ans += item.amount * item.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});

	return (
		<article className='text-light'>
			{cart.map((item) => (
				<div className="cart_box" key={item.id}>
					<div className="cart_img">
						<img src={item.img} alt="" />
						<p>{item.title}</p>
					</div>
					<div>
						<Button onClick={() => handleChange(item, 1)}>+</Button>
						<div className='count'>{item.amount}</div>
						<Button onClick={() => handleChange(item, -1)}>-</Button>
					</div>
					<div>
						<div >{item.price}</div>
						<Button onClick={() => handleRemove(item.id)}>Rimuovi</Button>
					</div>
				</div>
			))}
			<div className="total">
				<span>Totale Carrello :</span>
				<span>€ {price}</span>
			</div>
		</article>
	);
};

export default Cart;
