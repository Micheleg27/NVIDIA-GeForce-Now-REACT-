import { Link } from "react-router-dom"
import { Button } from "./Button"


export function MicroCard({img, title, paragraph, description, link}) {

    return (
        <div className="AD-card-sologeforce">
            <img src={img} alt="" className="AD-cart"/>
            <h3 className="AD-h3">{title}</h3>
            <p className="AD-p-sologeforce">{paragraph}</p>
            <Button type="button" buttonSize="BTN--large" buttonStyle="btn--primary--green">
                <Link to={link}>
                    <h3 className="AD-h4">{description}</h3>
                </Link>
            </Button>
        </div>
    )
}

