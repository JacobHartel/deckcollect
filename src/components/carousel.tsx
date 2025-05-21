"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";

export function Carousel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
            perView: 3,       // ✅ Show all 3 cards
            spacing: 24,      // space between them
        },
    });

    return (
        <div className="w-full max-w-4xl mx-auto overflow-hidden h-[70vh]">
            <div ref={sliderRef} className="keen-slider rounded-lg shadow-lg h-full">
                <div className="keen-slider__slide number-slide1">
                    <img
                        src="/bronzeCardPack.png"
                        alt="Pack 1"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img
                        src="/silverCardPack.png"
                        alt="Pack 2"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img
                        src="/goldCardPack.png"
                        alt="Pack 3"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
