import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Products/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
