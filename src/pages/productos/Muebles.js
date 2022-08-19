import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavbarP from "../../components/NavbarP";
import CardsProducto from "../../components/CardsProducto";


function Muebles() {
    return (
        <div>
            <Navbar />
            <NavbarP />
            <div className="">
                <div className="card-body bg-secondary" style={{ marginTop: "-24px" }}>
                    <h2 className="text-center">Repisas, butacas y más</h2>
                    <CardsProducto nombreCategoria={"muebles"}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Muebles;
