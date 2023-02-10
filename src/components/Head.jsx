import React, {useState, useEffect} from 'react';
import image1 from '../images/image-web-3-desktop.jpg';
import './Head.css';
import image2 from '../images/image-retro-pcs.jpg';
import image3 from '../images/image-top-laptops.jpg';
import image4 from '../images/image-gaming-growth.jpg';
import image5 from '../images/image-web-3-mobile.jpg';

function Head() {
  const [img, setImg] = useState(image1)

  useEffect(() => {
    window.addEventListener('load', handleImg)
  }, [])

  const handleImg = () => {
    const w = window.innerWidth;
    if (w <= 600) {
      setImg(image5)
    } else {
      setImg(image1)
    }
  }

  return (
    <>
        <div className='head-container'>
            <img className='item1' src={img}></img>
            <div className='item2'>The Bright Future of Web 3.0?</div>

            <div className='item3'>
              <div className='item3-1'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</div> 
              <div className='item3-2'>Read more</div>
            </div>

            <div className='item4'>
              <div className='item4-1'>New</div>
              <div className='item4-2'>
                <div className='item4-2-1'>Hydrogen VS Electric Cars</div>
                <div className='item4-2-2'>Will hydrogen-fueled cars ever catch up to EVs?</div>
              </div>
              <div className='line'></div>
              <div className='item4-2'>
                <div className='item4-2-1'>The Downsides of AI Artistry</div>
                <div className='item4-2-2'>What are the possible adverse effects of on-demand AI image generation?</div>
              </div>
              <div className='line'></div>
              <div className='item4-2'>
                <div className='item4-2-1'>Is VC Funding Drying Up?</div>
                <div className='item4-2-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
              </div>
            </div>

            <div className='item5 item5-same'>
              <img className='item5-same1' src={image2}></img>
              <div className='item5-same2'>01</div>
              <div className='item5-same3'>Reviving Retro PCs</div>
              <div className='item5-same4'>What happens when old PCs are given modern upgrades?</div>

            </div>
              
            <div className='item6'>
              <img className='item5-same1' src={image3}></img>
              <div className='item5-same2'>02</div>
              <div className='item5-same3'>Top 10 Laptops of 2022</div>
              <div className='item5-same4'>Our best picks for various needs and budgets.</div>
            </div>

            <div className='item7'>
              <img className='item5-same1' src={image4}></img>
              <div className='item5-same2'>03</div>
              <div className='item5-same3'>The Growth of Gaming</div>
              <div className='item5-same4'>How the pandemic has sparked fresh opportunities.</div>
            </div>
        </div>
    </>
    
  )
}

export default Head