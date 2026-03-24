import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {
    const { id } = useParams()
    const [producto, setProducto] = useState() //producto guarda los datos del producto que tenbga el id === id (capturado con useParams)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        async function traerDatosProducto() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProducto(data)
                setCargando(false)
            } catch (error) {
                console.log("Error a cargar producto...", error)
            }

        }
        traerDatosProducto()
    }, [id])
    if (cargando) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium animate-pulse">Cargando producto...</p>
            </div>
        )
    }


    return (
        <>
            <h2 className="text-xl text-blue-700 font-medium mx-4 mt-3">{producto.title}</h2>
            <div className="p-6">
                <div className="aspect-[3/4] bg-blue-400"><img className="w-full h-full object-contain bg-gray-200" src={producto.image} alt="" /></div>
                <div className="flex justify-between">
                    <p className="text-xl text-blue-600 font-medium">${producto.price}</p>
                    <div className="flex gap-1 items-center">
                        <p className="text-xl font-medium">{producto.rating.rate}</p>
                        <img className="w-5 h-5" src="/images/star.svg" alt="star" />
                    </div>
                </div>
                <div>
                    <p className=" font-bold">Description:</p>
                    <p >{producto.description}</p>
                    <p className=" font-bold">Category:</p>
                    <p>{producto.category}</p>
                    <p className="bg-blue-700 w-[50%] text-white font-bold h-10 mt-2 flex justify-center items-center rounded-2xl">Agregar al carrito</p>
                </div>
            </div>


            {console.log(producto)}

        </>
    )
}
export default DetailsPage





