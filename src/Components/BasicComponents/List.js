const List = ({ Links, title }) => {
	return (
		<ul>
			<h4 className="text-light">{title}</h4>
			<hr id="hr" className="mb-4 text-white"></hr>
			{Links.map((link) => (
				<li className="list-group-item p-1" key={link.id}>
					<a href={link.link}>
                        {link.id}
                    </a>
				</li>
			))}
		</ul>
	);
};

export default List;