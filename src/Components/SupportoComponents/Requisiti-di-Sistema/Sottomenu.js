import { Link, Route, Routes } from "react-router-dom";
import { Androide, ChromeS, MacOs, Navigatore, PcWindows, SafariIOS, Scudo, SmartTV, TelevisoreAndroid } from "./Componenti-sottomenu";

export function Sottomenu() {
    return (
        <div>
            <div className="section-rs-supporto d-flex justify-content-center" >
                <ul className="d-flex align-items-center justify-content-between text-light li-style">
                    <li className=""><Link to="macos">MAC OS</Link></li>
                    <li className=""><Link to="pcwindows">PC Windows</Link></li>
                    <li className=""><Link to="oschrome">Sistema operativo ChromeS</Link></li>
                    <li className=""><Link to="scudo">SCUDO</Link></li>
                    <li className=""><Link to="navigatore">Navigatore</Link></li>
                    <li className=""><Link to="androide">Androide</Link></li>
                    <li className=""><Link to="safariios">Safari iOS</Link></li>
                    <li className=""><Link to="teleandroid">Televisore Android</Link></li>
                    <li className=""><Link to="smarttv">Smart TV</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="macos" element={< MacOs />}/>
                <Route path="pcwindows" element={< PcWindows />}/>
                <Route path="oschrome" element={< ChromeS />}/>
                <Route path="scudo" element={< Scudo />}/>
                <Route path="navigatore" element={< Navigatore />}/>
                <Route path="androide" element={< Androide />}/>
                <Route path="safariios" element={< SafariIOS />}/>
                <Route path="teleandroid" element={< TelevisoreAndroid />}/>
                <Route path="smarttv" element={< SmartTV />}/>
            </Routes>
        </div>
    )
}