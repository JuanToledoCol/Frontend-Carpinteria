import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";
import CardsProducto from "../../components/CardsProducto";

class Cocinas extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <NavbarP/>
                <div>
                    <div className="card-body bg-secondary" style={{ marginTop: "-24px" }}>
                        <h2 className="text-center">Cocinas con tu estilo y nuestra calidad</h2>
                        <CardsProducto nombreCategoria={"cocinas"} />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Cocinas;