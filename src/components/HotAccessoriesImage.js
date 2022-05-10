import React from 'react'
import HotItemCard from './HotItemCard.js'
import '../style/hotaccimage.css'
const HotAccessoriesImage = ({music,musiccover,smartDevice,smartDevicecover}) => {
  return (
    <div className='Hotaccessoriesimage'>
        <div>
            <img src={musiccover || smartDevicecover} alt="Cover" />
        </div>

        {/* 2nd........ */}
        <div>
            {music && music.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
            {smartDevice && smartDevice.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default HotAccessoriesImage