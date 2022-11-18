import { HiOutlineMail } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';
import {TiSocialInstagram} from 'react-icons/ti';
import {GrYoutube} from 'react-icons/gr';
import { ListFooter_S_T } from '../BasicComponents/ListContainer';
import FooterForm from '../FooterForm';

export function S_T_Footer() {
	return (
		<div>
			<hr className='text-light mb-4 resw'></hr>
		
		<footer className="bg-black ad-padding">

			<ListFooter_S_T />

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
						<a href="https://www.facebook.com/NVIDIAGeforceNow" target="_blank">
							<TfiFacebook size="40px" color="#333" />
						</a>
					</div>

					<div className="ad-twitter">
						<a href="https://twitter.com/NvidiaGFN" target="_blank">
							<FaTwitter size="40px" color="#333" />
						</a>
					</div>

                    <div>
						<a href="#" target="_blank">
							<TiSocialInstagram size="40px" color="#333" />
						</a>
					</div>

                    <div>
						<a href="#" target="_blank">
							<GrYoutube size="40px" color="#333" />
						</a>
					</div>
				</div>
			</div>
		</footer>
		</div>
	);
}
