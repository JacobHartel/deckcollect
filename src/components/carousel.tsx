'use client'
/* eslint-disable */
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 3,
      spacing: 24,
    },
  })

  return (
    <div className="w-full max-w-4xl mx-auto relative h-[70vh]">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider h-full rounded-lg">
        <div className="keen-slider__slide flex items-center justify-center">
          <img
            src="/bronzeCardPack.png"
            alt="Pack 1"
            className="w-[80%] h-[auto%] object-contain"
          />
        </div>
        <div className="keen-slider__slide flex items-center justify-center">
          <img
            src="/silverCardPack.png"
            alt="Pack 2"
            className="w-[89%] h-[auto%] object-contain"
          />
        </div>
        <div className="keen-slider__slide flex items-center justify-center">
          <img
            src="/goldCardPack.png"
            alt="Pack 3"
            className="w-[80%] h-[auto%] object-contain"
          />
        </div>
      </div>

      {/* Left Nav Button */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 bg-transparent p-2"
      >
        <img
          src="/leftLightning.png"
          alt="Prev"
          className="w-38 h-38 opacity-80 hover:brightness-75 transition duration-200"
        />
      </button>

      {/* Right Nav Button */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 bg-transparent p-2"
      >
        <img
          src="/rightLightning.png"
          alt="Next"
          className="w-38 h-38 opacity-80 hover:brightness-75 transition duration-200"
        />
      </button>
    </div>
  )
}

