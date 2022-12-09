import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error } from './Error';
import ThanksForRegister from './ThanksForRegister';
import Home from '../pages/Home';
import LogAbb from './LogAbb';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scarica from '../pages/Scarica';
import Abbonamento from '../pages/Abbonamento';
import FAQ from '../pages/FAQ';
import SupportoTecnico from '../pages/SupportoTecnico';
import { Supporto } from '../pages/Supporto';
import { Giochi } from '../pages/Giochi';
import { RequisitiPage } from './SupportoComponents/Requisiti-di-Sistema/RequisitiPage';
import { ServerStatus } from '../pages/Serverstatus';
import Register from './RegisterLogin/Register';
import Login from './RegisterLogin/Login';
import Amazon from './CartComponents/Amazon';
import Cart from './CartComponents/Cart';

export function App() {
	const [ cart, setCart ] = useState([]);

	const handleClick = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([ ...cart, item ]);
	};

	const handleChange = (item, d) => {
		const ind = cart.indexOf(item);
		const arr = cart;
		arr[ind].amount += d;

		if (arr[ind].amount === 0) arr[ind].amount = 1;
		setCart([ ...arr ]);
	};
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/thanks" element={<ThanksForRegister />} />
				<Route path="*" element={<Error />} />
				<Route path="/LogAbb" element={<LogAbb />} />
				<Route path="/Scarica" element={<Scarica />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/Abbonamento" element={<Abbonamento />} />
				<Route path="/FAQ" element={<FAQ />} />
				<Route path="/Supporto" element={<Supporto />} />
				<Route path="/SupportoTecnico" element={<SupportoTecnico />} />
				<Route path="/RequisitiDiSistema/*" element={<RequisitiPage />} />
				<Route path="/Giochi" element={<Giochi />} />
				<Route path="/ServerStatus" element={<ServerStatus />} />
				<Route path="/Acquista" element={<Amazon handleClick={handleClick} />} />
				<Route path="/Carrello" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
			</Routes>
		</Router>
	);
}
