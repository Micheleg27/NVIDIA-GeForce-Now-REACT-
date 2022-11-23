export default function ListaServer({lista}) {
    return(
        <ul>
			{lista.map((item) => (
				<li className="li-server" key={item.id}>
					<p className="p-server"><strong>{item.server}</strong></p>
                    <p className="p-status">{item.status}</p>
				</li>
			))}
		</ul>
	);
    
}