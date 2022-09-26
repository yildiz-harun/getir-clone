import React, { useState } from 'react'
import Slider from 'react-slick'
import ReactFlagsSelect from 'react-flags-select'
import getir from '../getir-logo.svg'

const SimpleSlider = () => {
  const [selected, setSelected] = useState('TR')

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }
  return (
    <div className="h-[500px] ">
      <div className="max-h-[500px] w-full absolute">
        <Slider {...settings}>
          <div className="h-[500px] getir1 "></div>
          <div className="h-[500px] getir2 "></div>
          <div className="h-[500px] getir3 "></div>
          <div className="h-[500px] getir4 "></div>
        </Slider>
      </div>
      <div className="flex justify-between px-36 items-center absolute w-full h-[500px] bg-gradient-to-r from-violet-800 opacity-90">
        <div className='flex flex-col'> 
          <div className="mb-8">
            <img src={getir} alt="" />
          </div>
          <div className="text-white text-4xl h-fit opacity-100 font-semibold">
            Dakikalar içinde <br /> kapınızda
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-lg bg-white h-[201px] w-[400px] ">
          <div className="mt-4 text-violet-800 text-lg font-medium">
            Giriş yap veya kayıt ol
          </div>
          <div className="flex justify-center w-full mt-1">
            <ReactFlagsSelect
              countries={['US', 'TR']}
              customLabels={{
                US: '+1',
                TR: '+90',
              }}
              placeholder="Select Language"
              selected={selected}
              onSelect={(code) =>
                setSelected(code)
              }
            />
            <input
              placeholder="Telefon Numarası"
              className="outline outline-1 outline-gray-400 h-[41px] mt-[1px] p-4 ml-2 rounded-sm w-[230px]"
              type="tel"
            />
          </div>
          <button className="rounded-lg h-[48px] w-[350px] bg-yellow-400 mb-4 text-violet-800">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  )
}
export default SimpleSlider
