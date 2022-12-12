import { Link } from "react-router-dom";
import { Button } from "../BasicComponents/Button";

function NuovaGenerazione() {
	return (
		<section className="sectionWidth">
			<div className="card sfondo-carta d-flex justify-content-center align-items-end text-light contenitore-query">
				<img
					className="carte-regalo-img-desktop"
					src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-3080-module-2560-d@2x.jpg"
					alt="rtx-immagine"
				/>
				<img
					className="carte-regalo-img-query"
					src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-3080-module-640-p@2x.jpg"
					alt=""
				/>
				<div className="card-img-overlay overlay-right carte-rtx-testo d-flex flex-column justify-content-center">
					<h2 className="titolo-bold">NUOVA GENERAZIONE DI PC GAMING</h2>
					<h3 className="titolo-bold">LA POTENZA DI classNameE GEFORCE RTX™ 3080 IN STREAMING DAL CLOUD</h3>
					<div className="text-p">
						<p>
							Cerchi le massime prestazioni possibili per la tua esperienza di cloud gaming? Ti presentiamo il
							nuovo piano di abbonamento GeForce NOW RTX 3080. Aggiorna quasi tutti i dispositivi con la
							potenza di GeForce RTX 3080 e ottieni fino a 1440p, 120 FPS e 4K HDR.
						</p>
						<p>
							Il nuovissimo abbonamento GeForce NOW RTX 3080 sfonda la barriera dei 60 FPS per trasmettere in
							streaming un'esperienza più competitiva ad alta risoluzione e latenza ultra bassa. Con l'accesso
							esclusivo ai server di gioco GeForce RTX 3080, i tempi di attesa più brevi e le sessioni più
							lunghe, l'abbonamento RTX 3080 alza il livello del cloud gaming.
						</p>
						<p>
							Ora puoi acquistare l'abbonamento GeForce NOW RTX 3080 e accedere subito alla nuova generazione
							del cloud gaming.
						</p>
					</div>
					<Button buttonSize="BTN--large">
						<Link id="ad-link-btn" to="#">
							REGISTRATI OGGI
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default NuovaGenerazione;
