const List = ({ Links, title }) => {
	return (
		<ul>
			<h4 className="text-light">{title}</h4>
			{Links.map((link) => (
				<li className="list-group-item" key={link.id}>
					<a href={link.link}>
                        {link.id}
                    </a>
				</li>
			))}
		</ul>
	);
};

export default List;
