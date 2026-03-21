import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



function ProductPage() {
    const [productos, setProductos] = useState([])

    useEffect (()=>{
        async function traerProductos() {
            try{
                const {data} = await axios.get("https://fakestoreapi.com/products") //hago la petición a la API de la data productos
                setProductos(data)
            } catch (error){
                console.log("Se produjo un error al cargare los datos", error)
            }            
        }
        traerProductos()
    }, [])

    

    console.log(productos)


    return (
        <>

            <div className="grid grid-cols-2 p-2 gap-y-4">
                {
                    productos.map((producto) => (

                        <Link key={producto.id} to={`/detallesDelProducto/${producto.id}`}>
                        <div className=" bg-green-400 space-y-2">
                            <div className=" p-1 aspect-[3/4] bg-blue-400"><img className="w-full h-full object-contain bg-amber-400" src={producto.image} alt="" /></div>
                            <p className="truncate text-xs font-bold font-serif">{producto.title}</p>
                            <p className="font-serif font-bold">${producto.price}</p>
                            <p className="bg-blue-800 text-white w-[80%] mx-auto h-[30px] flex justify-center items-center rounded-2xl">Ver detalles</p>
                        </div>
                        </Link>                       

                    ))
                }
            </div>


        </>
    )
}
export default ProductPage