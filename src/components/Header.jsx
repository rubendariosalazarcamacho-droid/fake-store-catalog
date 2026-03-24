import { Link } from "react-router-dom"

function Header() {
    return (
        <>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col text-white h-[80px] gap-4">
            <h1 className="text-center text-2xl font-bold">Fake Store Products</h1>
            <nav className="flex justify-around font-bold hover:text-yellow-300 lg:text-2xl">
                <Link to={"/"}><p>Home</p>
                </Link>
                {/* <p>Categories</p> */}
            </nav>

        </div>           

        </>
    )
}
export default Header