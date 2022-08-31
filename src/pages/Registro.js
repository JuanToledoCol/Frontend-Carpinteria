import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom"
import axios from "axios";

export default function Registro() {

    const [usuarioN, setUsuarioN] = useState({
        nombreUsuario: "",
        apellidoUsuario: "",
        usuario: "",
        clave: "",
        idTipoDocumento: "1",
        numeroDocumento: "",
        correo: "",
        idRol: "2"
    })

    const { nombreUsuario, apellidoUsuario, usuario, clave, idTipoDocumento, numeroDocumento, correo } = usuarioN;

    const onChange = e => {
        setUsuarioN({
            ...usuarioN,
            [e.target.name]: e.target.value
        })
    }

    const [tipoDoc, setTipoDoc] = useState("")

    useEffect(() => {
        const getTipoDoc = async () => {
            try {
                const response = await axios.get("http://localhost:5000/tiposDocumentos");
                setTipoDoc(response.data.body);
            } catch (error) {
                console.error(error);
            }
        };
        getTipoDoc();
    }, []);

    const signUp = async () => {
        const data = {
            idRol: {
                idRol: usuarioN.idRol
            },
            idTipoDocumento: {
                idTipoDocumento: usuarioN.idTipoDocumento
            },
            nombreUsuario: usuarioN.nombreUsuario,
            apellidoUsuario: usuarioN.apellidoUsuario,
            correo: usuarioN.correo,
            usuario: usuarioN.usuario,
            clave: usuarioN.clave,
            numeroDocumento: usuarioN.numeroDocumento
        }

        const response = await axios.post("http://localhost:5000/signup", data);

        if (response.data.ok === true) {
            <div class="alert alert-success" role="alert">
                response.data.mensaje
            </div>
        } else {
            <div class="alert alert-danger" role="alert">
                response.data.mensaje
            </div>
        }


        setUsuarioN({
            nombreUsuario: "",
            apellidoUsuario: "",
            usuario: "",
            clave: "",
            idTipoDocumento: "1",
            numeroDocumento: "",
            correo: "",
            idRol: "2"
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        signUp();
    }

    return (
        <div>
            <Navbar />
            <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                <div className="w-75 bg-secondary p-4 rounded-3">
                    <form onSubmit={onSubmit} data-parsley-validate="true">
                        <h1 className="text text-center">Registro Usuario</h1>
                        <input className="form-control mb-3" type="text" id="nombreUsuario" name="nombreUsuario" tabIndex="1" placeholder="Nombre" autoFocus required value={nombreUsuario} onChange={onChange} />
                        <input className="form-control mb-3" type="text" id="apellidoUsuario" name="apellidoUsuario" tabIndex="2" placeholder="Apellido" required value={apellidoUsuario} onChange={onChange} />
                        <input className="form-control mb-3" type="usuario" id="usuario" name="usuario" tabIndex="3" placeholder="Usuario" required value={usuario} onChange={onChange} />
                        <input className="form-control mb-3" type="password" name="clave" id="clave" tabIndex="4" placeholder="Clave" required value={clave} onChange={onChange} />
                        <select className="form-select mb-3" id="idTipoDocumento" name="idTipoDocumento" tabIndex="5" required value={idTipoDocumento} style={{ cursor: "pointer" }} onChange={onChange}>
                            {
                                tipoDoc && tipoDoc.map((tipoDoc) => (
                                    <option key={tipoDoc.idTipoDocumento} value={tipoDoc.idTipoDocumento}>{tipoDoc.nombreTD}</option>
                                ))
                            }
                        </select>
                        <input className="form-control mb-3" type="number" id="numeroDocumento" name="numeroDocumento" tabIndex="6" placeholder="Numero de documento" required value={numeroDocumento} onChange={onChange} />
                        <input className="form-control mb-3" type="email" id="correo" name="correo" tabIndex="7" placeholder="Correo Electronico" required value={correo} onChange={onChange} />

                        <button type="submit" className="btn btn-warning w-100 mb-3" tabIndex="50">Registrarse</button>
                    </form>
                    <Link className="btn btn-dark w-100" to="/login" tabIndex="60">Volver</Link>
                </div>
            </div>
            <Footer />
        </div >
    );
}
