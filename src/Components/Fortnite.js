import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import { Title } from './Title';
import { Link } from 'react-router-dom';

function Fortnite() {
	return (
		<div className="rpFortniteSection">
			<div className="rpFortniteCenter" />
				<div className="rpContentContainer">
				
				<Title titlecolor='title-color-black' h1title={'NUOVI GIOCHI AGGIUNTI OGNI GIOVEDÌ'} h3title={'Sintonizzati ogni settimana per il GFN Thursday: annunci settimanaliper i nuovi giochi, le funzionalità e le notizie più recenti, in streaming dal cloud a te.'} style={{padding: 0}}/>

				<Button type="button" buttonSize="BTN--medium" buttonStyle="btn--primary--green">
					<Link to="https://www.nvidia.com/it-it/geforce-now/games/">
						VEDI I GIOCHI
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default Fortnite;