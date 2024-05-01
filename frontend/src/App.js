import './App.css';
import AddProducts from './components/AddProducts/AddProducts';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Cart from './components/Cart/Cart';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import Navbar from './components/Navbar.js/Navbar';

import {Route,Routes,BrowserRouter} from 'react-router-dom'
function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/category' element={<Category/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/addproduct' element={<AddProducts/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>

       </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
