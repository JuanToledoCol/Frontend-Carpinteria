import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";
import CardsProducto from "../../components/CardsProducto";

class Baños extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavbarP />
                <div>
                    <div className="card-body bg-secondary" style={{ marginTop: "-24px" }}>
                        <h2 className="text-center">Personalizacion para tu baño</h2>
                        <CardsProducto nombreCategoria={"banos"} />
                    </div>
                </div>
                <Footer />
            </div>
        )

    }

}
export default Baños;