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
      <HotAccesories/>

      {/* <Route exact path="/music"> */}
        <HotAccessoriesImage music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/>
      {/* </Route> */}
      {/* <Route exact path="/smartdevice"> */}
        <HotAccessoriesImage smartDevice={data.hotAccessories.smartDevice} smartDevicecover={data.hotAccessoriesCover.smartDevice}/>
      {/* </Route> */}
      {/* <Route exact path="/music">  */}
        {/* <HotAccessoriesImage music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/> */}
      {/* </Route> */}
      {/* <Route exact path="/music"> */}
        {/* <HotAccessoriesImage music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/> */}
       {/* </Route> */}
      
    </Router>
  );
}

export default App;

