import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Error } from './Components/Error';
import ThanksForRegister from './Components/ThanksForRegister';
import Home from './pages/Home';
import LogAbb from './Components/LogAbb';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scarica from './pages/Scarica';
import Abbonamento from './pages/Abbonamento';
import FAQ from './pages/FAQ';
import SupportoTecnico from './pages/SupportoTecnico';
import { Supporto } from './pages/Supporto';
import { Giochi } from './pages/Giochi';
import { RequisitiPage } from './Components/SupportoComponents/Requisiti-di-Sistema/RequisitiPage';
import { ServerStatus } from './pages/Serverstatus';
import Register from './Components/RegisterLogin/Register';
import Login from './Components/RegisterLogin/Login'
import Amazon from './Components/CartComponents/Amazon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/thanks" element={<ThanksForRegister />} />
				<Route path="*" element={<Error/>} />
				<Route path="/LogAbb" element={<LogAbb />}/>
				<Route path='/Scarica' element={<Scarica />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/Abbonamento' element={<Abbonamento />} />
				<Route path='/FAQ' element={<FAQ />} />
				<Route path='/Supporto' element={<Supporto />}/>
				<Route path='/SupportoTecnico' element={<SupportoTecnico />} />
				<Route path='/RequisitiDiSistema/*' element={<RequisitiPage />} />
				<Route path='/Giochi' element={<Giochi />}/>
				<Route path='/ServerStatus' element={<ServerStatus />} />
				<Route path='/Acquista' element={<Amazon />}/>
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
