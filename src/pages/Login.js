import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function Login() {

    const navigate = useNavigate();

    const [usuarioN, setUsuario] = useState({
        usuario: "",
        clave: ""
    })

    const { usuario, clave } = usuarioN

    const onChange = e => {
        setUsuario({
            ...usuarioN,
            [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        const data = {
            usuario: usuarioN.usuario,
            clave: usuarioN.clave
        }

        const response = await axios.post("http://localhost:5000/login", data);

        try {
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
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

    }

    const onSubmit = e => {
        e.preventDefault();
        if(login()){
            setTimeout(() => {
                navigate("/Perfil");
            }, 1000);
        }else{
            navigate("/Login")
            alert("Error al iniciar sesion");
        }
    }


    return (
        <div>
            <Navbar />
            <div className=" d-flex justify-content-center align-content-center" style={{ margin: '150px 0 180px 0' }}>
                <div className="w-75 bg-secondary p-4 rounded-3">
                    <form onSubmit={onSubmit} data-parsley-validate="true">
                        <h1 className="text text-center">Iniciar sesion</h1>
                        <input className="form-control mb-3" type="text" id="usuario" name="usuario" placeholder="Usuario" value={usuario} onChange={onChange} required autoFocus />

                        <input className="form-control mb-3" type="password" name="clave" id="clave" value={clave} onChange={onChange} placeholder="Contraseña" required />
                        <button type="submit" className="btn btn-warning w-100 mb-3">Ingresar</button>
                        <p className="text">¿No tiene usuario? registrese <Link className="text-warning" to="/registro">Aquí</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}


