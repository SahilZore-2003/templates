import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccordianItem from "../../components/AccordianItem";
import StarRating from "../../components/StarRating";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaFacebook, FaGithub, FaInstagram, FaPlay, FaStar, FaTwitch, FaTwitter } from "react-icons/fa";
import VideoPlayer from "../../components/VideoPlayer";
import { Separator } from "@/components/ui/separator";
import { CiShare2 } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { IoDocumentTextOutline, IoSearch } from "react-icons/io5";
import { MdOutlineAudiotrack } from "react-icons/md";
import Footer from "../../components/Footer";
import PurchaseContainer from "../../components/PurchaseContainer";
import { LiaCheckCircle } from "react-icons/lia";
import { IoVideocamOutline } from "react-icons/io5";
import { TbMail, TbWorld } from "react-icons/tb";
import { Collapse } from "react-collapse";
import { IoChevronDown } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import { BiRupee } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";




const FifthTemplateCourse = () => {



  const navlinks = [
    {
      title: "Web Development",
      links: [
        {
          name: "Html",
          href: "#"
        },
        {
          name: "Css",
          href: "#"
        },
        {
          name: "Javascript",
          href: "#"
        },
        {
          name: "Mongodb",
          href: "#"
        },
      ]

    },
    {
      title: "App Development",
      links: [
        {
          name: "Kotlin",
          href: "#"
        },
        {
          name: "Java",
          href: "#"
        },
        {
          name: "React Native",
          href: "#"
        },
        {
          name: "Swift",
          href: "#"
        },
      ]

    },
    {
      title: "Backend Development",
      links: [
        {
          name: "Node Js",
          href: "#"
        },
        {
          name: "Java",
          href: "#"
        },
        {
          name: "Django",
          href: "#"
        },
        {
          name: "Laravel",
          href: "#"
        },
      ]

    },
  ]


  const { content, currTheme, currFont, currStyles } = useSelector((state) => state.app);
  const [expandedPerks, setExpandedPerks] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [expandedPrerequisites, setExpandedPrerequisites] = useState(false);
  const [expandedWhoFor, setExpandedWhoFor] = useState(false);
  const [showPurchaseContainer, setShowPurchaseContainer] = useState(false);
  const [showNav, setShowNav] = useState(false)
  const [showOtherLinks, setShowOtherLinks] = useState([])
  const [dropdownlink, setDropDownLink] = useState(navlinks[0].links)
  const [open, setOpen] = useState(false)






  const convertStringToArray = str => {
    const temp = document.createElement("div")
    temp.innerHTML = str;
    const list = temp.getElementsByTagName("li");
    const contentArray = []
    for (let i = 0; i < list.length; i++) {
      contentArray.push(list[i].innerText)
    }
    return contentArray
  }

  const inlineStyle = {
    fontFamily: currFont,
  };

  const navigate = useNavigate()


  useEffect(() => {
    const handleScroll = () => {

      if (window.innerWidth <= 768) {
        return setShowPurchaseContainer(true)
      }

      // Determine the scroll position
      const scrollPosition = window.scrollY;

      // Get the height of the hero section
      const heroSectionHeight =
        document.getElementById("main-course-container").offsetHeight;
      const couseCardHeight = document.getElementById("course-card").offsetHeight;

      // If the scroll position is greater than the height of the hero section, show the PurchaseContainer
      setShowPurchaseContainer(scrollPosition > couseCardHeight && scrollPosition < heroSectionHeight);
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSecondsAfterHours = seconds % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const remainingSeconds = remainingSecondsAfterHours % 60;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds.toFixed(0)).padStart(
      2,
      "0"
    );
    let durationString = "";
    if (hours > 0) {
      durationString += `${formattedHours}:`;
    }
    durationString += `${formattedMinutes}:${formattedSeconds}`;
    return durationString;
  }


  const setHtmlWithStyle = (htmlString, className = "") => {
    // Regular expression to match all HTML tags
    const regex = /<[^>]*>/g;
    // Add 'text-base' class to each matched HTML tag
    const modifiedHtml = htmlString.replace(regex, (match) => {
      return match.replace(">", ` class="${className}">`);
    });
    return modifiedHtml;
  };

  function getContentDetails(content) {
    // Initialize counters and total duration
    let videoCount = 0;
    let quizCount = 0;
    let noteCount = 0;
    let audioCount = 0;
    let totalDuration = 0;

    // Iterate over the content array
    content.forEach((item) => {
      item.sections.forEach((section) => {
        section.material.forEach((material) => {
          // Increment counters based on material type
          switch (material.type) {
            case "video":
              videoCount++;
              totalDuration += material.duration;
              break;
            case "quiz":
              quizCount++;
              break;
            case "note":
              noteCount++;
              break;
            case "audio":
              audioCount++;
              break;
            default:
              break;
          }
        });
      });
    });

    // Return an object with the calculated details
    return {
      videoCount,
      quizCount,
      noteCount,
      audioCount,
      totalDuration,
    };
  }


  const descriptionBox = useRef()

  const handleDescriptionScroll = () => {

    window.scrollTo({
      top: descriptionBox.current.offsetTop - 100,
    })
  }

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false)
    }
    setOpen(index)
  }

  const sections = [
    {
      title: "Solutions",
      items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
    },
    {
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      title: "Company",
      items: ["About", "Blog", "Jobs", "Press", "Partners"],
    },
    {
      title: "Legal",
      items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
    },
  ];

  const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
  ];

  // destructure all the styles 

  const { font, primary, secondary, gradient: { from, via, to }, innerText } = currStyles;

  return (
    <div
      className="bg-background"
      data-theme={`${currStyles.uiMode}`}
      id={currTheme}
      style={{ ...inlineStyle, "--primary": primary, "--secondary": secondary, "--slider-indicators": primary, "--slider-indicators-muted": secondary, }}
    >
      <nav className="flex items-center justify-between text-base py-2 px-4" style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, .08), 0 4px 12px rgba(0, 0, 0, .08)"
      }}>
        <div className="md:hidden" onClick={() => setShowNav(true)}>
          <HiMiniBars3 />
        </div>
        <div className="text-xl font-bold flex items-center">
          <h1 onClick={() => navigate("/")}>Bridge <span className="text-[#5070fd]">YU</span></h1>
          <div className=" hidden md:inline font-normal ml-8 hover:text-primary relative cursor-pointer group">
            categories
            <div className="absolute left-0 top-full w-[500px] bg-transparent z-[10] transition-scale scale-0 invisible  duration-200 group-hover:visible group-hover:scale-100">
              <div className="relative before:absolute before:w-[1px] before:h-full before:bg-black/20 before:left-1/2 before:top-0 mt-8 flex justify-between bg-background p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}>
                <div className="basis-[45%]">
                  {
                    navlinks.map((item, index) => (
                      <div key={index} className="flex items-center text-base  mt-1" onMouseOver={() => setDropDownLink(navlinks[index].links)}>
                        <h3 className="grow ">{item.title}</h3>
                        <RiArrowRightSLine />
                      </div>
                    ))
                  }
                </div>
                <div className="basis-[45%]">
                  {
                    dropdownlink.map((item, index) => (
                      <div className="flex items-center  hover:text-primary text-base" key={index}>
                        <a href={item.href} className="grow">{item.name}</a>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-[350px] items-center gap-2 rounded-full px-4 py-2 border-[1px] border-border bg-background">
          <IoIosSearch className="text-2xl" />
          <input className="grow border-0 outline-0 bg-transparent" type="text" placeholder="Search for anything." />
        </div>
        <button className="bg-primary font-bold text-lg px-4 py-1 rounded-xl" style={{color:innerText}}>Login</button>
      </nav>
      {/* mobile navbar  */}
      <div onClick={() => setShowNav(false)} className={`md:hidden fixed z-[1000] transition-opacity duration-300    left-0 w-full h-full bg-[#2d2f31cc] ${showNav ? "opacity-100 top-0 pointer-events-auto" : "opacity-0 top-[44px] pointer-events-none"} `}>
        <div onClick={e => e.stopPropagation()} className={`bg-white w-[60%] h-full text-black flex flex-col items-start p-4 relative overflow-hidden transition-all duration-300 ${showNav ? "translate-x-[0%]" : "-translate-x-[100%]"}`}>
          <div className={`w-full transition-opacity duration-200 delay-300 ${showNav ? "opacity-100" : "opacity-0"}`}>
            <button className="text-[#a539f0] w-full text-start">Login</button>
            <button className="text-[#a539f0] w-full text-start">Signup</button>
            <hr className="bg-black/10 h-[1px] w-full mt-2" />
            <div className="mt-2 w-full ">
              <h1>Most Popular</h1>
              {
                navlinks.map((item, index) => (
                  <div key={index} className=" flex items-center justify-between mt-2" onClick={() => setShowOtherLinks(item.links)}>
                    {item.title}
                    <RiArrowRightSLine />
                  </div>
                ))
              }

            </div>
          </div>

          <div className={`absolute bg-background top-0  first-line:transition-all duration-300 w-full h-full p-4  ${showOtherLinks.length > 0 ? "left-0" : "left-full"}`}>
            <div className="flex items-center gap-2" onClick={() => setShowOtherLinks([])}>
              <MdKeyboardArrowLeft />
              Menu
            </div>
            <hr className="bg-black/10 h-[1px] w-full mt-2" />
            <div className="flex flex-col gap-2 mt-2">
              {
                showOtherLinks?.map((item, index) => (
                  <a key={index} href={item.href}>{item.name}</a>
                ))
              }
            </div>
          </div>
        </div>
        <HiOutlineXMark onClick={() => setShowNav(false)} size={30} className={`absolute top-[5%] left-[62%] bg-white rounded-full p-1 transition-all duration-300 delay-300 ${showNav ? "scale-100" : "scale-0"} `}

          style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }} />
      </div>

      <div className="relative md:px-14  text-base md:text-inverted md:bg-primary">

        <div className="md:w-[60%]">
          <div className="md:hidden">
            <img className="object-cover aspect-video" src={content.trailerThumbnail} alt="" />
          </div>
          <div className="px-8 py-4 md:px-0">
            <h1 className="font-bold text-2xl">{content.contentTitle}</h1>
            <div className="my-4">
              <span className="bg-secondary px-4 py-2 rounded-lg font-bold">BestSeller</span>
            </div>
            <div className="flex items-center gap-2 my-2">
              <span>{content.rating}</span>
              <StarRating rating={content.rating} color={secondary} />
              <span>{content.reviews.length} Reviews</span>
            </div>
            <div>
              created by : <span>{content.author.name}</span>
            </div>
            <div className="flex gap-4 flex-wrap my-2">
              <span className="flex items-center gap-2"><IoVideocamOutline /> 100+ lectures</span>
              <span className="flex items-center gap-2"><TbWorld /> English</span>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg my-6 hidden md:block md:absolute top-0 right-[5%] md:w-[30%] [box-shadow:#3c40434d_0px_1px_2px_0px,#3c404326_0px_2px_6px_2px]" id="course-card">
          <img src={content.trailerThumbnail} className="mb-6 aspect-video" alt="" />
          <div className="px-4 md:text-base">
            <h2 className="flex gap-2">
              <span className="text-xl font-bold flex items-center"><BiRupee />{content.price}</span>
              <span className="text-lg line-through flex items-center text-muted"><BiRupee />{+content.price + 1000}</span>
              <span className="text-muted flex items-center">{(1000 / +content.price * 100).toFixed(0)} % off</span>
            </h2>
            <div className="my-2">
              <h3 className="text-lg text-muted">This course includes:</h3>
              <div className="mt-2">
                {
                  convertStringToArray(content.prerequisites).slice(0, 2).map((e, i) => (
                    <p key={i} className="flex items-start gap-2 font-bold text-sm mt-4"><span><LiaCheckCircle className="mt-1" /></span> {e}</p>
                  ))
                }

              </div>
            </div>
            <div className="text-center">
              <button className="w-full bg-primary  py-2 text-inverted my-4 sm:w-1/2 mx-auto md:w-full">Buy Now</button>
            </div>

          </div>
        </div>
      </div>

      <div id="main-course-container">
        {/* what you'll learn */}


        {/* what you will learn  */}
        <div className="m-6 md:m-14 bg-primary  text-inverted p-4 md:w-1/2 border-[1px] border-border rounded-lg">
          <span className="font-bold text-2xl">
            What you will learn
          </span>
          <Collapse isOpened={true}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 mt-4"
            >
              {
                convertStringToArray(content.perks).slice(0, expandedPerks ? convertStringToArray(content.perks).length : 4).map((e, i) => (
                  <div className="flex gap-2 mt-4" key={i}>
                    <IoCheckmark size={20} className="shrink-0 mt-2" />
                    {e}
                  </div>
                ))
              }
            </div>
          </Collapse>

          {
            convertStringToArray(content.perks).length > 4 && (
              <button
                onClick={() => {
                  setExpandedPerks(!expandedPerks)
                }}
                className={`transition-all duration-150 mt-4  font-bold text-sm flex items-center gap-2`}
              >

                {expandedPerks ? "See Less" : "See More"}
                <IoChevronDown size={20} className={`transition-transform duration-300 mx-auto  ${expandedPerks ? "rotate-180" : "rotate-0"}`} />
              </button>
            )

          }
        </div>


        {/* course content  */}

        <div className="md:w-1/2 m-6 md:m-14">
          <span className="font-bold !text-2xl  text-base">Course Content</span>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-4 border-[.5px] border-border bg-background"
          >
            {content.sections.map((item, id) => (
              <div key={item._id}>
                <AccordionItem value={item._id}>
                  <AccordionTrigger className="bg-primary text-inverted px-4">
                    {id + 1}.&emsp;{item.sectionTitle}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    <div className="bg-background rounded-lg">
                      {item.material.map((material, idx) => (
                        <div
                          key={material._id}
                          className="flex flex-row justify-between items-center mt-4 px-4 text-muted"
                        >
                          {material.type === "video" ? (
                            <div className="flex flex-row items-center space-x-4">
                              <MdOndemandVideo
                                size={20}
                                className="fill-base"
                              />
                              <Dialog>
                                <DialogTrigger>
                                  <a className="text-xs hover:text-primary text-base">
                                    {material.title}&emsp;&emsp;
                                  </a>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Video Preview</DialogTitle>
                                  </DialogHeader>
                                  <div className="h-100 w-100">
                                    <VideoPlayer videoUrl={material.link} />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          ) : material.type === "note" ? (
                            <div className="flex flex-row items-center space-x-4">
                              <IoDocumentTextOutline
                                size={20}
                                className="text-base"
                              />
                              <Link
                                className="text-xs hover:text-primary text-base"
                                onClick={
                                  () => { }
                                  // dispatch(setCurrentPdf(material.link))
                                }
                                to="/pdfViewer"
                                target="_blank"
                              >
                                {material.title}&emsp;&emsp;
                              </Link>
                            </div>
                          ) : material.type === "quiz" ? (
                            <div className="flex flex-row items-center space-x-4">
                              <PiExam size={18} className="fill-base" />
                              <Link
                                className="text-xs hover:text-primary text-base"
                                onClick={() => { }}
                                to={`/quizViewer/${material.title}`}
                                target="_blank"
                              >
                                {material.title}&emsp;&emsp;
                              </Link>
                            </div>
                          ) : (
                            <div className="flex flex-row items-center space-x-4">
                              <MdOutlineAudiotrack
                                size={18}
                                className="fill-base"
                              />
                              <Dialog>
                                <DialogTrigger>
                                  <a className="text-xs text-base hover:text-primary">
                                    {material.title}&emsp;&emsp;
                                  </a>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Audio Preview</DialogTitle>
                                  </DialogHeader>
                                  <div className="h-100 w-100">
                                    {/* <AudioPlayer audioUrl={material.link} /> */}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {/* duration */}
                          <div className="">
                            {material.type == "video" && (
                              <span className="text-xs">
                                {formatDuration(material.duration)}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* Description */}
        <div className="m-6 md:m-14 rounded-lg  p-4 md:w-1/2" ref={descriptionBox}>
          <span className="font-bold !text-2xl text-base">Description</span>
          <Collapse isOpened={true}>
            <article
              className="prose transition-all duration-200 relative"
              style={{
                height: `${expandedDescription ? "auto" : "200px"}`,
                overflow: "hidden",
              }}
            >
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: setHtmlWithStyle(content.description, "text-muted"),
                  }}
                >
                </div>


              </div>
            </article>

            {
              <button
                onClick={() => {
                  handleDescriptionScroll()
                  setExpandedDescription(!expandedDescription)
                }}
                className={`transition-all duration-150 mt-4 text-base font-bold text-sm flex items-center gap-2`}
              >

                {expandedDescription ? "See Less" : "See More"}
                <IoChevronDown size={20} className={`transition-transform duration-300 mx-auto text-base ${expandedDescription ? "rotate-180" : "rotate-0"}`} />
              </button>
            }
          </Collapse>

        </div>

        {/* Prerequisites */}

        <div className="m-6 md:m-14 rounded-lg p-4 md:w-1/2">
          <span className="!text-2xl text-base font-bold">prerequisites</span>
          <article
            className="prose"
          >
            <ul
              className="mt-4 marker:text-base"
            >
              {
                convertStringToArray(content.prerequisites).map((e, i) => (
                  <li className="text-muted" key={i}>{e}</li>
                ))
              }
            </ul>
          </article>

          {
            convertStringToArray(content.prerequisites).length > 4 && (
              <button
                onClick={() => {
                  setExpandedPrerequisites(!expandedPrerequisites)
                }}
                className={`transition-all duration-150 mt-4 text-base font-bold text-sm flex items-center gap-2`}
              >

                {expandedPrerequisites ? "See Less" : "See More"}
                <IoChevronDown size={20} className={`transition-transform duration-300 mx-auto text-base ${expandedPrerequisites ? "rotate-180" : "rotate-0"}`} />
              </button>
            )

          }
        </div>


        {/* Who this course is for: */}
        <div className="m-6 md:m-14 rounded-lg  p-4 md:w-1/2">
          <span className="!text-2xl text-base font-bold">
            Who this course is for
          </span>
          <article
            className="prose"
          >
            <Collapse isOpened={true}>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 rounded-xl p-4 bg-primary mt-4"
              >
                {
                  convertStringToArray(content.whoFor).slice(0, expandedWhoFor ? convertStringToArray(content.whoFor).length : 4).map((e, i) => (
                    <div key={i} className={`transition-all text-inverted duration-300 text-sm  grid  ${i > 3 && !setExpandedWhoFor ? "grid-rows-[0fr]" : "grid-rows-1 py-3"}`}>
                      <div className="overflow-hidden flex gap-2">
                        <LiaCheckCircle size={15} className="shrink-0 mt-2" />
                        {e}
                      </div>
                    </div>
                  ))
                }
              </div>
            </Collapse>

          </article>
          {
            convertStringToArray(content.whoFor).length > 4 && (
              <button
                onClick={() => {
                  setExpandedWhoFor(!expandedWhoFor)
                }}
                className={`transition-all duration-150 mt-4 text-base font-bold text-sm flex items-center w-full gap-2`}
              >

                {/* {expandedWhoFor ? "See Less" : "See More"} */}
                <IoChevronDown size={30} className={`transition-transform duration-300 mx-auto text-base   ${expandedWhoFor ? "rotate-180" : "rotate-0"}`} />
              </button>
            )

          }
        </div>




        {/* author */}
        <div className="m-6 md:m-14  p-4 md:w-1/2 text-xs font-medium">
          <span className="font-bold !text-2xl text-base">Instructor</span>
          <div className="flex gap-6 my-4 flex-col items-center text-center lg:flex-row lg:text-start lg:items-start">
            <div className="flex mt-4">
              <img src={content.author.pfp} alt="" className="w-24 rounded-full lg:w-60 lg:shrink-0" />
            </div>
            <div>
              <p className="mt-4 text-base">{content.author.about}</p>
              <p className="mt-4 text-sm text-muted">__{" " + content.author.name}</p>
            </div>
          </div>

        </div>

        {/* review  */}

        {
          content.reviews.length > 0 && <div className="m-6 md:m-14  p-4 md:w-1/2 text-xs font-medium">
            <h1 className="!text-2xl font-bold text-base">Our Success Stories.</h1>
            <div className="mt-8 grid md:grid-cols-2 grid-cols-1 bg-primary text-inverted rounded-lg overflow-hidden border-[1px] border-border">
              {
                content.reviews.map((item, index) => (
                  <div key={index} className="p-4 border-[1px] border-border">
                    <div className="flex gap-2 items-center">
                      <img className="object-cover w-12 h-12 rounded-full" src={item.profile} alt="" />
                      <div className="grow">
                        <h2 className="text-lg">{item.name}</h2>
                        <p className="text-muted">{item.qualification}</p>
                      </div>
                    </div>
                    <p className="text-sm my-4">{item.review}</p>
                    <div className="mt-2">
                      <StarRating rating={item.rating} />
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        }




      </div >

      {/* {showPurchaseContainer && <PurchaseContainer />} */}

      <div className={`md:w-1/3 bg-primary my-8 mx-8 rounded-lg md:my-0 md:mx-0  p-4 text-inverted md:fixed right-[5%] top-[10%] z-30 transition-all duration-200 ${showPurchaseContainer ? "opacity-100" : "opacity-0"}`}>
        <div className="text-lg font-semibold">
          <span>{content.contentTitle}</span>
          <p dangerouslySetInnerHTML={{ __html: setHtmlWithStyle(content.description).substring(0, 100) }}></p>
        </div>
        <hr className="mt-2 h-[.3px] bg-gray-500" />

        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold">{content.rating}</span>
          <FaStar className="fill-white" />
          <span>({content.reviews.length}) reviews</span>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Category</h3>
          <p className="text-sm">{content.category}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Sections</h3>
          <p className="text-sm">{content.sections.length}</p>
        </div>

        <hr className="mt-2 h-[.3px] bg-muted" />

        <div className="my-4">
          <span className=" font-bold text-2xl text-inverted">
            &#x20B9; {parseInt(content.price).toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => { }}
          className="bg-background w-full text-base font-semibold text-md p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Add to cart
        </button>
      </div>

      {/* footer  */}


      <footer className="bg-primary text-inverted pt-8 px-4">
        <div className="lg:grid grid-cols-3 lg:border-b-[1px]">
          <div className="lg:pb-4">
            <div className="font-bold text-xl">
              Subscribe to our Newsletter to stay in touch with us.
            </div>
            <div class="relative mt-6 border-border border-[1px] rounded-3xl">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm white bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_outlined" class="absolute text-sm    duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Email address.</label>
              <TbMail className="absolute top-1/2 -translate-y-[50%] right-[3%] bg-background p-1 rounded-full text-base" size={30} />
            </div>
          </div>
          <div className="mt-6 lg:mt-2 lg:text-center">
            <p className="text-sm  uppercase pb-2">Drop Us a Line</p>
            <h2 className="font-bold">Mail@gmail.com</h2>
          </div>
          <div className="mt-4 lg:mt-0 border-b-[1px] lg:border-b-0 border-white pb-4">
            {
              sections.map((e, i) => (
                <AccordianItem key={i} open={i === open} title={e.title} toggle={() => { toggle(i) }} items={e.items} />
              ))
            }
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 pb-4 border-b-[1px]">
          {
            items.map((e) => (
              <div className="p-2 rounded-full border-border border-[1px]">
                <a href={e.link}><e.icon size={25} /></a>
              </div>
            ))
          }
        </div>
        <div className="text-center py-4">
          ©️ copyright BridgeYu
        </div>
      </footer>


    </div >
  );
};

export default FifthTemplateCourse;
