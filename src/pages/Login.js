import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import jwtDecode from "jwt-decode";

import AuthContext from "../context/AuthProvider";

export default function Login() {

    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();


    const [usuarioN, setUsuario] = useState({
        usuario: "",
        clave: ""
    })

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [usuarioN.usuario, usuarioN.clave]);

    const onChange = e => {
        setUsuario({
            ...usuarioN,
            [e.target.name]: e.target.value
        })
    }

    const { usuario, clave } = usuarioN

    const login = async () => {
        const data = {
            usuario: usuarioN.usuario,
            clave: usuarioN.clave
        }

        try {

            const response = await axios.post("http://localhost:5000/login", data);
            
            const jwt = response.data.body.token;
            const idUsuario = response.data.body.usuario.idUsuario;
            const nombreUsuario = response.data.body.usuario.nombreUsuario;
            const apellidoUsuario = response.data.body.usuario.apellidoUsuario;
            const correo = response.data.body.usuario.correo;
            const rol = response.data.body.usuario.idRol.nombreRol;
            const nombreTD = response.data.body.usuario.idTipoDocumento.nombreTD;
            const numeroDocumento = response.data.body.usuario.numeroDocumento;
            const nombreCompleto = `${nombreUsuario} ${apellidoUsuario}`;

            jwtDecode(jwt);
            localStorage.setItem('token', jwt);
            localStorage.setItem('nomUsu', nombreCompleto);
            localStorage.setItem('idUsu', idUsuario);
            localStorage.setItem('rol', rol);
            localStorage.setItem('correo', correo);
            localStorage.setItem('nomTD', nombreTD);
            localStorage.setItem('numDoc', numeroDocumento)

            setAuth({
                token: jwt,
                idUsuario: idUsuario,
                nombreUsuario: nombreCompleto,
                rol: rol,
                correo: correo,
                nombreTD: nombreTD,
                numeroDocumento: numeroDocumento
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
                setErrMsg("Usuario o contraseña incorrectos");
            } else {
                setErrMsg("Error desconocido");
            }
            errRef.current.focus();

        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        login();
    }


    return (
        <>
            {success ? (
                navigate("/Perfil")
            ) : (
                <div>
                    <Navbar />
                    <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                        <div className="w-75 bg-secondary p-4 rounded-3">
                            <section >

                                <p ref={errRef} className={errMsg ? "errmsd" : "offscreen"} aria-live="assertive">
                                    {errMsg}
                                </p>
                            </section>
                            <form onSubmit={onSubmit} data-parsley-validate="true">
                                <h1 className="text text-center">Iniciar sesion</h1>

                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="Usuario"
                                    value={usuario}
                                    onChange={onChange}
                                    ref={userRef}
                                    required autoFocus
                                />
                                <input
                                    className="form-control mb-3"
                                    type="password"
                                    name="clave"
                                    id="clave"
                                    value={clave}
                                    onChange={onChange}
                                    placeholder="Contraseña"
                                    required
                                />
                                <button type="submit" className="btn btn-warning w-100 mb-3">Ingresar</button>
                                <p className="text">¿No tiene usuario? registrese <Link className="text-warning" to="/registro">Aquí</Link></p>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
}


