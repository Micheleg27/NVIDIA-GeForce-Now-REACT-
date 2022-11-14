import { Button } from "../BasicComponents/Button";

function NuovaGenerazione() {
	return (
		<section className="container text-light">
			<img
				className="ad-rtx-img"
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-3080-module-2560-d@2x.jpg"
				alt="rtx-immagine"
			/>
			<img
				className="rtx-query"
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-3080-module-640-p@2x.jpg"
				alt=""
			/>
			<div className="text">
				<h2>NUOVA GENERAZIONE DI PC GAMING</h2>
				<h3>LA POTENZA DI classNameE GEFORCE RTX™ 3080 IN STREAMING DAL CLOUD</h3>
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
				<Button buttonSize="BTN--medium">
					<a id="ad-link-btn" href="#">
						REGISTRATI OGGI
					</a>
				</Button>
			</div>
		</section>
	);
}

export default NuovaGenerazione;
