import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";
import CardsProducto from "../../components/CardsProducto";

class Armarios extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavbarP />
                <div>
                    <div className="card-body bg-secondary" style={{ marginTop: "-24px" }}>
                        <h2 className="text-center">Escritorios y accesorios para mas comodidad</h2>
                        <CardsProducto nombreCategoria={"escritorios"}/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}
export default Armarios;