import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";
import CardsProducto from "../../components/CardsProducto";

class Comedores extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <NavbarP />
                <div className="">
                    <div className="card-body bg-secondary" style={{ marginTop: "-24px" }}>
                        <h2 className="text-center">Comedores, para compartir en familia</h2>
                        <CardsProducto nombreCategoria={"comedores"}/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Comedores;