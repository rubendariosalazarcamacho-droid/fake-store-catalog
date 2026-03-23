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
            <h1>lista de categorias</h1>
            <div>
                {categorias.map((categoria, index) => (
                    <Link key={index} to={`/categoria/${categoria}`}>
                        <div >
                            <p className="capitalize">{categoria}</p>
                        </div>
                        
                    </Link> 
                    )

                )}
            </div>
        </>
    )

}
export default ListaCategorias