import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {
    const { id } = useParams()
    const [producto, setProducto] = useState() //producto guarda los datos del producto que tenbga el id === id (capturado con useParams)

    useEffect(() => {
        async function traerDatosProducto() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProducto(data)
            } catch (error) {
                console.log("Error a cargar producto...", error)
            }

        }
        traerDatosProducto()
    },[id])

    if(!producto){
        return(<p>Cargando detalles del producto...</p>)
    }


    return (
        <>
            <h2>Pagina detalle producto</h2>
            <div>
                <div className=" bg-blue-400"><img className="w-full h-full object-contain bg-amber-400" src={producto.image} alt="" /></div>
                <div>
                    <p>${producto.price}</p>
                    <p>{producto.rating.rate}</p>
                </div>
            </div>
            
            <div>
                <p>{producto.title}</p>                
                <p>{producto.description}</p>
                <p>${producto.category}</p>
                <p>Agregar al carrito</p>
            </div>
            {console.log(producto)}

        </>
    )
}
export default DetailsPage





