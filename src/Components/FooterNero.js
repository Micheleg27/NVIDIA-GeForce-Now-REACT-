import { ListFooter } from './BasicComponents/ListContainer';
import { HiOutlineMail } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';
import FooterForm from './FooterForm';
import { Link } from 'react-router-dom';

export function FooterNero() {
	return (
		<div>
			<hr className='text-light mb-4 resw'></hr>
		
		<footer className="bg-black ad-padding">

			<ListFooter />

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
					<div className="ad-facebook">
						<Link to="https://www.facebook.com/NVIDIAGeforceNow">
							<TfiFacebook size="40px" color="#333" />
						</Link>
					</div>

					<div className="ad-twitter">
						<Link to="https://twitter.com/NvidiaGFN">
							<FaTwitter size="40px" color="#333" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
		</div>
	);
}
