import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const MySlider = ({ data, colors }) => {

    const { primary, secondary } = colors;

    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesToShow, setSlideToShow] = useState(2)

    const handleSetSlide = () => {
        setSlideToShow(window.innerWidth <= 768 ? 1 : 2)
    }


    useEffect(() => {
        window.addEventListener("resize", handleSetSlide)

        return () => window.removeEventListener("resize", handleSetSlide)
    }, [])

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <>
                <FaArrowRight className=" cursor-pointer absolute -bottom-6 left-[50%] translate-x-20" size={25} style={{ ...style, display: "block", fill: primary }}
                    onClick={onClick} />
            </>
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <FaArrowLeft className=" cursor-pointer absolute -bottom-6 left-[50%] z-[100] -translate-x-20" size={25} style={{ ...style, display: "block", fill: primary }}
                onClick={onClick} />
        );
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            }
        ]
    };
    return (
        <div className="slider-container mx-8 my-12 relative">
            <p className="font-bold texl-3xl text-base mb-8">
                Here&apos;s what our customers have to say{" "}
            </p>
            <Slider {...settings}>
                {
                    data?.map((e, i) => {
                        return (

                            <div key={i} className="flex items-center justify-around mb-8">
                                <div className={`w-[100%] md:w-[95%] shadow-lg text-base border-border border-[1px] rounded-lg px-4 py-8 relative after:w-full after:h-[4px] after:bg-[${primary}] after:rounded-lg after:absolute after:bottom-0 after:left-0`}>
                                    <div className="flex gap-6 items-center">
                                        <div>
                                            <h3 className="font-bold">{e.user}</h3>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        {
                                            e.description
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider >

            <div className="w-[100px] bg-backgroundInverted h-[6px] rounded-full absolute -bottom-4 left-[50%] z-[100] -translate-x-1/3 overflow-hidden border border-border">
                <div className="relative w-full h-full overflow-hidden">
                    <span className={`block  h-full rounded-lg absolute duration-150 left-0`}
                        style={{
                            left: `${activeSlide * (100 / data?.length)
                                }%`,
                            width: `${(100 / data?.length) * slidesToShow}%`,
                            background: primary
                        }}
                    ></span>
                </div>
            </div>
        </div >
    )
}

export default MySlider;
