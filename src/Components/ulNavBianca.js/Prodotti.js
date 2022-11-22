import useShow from '../BasicComponents/useShow';
import Hard from './Hard';
import Soft from './Soft';

export function Prodotti() {
	const { show, setShow } = useShow(false);

	return (
		<div style={{ cursor: 'pointer' }}>
			<a id="a" className="nav-link active" aria-current="page" onClick={() => setShow(!show)}>
				Prodotti
			</a>

			{show && (
				<div className='d-flex' style={{
					position: 'absolute',
					zIndex: '999999',
					backgroundColor: 'whiteSmoke',
					width: '100%',
					left: '0',
					paddingLeft:'270px'
				}}>
					<Hard />
					<Soft />
				</div>
			)}
		</div>
	);
}
