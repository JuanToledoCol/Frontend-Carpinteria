import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"

export default function Perfil() {

    const [usuarios, setUsuarios] = useState(null);

    useEffect(() => {
        getUsuarios = async () => {
            try {
                const response = await axios.get("http://localhost:5000/usuarios");
                setCategoria(response.data.body);
            } catch (error) {
                console.error(error);
            }
        }
    }, [])


    return (
        <div >
            <Navbar />
            <div className="main container " style={{ marginTop: '80px' }}>
                <div className="row" >
                    <div className="col-md-12">
                        <div className="text-start">
                            <h1>Lista de usuarios</h1>
                            <div className="text-end">
                                <Link className="btn btn-warning btn-lg" to="/registro"><i className="bi bi-plus-circle"></i></Link>
                            </div>
                        </div>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Correo Electronico</th>
                                    <th colSpan="2">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

