import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ThanksForRegister from './Components/ThanksForRegister';
import Home from './pages/Home';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery'
// import Popper from 'popper.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/thanks" element={<ThanksForRegister />} />
				<Route path="*" element={<img src='https://profiles.bugcrowdusercontent.com/avatars/8d676070e523c0f9ecae3801b26f88e3/___img_src_x_onerror_alert_document.domain__.jpg'/>} />
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
