import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from './components/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenidos a mi tienda" />}
          />
          <Route 
            path="/category/:categoryId" 
            element={<ItemListContainer saludo="Productos por categoría" />} 
          />
          <Route 
            path="/producto/:productId" 
            element={<ItemDetailContainer />} 
          /> 
          <Route 
            path="/cart" 
            element={<CartContainer />} 
          />
          <Route 
            path="*" 
            element={
              <div>
                <h2>404 - Not Found</h2>
                <Link to="/">Volver al inicio</Link>
              </div>
            } 
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;