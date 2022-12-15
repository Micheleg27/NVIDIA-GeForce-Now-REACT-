import axios from 'axios';
import { useState } from 'react';

export function SearchBar() {
	const [ fetch, setFetch ] = useState([]);
	const [ search, setSearch ] = useState('');

	const getFetch = async () => {
		const response = await axios.get(
			`https://api.rawg.io/api/games?key=faf20c72c8ba41e1a0a31ddbca2e4de6&search=${search}`
		);
		setFetch([ ...response.data.results ]);
	};

	return (
		<div id="div-bar-games">
			<input
				type="text"
				id="search-bar-games"
				placeholder="Game Search"
				value={search}
				onChange={(e) => setSearch(e.currentTarget.value)}
			/>

			<button onClick={getFetch}>Cerca</button>

			<div>
				{fetch.map((el) => (
					<div className='dataResult'>
						<h1 className='dataItem'>{el.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
}
