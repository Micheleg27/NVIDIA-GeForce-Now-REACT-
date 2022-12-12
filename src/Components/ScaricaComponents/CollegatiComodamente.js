import { Link } from 'react-router-dom';
import { Button } from '../BasicComponents/Button';

function CollegatiComodamente() {
	return (
		<section className="container CAR-container">
			<img
				className="img-cuphead"
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/download/gfn-download-shield-evens-2c50-D.jpg"
				alt="card-immagine"
			/>
			<div className="text-light">
				<h2 style={{textAlign:'start'}}>Collegati comodamente dal tuo divano</h2>
				<div>
					<p>
						Trasforma la tua TV in un PC gaming basato su GeForce con NVIDIA SHIELD, per giocare
						direttamente dal divano di casa tua e guardare in streaming i tuoi film e serie TV preferiti.
						Con centinaia di titoli supportati, funzioni come il salvataggio su cloud e gioco incrociato su
						laptop e desktop, potrai continuare il gioco dal punto esatto in cui l'hai lasciato.
					</p>
				</div>
				<Button buttonSize="BTN--medium">
					<Link id="ad-link-btn" to="#">
						Scopri di Più
					</Link>
				</Button>
			</div>
{/* 			
			<span class="da-solo">
				Per ulteriori informazioni sui dispositivi e browser supportati e sulle versioni iOS e iPadOS richieste,
				visita la pagina
				<Link id="a-solo" to="#">
					Requisiti di sistema.
				</Link>
			</span> */}
		</section>
	);
}

export default CollegatiComodamente;
