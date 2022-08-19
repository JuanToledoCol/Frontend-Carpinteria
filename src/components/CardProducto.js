import { Link } from "react-router-dom";
import imagen1 from "../assets/img/productos/Baño 1.jpg";

function CardProducto(props) {
    return (
        <div className="container mb-4">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header text-center">
                    <h5 className="card-title text-uppercase fs-4">{props.producto}</h5>
                </div>
                <img src={imagen1} className="card-img-top" alt="..." />
                <div className="card-body">

                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">Precio: {props.precio}</p>
                    <p className="card-text">Disponibles: {props.cantidad}</p>
                </div>
                <div className="card-footer d-grid gap-2">
                    <Link to="" className="btn btn-warning">Comprar</Link>
                </div>
            </div>
        </div>
    );
}

export default CardProducto