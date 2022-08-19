import { Link } from 'react-router-dom';
import imagen1 from "../assets/img/img_cards_productos/Sofa.png";

function CardCategoria(props) {
    return (
        <div className="container text-center">
        <div className="card m-4 p-4 border border-5 rounded-3 border-warning bg-white" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title text-center text-uppercase fs-3">{props.title}</h5>
            </div>
            <img src={imagen1} className="card-img" alt="..." />
            <Link to={props.urlPagina} className="btn btn-outline-secondary">Ver más</Link>
        </div>
        </div>
    )
}

export default CardCategoria