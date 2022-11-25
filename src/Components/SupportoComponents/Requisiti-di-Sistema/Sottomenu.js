import { Link } from "react-router-dom";

export function Sottomenu() {
    return (
        <div>
            <div className="section-rs-supporto d-flex justify-content-center" >
                <ul className="d-flex align-items-center justify-content-between text-light li-style">
                    <li className=""><Link to="/:id">MAC OS</Link></li>
                    <li className=""><Link to="/:id">PC Windows</Link></li>
                    <li className=""><Link to="/:id">Sistema operativo ChromeS</Link></li>
                    <li className=""><Link to="/:id">SCUDO</Link></li>
                    <li className=""><Link to="/:id">Navigatore</Link></li>
                    <li className=""><Link to="/:id">Androide</Link></li>
                    <li className=""><Link to="/:id">Safari iOS</Link></li>
                    <li className=""><Link to="/:id">Televisore Android</Link></li>
                    <li className=""><Link to="/:id">Smart TV</Link></li>
                </ul>
            </div>
        </div>
    )
}