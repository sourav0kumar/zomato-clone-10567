
import './App.css';
import { useEffect } from "react";
import{Routes,Route,Navigate} from "react-router-dom";

import Home from './pages/Home.page';
import Restaurant from './pages/Restaurant.page';
import GoogleAuth from './pages/GoogleAuth.page';
import Checkout from './pages/Checkout.page';
import Overview from './components/Restaurant/Overview';
import OrderOnline from './components/Restaurant/OrderOnline';
import Reviews from './components/Restaurant/Reviews';
import Menu from './components/Restaurant/Menu';
import Photos from './components/Restaurant/Photos';
import RestaurantLayout from './layouts/Restaurant.layout';

// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/reducers/user/user.action";
import { getCart } from "./redux/reducers/cart/cart.action";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
       dispatch(getCart());
  }, [localStorage]);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to ="/delivery"/>}/ >
        <Route path='/:type' element={<Home/>}/ >  
        <Route path='/google/:token' element={<GoogleAuth/>}/ >
        <Route path='/restaurant/:id' element={<RestaurantLayout><Restaurant/></RestaurantLayout> } >
            <Route path='overview' element={<Overview/>}/ >
            <Route path='order-online' element={<OrderOnline/>}/ >
            <Route path='reviews' element={<Reviews/>}/ >
            <Route path='menu' element={<Menu/>}/ >
            <Route path='photos' element={<Photos/>}/ >
            
        </Route>
        
        <Route path='/checkout/orders' element={<Checkout/>}/ >


      </Routes>
    </>
    )
  
}

export default App;
