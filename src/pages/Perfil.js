import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"
import axios from "axios";

export default function Perfil() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await axios.get("http://localhost:5000/producto");
                setProductos(response.data.body);
            } catch (error) {
                console.error(error);
            }
        };
        getProductos();
    }, []);

    const onDelete = async (e) => {
        try {
            const id = e.target.parentElement.parentElement.firstChild.innerHTML;
            const response = await axios.delete(`http://localhost:5000/producto/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div >
            <Navbar />
            <div className="main container " style={{ marginTop: '80px' }}>
                <div className="row" >
                    <div className="col-md-12">
                        <div className="text-start">
                            <h1>Lista de productos</h1>
                            <div className="text-end">
                                <Link className="btn btn-warning btn-lg" to="/crearProducto"><i className="bi bi-plus-circle"></i></Link>
                            </div>
                        </div>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Precio</th>
                                    <th colSpan="2">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos && productos.map((producto) => (
                                        <tr key={producto.idProducto}>
                                            <th scope="row" id="idProducto">{producto.idProducto}</th>
                                            <td>{producto.idCategoria.nombreCategoria}</td>
                                            <td>{producto.nombreProducto}</td>
                                            <td>{producto.stock}</td>
                                            <td>{producto.descripcion}</td>
                                            <td>{producto.precio}</td>
                                            <td><Link className="btn btn-warning" to={`/editar/${producto.idProducto}`}>Editar</Link></td>
                                            <td><button className="btn btn-danger" onClick={onDelete}>Eliminar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

