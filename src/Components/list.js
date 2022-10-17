import { useEffect, useState } from 'react';

// let lists = ['prova', 2, 2]

function List() {
	const [ list, setList ] = useState([]);

	useEffect(() => {
		setList(list);
	},[list]);

	return <ul>{list.map((items, index) => <li key={index + items}>{items}</li>)}</ul>;
}

export default List;
