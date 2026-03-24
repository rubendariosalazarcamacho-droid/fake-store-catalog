import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import Header from './components/Header'
import DetailsPage from './pages/DetailsPage'
import ListaCategorias from './components/ListaCategorias'
import ProductosPorCategoria from './pages/ProductoPorCategoria'




function App() {

  return (
    <>
    <div className='flex flex-col gap-2'>
      <Header/>
      <ListaCategorias/>
    </div>

      <Routes>
        <Route path="/" element={<ProductPage/>} />
         <Route path="/detallesDelProducto/:id" element={<DetailsPage/>} />
         <Route path="/categoria/:category" element={<ProductosPorCategoria/>}/>          

      </Routes>
    </>
  )
}

export default App
