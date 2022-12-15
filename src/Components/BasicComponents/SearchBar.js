import axios from 'axios';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export function SearchBar() {
	const [ fetch, setFetch ] = useState([]);
	const [ search, setSearch ] = useState('');

	const getFetch = async () => {
		const response = await axios.get(
			`https://api.rawg.io/api/games?key=faf20c72c8ba41e1a0a31ddbca2e4de6&search=${search}`
		);
		setFetch([ ...response.data.results ]);
	};
	const clearInput = () => {
		setFetch([]);
		setSearch('');
	};

	return (
		<div className="mb-5">
			<div id="div-bar-games" style={{ position: 'relative' }}>
				<input
					type="search"
					name="search"
					id="search-bar-games"
					placeholder="Game Search"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>

				<div className="searchIcon">
					{fetch.length === 0 ? (
						<button style={{backgroundColor:'transparent', border:'none'}} onClick={getFetch}>
							<HiOutlineSearch color="grey" />
						</button>
					) : (
						<button style={{backgroundColor:'transparent', border:'none'}} onClick={clearInput}>
							<IoClose color="grey" />
						</button>
					)}
				</div>
			</div>

			{fetch.length !== 0 && (
				<div className="dataResult">
					{fetch.map((el) => (
						<div className='d-flex flex-row-reverse'>
							<h1 className="dataItem">{el.name}</h1>
              <img src={el.background_image} style={{width:'80px', height:'60px', padding:'5px'}}/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
