import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ images }) => {
  const autoplayOptions = { delay: 4000 };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        ref={emblaRef}
        className="embla__viewport w-full h-full overflow-hidden"
      >
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] h-screen"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-5xl hover:scale-125 transition-transform duration-300 cursor-pointer"
      >
        &#10094;
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-5xl hover:scale-125 transition-transform duration-300 cursor-pointer"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;