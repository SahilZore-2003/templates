import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCalendar2Date } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';

const MobileSlider = ({ data, dispatch, currSite, setHtmlWithStyle, colors }) => {


    const [activeTab, setActiveTab] = useState("all");
    const [filterData, setFilterData] = useState(data?.content)
    const [activeSlide, setActiveSlide] = useState(0);
    const { primary, secondary } = colors;


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        afterChange: current => setActiveSlide(current)
    };

    const handleActiveTab = (x, e, i) => {
        setActiveTab(e)
        const filterData = data.content.filter((x) => (
            x.category.toLowerCase() == e.toLowerCase()
        ))
        setFilterData(filterData)
        setActiveSlide(0)

        const sliderHeight = document.getElementById("mobile-slider").offsetHeight;
        window.scrollTo({
            behavior: "smooth",
            top: (x.pageY - sliderHeight) - 50
        })
    }


    return (
        <div className='my-4 mx-2'>
            <div>
                <div className={`flex items-center justify-between rounded-lg py-3 px-2 `}

                    style={activeTab === "all" ? { color: primary, background: 'hsl(var(--background-inverted))' } : {}}
                    onClick={(x) => {
                        setActiveTab("all");
                        setFilterData(data?.content);
                        window.scrollTo({
                            behavior: "smooth",
                            top: x.pageY - 50
                        })
                    }}
                >
                    <span>All</span>
                    {
                        activeTab === "all" ? <FaChevronUp /> : <FaChevronDown />
                    }
                </div>

                {
                    activeTab === "all" &&

                    <div className="slider-container mt-4" id='mobile-slider'>
                        <Slider {...settings}>
                            {
                                data?.content?.map((e, i) => (
                                    <div className="rounded-md  custom-shadow duration-300 shrink-0 mb-4" key={i} style={{ width: 250 }}>
                                        <div>
                                            <img src={e.trailerThumbnail} alt="" />
                                        </div>

                                        <div className="px-4 mt-4">
                                            <h1 className="font-bold">{e.contentTitle}</h1>
                                            <small className="my-2 block" dangerouslySetInnerHTML={{
                                                __html: setHtmlWithStyle(e.description).slice(0, 200) + " ...",
                                            }}></small>
                                            <div className="flex gap-3 items-center">
                                                <MdCurrencyRupee /> <small className="text-lg">{e.price}</small>
                                            </div>
                                            <div className="mb-4">
                                                <Link
                                                    onClick={() => dispatch(setContent(e))}
                                                    to={`/${currSite.toLowerCase()}/${data._id}`}
                                                    className=" text-end"
                                                    style={{ color: primary }}
                                                >
                                                    <p className="cursor-pointer">Know more</p>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <div className='flex items-center justify-center mb-4'>
                            <div className='relative rounded-lg overflow-hidden w-[100px] h-2 bg-backgroundInverted'>
                                <span className='inline-block w-[25%] absolute left-0 h-full top-0 rounded-lg'
                                    style={{
                                        width: `${100 / filterData?.length}%`,
                                        left: `${(100 / filterData?.length) * activeSlide}%`,
                                        background: primary
                                    }}
                                ></span>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {
                data?.categories?.map((e, i) => (
                    <div key={i} onClick={(x) => {
                        handleActiveTab(x, e, i)
                    }}>
                        <div className={`flex items-center justify-between rounded-lg py-3 px-2`}
                            style={activeTab === e ? { color: primary, background: 'hsl(var(--background-inverted))' } : {}}
                        >
                            <span>{e}</span>
                            {
                                activeTab === e ? <FaChevronUp /> : <FaChevronDown />
                            }
                        </div>
                        {
                            activeTab === e &&

                            <div className="slider-container mt-4" id='mobile-slider'>
                                <Slider {...settings}>
                                    {
                                        data?.content?.filter((e) => (e.category.toLowerCase() == activeTab.toLowerCase())
                                        ).map((e, i) => (
                                            <div className="rounded-md  custom-shadow duration-300 shrink-0 mb-4" key={i} style={{ width: 250 }}>
                                                <div>
                                                    <img src={e.trailerThumbnail} alt="" />
                                                </div>

                                                <div className="px-4 mt-4">
                                                    <h1 className="font-bold">{e.contentTitle}</h1>
                                                    <small className="my-2 block" dangerouslySetInnerHTML={{
                                                        __html: setHtmlWithStyle(e.description).slice(0, 200) + " ...",
                                                    }}></small>
                                                    <div className="flex gap-3 items-center">
                                                        <MdCurrencyRupee /> <small className="text-lg">{e.price}</small>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Link
                                                            onClick={() => dispatch(setContent(e))}
                                                            to={`/${currSite.toLowerCase()}/${data._id}`}
                                                            className=" text-end"
                                                            style={{ color: primary }}
                                                        >
                                                            <p className="cursor-pointer">Know more</p>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='relative rounded-lg overflow-hidden w-[100px] h-2 bg-backgroundInverted'>
                                        <span className='inline-block w-[25%]  absolute left-0 h-full top-0 rounded-lg'
                                            style={{
                                                width: `${100 / filterData.length}%`,
                                                left: `${(100 / filterData.length) * activeSlide}%`,
                                                background: primary
                                            }}
                                        ></span>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                ))
            }

        </div >
    )
}

export default MobileSlider


