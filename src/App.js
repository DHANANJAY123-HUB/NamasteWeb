
import Mainbar from './Component/Mainbar';
import Header from './Component/Header';
import Slider from './Component/Slider';
import Freshfruit from './Component/Freshfruit';
import Dealsoftheday from './Component/Dealsoftheday';
import Fruits from './Component/Fruits&Vegetable';
import Banner from './Component/Banner';
import Newarrivals from './Component/Newarrivals';
import Gerocery from './Component/Gerocery';
import Featuredproducts from './Component/Featuredproducts';
import Milkegg from './Component/Milkegg';
import Downloadapp from './Component/Downloadapp';
import Security from './Component/Security';
import Footer from './Component/Footer';

import Sliderr from './Component/Slider';
import Audiojungle from './Component/Audiojungle';
import Slidere from './Component/Slider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Component/Shop';
import Contact_us from './Component/Contact_us';
import Checkout from './Component/Checkout';
import Myaccount from './Component/Myaccount';
import Blog from './Component/Blog';
import Login from './Component/Login';
import Single_products from './Component/Single_products';
import Card from './Component/Card';
import Offer from './Component/Offer';
import Order from './Component/Order';
import Demo from './Demo';
import Ab from './Component/Ab';
import Aboutus from './Component/Aboutus';
import FruitsandVagetables from './Component/FruitsandVagetables';
import Shops_category from './Component/Shops_category';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shopscategory' element={<Shops_category/>}></Route>
        <Route path='/shop_grid4' element={<Blog />}></Route>
        <Route path='/contect_us' element={<Contact_us />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/myaccount' element={<Myaccount />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/single_products' element={<Single_products />}></Route>
        <Route path='/card' element={<Card />}></Route>
        <Route path='/offer' element={<Offer />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/fruits_vagetables' element={<FruitsandVagetables />}></Route>

        <Route path='/ab' element={<Ab />}></Route>
      </Routes>
    </Router>
    // <div>
    //   <Mainbar/>
    //   <Header/>
    //   <Slidere/>
    //   <Freshfruit/>
    //   <Dealsoftheday/>
    //   <Fruits/>
    //   <Banner/>
    //   <Newarrivals/>
    //   <Gerocery/>
    //   <Featuredproducts/>
    //   <Audiojungle/>
    //   <Milkegg/>
    //   <Downloadapp/>
    //   <Security/>
    //   <Footer/>
    // </div>
  );
}

export default App;
