import { ServerElement } from "../ServerStatusComponents/ServerElement";

export default function ListaServer({lista}) {
    return(
        <ul className="lista-server">
			{lista.map((item) => (
				<li className="li-server" key={item.id}>
					<ServerElement name={item.server} status={item.status || 'Operational'}/>
				</li>
			))}
		</ul>
	);

}
