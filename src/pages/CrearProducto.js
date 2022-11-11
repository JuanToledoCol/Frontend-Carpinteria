import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function CrearProducto() {

    const fecha = new Date();
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [producto, setProducto] = useState({
        idCategoria: "1",
        nombreProducto: "",
        stock: "",
        precio: "",
        descripcion: "",
        precio: ""
    })

    const { idCategoria, nombreProducto, stock, precio, descripcion } = producto;

    const onChange = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    function formatoFecha(fecha, formato) {
        if (fecha.getDate() < 10) {
            const map = {
                dd: "0" + fecha.getDate(),
                mm: fecha.getMonth() + 1,
                yyyy: fecha.getFullYear()
            }
            return formato.replace(/yyyy|mm|dd/gi, matched => map[matched])
        } else {
            const map = {
                dd: fecha.getDate(),
                mm: fecha.getMonth() + 1,
                yyyy: fecha.getFullYear()
            }
            return formato.replace(/yyyy|mm|dd/gi, matched => map[matched])

        }
    }
    
    const crearProducto = async () => {
        const data = {
            idCategoria: {
                idCategoria: producto.idCategoria
            },
            nombreProducto: producto.nombreProducto,
            stock: producto.stock,
            precio: producto.precio,
            descripcion: producto.descripcion,
            fechaCreacionProducto: formatoFecha(fecha, "yyyy-mm-dd")
        }

        try {
            const response = await axios.post("http://localhost:5000/producto", data);
            console.log(response.data);
            navigate("/perfil");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getCategorias = async () => {
            try {
                const response = await axios.get("http://localhost:5000/categoria");
                setCategorias(response.data.body);
            } catch (error) {
                console.error(error);
            }
        };
        getCategorias();
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        crearProducto();
    }


    return (
        <div>
            <Navbar />
            <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                <div className="w-75 bg-secondary p-4 rounded-3">
                    <form onSubmit={onSubmit} data-parsley-validate="true">
                        <h1 className="text text-center">Crear Producto</h1>
                        <select className="form-select mb-3" id="idCategoria" name="idCategoria" tabIndex="5" required value={idCategoria} style={{ cursor: "pointer" }} onChange={onChange}>
                            {
                                categorias && categorias.map((categoria) => (
                                    <option key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.nombreCategoria}</option>
                                ))
                            }
                        </select>
                        <input className="form-control mb-3" type="text" id="nombreProducto" name="nombreProducto" tabIndex="1" placeholder="Nombre Producto" autoFocus required value={nombreProducto} onChange={onChange} />
                        <input className="form-control mb-3" type="number" id="stock" name="stock" tabIndex="2" placeholder="Stock" required value={stock} onChange={onChange} />
                        <input className="form-control mb-3" type="text" id="descripcion" name="descripcion" tabIndex="3" placeholder="Descripcion" required value={descripcion} onChange={onChange} />
                        <input className="form-control mb-3" type="number" name="precio" id="precio" tabIndex="4" placeholder="Precio" required value={precio} onChange={onChange} />

                        <button type="submit" className="btn btn-warning w-100 mb-3" tabIndex="50">Crear</button>
                    </form>
                    <Link className="btn btn-dark w-100" to="/perfil" tabIndex="60">Volver</Link>
                </div>
            </div>
            <Footer />
        </div >
    )
}

