import logo from './assets/logo.png';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Slider from './Components/Layout/Slider';
import Users from './Components/Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Mobiles from './Components/Mobiles';
import Product from './Components/Products/Product';
import Cart from './Components/Cart/Cart';
import Parent from './Components/UseContext';
import UseReducer from './Components/UseReducer';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <Routes>
        <Route path='/' element={<Users headingText="User List"/>} />
        <Route path='users' element={<Users headingText="User List"/>} />
        <Route path='about' element={<About />}/>
        <Route path='mobiles' element={<Mobiles />}/>
        <Route path='product-details' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path="use-context-example" element={<Parent />}/>
        <Route path="use-reducer-example" element={<UseReducer />}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
