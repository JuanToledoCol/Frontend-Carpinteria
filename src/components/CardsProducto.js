import { useEffect, useState } from 'react'
import axios from "axios";
import CardProducto from './CardProducto';

export default function CardsProduco(props) {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const getProducto = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/productoc/${props.nombreCategoria}`);
                setProducto(response.data.body);
            } catch (error) {
                console.error(error);
            }
        };
        getProducto();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {
                    producto && producto.map((producto) => (
                        <div className='col-md-4' key={producto.idProducto}>
                            <CardProducto producto={producto.nombreProducto}
                                descripcion={producto.descripcion}
                                precio={producto.precio}
                                cantidad={producto.stock}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
