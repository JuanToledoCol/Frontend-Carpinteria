import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";
import CardsProducto from "../../components/CardsProducto";



class Salas extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavbarP />
                <div>
                    <div className="card-body bg-secondary" style={{ marginTop: "-24px" }}>
                        <h2 className="text-center">Para una sala más viva</h2>
                        <CardsProducto nombreCategoria={"salas"}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Salas;