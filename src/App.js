import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import ShoppingCart from './components/shoppingCart';

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/card' element={<ShoppingCart/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
