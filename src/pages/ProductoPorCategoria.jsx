import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function ProductosPorCategoria() {

    const [productos, setProductos] = useState([])
    const { category } = useParams();

    useEffect(() => {
        async function traerProductos() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`) //hago la petición a la API de la data productos
                setProductos(data)
            } catch (error) {
                console.log("Se produjo un error al cargar los datos", error)
            }
        }
        traerProductos()
    }, [category])

    return (
        <>            
            <div>
                <h1>Category: {category}</h1>
                <div className="grid grid-cols-2 p-2 gap-y-6 gap-x-3 md:grid-cols-3 lg:grid-cols-4">
                {productos.map((producto) => (

                <Link key={producto.id} to={`/detallesDelProducto/${producto.id}`}>
                    <div className="space-y-0.5">
                        <div className=" p-1 aspect-[3/4] "><img className="w-full h-full object-contain bg-gray-200" src={producto.image} alt="" /></div>
                        <p className="truncate text-xs font-bold font-serif">{producto.title}</p>
                        <p className="font-serif font-bold">${producto.price}</p>
                        <p className="bg-blue-800 text-white w-[80%] mx-auto h-[30px] flex justify-center items-center rounded-2xl">Ver detalles</p>
                    </div>
                </Link>

            ))}
            </div>

            </div>
            
            
            

        </>
    )

}
export default ProductosPorCategoria