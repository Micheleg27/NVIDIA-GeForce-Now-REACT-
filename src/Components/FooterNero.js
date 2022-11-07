import { ListFooter } from './BasicComponents/ListContainer';
import { HiOutlineMail } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';
import FooterForm from './FooterForm';

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
		</div>
	);
}
