import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditarProductoC from '../components/EditarProductoC'

export default function EditarProducto(props) {

    const id = props.params.id;

    return (
        <div>
            <Navbar />
             <EditarProductoC idPr={id}/>
            <Footer />
        </div >
    )
}

