import { Link } from "react-router-dom";

const List = ({ Links, title }) => {
	
	return (
		<ul>
			<h4 className="text-light">{title}</h4>
			{Links.map((link) => (
				<li className="styletype" key={link.id}>
					<Link to={link.link}>
					<img id='img-none' style={{width: '20px'}} src={link.img} alt='immagine'/> {link.id}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default List;
