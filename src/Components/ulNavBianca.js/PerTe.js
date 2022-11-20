import useShow from '../BasicComponents/useShow';

function PerTe() {
	const { show, setShow } = useShow(false);
	return (
		<div style={{cursor:'pointer'}}>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Per Te
			</a>
			{show && (
				<div style={{position:'absolute', zIndex:'999999', backgroundColor:'whiteSmoke', width:'100%', left:'0', height:'40px'}} className='d-flex align-items-center justify-content-center'>
					<ul style={{display:'flex', gap:'40px', listStyleType:'none', justifyContent:'center'}}>
						<li>
							<a id='a' href="#">Creativi/Designer</a>
						</li>
						<li>
							<a id='a' href="#">Esperti di dati</a>
						</li>
						<li>
							<a id='a' href="#">Sviluppatori</a>
						</li>
						<li>
							<a id='a' href="#">Giocatori</a>
						</li>
						<li>
							<a id='a' href="#">Professionisti</a>
						</li>
						<li>
							<a id='a' href="#">Ricercatori</a>
						</li>
						<li>
							<a id='a' href="#">Roboticists</a>
						</li>
						<li>
							<a id='a' href="#">Startups</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default PerTe;
