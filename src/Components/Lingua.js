import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import useShow from './BasicComponents/useShow';
import { Link } from 'react-router-dom';

function Lingua() {
	const { show, setShow } = useShow(false);
	return (
		<div>
			{!show && (
				<div className="d-flex justify-content-center align-items-center dimensione">
					<div className="container-country-region">
						<div className="header-container-lingua">
							<p>Are you looking for your local GeForce Now page ?</p>
							<Button
								onClick={() => setShow(!show)}
								type="button"
								buttonSize="BTN--medium"
								buttonStyle="btn--primary--green"
							>
								ITALIA
							</Button>
						</div>

						<hr className="mb-4 text-light" />
						<p>
							<strong>Choose another country or region to see content specific to your location.</strong>
						</p>

						<div className="list-region">
							<Link to="/es-la/geforce-now/">AMÉRICA LATINA</Link>
							<Link to="/es-ar/geforce-now/">ARGENTINA</Link>
							<Link to="/en-au/geforce-now/">AUSTRALIA</Link>
							<Link to="/pt-br/geforce-now/">BRASIL</Link>
							<Link to="/cs-cz/geforce-now/">ČESKÁ REPUBLIKA</Link>
							<Link to="/es-cl/geforce-now/">CHILE</Link>
							<Link to="/da-dk/geforce-now/">DANMARK</Link>
							<Link to="/de-de/geforce-now/">DEUTSCHLAND</Link>
							<Link to="/es-es/geforce-now/">ESPAÑA</Link>
							<Link to="/fr-fr/geforce-now/">FRANCE</Link>
							<Link to="/nl-nl/geforce-now/">NEDERLAND</Link>
							<Link to="/nb-no/geforce-now/">NORGE</Link>
							<Link to="/de-at/geforce-now/">ÖSTERREICH</Link>
							<Link to="/es-py/geforce-now/">PARAGUAY</Link>
							<Link to="/ru-ru/geforce-now/">РОССИЯ</Link>
							<Link to="/pl-pl/geforce-now/">POLSKA</Link>
							<Link to="/en-eu/geforce-now/">REST OF EUROPE</Link>
							<Link to="/en-sa/geforce-now/">SAUDI ARABIA</Link>
							<Link to="/en-sg/geforce-now/">SINGAPORE</Link>
							<Link to="/fi-fi/geforce-now/">SUOMI</Link>
							<Link to="/sv-se/geforce-now/">SVERIGE</Link>
							<Link to="/tr-tr/geforce-now/">TÜRKIYE</Link>
							<Link to="/en-gb/geforce-now/">UNITED KINGDOM</Link>
							<Link to="/es-uy/geforce-now/">URUGUAY</Link>
							<Link to="/ar-sa/geforce-now/">المملكة العربية السعودية</Link>
							<Link to="/ko-kr/geforce-now/">대한민국</Link>
							<Link to="/zh-tw/geforce-now/">台灣</Link>
							<Link to="/ja-jp/geforce-now/">日本</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Lingua;
