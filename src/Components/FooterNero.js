import { ListFooter } from './BasicComponents/ListContainer';
import { HiOutlineMail } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';

export function FooterNero() {
	return (
		<footer className="pt-5 bg-black ad-padding">
			<hr id="hr" className="mb-4 text-light" />

			<ListFooter />

			<div className="ad-subscribe">
				<div className="ad-subscribe-content">
					<div>
						<HiOutlineMail size="70px" color="#76B900" />
					</div>
					<div className="span">
						<span>Iscriviti per ricevere le novità di GeForce NOW</span>
					</div>

					<div>
						<button className="ad-registrati">REGISTRATI</button>
					</div>

					{/* <div className="ad-window-form">
                        <div className="overlay"></div>
                        <div className="ad-wf-container">
                            <div className="ad-wf-content">
                                <a href="index.html" id="ad-box-close">x</a>
                                <h2>SCOPRI LE ULTIME NOVITÀ DI GEFORCE NOW</h2>
                                <p>Iscriviti per ricevere offerte, annunci e altro su giochi e intrattenimento da NVIDIA.</p>
                                <form className=" was-validated">
                                    <div className="form-floating ad-mail">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
                                            <label for="floatingInput">Email</label>
                                            <div className="invalid-feedback">
                                                l'indirizzo Email è obbligatorio.
                                            </div>
                                    </div>
                                    <div className="ad-a-btn">
                                        <a href="https://www.nvidia.com/it-it/about-nvidia/privacy-policy/" target="_blank">Informativa sulla
                                            privacy NVIDIA</a>
                                        <button type="submit">INVIA</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div> */}
				</div>

				<div className="ad-social">
					<div className="ad-facebook">
						<a href="https://www.facebook.com/NVIDIAGeforceNow" target="_blank">
							<TfiFacebook size="40px" color="#333" />
						</a>
					</div>

					<div className="ad-twitter">
						<a href="https://twitter.com/NvidiaGFN" target="_blank">
							<FaTwitter size="40px" color="#333" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
