import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function EditarProducto({ idPr }) {

    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [producto, setProducto] = useState({
        idProducto: "",
        idCategoria: "",
        nombreProducto: "",
        stock: "",
        precio: "",
        descripcion: "",
        fechaCreacionProducto: ""
    })

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


    const { idCategoria, nombreProducto, stock, precio, descripcion } = producto;

    const traerProducto = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/producto/${idPr}`);
            setProducto({
                idProducto: response.data.body.idProducto,
                idCategoria: response.data.body.idCategoria.idCategoria,
                nombreProducto: response.data.body.nombreProducto,
                stock: response.data.body.stock,
                precio: response.data.body.precio,
                descripcion: response.data.body.descripcion,
                fechaCreacionProducto: response.data.body.fechaCreacionProducto
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        traerProducto();
    }, [])

    const onChange = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();
        const data = {
            idProducto: producto.idProducto,
            idCategoria: {
                idCategoria: producto.idCategoria
            },
            nombreProducto: producto.nombreProducto,
            stock: producto.stock,
            precio: producto.precio,
            descripcion: producto.descripcion,
            fechaCreacionProducto: producto.fechaCreacionProducto
        }
        try {
            const response = await axios.put(`http://localhost:5000/producto`, data);
            console.log(response.data);
            navigate("/perfil");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                <div className="w-75 bg-secondary p-4 rounded-3">
                    <form onSubmit={onSubmit} data-parsley-validate="true">
                        <h1 className="text text-center">Editar Producto</h1>
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

                        <button type="submit" className="btn btn-warning w-100 mb-3" tabIndex="50">Actualizar</button>
                    </form>
                    <Link className="btn btn-dark w-100" to="/perfil" tabIndex="60">Volver</Link>
                </div>
            </div>
        </div>
    )
}
