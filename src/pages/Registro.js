import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function Registro() {

    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

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

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [usuarioN.nombreUsuario, usuarioN.apellidoUsuario, usuarioN.usuario, usuarioN.clave, usuarioN.idTipoDocumento, usuarioN.numeroDocumento, usuarioN.correo, usuarioN.idRol]);

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

        try {
            const response = await axios.post("http://localhost:5000/signup", data);

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
            setSuccess(true);
        } catch (error) {
            if (!error.response) {
                setErrMsg("Servidor no responde");
            } else if (error.response.status === 401) {
                setErrMsg("Unauthorized");
            } else if (error.response.status === 500) {
                setErrMsg("Error en el servidor");
            } else if (error.response.status === 400) {
                setErrMsg(error.response.data.mensaje);
            } else {
                setErrMsg("Error desconocido");
            }
            errRef.current.focus();
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        signUp();
    }

    return (
        <>
            {success ? (
                navigate("/Login")
            ) : (
                <div>
                    <Navbar />
                    <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                        <div className="w-75 bg-secondary p-4 rounded-3">
                            <section style={{backgroundColor: '#c00'}}>
                                <p ref={errRef} className={errMsg ? "errmsd" : "offscreen"} aria-live="assertive">
                                    {errMsg}
                                </p>
                            </section>
                            <form onSubmit={onSubmit} data-parsley-validate="true">
                                <h1 className="text text-center">Registro Usuario</h1>
                                <input className="form-control mb-3" type="text" id="nombreUsuario" name="nombreUsuario" tabIndex="1" placeholder="Nombre" autoFocus required value={nombreUsuario} onChange={onChange} />
                                <input className="form-control mb-3" type="text" id="apellidoUsuario" name="apellidoUsuario" tabIndex="2" placeholder="Apellido" required value={apellidoUsuario} onChange={onChange} />
                                <input className="form-control mb-3" type="usuario" id="usuario" name="usuario" tabIndex="3" placeholder="Usuario" required value={usuario} onChange={onChange} ref={userRef} />
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
            )}
        </>
    );
}
