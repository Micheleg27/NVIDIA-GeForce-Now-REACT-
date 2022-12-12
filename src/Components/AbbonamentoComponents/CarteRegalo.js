import { Link } from 'react-router-dom';
import { Button } from '../BasicComponents/Button';

function CarteRegalo() {
    return (
        <section className='sectionWidth'>
            <div className="card sfondo-carta d-flex justify-content-center align-items-end text-light contenitore-query">
                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-giftcard-nv-gf-wmfg-1024-t@2x.jpg" className="carte-regalo-img" alt="..." />
                <div className="card-img-overlay carte-regalo-testo d-flex flex-column justify-content-center">
                    <h2 className="titolo-bold">CARTE ABBONAMENTO REGALO</h2>
                    <div className="text-p">
                        <p>
                            Sblocca il PC gaming ad alte prestazioni su tutti i tuoi dispositivi con GeForce NOW. Gioca con
                            le attesissime nuove uscite, i giochi F2P più popolari e centinaia di giochi che già possiedi
                            con RTX ON.
                        </p>
                        <p>Attiva l'abbonamento o regala il potente PC gaming a una persona speciale.</p>
                    </div>
                    <Button buttonSize="BTN--large">
                        <Link id="ad-link-btn" to="#">
                            SCOPRI DI PIù
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    );
}

export default CarteRegalo;
