import { HiOutlineMail } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';
import {TiSocialInstagram} from 'react-icons/ti';
import {GrYoutube} from 'react-icons/gr';
import { ListFooterST } from '../BasicComponents/ListContainer';
import FooterForm from '../FooterForm';
import { Link } from 'react-router-dom';

export function STFooter() {
	return (
		<div>
			<hr className='text-light mb-4 resw'></hr>
		
		<footer className="bg-black ad-padding">

			<ListFooterST />

			<div className="ad-subscrib">
				<div className="ad-subscribe-content">
					<div>
						<HiOutlineMail size="70px" color="#76B900" />
					</div>
					<div className="span">
						<span>Iscriviti per ricevere le novità di GeForce NOW</span>
					</div>

					{/* bottone registrati */}
					<FooterForm /> 
				</div>

				<div className="ad-social">
                    <p style={{fontSize:'15px'}}>Segui NVIDA</p>

					<div className="ad-facebook">
						<Link to="https://www.facebook.com/NVIDIAGeforceNow" target="_blank">
							<TfiFacebook size="40px" color="#333" />
						</Link>
					</div>

					<div className="ad-twitter">
						<Link to="https://twitter.com/NvidiaGFN" target="_blank">
							<FaTwitter size="40px" color="#333" />
						</Link>
					</div>

                    <div>
						<Link to="#" target="_blank">
							<TiSocialInstagram size="40px" color="#333" />
						</Link>
					</div>

                    <div>
						<Link to="#" target="_blank">
							<GrYoutube size="40px" color="#333" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
		</div>
	);
}
