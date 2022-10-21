

const List = ({links, title}) => {
    return (<ul>
        <h3>{title}</h3>
        {links.map((link) => (<li key={link.id}><a href={link.link} >link.id</a></li>))}
    </ul>)
}

export default List