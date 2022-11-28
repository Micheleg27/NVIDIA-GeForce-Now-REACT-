export function ServerElement({name, status}) {
    return (
        <div className="server-element">
            <p className="p-server"><strong>{name}</strong></p>
            <p className="p-status">{status || 'Operational'}</p>
        </div>
    )
}