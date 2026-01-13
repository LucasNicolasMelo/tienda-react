import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import products from './data/products'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



function App() {

  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route
      path="/"
      element= {<ItemListContainer saludo="Bienvenidos a mi tienda" />}
      />
      <Route path="/category/:categoryId" element={<ItemListContainer saludo="Productos por categoría" />} />
      <Route path="/producto/:productId" element={<ItemDetailContainer />} /> 

      <Route path="*" element={ <div>
        <h2>404 - Not Found</h2>
        <Link to="/">Volver al inicio</Link>
        </div>
        } />



    </Routes>
    </BrowserRouter>
      

  )
}

export default App
