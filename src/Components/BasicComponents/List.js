import CardAbbonamento from "../CardAbbonamento";

const List = ({ Links, title }) => {
	
	return (
		<ul>
			<h4 className="text-light">{title}</h4>
			{Links.map((link) => (
				<li className="styletype" key={link.id}>
					<a href={link.link}>
					<img id='img-none' style={{width: '20px'}} src={link.img} /> {link.id}
					</a>
				</li>
			))}
		</ul>
	);
};

export default List;
