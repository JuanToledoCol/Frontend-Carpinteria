import { useEffect, useState } from 'react'
import axios from "axios";

import CardCategoria from "./CardCategoria";

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
        <div className="container">
            <div className="row">
                {
                    categoria && categoria.map((categoria) => (
                        <div className="col-md-4" key={categoria.idCategoria}>
                            <CardCategoria title={categoria.nombreCategoria} 
                            urlPagina={categoria.urlPagina} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}