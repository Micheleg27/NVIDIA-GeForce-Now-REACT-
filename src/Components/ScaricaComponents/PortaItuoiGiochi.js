import { Button } from '../BasicComponents/Button';

function PortaItuoiGiochi() {
	return (
		<section className="container AD-container">
			<div className="text-light">
				<h2 style={{textAlign:'start'}}>Porta i tuoi giochi con te</h2>
				<div>
					<p>
						I Chromebook ora sono in grado di usare i giochi per PC con GeForce NOW. I dispositivi veloci,
						semplici e sicuri utilizzati possono ora trasformarsi subito in piattaforme di gioco a distanza
						basate su GeForce.
					</p>
				</div>
				<Button type="button" buttonSize="BTN--medium">
					<a id="ad-link-btn" href="#">
						Scopri di Più
					</a>
				</Button>
			</div>
			<img
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/download/gfn-download-chrombook-evens-2c50-D.jpg"
				alt="rtx-immagine"
			/>
		</section>
	);
}

export default PortaItuoiGiochi;
