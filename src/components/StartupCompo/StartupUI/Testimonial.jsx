import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MultipleItems() {
  const testimonials = [
    {
      id: 1,
      name: "David S.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png",
    },
    {
      id: 2,
      name: "Sarah M.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png",
    },
    {
      id: 3,
      name: "Michael R.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png",
    },
    {
      id: 4,
      name: "John D.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png",
    },
    {
      id: 5,
      name: "Emily T.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png",
    },
    {
      id: 6,
      name: "Chris P.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/Startup/testimonial.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Reference to the slider
  const sliderRef = React.useRef(null);

  // Custom Next Arrow function
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  // Custom Previous Arrow function
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-full bg-stone-50 py-16 px-4">
      <div className="md:w-[80%] mx-auto ">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Startup Partners
          </h2>
          <p className="text-xl text-gray-600">
            Hear from the founders and entrepreneurs we've helped launch and grow their startups.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2">
                <div className="bg-[#E9E7D9] rounded-md p-4 xl:p-8 h-full border-[#123F2880] border-l-8">
                  <div className="flex flex-col xl:flex-row items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Navigation Arrows - Bottom Left */}
          <div className="flex mt-8 gap-2">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleItems;