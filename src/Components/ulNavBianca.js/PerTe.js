import { Link } from 'react-router-dom';
import useShow from '../BasicComponents/useShow';

function PerTe() {
	const { show, setShow } = useShow(false);
	return (
		<div style={{cursor:'pointer'}}>
			<Link id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Per Te
			</Link>
			{show && (
				<div style={{position:'absolute', zIndex:'9999', backgroundColor:'whiteSmoke', width:'100%', left:'0', height:'40px'}} className='d-flex align-items-center justify-content-center'>
					<ul style={{display:'flex', gap:'40px', listStyleType:'none', justifyContent:'center'}}>
						<li>
							<Link id='a' to="#">Creativi/Designer</Link>
						</li>
						<li>
							<Link id='a' to="#">Esperti di dati</Link>
						</li>
						<li>
							<Link id='a' to="#">Sviluppatori</Link>
						</li>
						<li>
							<Link id='a' to="#">Giocatori</Link>
						</li>
						<li>
							<Link id='a' to="#">Professionisti</Link>
						</li>
						<li>
							<Link id='a' to="#">Ricercatori</Link>
						</li>
						<li>
							<Link id='a' to="#">Roboticists</Link>
						</li>
						<li>
							<Link id='a' to="#">Startups</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default PerTe;
