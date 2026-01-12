import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import products from './data/products'
import ItemCount from './components/ItemCount'



function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a mi tienda" />
      <ItemCount />

    </>
  )
}

export default App
