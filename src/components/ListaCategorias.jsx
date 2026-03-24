import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ListaCategorias() {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        async function traerCategorias() {
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products/categories") //hago la petición a la API de las categorias
                setCategorias(data)
            } catch (error) {
                console.log("Se produjo un error al cargar los datos", error)
            }
        }
        traerCategorias()
    }, [])


    return (
        <>
            <div className="grid grid-cols-2 px-6 gap-x-4 gap-y-1 md:grid-cols-4">
                {categorias.map((categoria, index) => (
                    <Link key={index} to={`/categoria/${categoria}`}>
                        <div className="border-2 rounded-2xl border-gray-400 bg-blue-500 text-white hover:bg-blue-700 hover:cursor-pointer">
                            <p className="capitalize text-xs font-bold text-center lg:text-2xl">{categoria}</p>
                        </div>
                        
                    </Link> 
                    )

                )}
            </div>
        </>
    )

}
export default ListaCategorias