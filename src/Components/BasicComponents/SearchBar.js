import axios from 'axios';
import { useState } from 'react';

export function SearchBar() {
	const [fetch, setFetch] = useState([]);
	const [search, setSearch] = useState('');

	const getFetch = async () => {
		const response = await axios.get(
			`https://api.rawg.io/api/games?key=faf20c72c8ba41e1a0a31ddbca2e4de6&search=${search}`
		);
		setFetch([...response.data.results]);
	};
	const clearInput = () => {
		setFetch([]);
		setSearch("");
	};

	return (
		<div className='mb-5'>
			<div id="div-bar-games">
						
				<input
					type="search"
					name="search"
					id="search-bar-games"
					placeholder="Game Search"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>
				<button type="button" onClick={getFetch} class="btn submit_1 text-light " data-original-title="" title=""> Cerca </button> 
				{/* <input type="submit" class="btn" value="Search" onClick={getFetch}></input> */}
				{/* <div className="searchIcon">
				{
					fetch.length === 0 ? (
						<button style={{backgroundColor:'black'}}onClick={getFetch}>Cerca</button>
					) : (
						<button id="clearBtn" onClick={clearInput}>X</button>
					)
				}
				</div> */}


				{/* <div className="searchIcon" onClick={getFetch}>
					<svg
						id="lente1"
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="white"
						class="bi bi-search"
						viewBox="0 0 16 16"
					>
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg>
				</div> */}
			</div>
			{fetch.length != 0 && (
				<div className='dataResult'>
					{fetch.map((el) => (
						<div>
							<h1 className='dataItem'>{el.name}</h1>
						</div>
					))}
				</div>
			)}

		</div>
	);
}
