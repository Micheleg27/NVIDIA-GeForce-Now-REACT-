import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import useShow from './BasicComponents/useShow';

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
							<a href="/es-la/geforce-now/">AMÉRICA LATINA</a>
							<a href="/es-ar/geforce-now/">ARGENTINA</a>
							<a href="/en-au/geforce-now/">AUSTRALIA</a>
							<a href="/pt-br/geforce-now/">BRASIL</a>
							<a href="/cs-cz/geforce-now/">ČESKÁ REPUBLIKA</a>
							<a href="/es-cl/geforce-now/">CHILE</a>
							<a href="/da-dk/geforce-now/">DANMARK</a>
							<a href="/de-de/geforce-now/">DEUTSCHLAND</a>
							<a href="/es-es/geforce-now/">ESPAÑA</a>
							<a href="/fr-fr/geforce-now/">FRANCE</a>
							<a href="/nl-nl/geforce-now/">NEDERLAND</a>
							<a href="/nb-no/geforce-now/">NORGE</a>
							<a href="/de-at/geforce-now/">ÖSTERREICH</a>
							<a href="/es-py/geforce-now/">PARAGUAY</a>
							<a href="/ru-ru/geforce-now/">РОССИЯ</a>
							<a href="/pl-pl/geforce-now/">POLSKA</a>
							<a href="/en-eu/geforce-now/">REST OF EUROPE</a>
							<a href="/en-sa/geforce-now/">SAUDI ARABIA</a>
							<a href="/en-sg/geforce-now/">SINGAPORE</a>
							<a href="/fi-fi/geforce-now/">SUOMI</a>
							<a href="/sv-se/geforce-now/">SVERIGE</a>
							<a href="/tr-tr/geforce-now/">TÜRKIYE</a>
							<a href="/en-gb/geforce-now/">UNITED KINGDOM</a>
							<a href="/es-uy/geforce-now/">URUGUAY</a>
							<a href="/ar-sa/geforce-now/">المملكة العربية السعودية</a>
							<a href="/ko-kr/geforce-now/">대한민국</a>
							<a href="/zh-tw/geforce-now/">台灣</a>
							<a href="/ja-jp/geforce-now/">日本</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Lingua;
