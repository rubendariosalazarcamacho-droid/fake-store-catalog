import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import Header from './components/Header'
import DetailsPage from './pages/DetailsPage'




function App() {

  return (
    <>
    <Header/>

      <Routes>
        <Route path="/" element={<ProductPage/>} />
         <Route path="/detallesDelProducto/:id" element={<DetailsPage/>} />        

      </Routes>
    </>
  )
}

export default App
