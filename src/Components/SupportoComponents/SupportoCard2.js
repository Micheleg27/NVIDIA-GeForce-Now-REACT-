import { Link } from "react-router-dom";

export function SupportoCard2({ img, title, paragraph, link }) {
  return (
    <div className="supporto-container">
      <Link to={link}>
        <img src={img} alt="" className="supporto-img" />
        <h3 className="supporto-title">{title}</h3>
      </Link>
      <div className='div-supporto-paragraph'>
        <p className="supporto-paragraph2">{paragraph}</p>
      </div>
    </div>
  );
}
