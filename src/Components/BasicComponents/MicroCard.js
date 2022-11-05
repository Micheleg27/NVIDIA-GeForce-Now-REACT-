import { Button } from "./Button"


export function MicroCard({img, title, paragraph, description, link}) {

    return (
        <div className="AD-card-sologeforce">
            <img src={img} alt="" className="AD-cart"/>
            <h3 className="AD-h3">{title}</h3>
            <p className="AD-p-sologeforce">{paragraph}</p>
            <Button type="button" buttonSize="BTN--large" buttonStyle="btn--primary--green">
                <a href={link}>
                    <h3 className="AD-h3">{description}</h3>
                </a>
            </Button>
        </div>
    )
}

