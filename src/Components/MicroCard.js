export function MicroCard(number, children, img) {

    return (
        <div className="rpFirstLogoGetIn">
            <img src={img} alt="" />
            <p className="rpNumbersGetIn">{number}</p>
            <p className="rpDescriptionGetIn">{children}</p>
        </div>
    )
}

