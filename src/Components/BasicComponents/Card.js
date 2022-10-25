export function Card({img, title, date, description}) {
    return (
        <div className="MG-card-nuovi-giochi" id="MG-card-giochi1">
          <img className="MG-card-image" src={img}
            alt="img-pannel1" />
          <a className="MG-latest-news" href="https://blogs.nvidia.com/blog/2022/07/14/geforce-now-thursday-july-14/">{title}</a>
          <p className="MG-date-card">{date}</p>
          <h3 className="MG-description-card">{description}</h3>
          <a className="MG-info-card"
            href="https://blogs.nvidia.com/blog/2022/07/14/geforce-now-thursday-july-14/">Ulteriori informazioni </a>
        </div>
    )
}