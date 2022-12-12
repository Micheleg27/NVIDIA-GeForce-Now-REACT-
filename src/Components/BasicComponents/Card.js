import { Link } from "react-router-dom";

export function Card({img, title, date, description}) {
    return (
        <div className="MG-card-nuovi-giochi" id="MG-card-giochi1">
          <img className="MG-card-image" src={img}
            alt="img-pannel1" />
          <Link className="MG-latest-news" to="https://blogs.nvidia.com/blog/2022/07/14/geforce-now-thursday-july-14/">{title}</Link>
          <p className="MG-date-card">{date}</p>
          <h3 className="MG-description-card">{description}</h3>
          <Link className="MG-info-card"
            to="https://blogs.nvidia.com/blog/2022/07/14/geforce-now-thursday-july-14/">Ulteriori informazioni </Link>
        </div>
    )
}