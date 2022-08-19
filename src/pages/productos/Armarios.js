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
                        <h2 className="text-center">Armario, cómodas y gavetas perfectas para tu hogar</h2>
                        <CardsProducto nombreCategoria={"armarios"} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}
export default Armarios;