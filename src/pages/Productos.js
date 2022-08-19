import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardsCategoria from "../components/CardsCategoria";

function Productos(){
  return (
    <div className="Productos">
      <Navbar />
      <div className="container-fluid w-100 bg-secondary pt-1"
        style={{ marginTop: "70px" }}>
        <h1 className="text-center text-dark mt-4">
          <strong>Productos de la Carpintería Isabella</strong>
        </h1>
        <CardsCategoria />
        <Footer />
      </div>
    </div>
  );
  }
  export default Productos;