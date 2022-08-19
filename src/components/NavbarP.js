import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CardsCategoria() {
    const [categoria, setCategoria] = useState(null);

    useEffect(() => {
        const getCategorias = async () => {
            try {
                const response = await axios.get("http://localhost:5000/categoria");
                setCategoria(response.data.body);
            } catch (error) {
                console.error(error);
            }
        };
        getCategorias();
    }, []);

    return (
        <nav >
            <div className="container-fluid w-100 mb-4 bg-secondary pt-1" style={{ margin: '70px 0 0 0' }}>
                <h1 className="text-center text-dark ">Bienvenido al catalogo de nuestros productos</h1><br />
                <div className="card text-center bg-secondary ">
                    <div className="card-header ">
                        <ul className="nav nav-tabs card-header-tabs ">
                            {
                                categoria && categoria.map((categoria) => (
                                    <li className="nav-item " key={categoria.idCategoria}>
                                        <Link className="nav-link text-warning text-uppercase" aria-current="true" to={categoria.urlPagina}>
                                            {categoria.nombreCategoria}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
