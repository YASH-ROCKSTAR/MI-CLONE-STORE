import './App.css';
import React from 'react';
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Slider from './components/Slider'
import data from './data/data.json'
import Offers from './components/Offers.js';
import Heading from './components/Heading.js'
import Starproduct from './components/StarProduct.js'
import HotAccesories from './components/HotAccessories.js'
import HotAccessoriesImage from './components/HotAccessoriesImage.js'
import ProductReview from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
function App() {

  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCT"/>
      <Starproduct starproduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccesories productReview={data.productReviews}/>

      {/* <Route exact path="/music"> */}
        <HotAccessoriesImage music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/>
      {/* </Route> */}
      {/* <Route exact path="/smartdevice"> */}
        <HotAccessoriesImage smartDevice={data.hotAccessories.smartDevice} smartDevicecover={data.hotAccessoriesCover.smartDevice}/>
      {/* </Route> */}
      {/* <Route exact path="/home">  */}
        <HotAccessoriesImage home={data.hotAccessories.home} homecover={data.hotAccessoriesCover.home}/>
      {/* </Route> */}
      {/* <Route exact path="/lifestyle"> */}
        <HotAccessoriesImage lifestyle={data.hotAccessories.lifeStyle} lifestylecover={data.hotAccessoriesCover.lifeStyle}/>
       {/* </Route> */}
      {/* <Route exact path="/mobileaccessories"> */}
        <HotAccessoriesImage mobileaccessories={data.hotAccessories.mobileAccessories} mobileaccessoriescover={data.hotAccessoriesCover.mobileAccessories}/>
       {/* </Route> */}
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReview productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;

