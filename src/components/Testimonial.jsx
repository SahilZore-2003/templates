import * as React from "react";

import { FaQuoteLeft } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonial() {
  const testimonials = [
    {
      quote: "Transformative Learning Experience!",
      description:
        "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
      name: "Jessica W.",
    },
    {
      quote: "Empowerment in Every Course!",
      description:
        "LMS empowers educators to create and sell courses effortlessly. A game-changer!",
      name: "Michael S.",
    },
    {
      quote: "Unlocking Education's Potential!",
      description:
        "LMS provides the key to unlocking new heights in online education. Exceptional!",
      name: "Emily K.",
    },
    {
      quote: "Seamless, Scalable, Successful!",
      description:
        "LMS makes launching, scaling, and succeeding in online teaching a seamless journey.",
      name: "Alex T.",
    },
    {
      quote: "Transformative Learning Experience!",
      description:
        "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
      name: "Jessica W.",
    },
    {
      quote: "Empowerment in Every Course!",
      description:
        "LMS empowers educators to create and sell courses effortlessly. A game-changer!",
      name: "Michael S.",
    },
    {
      quote: "Unlocking Education's Potential!",
      description:
        "LMS provides the key to unlocking new heights in online education. Exceptional!",
      name: "Emily K.",
    },
    {
      quote: "Seamless, Scalable, Successful!",
      description:
        "LMS makes launching, scaling, and succeeding in online teaching a seamless journey.",
      name: "Alex T.",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="w-fit mx-auto">
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/3 lg:basis-1/4">
            {/* <div className="bg-card mx-auto my-4 p-4 rounded-lg shadow-shadow shadow-lg h-[90%] flex flex-col justify-center">
              <FaQuoteLeft size={20} className="fill-muted" />
              <p className="text-md font-semibold text-base mt-3">
                {item.quote}
              </p>
              <p className="text-xs font-medium text-base italic mt-4 text-center self-start">
                ~{item.name}
              </p>
            </div> */}

            <div className="mx-4">
              <div className="bg-[#7b7a7e] text-white rounded-md text-center p-4 min-h-[150px] ">
                <p>{item.quote}</p>
                <p className="italic text-sm mt-4">{item.description}</p>
              </div>
              <div className="relative w-full h-4">
                <span className="bg-[#7b7a7e] h-4 w-4 inline-block rotate-45 absolute left-1/2 -top-1/2 -translate-x-1/2"></span>
              </div>
              <div className="flex items-center justify-center mt-4">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className="rounded-full w-14 h-14" alt="" />
              </div>
              <p className="text-center text-sm mt-2 font-light">{item.name}</p>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
