import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import "./FeaturedSlider.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const FeaturedTestimonials = ({ data, template = "" }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);




    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <AiOutlineArrowLeft class="arrows" style={{ color: "white" }} />
            </div>
        )
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} >
                <AiOutlineArrowRight class="arrows" style={{ color: "white" }} />
            </div>
        )
    }


    const settings = {
        initialSlide: 0,
        className: "slides",
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    bottom: "-50%"
                }}

            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),

    }

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container mx-8 grid grid-cols-1 lg:grid-cols-2 gap-8 my-8  rounded-lg p-4 pb-8" id={`featured-slider${template}`}>

            <Slider className="" arrows={false} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} className="rounded-lg object-cover aspect-video" alt="" />
                        </div>
                    ))
                }

            </Slider>

            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
                dots={true}
                {...settings}
                className='md:mx-4'
            >
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <div className="text-center font-bold text-xl dark:text-white" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                        </div>
                    ))
                }


            </Slider>
        </div>
    )
}

export default FeaturedTestimonials
