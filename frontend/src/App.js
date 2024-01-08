import './App.css';
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
       </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
