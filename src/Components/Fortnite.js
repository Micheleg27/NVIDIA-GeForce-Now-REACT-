import { Button } from './BasicComponents/Button';
import '../SASS/button.css';

function Fortnite() {
	return (
		<div className="rpFortniteSection">
			<div className="rpFortniteCenter" />
			<div className="rpContentContainer">
				<h2 className="rpContentTitle text-dark">
					<strong>GRATIS SIGNIFICA TANTE NUOVE POSSIBILITÀ</strong>
				</h2>
				<p className="rpContentParagraph text-dark">
					Con quasi 100 tra i migliori giochi gratis già disponibili su GeForce NOW, non dovrai comprare nulla
					per iniziare subito a giocare.
				</p>
				<Button type="button" buttonSize="BTN--medium" buttonStyle="btn--primary--green">
					<a href="https://www.nvidia.com/it-it/geforce-now/games/" target="_blank">
						VEDI I GIOCHI
					</a>
				</Button>
			</div>
		</div>
	);
}

export default Fortnite;
