import React from 'react'
import {Link} from 'react-router-dom'
import "../style/hotaccessories.css"

const HotAccessories = () => {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
      <Link className="HotAccessoriesLink" to="/smartDevice">Smart Device</Link>
      <Link className="HotAccessoriesLink" to="/home">Home</Link>
      <Link className="HotAccessoriesLink" to="/lifestyle">LifeStyle</Link>
      <Link className="HotAccessoriesLink" to="/mobileaccessories">Mobile Accessories</Link>
    
   </div>
  )
}

export default HotAccessories