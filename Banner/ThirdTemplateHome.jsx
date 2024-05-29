import React, { useEffect, useState, useRef } from "react";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import StarRating from "../../components/StarRating";
import { GoArrowRight } from "react-icons/go";
import { FaArrowUp, FaMinus, FaRegCheckCircle, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";


import Swiper from 'react-id-swiper';


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    setContent,
    setCurrFont,
    setCurrTheme,
} from "../../redux/slices/appSlice";
import { Separator } from "@/components/ui/separator";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Footer from "../../components/Footer";
import { Testimonial } from "../../components/Testimonial";
import { HiMiniXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { TbCurrencyRupee } from "react-icons/tb";
import { FaAngleUp, FaAngleDown, FaIndianRupeeSign } from "react-icons/fa6";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Collapse } from "react-collapse";
import { ImQuotesLeft } from "react-icons/im";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import backImage from "../../../public/assets/t-2-back.png"
import Counter from "../../components/Counter";
import { InView } from 'react-intersection-observer';
import { clsx } from "clsx";
const HomePage = () => {

    const [business, setBusiness] = useState(null);
    const [featured, setFeatured] = useState({});
    const { currSite } = useSelector((state) => state.app);
    const [isLoading, setIsLoading] = useState(true);
    const { currTheme, currFont } = useSelector((state) => state.app);
    const nahiHoRhaTheme = useRef();
    const dispatch = useDispatch();
    const [activeNav, setActiveNav] = useState(false)
    const [changeNavBg, setChangeNavBg] = useState(false)
    const [selectedFaq, setSelectedfaq] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeFeaturedSlide, setActiveFeaturedSlide] = useState(1);
    // const [theme, setTheme] = useState("snowfall")
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768)
    const [activeBanner, setActiveBanner] = useState(0)

    let sliderRef = useRef(null);
    let featuredSliderRef = useRef(null);

    const inlineStyle = {
        fontFamily: currFont,
    };

    const counterData = [
        {
            count: 100,
            title: "Monthly Users"
        },
        {
            count: 50,
            title: "New Audience"
        },
        {
            count: 200,
            title: "satisfied Customers"
        },

    ]

    const setHtmlWithStyle = (htmlString) => {
        // Regular expression to match all HTML tags
        const regex = /<[^>]*>/g;
        // Add 'text-base' class to each matched HTML tag
        const modifiedHtml = htmlString.replace(regex, (match) => {
            return match.replace(">", ' class="mt-4 text-[#666464] text-lg">');
        });
        return modifiedHtml;
    };

    const bis = {
        _id: "65dffaa008aacf44c5579563",
        ownerId: "65dffa9208aacf44c557955f",
        business: "DVM",
        sitename: "dvm",
        createdAt: "2024-02-29T03:31:44.095Z",
        updatedAt: "2024-03-18T07:23:36.394Z",
        __v: 0,

        categories: ["coding", "design"],
        content: [
            {
                author: {
                    name: "Dr. Angela Yu",
                    about:
                        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.\n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu21a40491b14f877492f21fe87c42f379.mp3",
                },
                contentTitle: "Python Crashcourse",
                category: "Coding",
                price: "3097",
                trailer:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu9fa352012f6d54200c20c8dee25f4787.mp4",
                trailerThumbnail:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYuffbe450aa7bfd009945378f02d7f2052.jpeg",
                description:
                    "<p>Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,<strong> the only course you need</strong> to learn to code with Python. With over 500,000 <strong>5 STAR reviews</strong> and a 4.8 average, my courses are some of the HIGHEST&nbsp;RATED courses in the history of Udemy!&nbsp;&nbsp;</p><p><strong>100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.</strong></p><p>At 60+ hours, this Python course is without a doubt the <strong>most comprehensive </strong>Python course available anywhere online. Even if you have <strong>zero</strong> programming experience, this course will take you from <strong>beginner to professional</strong>. Here's why:</p><ul><li><p>The course is taught by the <strong>lead instructor</strong> at the App Brewery, London's <strong>best in-person programming Bootcamp</strong>.</p></li><li><p>The course has been updated and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</p></li><li><p>This course doesn't cut any corners, there are beautiful <strong>animated explanation videos</strong> and tens of <strong>real-world projects</strong> which you will get to build. e.g. Tinder auto swiper, Snake game, Blog Website, LinkedIn Auto Submit Job Application</p></li><li><p>The curriculum was developed over a period of<strong> 2 years</strong>, with comprehensive student testing and feedback.</p></li><li><p>We've taught over 600,000 students how to code and many have gone on to <strong>change their lives </strong>by becoming professional developers or starting their own tech startup.</p></li><li><p>You'll save yourself <strong>over $12,000 </strong>by enrolling, and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming Bootcamp.</p></li><li><p>The course is <strong>constantly updated</strong> with new content, with new projects and modules determined by students - that's you!</p></li></ul><p></p><p>We'll take you <strong>step-by-step</strong> through engaging video tutorials and teach you everything you need to know to succeed as a Python developer.</p><p>The course includes over <strong>65 hours</strong> of HD video tutorials and builds your programming knowledge while making real-world Python projects.</p><p></p><p>Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:</p><ul><li><p>Python 3 - the latest version of Python</p></li><li><p>PyCharm, Jupyter Notebook, Google Colab</p></li><li><p>Python&nbsp;Scripting and Automation</p></li><li><p>Python Game Development</p></li><li><p>Web Scraping</p></li><li><p>Beautiful Soup</p></li><li><p><strong>Selenium</strong> Web Driver</p></li><li><p>Request</p></li><li><p>WTForms</p></li><li><p>Data Science</p></li><li><p>Pandas</p></li><li><p><strong>NumPy</strong></p></li><li><p>Matplotlib</p></li><li><p><strong>Plotly</strong></p></li><li><p>Scikit learn</p></li><li><p>Seaborn</p></li><li><p>Turtle</p></li><li><p>Python GUI Desktop App Development</p></li><li><p><strong>Tkinter</strong></p></li><li><p>Front-End Web Development</p></li><li><p>HTML 5</p></li><li><p>CSS 3</p></li><li><p>Bootstrap 4</p></li><li><p>Bash Command Line</p></li><li><p>Git, <strong>GitHub</strong> and Version Control</p></li><li><p>Backend Web Development</p></li><li><p><strong>Flask</strong></p></li><li><p>REST</p></li><li><p><strong>APIs</strong></p></li><li><p>Databases</p></li><li><p>SQL</p></li><li><p><strong>SQLite</strong></p></li><li><p>PostgreSQL</p></li><li><p>Authentication</p></li><li><p>Web Design</p></li><li><p>Deployment with GitHub Pages, Heroku and GUnicorn</p></li><li><p>and much much more!</p></li></ul><p>By the end of this course, you will be <strong>fluently</strong> programming&nbsp;in Python and you'll be so good at Python that you can get a job or use the language professionally.</p><p>You'll also build a <strong>portfolio</strong> of <strong>100 projects</strong> that you can show off to any potential employer. Including:</p><ul><li><p>Blackjack</p></li><li><p>Snake Game</p></li><li><p>Pong Game</p></li><li><p>Auto Swipe on Tinder</p></li><li><p>Auto Job Applications on LinkedIn</p></li><li><p>Automate Birthday Emails/SMS</p></li><li><p>Fully Fledged Blog Website</p></li><li><p>Build Your Own Public API</p></li><li><p>Data Science with Google Trends</p></li><li><p>Analysing Lego Datasets</p></li><li><p>Google App Store Analysis</p></li><li><p>and much much more!</p></li></ul><p><strong>Sign up today, and look forward to:</strong></p><ul><li><p>Video Lectures</p></li><li><p>Code Challenges and Exercises</p></li><li><p>Fully Fledged Projects</p></li><li><p>Quizzes</p></li><li><p>Programming Resources and Cheatsheets</p></li><li><p>Downloads</p></li><li><p>Our best selling 12 Rules to Learn to Code eBook</p></li><li><p>$12,000+&nbsp;Python Pro Bootcamp&nbsp;course materials and curriculum</p></li></ul><p></p><p>Don't just take my word for it, check out what existing students have to say about my courses:</p><p>\"Angela is just incredible, awesome and just fantastic in this course. I've never had such an instructor; <strong>detailed</strong> in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She's got that ability to make fun while explaining things for better understanding. I really love this course.\" - Ekeu MonkamUlrich</p><p>\"Angela is very thorough without ever being boring. I've taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I've ever had. This course is <strong>packed with thousands of dollars worth of great instruction</strong>, and paced well enough for anyone to pick coding up and run with it- Thank you!\" - J Carlucci</p><p>\"Love the way Angela explains things. Easy to follow and full of logic. I can say she must spend a lot of energy creating this great course. Thank you and I recommend it to all who's interested in coding!\" - Yiqing Zheng</p><p>\"So far (on my third day) this course has taught me <strong>more than I was able to learn in multiple other programming courses</strong>. This course is clearly outlined and builds upon itself gradually in an easy to understand way.\" - Normal Ramsey</p><p>\"It's a different approach to teaching Web Development. I like that you are <strong>given everything possible to succeed</strong> from the onset.\" - Ronick Thomas</p><p>The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talking to herself, but she is actually explaining things. She keeps on giving really useful hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me remember and understand things better. - Peter Dlugos</p><p></p><p></p><p><strong>REMEMBER… I'm so confident that you'll love this course that&nbsp;we're offering a FULL money-back guarantee for&nbsp;30 days! So it's a complete no-brainer, sign up today with ZERO&nbsp;risk and EVERYTHING to gain.</strong></p><p>So what are you waiting for?&nbsp;Click the buy now button and join the world's highest-rated development course.</p>",
                prerequisites:
                    "<ul><li><p>No programming experience needed - I'll teach you everything you need to know</p></li><li><p>A Mac or PC computer with access to the internet</p></li><li><p>No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab</p></li><li><p>I'll walk you through, step-by-step how to get all the software installed and set up</p></li></ul>",
                perks:
                    "<ul><li><p><span>You will master the Python programming language by building 100 unique projects over 100 days.</span></p></li><li><p><span>You will learn automation, game, app and web development, data science and machine learning all using Python.</span></p></li><li><p><span>You will be able to program in Python professionally</span></p></li><li><p><span>You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.</span></p></li><li><p><span>Create a portfolio of 100 Python projects to apply for developer jobs</span></p></li><li><p><span>Be able to build fully fledged websites and web apps with Python</span></p></li><li><p><span>Be able to use Python for data science and machine learning</span></p></li><li><p><span>Build games like Blackjack, Pong and Snake using Python</span></p></li><li><p><span>Build GUIs and Desktop applications with Python</span></p></li></ul>",
                whoFor:
                    "<ul><li><p>If you want to learn to code from scratch through building fun and useful projects, then take this course.</p></li><li><p>If you want to start your own startup by building your own websites and web apps.</p></li><li><p>If you are a complete beginner then this course will be everything you need to become a Python professional</p></li><li><p>If you are a seasoned programmer wanting to switch to Python then this is the quickest way. Learn through coding projects.</p></li><li><p>If you are an intermediate Python programmer then you know 100 days of code challenges will help you level up.</p></li></ul>",
                rating: 2.6,
                reviews: [],
                _id: "65f6c7b64d3ce8c2d0c8aacb",
                sections: [
                    {
                        sectionTitle: "Introduction",
                        _id: "65f7ebc74c4327f063440e81",
                        material: [
                            {
                                type: "video",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "Get Started",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
                                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu784f2b93005394529024d1a6e1bf1f37.mp4",
                                duration: 54.195374,
                                passPercentage: 0,
                                _id: "65f7ebf84c4327f063440e9f",
                                quiz: [],
                            },
                        ],
                        videos: [],
                    },
                    {
                        sectionTitle: "DSA",
                        _id: "65f7ebcd4c4327f063440e87",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Algorithms",
                        _id: "65f7ebd54c4327f063440e8e",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Conclusion",
                        _id: "65f7ebd94c4327f063440e96",
                        material: [],
                        videos: [],
                    },
                ],
            },
            {
                author: {
                    name: "Dr. Angela Yu",
                    about:
                        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.\n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu21a40491b14f877492f21fe87c42f379.mp3",
                },
                contentTitle: "Java Crashcourse",
                category: "Coding",
                price: "3097",
                trailer:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu9fa352012f6d54200c20c8dee25f4787.mp4",
                trailerThumbnail:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYuffbe450aa7bfd009945378f02d7f2052.jpeg",
                description:
                    "<p>Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,<strong> the only course you need</strong> to learn to code with Python. With over 500,000 <strong>5 STAR reviews</strong> and a 4.8 average, my courses are some of the HIGHEST&nbsp;RATED courses in the history of Udemy!&nbsp;&nbsp;</p><p><strong>100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.</strong></p><p>At 60+ hours, this Python course is without a doubt the <strong>most comprehensive </strong>Python course available anywhere online. Even if you have <strong>zero</strong> programming experience, this course will take you from <strong>beginner to professional</strong>. Here's why:</p><ul><li><p>The course is taught by the <strong>lead instructor</strong> at the App Brewery, London's <strong>best in-person programming Bootcamp</strong>.</p></li><li><p>The course has been updated and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</p></li><li><p>This course doesn't cut any corners, there are beautiful <strong>animated explanation videos</strong> and tens of <strong>real-world projects</strong> which you will get to build. e.g. Tinder auto swiper, Snake game, Blog Website, LinkedIn Auto Submit Job Application</p></li><li><p>The curriculum was developed over a period of<strong> 2 years</strong>, with comprehensive student testing and feedback.</p></li><li><p>We've taught over 600,000 students how to code and many have gone on to <strong>change their lives </strong>by becoming professional developers or starting their own tech startup.</p></li><li><p>You'll save yourself <strong>over $12,000 </strong>by enrolling, and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming Bootcamp.</p></li><li><p>The course is <strong>constantly updated</strong> with new content, with new projects and modules determined by students - that's you!</p></li></ul><p></p><p>We'll take you <strong>step-by-step</strong> through engaging video tutorials and teach you everything you need to know to succeed as a Python developer.</p><p>The course includes over <strong>65 hours</strong> of HD video tutorials and builds your programming knowledge while making real-world Python projects.</p><p></p><p>Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:</p><ul><li><p>Python 3 - the latest version of Python</p></li><li><p>PyCharm, Jupyter Notebook, Google Colab</p></li><li><p>Python&nbsp;Scripting and Automation</p></li><li><p>Python Game Development</p></li><li><p>Web Scraping</p></li><li><p>Beautiful Soup</p></li><li><p><strong>Selenium</strong> Web Driver</p></li><li><p>Request</p></li><li><p>WTForms</p></li><li><p>Data Science</p></li><li><p>Pandas</p></li><li><p><strong>NumPy</strong></p></li><li><p>Matplotlib</p></li><li><p><strong>Plotly</strong></p></li><li><p>Scikit learn</p></li><li><p>Seaborn</p></li><li><p>Turtle</p></li><li><p>Python GUI Desktop App Development</p></li><li><p><strong>Tkinter</strong></p></li><li><p>Front-End Web Development</p></li><li><p>HTML 5</p></li><li><p>CSS 3</p></li><li><p>Bootstrap 4</p></li><li><p>Bash Command Line</p></li><li><p>Git, <strong>GitHub</strong> and Version Control</p></li><li><p>Backend Web Development</p></li><li><p><strong>Flask</strong></p></li><li><p>REST</p></li><li><p><strong>APIs</strong></p></li><li><p>Databases</p></li><li><p>SQL</p></li><li><p><strong>SQLite</strong></p></li><li><p>PostgreSQL</p></li><li><p>Authentication</p></li><li><p>Web Design</p></li><li><p>Deployment with GitHub Pages, Heroku and GUnicorn</p></li><li><p>and much much more!</p></li></ul><p>By the end of this course, you will be <strong>fluently</strong> programming&nbsp;in Python and you'll be so good at Python that you can get a job or use the language professionally.</p><p>You'll also build a <strong>portfolio</strong> of <strong>100 projects</strong> that you can show off to any potential employer. Including:</p><ul><li><p>Blackjack</p></li><li><p>Snake Game</p></li><li><p>Pong Game</p></li><li><p>Auto Swipe on Tinder</p></li><li><p>Auto Job Applications on LinkedIn</p></li><li><p>Automate Birthday Emails/SMS</p></li><li><p>Fully Fledged Blog Website</p></li><li><p>Build Your Own Public API</p></li><li><p>Data Science with Google Trends</p></li><li><p>Analysing Lego Datasets</p></li><li><p>Google App Store Analysis</p></li><li><p>and much much more!</p></li></ul><p><strong>Sign up today, and look forward to:</strong></p><ul><li><p>Video Lectures</p></li><li><p>Code Challenges and Exercises</p></li><li><p>Fully Fledged Projects</p></li><li><p>Quizzes</p></li><li><p>Programming Resources and Cheatsheets</p></li><li><p>Downloads</p></li><li><p>Our best selling 12 Rules to Learn to Code eBook</p></li><li><p>$12,000+&nbsp;Python Pro Bootcamp&nbsp;course materials and curriculum</p></li></ul><p></p><p>Don't just take my word for it, check out what existing students have to say about my courses:</p><p>\"Angela is just incredible, awesome and just fantastic in this course. I've never had such an instructor; <strong>detailed</strong> in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She's got that ability to make fun while explaining things for better understanding. I really love this course.\" - Ekeu MonkamUlrich</p><p>\"Angela is very thorough without ever being boring. I've taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I've ever had. This course is <strong>packed with thousands of dollars worth of great instruction</strong>, and paced well enough for anyone to pick coding up and run with it- Thank you!\" - J Carlucci</p><p>\"Love the way Angela explains things. Easy to follow and full of logic. I can say she must spend a lot of energy creating this great course. Thank you and I recommend it to all who's interested in coding!\" - Yiqing Zheng</p><p>\"So far (on my third day) this course has taught me <strong>more than I was able to learn in multiple other programming courses</strong>. This course is clearly outlined and builds upon itself gradually in an easy to understand way.\" - Normal Ramsey</p><p>\"It's a different approach to teaching Web Development. I like that you are <strong>given everything possible to succeed</strong> from the onset.\" - Ronick Thomas</p><p>The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talking to herself, but she is actually explaining things. She keeps on giving really useful hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me remember and understand things better. - Peter Dlugos</p><p></p><p></p><p><strong>REMEMBER… I'm so confident that you'll love this course that&nbsp;we're offering a FULL money-back guarantee for&nbsp;30 days! So it's a complete no-brainer, sign up today with ZERO&nbsp;risk and EVERYTHING to gain.</strong></p><p>So what are you waiting for?&nbsp;Click the buy now button and join the world's highest-rated development course.</p>",
                prerequisites:
                    "<ul><li><p>No programming experience needed - I'll teach you everything you need to know</p></li><li><p>A Mac or PC computer with access to the internet</p></li><li><p>No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab</p></li><li><p>I'll walk you through, step-by-step how to get all the software installed and set up</p></li></ul>",
                perks:
                    "<ul><li><p><span>You will master the Python programming language by building 100 unique projects over 100 days.</span></p></li><li><p><span>You will learn automation, game, app and web development, data science and machine learning all using Python.</span></p></li><li><p><span>You will be able to program in Python professionally</span></p></li><li><p><span>You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.</span></p></li><li><p><span>Create a portfolio of 100 Python projects to apply for developer jobs</span></p></li><li><p><span>Be able to build fully fledged websites and web apps with Python</span></p></li><li><p><span>Be able to use Python for data science and machine learning</span></p></li><li><p><span>Build games like Blackjack, Pong and Snake using Python</span></p></li><li><p><span>Build GUIs and Desktop applications with Python</span></p></li></ul>",
                whoFor:
                    "<ul><li><p>If you want to learn to code from scratch through building fun and useful projects, then take this course.</p></li><li><p>If you want to start your own startup by building your own websites and web apps.</p></li><li><p>If you are a complete beginner then this course will be everything you need to become a Python professional</p></li><li><p>If you are a seasoned programmer wanting to switch to Python then this is the quickest way. Learn through coding projects.</p></li><li><p>If you are an intermediate Python programmer then you know 100 days of code challenges will help you level up.</p></li></ul>",
                rating: 2.6,
                reviews: [],
                _id: "65f6c7b64d3ce8c2d0c8aacb",
                sections: [
                    {
                        sectionTitle: "Introduction",
                        _id: "65f7ebc74c4327f063440e81",
                        material: [
                            {
                                type: "video",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "Get Started",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
                                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu784f2b93005394529024d1a6e1bf1f37.mp4",
                                duration: 54.195374,
                                passPercentage: 0,
                                _id: "65f7ebf84c4327f063440e9f",
                                quiz: [],
                            },
                        ],
                        videos: [],
                    },
                    {
                        sectionTitle: "DSA",
                        _id: "65f7ebcd4c4327f063440e87",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Algorithms",
                        _id: "65f7ebd54c4327f063440e8e",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Conclusion",
                        _id: "65f7ebd94c4327f063440e96",
                        material: [],
                        videos: [],
                    },
                ],
            },
            {
                author: {
                    name: "Dr. Angela Yu",
                    about:
                        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.\n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu21a40491b14f877492f21fe87c42f379.mp3",
                },
                contentTitle: "DotNet Crashcourse",
                category: "design",
                price: "3097",
                trailer:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu9fa352012f6d54200c20c8dee25f4787.mp4",
                trailerThumbnail:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYuffbe450aa7bfd009945378f02d7f2052.jpeg",
                description:
                    "<p>Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,<strong> the only course you need</strong> to learn to code with Python. With over 500,000 <strong>5 STAR reviews</strong> and a 4.8 average, my courses are some of the HIGHEST&nbsp;RATED courses in the history of Udemy!&nbsp;&nbsp;</p><p><strong>100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.</strong></p><p>At 60+ hours, this Python course is without a doubt the <strong>most comprehensive </strong>Python course available anywhere online. Even if you have <strong>zero</strong> programming experience, this course will take you from <strong>beginner to professional</strong>. Here's why:</p><ul><li><p>The course is taught by the <strong>lead instructor</strong> at the App Brewery, London's <strong>best in-person programming Bootcamp</strong>.</p></li><li><p>The course has been updated and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</p></li><li><p>This course doesn't cut any corners, there are beautiful <strong>animated explanation videos</strong> and tens of <strong>real-world projects</strong> which you will get to build. e.g. Tinder auto swiper, Snake game, Blog Website, LinkedIn Auto Submit Job Application</p></li><li><p>The curriculum was developed over a period of<strong> 2 years</strong>, with comprehensive student testing and feedback.</p></li><li><p>We've taught over 600,000 students how to code and many have gone on to <strong>change their lives </strong>by becoming professional developers or starting their own tech startup.</p></li><li><p>You'll save yourself <strong>over $12,000 </strong>by enrolling, and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming Bootcamp.</p></li><li><p>The course is <strong>constantly updated</strong> with new content, with new projects and modules determined by students - that's you!</p></li></ul><p></p><p>We'll take you <strong>step-by-step</strong> through engaging video tutorials and teach you everything you need to know to succeed as a Python developer.</p><p>The course includes over <strong>65 hours</strong> of HD video tutorials and builds your programming knowledge while making real-world Python projects.</p><p></p><p>Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:</p><ul><li><p>Python 3 - the latest version of Python</p></li><li><p>PyCharm, Jupyter Notebook, Google Colab</p></li><li><p>Python&nbsp;Scripting and Automation</p></li><li><p>Python Game Development</p></li><li><p>Web Scraping</p></li><li><p>Beautiful Soup</p></li><li><p><strong>Selenium</strong> Web Driver</p></li><li><p>Request</p></li><li><p>WTForms</p></li><li><p>Data Science</p></li><li><p>Pandas</p></li><li><p><strong>NumPy</strong></p></li><li><p>Matplotlib</p></li><li><p><strong>Plotly</strong></p></li><li><p>Scikit learn</p></li><li><p>Seaborn</p></li><li><p>Turtle</p></li><li><p>Python GUI Desktop App Development</p></li><li><p><strong>Tkinter</strong></p></li><li><p>Front-End Web Development</p></li><li><p>HTML 5</p></li><li><p>CSS 3</p></li><li><p>Bootstrap 4</p></li><li><p>Bash Command Line</p></li><li><p>Git, <strong>GitHub</strong> and Version Control</p></li><li><p>Backend Web Development</p></li><li><p><strong>Flask</strong></p></li><li><p>REST</p></li><li><p><strong>APIs</strong></p></li><li><p>Databases</p></li><li><p>SQL</p></li><li><p><strong>SQLite</strong></p></li><li><p>PostgreSQL</p></li><li><p>Authentication</p></li><li><p>Web Design</p></li><li><p>Deployment with GitHub Pages, Heroku and GUnicorn</p></li><li><p>and much much more!</p></li></ul><p>By the end of this course, you will be <strong>fluently</strong> programming&nbsp;in Python and you'll be so good at Python that you can get a job or use the language professionally.</p><p>You'll also build a <strong>portfolio</strong> of <strong>100 projects</strong> that you can show off to any potential employer. Including:</p><ul><li><p>Blackjack</p></li><li><p>Snake Game</p></li><li><p>Pong Game</p></li><li><p>Auto Swipe on Tinder</p></li><li><p>Auto Job Applications on LinkedIn</p></li><li><p>Automate Birthday Emails/SMS</p></li><li><p>Fully Fledged Blog Website</p></li><li><p>Build Your Own Public API</p></li><li><p>Data Science with Google Trends</p></li><li><p>Analysing Lego Datasets</p></li><li><p>Google App Store Analysis</p></li><li><p>and much much more!</p></li></ul><p><strong>Sign up today, and look forward to:</strong></p><ul><li><p>Video Lectures</p></li><li><p>Code Challenges and Exercises</p></li><li><p>Fully Fledged Projects</p></li><li><p>Quizzes</p></li><li><p>Programming Resources and Cheatsheets</p></li><li><p>Downloads</p></li><li><p>Our best selling 12 Rules to Learn to Code eBook</p></li><li><p>$12,000+&nbsp;Python Pro Bootcamp&nbsp;course materials and curriculum</p></li></ul><p></p><p>Don't just take my word for it, check out what existing students have to say about my courses:</p><p>\"Angela is just incredible, awesome and just fantastic in this course. I've never had such an instructor; <strong>detailed</strong> in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She's got that ability to make fun while explaining things for better understanding. I really love this course.\" - Ekeu MonkamUlrich</p><p>\"Angela is very thorough without ever being boring. I've taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I've ever had. This course is <strong>packed with thousands of dollars worth of great instruction</strong>, and paced well enough for anyone to pick coding up and run with it- Thank you!\" - J Carlucci</p><p>\"Love the way Angela explains things. Easy to follow and full of logic. I can say she must spend a lot of energy creating this great course. Thank you and I recommend it to all who's interested in coding!\" - Yiqing Zheng</p><p>\"So far (on my third day) this course has taught me <strong>more than I was able to learn in multiple other programming courses</strong>. This course is clearly outlined and builds upon itself gradually in an easy to understand way.\" - Normal Ramsey</p><p>\"It's a different approach to teaching Web Development. I like that you are <strong>given everything possible to succeed</strong> from the onset.\" - Ronick Thomas</p><p>The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talking to herself, but she is actually explaining things. She keeps on giving really useful hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me remember and understand things better. - Peter Dlugos</p><p></p><p></p><p><strong>REMEMBER… I'm so confident that you'll love this course that&nbsp;we're offering a FULL money-back guarantee for&nbsp;30 days! So it's a complete no-brainer, sign up today with ZERO&nbsp;risk and EVERYTHING to gain.</strong></p><p>So what are you waiting for?&nbsp;Click the buy now button and join the world's highest-rated development course.</p>",
                prerequisites:
                    "<ul><li><p>No programming experience needed - I'll teach you everything you need to know</p></li><li><p>A Mac or PC computer with access to the internet</p></li><li><p>No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab</p></li><li><p>I'll walk you through, step-by-step how to get all the software installed and set up</p></li></ul>",
                perks:
                    "<ul><li><p><span>You will master the Python programming language by building 100 unique projects over 100 days.</span></p></li><li><p><span>You will learn automation, game, app and web development, data science and machine learning all using Python.</span></p></li><li><p><span>You will be able to program in Python professionally</span></p></li><li><p><span>You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.</span></p></li><li><p><span>Create a portfolio of 100 Python projects to apply for developer jobs</span></p></li><li><p><span>Be able to build fully fledged websites and web apps with Python</span></p></li><li><p><span>Be able to use Python for data science and machine learning</span></p></li><li><p><span>Build games like Blackjack, Pong and Snake using Python</span></p></li><li><p><span>Build GUIs and Desktop applications with Python</span></p></li></ul>",
                whoFor:
                    "<ul><li><p>If you want to learn to code from scratch through building fun and useful projects, then take this course.</p></li><li><p>If you want to start your own startup by building your own websites and web apps.</p></li><li><p>If you are a complete beginner then this course will be everything you need to become a Python professional</p></li><li><p>If you are a seasoned programmer wanting to switch to Python then this is the quickest way. Learn through coding projects.</p></li><li><p>If you are an intermediate Python programmer then you know 100 days of code challenges will help you level up.</p></li></ul>",
                rating: 2.6,
                reviews: [],
                _id: "65f6c7b64d3ce8c2d0c8aacb",
                sections: [
                    {
                        sectionTitle: "Introduction",
                        _id: "65f7ebc74c4327f063440e81",
                        material: [
                            {
                                type: "video",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "Get Started",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
                                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu784f2b93005394529024d1a6e1bf1f37.mp4",
                                duration: 54.195374,
                                passPercentage: 0,
                                _id: "65f7ebf84c4327f063440e9f",
                                quiz: [],
                            },
                        ],
                        videos: [],
                    },
                    {
                        sectionTitle: "DSA",
                        _id: "65f7ebcd4c4327f063440e87",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Algorithms",
                        _id: "65f7ebd54c4327f063440e8e",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Conclusion",
                        _id: "65f7ebd94c4327f063440e96",
                        material: [],
                        videos: [],
                    },
                ],
            },
            {
                author: {
                    name: "Dr. Angela Yu",
                    about:
                        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.\n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu21a40491b14f877492f21fe87c42f379.mp3",
                },
                contentTitle: "C++ Crashcourse",
                category: "Coding",
                price: "3097",
                trailer:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu9fa352012f6d54200c20c8dee25f4787.mp4",
                trailerThumbnail:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYuffbe450aa7bfd009945378f02d7f2052.jpeg",
                description:
                    "<p>Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,<strong> the only course you need</strong> to learn to code with Python. With over 500,000 <strong>5 STAR reviews</strong> and a 4.8 average, my courses are some of the HIGHEST&nbsp;RATED courses in the history of Udemy!&nbsp;&nbsp;</p><p><strong>100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.</strong></p><p>At 60+ hours, this Python course is without a doubt the <strong>most comprehensive </strong>Python course available anywhere online. Even if you have <strong>zero</strong> programming experience, this course will take you from <strong>beginner to professional</strong>. Here's why:</p><ul><li><p>The course is taught by the <strong>lead instructor</strong> at the App Brewery, London's <strong>best in-person programming Bootcamp</strong>.</p></li><li><p>The course has been updated and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</p></li><li><p>This course doesn't cut any corners, there are beautiful <strong>animated explanation videos</strong> and tens of <strong>real-world projects</strong> which you will get to build. e.g. Tinder auto swiper, Snake game, Blog Website, LinkedIn Auto Submit Job Application</p></li><li><p>The curriculum was developed over a period of<strong> 2 years</strong>, with comprehensive student testing and feedback.</p></li><li><p>We've taught over 600,000 students how to code and many have gone on to <strong>change their lives </strong>by becoming professional developers or starting their own tech startup.</p></li><li><p>You'll save yourself <strong>over $12,000 </strong>by enrolling, and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming Bootcamp.</p></li><li><p>The course is <strong>constantly updated</strong> with new content, with new projects and modules determined by students - that's you!</p></li></ul><p></p><p>We'll take you <strong>step-by-step</strong> through engaging video tutorials and teach you everything you need to know to succeed as a Python developer.</p><p>The course includes over <strong>65 hours</strong> of HD video tutorials and builds your programming knowledge while making real-world Python projects.</p><p></p><p>Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:</p><ul><li><p>Python 3 - the latest version of Python</p></li><li><p>PyCharm, Jupyter Notebook, Google Colab</p></li><li><p>Python&nbsp;Scripting and Automation</p></li><li><p>Python Game Development</p></li><li><p>Web Scraping</p></li><li><p>Beautiful Soup</p></li><li><p><strong>Selenium</strong> Web Driver</p></li><li><p>Request</p></li><li><p>WTForms</p></li><li><p>Data Science</p></li><li><p>Pandas</p></li><li><p><strong>NumPy</strong></p></li><li><p>Matplotlib</p></li><li><p><strong>Plotly</strong></p></li><li><p>Scikit learn</p></li><li><p>Seaborn</p></li><li><p>Turtle</p></li><li><p>Python GUI Desktop App Development</p></li><li><p><strong>Tkinter</strong></p></li><li><p>Front-End Web Development</p></li><li><p>HTML 5</p></li><li><p>CSS 3</p></li><li><p>Bootstrap 4</p></li><li><p>Bash Command Line</p></li><li><p>Git, <strong>GitHub</strong> and Version Control</p></li><li><p>Backend Web Development</p></li><li><p><strong>Flask</strong></p></li><li><p>REST</p></li><li><p><strong>APIs</strong></p></li><li><p>Databases</p></li><li><p>SQL</p></li><li><p><strong>SQLite</strong></p></li><li><p>PostgreSQL</p></li><li><p>Authentication</p></li><li><p>Web Design</p></li><li><p>Deployment with GitHub Pages, Heroku and GUnicorn</p></li><li><p>and much much more!</p></li></ul><p>By the end of this course, you will be <strong>fluently</strong> programming&nbsp;in Python and you'll be so good at Python that you can get a job or use the language professionally.</p><p>You'll also build a <strong>portfolio</strong> of <strong>100 projects</strong> that you can show off to any potential employer. Including:</p><ul><li><p>Blackjack</p></li><li><p>Snake Game</p></li><li><p>Pong Game</p></li><li><p>Auto Swipe on Tinder</p></li><li><p>Auto Job Applications on LinkedIn</p></li><li><p>Automate Birthday Emails/SMS</p></li><li><p>Fully Fledged Blog Website</p></li><li><p>Build Your Own Public API</p></li><li><p>Data Science with Google Trends</p></li><li><p>Analysing Lego Datasets</p></li><li><p>Google App Store Analysis</p></li><li><p>and much much more!</p></li></ul><p><strong>Sign up today, and look forward to:</strong></p><ul><li><p>Video Lectures</p></li><li><p>Code Challenges and Exercises</p></li><li><p>Fully Fledged Projects</p></li><li><p>Quizzes</p></li><li><p>Programming Resources and Cheatsheets</p></li><li><p>Downloads</p></li><li><p>Our best selling 12 Rules to Learn to Code eBook</p></li><li><p>$12,000+&nbsp;Python Pro Bootcamp&nbsp;course materials and curriculum</p></li></ul><p></p><p>Don't just take my word for it, check out what existing students have to say about my courses:</p><p>\"Angela is just incredible, awesome and just fantastic in this course. I've never had such an instructor; <strong>detailed</strong> in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She's got that ability to make fun while explaining things for better understanding. I really love this course.\" - Ekeu MonkamUlrich</p><p>\"Angela is very thorough without ever being boring. I've taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I've ever had. This course is <strong>packed with thousands of dollars worth of great instruction</strong>, and paced well enough for anyone to pick coding up and run with it- Thank you!\" - J Carlucci</p><p>\"Love the way Angela explains things. Easy to follow and full of logic. I can say she must spend a lot of energy creating this great course. Thank you and I recommend it to all who's interested in coding!\" - Yiqing Zheng</p><p>\"So far (on my third day) this course has taught me <strong>more than I was able to learn in multiple other programming courses</strong>. This course is clearly outlined and builds upon itself gradually in an easy to understand way.\" - Normal Ramsey</p><p>\"It's a different approach to teaching Web Development. I like that you are <strong>given everything possible to succeed</strong> from the onset.\" - Ronick Thomas</p><p>The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talking to herself, but she is actually explaining things. She keeps on giving really useful hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me remember and understand things better. - Peter Dlugos</p><p></p><p></p><p><strong>REMEMBER… I'm so confident that you'll love this course that&nbsp;we're offering a FULL money-back guarantee for&nbsp;30 days! So it's a complete no-brainer, sign up today with ZERO&nbsp;risk and EVERYTHING to gain.</strong></p><p>So what are you waiting for?&nbsp;Click the buy now button and join the world's highest-rated development course.</p>",
                prerequisites:
                    "<ul><li><p>No programming experience needed - I'll teach you everything you need to know</p></li><li><p>A Mac or PC computer with access to the internet</p></li><li><p>No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab</p></li><li><p>I'll walk you through, step-by-step how to get all the software installed and set up</p></li></ul>",
                perks:
                    "<ul><li><p><span>You will master the Python programming language by building 100 unique projects over 100 days.</span></p></li><li><p><span>You will learn automation, game, app and web development, data science and machine learning all using Python.</span></p></li><li><p><span>You will be able to program in Python professionally</span></p></li><li><p><span>You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.</span></p></li><li><p><span>Create a portfolio of 100 Python projects to apply for developer jobs</span></p></li><li><p><span>Be able to build fully fledged websites and web apps with Python</span></p></li><li><p><span>Be able to use Python for data science and machine learning</span></p></li><li><p><span>Build games like Blackjack, Pong and Snake using Python</span></p></li><li><p><span>Build GUIs and Desktop applications with Python</span></p></li></ul>",
                whoFor:
                    "<ul><li><p>If you want to learn to code from scratch through building fun and useful projects, then take this course.</p></li><li><p>If you want to start your own startup by building your own websites and web apps.</p></li><li><p>If you are a complete beginner then this course will be everything you need to become a Python professional</p></li><li><p>If you are a seasoned programmer wanting to switch to Python then this is the quickest way. Learn through coding projects.</p></li><li><p>If you are an intermediate Python programmer then you know 100 days of code challenges will help you level up.</p></li></ul>",
                rating: 2.6,
                reviews: [],
                _id: "65f6c7b64d3ce8c2d0c8aacb",
                sections: [
                    {
                        sectionTitle: "Introduction",
                        _id: "65f7ebc74c4327f063440e81",
                        material: [
                            {
                                type: "video",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "Get Started",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
                                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu784f2b93005394529024d1a6e1bf1f37.mp4",
                                duration: 54.195374,
                                passPercentage: 0,
                                _id: "65f7ebf84c4327f063440e9f",
                                quiz: [],
                            },
                        ],
                        videos: [],
                    },
                    {
                        sectionTitle: "DSA",
                        _id: "65f7ebcd4c4327f063440e87",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Algorithms",
                        _id: "65f7ebd54c4327f063440e8e",
                        material: [],
                        videos: [],
                    },
                    {
                        sectionTitle: "Conclusion",
                        _id: "65f7ebd94c4327f063440e96",
                        material: [],
                        videos: [],
                    },
                ],
            },
            {
                author: {
                    name: "David Travis",
                    about:
                        "Perhaps you'd like a job in user experience. Or maybe you already work in the field but you've never had any formal training. Or maybe you want to improve your skills in one specific area, like usability testing or expert reviews. I've turned thousands of people into user experience designers and researchers and now you can join their ranks by taking my courses on Udemy.   \n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu3f84debfe8c3b8d03395e9785278b912.mp3",
                },
                contentTitle: "UX design",
                category: "Design",
                price: "2999",
                trailer:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu2abfe91b9c00f1805014a9a4cb9156c9.mp4",
                trailerThumbnail:
                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu2d992503814513c7e15ba26d1c12597a.jpeg",
                description:
                    "<p><em>2023 Edition.</em></p><p>You've just landed on Udemy's highest rated course on user experience (UX). Thousands of user researchers and&nbsp;designers have used this course to kick-start their career in UX. You can do it, too.</p><p><strong>Gain hands-on practice in all the key areas of UX </strong>— from interviewing your users through to prototyping and usability testing your designs.</p><p><strong>Build a UX portfolio to boost your job prospects</strong> as you complete five real-world sample projects.</p><p><strong>Gain industry-recognised certification</strong> by preparing for the BCS Foundation Certificate in User Experience.</p><p>UX Mastery reviewed dozens of online courses in UX, but they gave just one course 10/10: <strong>this one</strong>.</p><p><strong>Build Your UX Portfolio As You Work Through 5 User Research and Design Projects.</strong></p><p>The sample projects in the course include:</p><ul><li><p>Find my pet: a product that allows people to track down wayward pets who have got lost.</p></li><li><p>Tomorrow’s shopping cart: a device that lets customers find any product in a supermarket.</p></li><li><p>Gift Giver, a gift recommendation system based on an extremely accurate product recommendation technology.</p></li><li><p>The Citizen Journalist: a system that will allow ordinary people to film events, take photographs, write a story and create a crowdsourced, online newspaper.</p></li><li><p>The Digital Postcard, an app that will allow users to create and send their own postcard, either by using a photograph they have taken on their phone, or by selecting a professionally taken image of a local beauty spot.</p></li></ul><p><strong><br></strong></p><p><strong>A career in User Experience is one of the most rewarding and challenging jobs in the technology sector.</strong> This online training course will give you the background you need to get started.</p><p><strong>Prepare for the BCS Foundation Certificate in User Experience.</strong></p><p>This course covers the comprehensive syllabus for the BCS Foundation Certificate in User Experience and contains 90 multiple-choice quiz questions to test your knowledge and prepare for the exam. You can take the exam (at extra cost)&nbsp;anywhere in the world at a&nbsp;Pearson Vue exam centre.</p><p><strong>Free bonus offer!</strong></p><ul><li><p><strong>Free bonus #1</strong>: A 81-page student workbook packed with design exercises, tutorials on UX methods, templates to record user research observations, stencils for UI prototypes, a detailed reading list and a glossary of terms..</p></li><li><p><strong>Free bonus #2</strong>: A 417-page, high quality PDF that contains every slide shown on the course. Print this out, load it on your mobile device or keep it handy on your computer: it's your choice.</p></li><li><p><strong>Free bonus #3</strong>: A written transcript of every lecture. Comprising 231 pages and 89,236 words, this document is useful if English isn’t your native language or if you just want a readable and searchable version of the course.</p></li><li><p><strong>Free bonus #4</strong>: 90 multiple-choice quiz questions to test your knowledge as you progress through the course.</p></li><li><p><strong>Free bonus #5</strong>: Access to our thriving Facebook group where you can network with fellow students, ask questions and submit assignments for peer review.</p></li></ul><p></p><p><strong>Download everything</strong>. If you have a slow internet connection, or want to take this course with you on your laptop, smartphone or other portable device, sign up and download all the videos and other course materials now.</p><p><strong>When does it start?</strong></p><p>Today! This is a self-paced course, so you can start anytime and view the lectures anywhere. Sign up now and you could be watching the first video in under 5 minutes.</p><p><strong>How long will it take?</strong></p><p>With over 140 lectures and 9 hours of content, this is the most in-depth course on UX&nbsp;you'll find on Udemy. If you allocate 60-90 mins a day, and do all of the activities, it will take 2-3 weeks to complete. And if you want to spread the course out over a longer period, that’s fine too.</p><p><strong>Is it for me?</strong></p><p>This course is for you if you want to get hands-on practice in all the stages of user experience. Perhaps you’re starting out in the field of user experience. Or maybe you want to transition from your current job role to a career in UX. Whatever your background, you’ll apply your skills to a real world project that will become the first entry in your UX portfolio.</p><p><strong>What if I get stuck?</strong></p><p>As you move through each of the steps in the design process, you’ll be able to test your knowledge and compare your work with other students so you can see what “good” looks like. I review the course forum every day and I answer all student questions within 24 hours. So if you struggle with any of the material, just ask a question and I'll help you out.</p><p><strong>Can’t I learn this stuff from a book?</strong></p><p>It’s certainly possible to build your user experience expertise by reading books and blog posts, but that can be a slow process and it makes it hard to see the big picture. With this workshop, it’s you and me together working for a client, and I’m giving you the same tips, the same advice, and sharing the same techniques I’ve learned over the years on hundreds of design projects.</p><p><strong>What if I don't like it?</strong></p><p>Over 17,000 people have taken this online course and over 90% of students give it 4 or 5 stars, so I'm confident that you'll love this course. Just in case, I offer a 30-day, no questions asked, money-back guarantee. So sign up today, it's risk free!</p><p>Kick start your career in user experience with this 12-hour, online, video training course</p>",
                prerequisites:
                    "<ul><li><p>You don't need a background in user experience, design or coding to take this course.</p></li><li><p>This is an in-depth course. If you allocate 60-90 mins a day, and do all of the activities, it will take 2-3 weeks to complete.</p></li></ul>",
                perks:
                    "<ul><li><p><span>Bake UX into your workflow by following a proven, user centred design framework.</span></p></li><li><p><span>Plan field visits and user interviews to uncover user needs.</span></p></li><li><p><span>Moderate a usability test and prioritise the observations.</span></p></li><li><p><span>Create personas, user stories, red routes and user journey maps.</span></p></li><li><p><span>Uncover and describe users’ mental models.</span></p></li><li><p><span>Choose appropriate schemes for classifying and organising information.</span></p></li><li><p><span>Design and conduct online and offline card sorting sessions.</span></p></li><li><p><span>Select appropriate user interface design patterns.</span></p></li><li><p><span>Develop cheap, throwaway prototypes to get quick and frequent feedback from your users.</span></p></li><li><p><span>Create user interface designs that exploit universal principles of visual design.</span></p></li><li><p><span>Design usability tests to measure time on task, success rate and user satisfaction.</span></p></li><li><p><span>Evaluate the usability of systems by applying usability heuristics.</span></p></li><li><p><span>Prepare for the BCS Foundation Certificate in User Experience.</span></p></li></ul>",
                whoFor:
                    "<ul><li><p>Anyone who wants to transition from their current job role to a career in user experience.</p></li><li><p>User researchers or designers who want to build their user experience portfolio by applying their skills to a real world design project.</p></li><li><p>Software developers who want to learn techniques for designing more engaging systems.</p></li><li><p>Project managers and Scrum Masters who want a full lifecycle process for introducing usability into their design project.</p></li><li><p>Interface designers who want to learn methods for testing and evaluating their designs.</p></li><li><p>Web site designers who want to understand the principles of human-centred design.</p></li><li><p>Marketing managers who want to find out about the business and brand benefits of user experience.</p></li><li><p>Business analysts who want quick and effective tools for communicating requirements of users.</p></li></ul>",
                rating: 2.6,
                reviews: [],
                _id: "65f7a4f14c4327f063440e6c",
                sections: [],
            },
        ],
        "imageWithOverlay": {
            "title": "28 free call to action templates",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi voluptatibus. Blanditiis vero aliquid adipisci, quo dicta modi explicabo quas..",
            "image": "https://img.freepik.com/free-vector/gradient-beautiful-landscape_23-2149122376.jpg?w=826&t=st=1715408749~exp=1715409349~hmac=7bbc9f70ab67b5973712a22780c47540219c3a5317f69dec9ba87553f8e95af9",
            "CtaName": "Know More",
            "CtaLink": "www.google.com"
        },
        "dataSlate": {
            "title": "Test Data Slate",
            "dataName1": "Monthly Users",
            "value1": "50,000",
            "dataName2": "Customers",
            "value2": "3Cr+",
            "dataName3": "Happy Customers",
            "value3": "1,00,000"
        },
        "featuredContents": [
            {
                "title": "Test Content",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quia nisi incidunt ab, dignissimos sint? Eum harum sed id optio? Dolorum ex laudantium facilis veritatis assumenda, similique natus laborum voluptatum.",
                "image": "https://media.istockphoto.com/id/2012747478/photo/businessman-computer-or-programming-code-in-night-office-for-software-development.jpg?s=2048x2048&w=is&k=20&c=hpdMAKyO26EFAJ-xB_w0SWCIshT0LN5OF3Kp4eVEWsk=",
                "CtaName": "Apply Now",
                "CtaLink": "www.google.com",
                "_id": "6645a1bb0ffcc96fe8badb39"
            },
            {
                "title": "Test Content",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quia nisi incidunt ab, dignissimos sint? Eum harum sed id optio? Dolorum ex laudantium facilis veritatis assumenda, similique natus laborum voluptatum.",
                "image": "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlciUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                "CtaName": "Apply",
                "CtaLink": "www.google.com",
                "_id": "6645a1fe0ffcc96fe8badb64"
            },
            {
                "title": "Featured",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quia nisi incidunt ab, dignissimos sint? Eum harum sed id optio? Dolorum ex laudantium facilis veritatis assumenda, similique natus laborum voluptatum.",
                "image": "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlciUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                "CtaName": "Apply",
                "CtaLink": "www.google.com",
                "_id": "6645a2620ffcc96fe8badb90"
            }
        ],
        "styles": {
            "primary": "#6200ee",
            "secondary": "#bb86fc",
            "innerText": "#fff",
            "uiMode": `snowfall`,
            "font": "Lato",
            "gradient": {
                "to": "#6200ee66",
                "from": "#6200ee99",
                "via": "#1F66DE"
            }
        },
        "theme": "third-theme",
        "testimonials": [
            {
                "description": "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
                "user": "Nitish"
            },
            {
                "description": "LMS empowers educators to create and sell courses effortlessly. A game-changer!",
                "user": "Nitish"
            },
            {
                "description": "LMS provides the key to unlocking new heights in online education. Exceptional!",
                "user": "Nitish"
            }
        ],
        "faq": [
            {
                "question": "What are some good FAQ questions?",
                "answer": "Some common examples include questions about service hours, shipping and handling, product details, return policies, etc., depending on the industry. You can have different FAQ sections for different pages of your website. Your FAQ page demonstrates how well you understand your customers."
            },
            {
                "question": "How do you answer FAQ questions?",
                "answer": "What is General FAQ? It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies."
            },
            {
                "question": "Why is FAQ important?",
                "answer": "Visitors will primarily use your site menus to navigate through your site, but an FAQ page can also serve as a way to point them where they need to go—whether that's a product page, a whitepaper, or a blog post they might not have found otherwise."
            }
        ],

        banners: [
            {
                title: "Banner1",
                link: "http://res.cloudinary.com/dwmwpmrpo/image/upload/v1716537558/bhq4t8xtbmxoklzwbvsk.jpg",

            },
            {
                title: "Banner2",
                link: "http://res.cloudinary.com/dwmwpmrpo/image/upload/v1716537586/djy1lht0kxpkrx5hjsw5.jpg",
                _id: "65f6fd204c4327f063440e59",

            },
            {
                title: "Banner3",
                link: "http://res.cloudinary.com/dwmwpmrpo/image/upload/v1716537673/tmmr5scrqmawozppkr1s.jpg",

            },
            {
                title: "Banner4",
                _id: "65f6fd204c4327f063440e59",
                link: "http://res.cloudinary.com/dwmwpmrpo/image/upload/v1716537694/lmunsecyfpkdu0hmraho.jpg",
                // _id: "65f6fd204c4327f063440e59",
            },
            {
                title: "Banner4",
                _id: "65f6fd204c4327f063440e59",
                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYue55f667a86e2bbf02160f0d4b6e07716.jpeg",
                // _id: "65f6fd204c4327f063440e59",
            },
        ],
    };

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
    ];

    const getBusiness = async () => {
        // const res = await axiosInstance.get(
        //   CONST.uri.business.GET_BUSINESS + `/${currSite}`
        // );
        setBusiness(bis);
        // console.log(res.data);
        setFeatured(bis.content[0]);
        dispatch(setCurrTheme(bis?.styles?.uiMode));
        dispatch(setCurrFont(bis?.styles?.font));

        // Split the theme into theme and font
        // const [color, theme, font] = bis.theme.split("-");
        // dispatch(setCurrTheme(color + "-" + theme));
        // dispatch(setCurrFont(font));
        setIsLoading(false);
    };


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

    const handleMobileScreen = () => {
        setIsMobileScreen(window.innerWidth < 768)
    }

    useEffect(() => {
        getBusiness();

        window.addEventListener("resize", handleMobileScreen)

        return () => {
            window.removeEventListener("resize", handleMobileScreen)
        }


    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoPlay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (_, next) => {
            // setOldSlide(current);
            setActiveSlide(next);
        },
    };




    // slider next button 
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", marginRight: "15px" }}
                onClick={onClick}
            />
        );
    }

    // slider previous button 

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", marginLeft: "10px" }}
                onClick={onClick}
            />
        );
    }



    const faqs = [
        {
            qustion: "What are some good FAQ questions?",
            answer: "Some common examples include questions about service hours, shipping and handling, product details, return policies, etc., depending on the industry. You can have different FAQ sections for different pages of your website. Your FAQ page demonstrates how well you understand your customers."
        },
        {
            qustion: "How do you answer FAQ questions?",
            answer: "What is General FAQ? It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies."
        },
        {
            qustion: "Why is FAQ important?",
            answer: "Visitors will primarily use your site menus to navigate through your site, but an FAQ page can also serve as a way to point them where they need to go—whether that's a product page, a whitepaper, or a blog post they might not have found otherwise"
        },
    ]

    const featuredSectionData = [
        {
            image: "https://media.istockphoto.com/id/2012747478/photo/businessman-computer-or-programming-code-in-night-office-for-software-development.jpg?s=2048x2048&w=is&k=20&c=hpdMAKyO26EFAJ-xB_w0SWCIshT0LN5OF3Kp4eVEWsk=",
            description:
                "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlciUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            description:
                "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlciUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            description:
                "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
        },
        {
            image: "https://media.istockphoto.com/id/1329913812/photo/banking-icon-concept.webp?b=1&s=170667a&w=0&k=20&c=dstcrqIfWnIum4pulyoDSc2NAtaFD4y0nvmaERGszC4=",
            description:
                "LMS turned my courses into interactive journeys. Quick, easy, and impactful.",
        },
    ]

    const { font, primary, secondary, gradient: { from, via, to }, innerText } = bis?.styles;



    return (
        <div
            className="bg-background"
            style={{ ...inlineStyle, "--primary": primary, "--secondary": secondary, "--slider-indicators": primary, "--slider-indicators-muted": secondary, }}
            data-theme={currTheme}
            id={business?.theme}

        // ref={nahiHoRhaTheme}
        >



            {/* mobile navbar  */}
            <div className={`h-screen fixed top-0 z-[1000] w-[60%] transition-all duration-200 ${" bg-backgroundInverted text-inverted"}`} style={activeNav ? { right: "0%" } : { right: "-60%" }}>
                <div className="mt-2  flex items-center justify-end">
                    <HiMiniXMark onClick={() => setActiveNav(false)} size={35} className="m-2" />
                </div>
                <div className="flex flex-col p-8 text-xl gap-4">
                    <a href="#" className="text-xl ">About Us</a>
                    <a href="#" className="text-xl">Services</a>
                    <button className={`w-fit  border-2 px-4 py-2 text-sm border-primary`}>Login</button>
                </div>
            </div>


            {/* banner */}

            <div className={`bg-background`}>
                <nav className={`fixed top-0 left-0 bg-background  w-full py-3 px-8 text-base flex items-center justify-between shadow-sm shadow-shadow  z-[1000]`}>
                    <div>
                        <h1 className={`text-2xl`}>Bridge <span className="text-[#5070fd]">YU</span> </h1>
                    </div>
                    <div className={`hidden lg:flex items-center gap-4 text-muted`}>
                        <a href="#" className="hover:text-primary text-base">About Us</a>
                        <a href="#" className="hover:text-primary">Services</a>
                        <a href="#" className="hover:text-primary">Contact Us</a>
                        <button className={`rounded-lg px-4 py-2 "}`} style={{ color: innerText, background: primary }}>Login</button>
                    </div>

                    <HiBars3 size={35} onClick={() => setActiveNav(true)} className="relative z-[999] lg:hidden fill-base" />
                </nav>


                {/* banner section  */}

                <InView rootMargin="-70px 0px" onChange={(inView) => setChangeNavBg(!inView)}>

                    <div className="h-[40vh] lg:h-screen mt-[59px] relative lg:mt-[64px] bg-primary" >
                        {
                            business?.banners?.map((item, index, arr) => (
                                <div key={index} className={`w-full h-full circle-clip  absolute inset-0 ${activeBanner === index && "active"}`} style={{ zIndex: arr.length - index }}>
                                    <img src={item?.link} className="w-full h-full object-cover" alt="" />
                                </div>
                            ))
                        }

                        <FaCircleChevronLeft className="absolute z-[999] top-1/2 left-[2%] fill-primary -translate-y-1/2 cursor-pointer" onClick={() => {
                            setActiveBanner(activeBanner == 0 ? business?.banners?.length - 1 : activeBanner - 1)
                        }} size={30} />
                        <FaCircleChevronRight className="absolute cursor-pointer z-[999] top-1/2 right-[2%] fill-primary -translate-y-1/2" onClick={() => {
                            setActiveBanner(activeBanner == business?.banners?.length - 1 ? 0 : activeBanner + 1)
                        }} size={30} />


                        <div className="absolute bottom-[2%]  w-full flex items-center justify-center gap-2 z-[10]">
                            {
                                business?.banners?.map((item, index) => (
                                    <span onClick={() => setActiveBanner(index)} className={`inline-block size-3 custom-transition rounded-full  cursor-pointer ${activeBanner == index ? "bg-primary" : "bg-secondary opacity-80 scale-75"}`}></span>
                                ))
                            }

                        </div>
                    </div>


                </InView>


            </div>


            {/* <div className={`${changeNavBg ? "bg-white" : "bg-[#02041e]"}`}>
                <nav className={`fixed top-0 left-0  w-full py-4 px-8 text-white flex items-center justify-between  z-[100] ${changeNavBg ? "bg-white border-b-[.5px] border-black" : "bg-[#02041e]"}`}>
                    <div>
                        <h1 className={` ${changeNavBg ? "text-black" : "text-white"} text-2xl`}>Bridge <span className="text-[#5070fd]">YU</span> </h1>
                    </div>
                    <div className={`hidden lg:flex items-center gap-4 ${changeNavBg ? "text-black" : "text-white"}`}>
                        <a href="#" className="text-[#1378ea] hover:text-[#1378ea]">About Us</a>
                        <a href="#" className="hover:text-[#1378ea]">Services</a>
                        <a href="#" className="hover:text-[#1378ea]">Contact Us</a>
                        <button className={`rounded-lg px-4 py-1 hover:shadow-md text-white  hover:shadow-white ${changeNavBg ? "bg-[#02041e]" : "bg-[#0862ea]"}`}>Login</button>
                    </div>

                    <HiBars3 size={35} onClick={() => setActiveNav(true)} className="relative z-[999] lg:hidden" style={changeNavBg ? { fill: "black" } : { fill: "white" }} />
                </nav>

                
                

                
            </div> */}


            {/* <Separator className="mt-8" /> */}
            {/* featured section */}

            {
                featured?.contentTitle != null && (
                    <div className="mt-12 mx-8 text-base">
                        <p className="font-extrabold text-2xl text-center">Our top picks for you</p>
                        <div className="text-sm text-muted text-center mt-2 font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, tempore</div>
                        <div className="my-8 md:flex justify-around gap-8 md:my-14">
                            <div className="md:basis-[40%]">
                                <img src={featured.trailerThumbnail} className="rounded-xl" alt="" />
                            </div>
                            <div className="mt-4 md:basis-[40%]">
                                <div className="font-bold text-2xl flex items-center justify-between ">
                                    <h1>{featured.contentTitle}</h1>
                                    <div style={{ background: primary, color: innerText }} className="flex items-center gap-2  rounded-md px-4 py-2 font-extrabold">
                                        <TbCurrencyRupee />
                                        {featured.price}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <StarRating rating={featured.rating} color={secondary} />
                                </div>
                                <div className="mt-4 text-muted text-lg" dangerouslySetInnerHTML={{ __html: setHtmlWithStyle(featured.description.length > 100 ? featured.description.substring(0, 100) + " ..." : featured.description) }}>
                                </div>
                                <div className="mt-4 text-base">
                                    <h2 className="text-xl font-bold">Instructor</h2>
                                    <div className="flex gap-4 mt-4 items-center">
                                        <img src={featured.author.pfp} className="w-14 h-14 rounded-full" alt="" />
                                        <div>
                                            <h2 className="text-bold text-lg">{featured.author.name}</h2>
                                            {/* <p>{featured.author.about}</p> */}
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            onClick={() => {
                                                dispatch(setContent(featured))
                                                window.scrollTo(0, 0)
                                            }}
                                            to={`/${currSite.toLowerCase()}/${featured._id}`}
                                            style={{ color: innerText, background: primary }}
                                            className="p-2 mt-4 rounded-md inline-block">Explore Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="shadow-sm shadow-[#00000046] md:basis-[30%] h-fit rounded-md p-4 mt-8 md:mt-0">
                                <h2 className="font-bold text-xl">This course Includes:</h2>
                                <div className="mt-4">
                                    <div className="flex items-center gap-2 text-[#3b3b3c]"> <FaRegCheckCircle className="fill-[#262568]" /> 52 hours video</div>
                                    <div className="flex items-center gap-2 text-[#3b3b3c]"> <FaRegCheckCircle className="fill-[#262568]" /> 52 hours video</div>
                                    <div className="flex items-center gap-2 text-[#3b3b3c]"> <FaRegCheckCircle className="fill-[#262568]" /> 52 hours video</div>
                                </div>
                                <div className="mt-4 flex items-center justify-center">
                                    <Link onClick={() => dispatch(setContent(featured))}
                                        to={`/${currSite.toLowerCase()}/${featured._id}`} className="bg-[#262665] text-white px-4 py-2 rounded-md">Enroll Course</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )
            }
            {/* <Separator className="mt-8" /> */}

            {/* recommendation  */}

            <div className="my-16 mx-8 text-base">
                <p className="font-extrabold text-2xl text-center">Recommended for you</p>
                <div className="text-sm text-muted text-center mt-2 font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, tempore</div>
                <div className="rounded-lg mt-8 flex flex-wrap gap-8">
                    {" "}
                    {business?.content.map((item, i) => {
                        return (
                            <Link
                                onClick={() => dispatch(setContent(item))}
                                to={`/${currSite.toLowerCase()}/${item._id}`}
                                className="bg-card basis-full md:basis-[45%] lg:basis-[30%] rounded-lg overflow-hidden" key={i}>
                                <div>
                                    <img src={item.trailerThumbnail} alt="" />
                                </div>
                                <div className="p-4 relative">
                                    <small className="text-muted">{item.category}</small>
                                    <h2 className="font-bold text-xl">{item.contentTitle}</h2>
                                    <div className="flex items-center gap-2">
                                        <StarRating rating={item.rating} color={secondary} />
                                        <p>({item.reviews.length})</p>
                                    </div>
                                    <div style={{ background: primary, color: innerText }} className="rounded-full w-[80px] h-[80px]  text-lg flex items-center justify-center absolute right-[5%] top-0 translate-y-[-50%]">
                                        <FaIndianRupeeSign size={15} />

                                        <p className="">{item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* <Separator className="mt-8" /> */}

            {/* testimonial */}

            <div className="my-16 py-8" style={{ background: primary, color: innerText }}>
                <p className="font-extrabold text-2xl text-center">
                    Here&apos;s what our customers have to say{" "}
                </p>

                <div className="bg-background text-base relative rounded-xl max-w-[900px] ml-4 mr-4 my-8 pb-4 md:pb-8 [@media(min-width:900px)]:mx-auto">
                    <Slider {...settings} ref={slider => {
                        sliderRef = slider;
                    }}>
                        {bis?.testimonials.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col items-center p-4 gap-4" >
                                    <ImQuotesLeft size={60} style={{ fill: primary }} />
                                    <p className="text-center capitalize">{item.description}</p>
                                    <div className="text-center">
                                        <p className="font-bold uppercase">Manager</p>
                                        <h2 className="font-normal mt-1 text-lg">{item.name}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="flex items-center justify-center gap-2">
                        {
                            testimonials.map((item, index) => (
                                <span key={index} onClick={e => sliderRef.slickGoTo(index)} className={`inline-block rounded-full size-2  transition-all duration-300 cursor-pointer`} style={activeSlide == index ? { background: primary } : { background: secondary }}></span>
                            ))
                        }
                    </div>

                    <SlArrowLeft onClick={() => sliderRef.slickPrev()} size={30} className="absolute left-[2%] top-1/2 hidden sm:block text-sliderIndicatorsMuted hover:text-sliderIndicators cursor-pointer" />

                    <SlArrowRight onClick={() => sliderRef.slickNext()} size={30} className="absolute right-[2%] top-1/2 hidden sm:block text-sliderIndicatorsMuted hover:text-sliderIndicators cursor-pointer" />
                </div>
            </div>

            {/* faqs  */}

            <div className="my-12 mx-8  text-base">
                <p className="font-extrabold text-2xl text-center">
                    Frequntly Asked Qustions
                </p>
                <div className="text-sm text-muted text-center mt-2 font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, tempore</div>
                <div className="my-8 max-w-[800px] [@media(min-width:800px)]:mx-auto">
                    <div>
                        {
                            faqs.map((item, index) => (
                                <div className="mt-4 rounded-sm overflow-hidden cursor-pointer">
                                    <div className="grow border-t-[3px]" style={{ borderColor: primary }}>
                                        <div className="flex items-center py-2" onClick={() => setSelectedfaq(selectedFaq === index ? false : index)} style={{ background: primary, color: innerText }}>
                                            <h2 className="font-bold p-2  grow">{item.qustion}</h2>
                                            {
                                                selectedFaq === index ? <FaAngleUp className="mx-2" /> : <FaAngleDown className="mx-2" />
                                            }

                                        </div>
                                        <Collapse isOpened={index === selectedFaq}>
                                            <p className="mt-4 px-2 pb-4">{item.answer}</p>
                                        </Collapse>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>


            {/* featured + image section  */}

            {/* <div className="my-8 bg-[#111c2e] py-12 px-4 pb-16 text-white sm:flex justify-around gap-8 items-center overflow-hidden">
                <div className="basis-1/2 lg:basis-[40%]">
                    <h1 className="text-2xl text-white font-bold">About Us</h1>
                    <p className="mt-4 capitalize">We are the leading online training program for designers, programmers and more. Thousands of students connect with skilled professionals through eSkill, and gain hands-on training and real life experience. With more than 20 years of experience in the field, we know what leading companies are looking for when they seek out new hires. We provide the skills you need to learn, grow and succeed.</p>
                    <button className="mt-4 px-8 py-2 border-white border-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 hover:border-black">Our Contact</button>
                </div>

                <InView triggerOnce={true} threshold={1}>
                    {
                        ({ inView, ref, entry }) => (
                            <div ref={ref} className="mt-8 sm:mt-0 relative flex items-center justify-center basis-1/2 lg:basis-[30%]">
                                <div className="overflow-hidden">

                                    <img src="https://assets.nicepagecdn.com/11a8ddce/6069102/images/young-woman-using-virtual-reality-headset-medium-shot.jpg" className={`rounded-full aspect-square w-[90%]  transition-all duration-300 ${inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} alt="" />
                                </div>
                                <div className={`absolute -bottom-[10%]   aspect-square transition-all duration-500 w-[40%] bg-[#f0974f] rounded-full ${inView ? "right-0 opacity-100" : "-right-1/2 opacity-0"}`}>
                                </div>
                                <div className={`absolute -bottom-[10%] aspect-square w-[40%] bg-[#8a5cd9] -translate-x-1/2 duration-300 rounded-full transition-all ${inView ? "right-0 opacity-100" : "-right-1/2 opacity-0"}`}>
                                </div>

                            </div>
                        )
                    }
                </InView>


            </div> */}

            <div className="my-12 py-4 lg:py-8 grid grid-cols-1 lg:grid-cols-2 mx-8">
                <div className=" text-base relative overflow-hidden">
                    {
                        business?.featuredContents?.map((item, index) => (
                            <div className={clsx("lg:w-3/4  transition-all duration-500 inset-0", activeFeaturedSlide === index ? "left-0" : "-left-full opacity-0", isMobileScreen ? index == 0 ? "relative" : "absolute" : index == 0 ? "relative" : "absolute")}>
                                <h1 className="text-2xl font-medium">{item?.title}</h1>
                                <p className="mt-2 text-muted">{item?.description}</p>
                                <Link to={item?.CtaLink} className=" mt-2 py-2 px-4 inline-block" style={{ background: primary, color: innerText }}>{item?.CtaName}</Link>
                            </div>
                        ))
                    }

                </div>
                <div className="slider-container mt-12 lg:mt-0">
                    <Slider
                        className="center"
                        infinite={false}
                        arrows={false}
                        slidesToShow={1}
                        initialSlide={1}
                        centerPadding="100px"
                        centerMode={!isMobileScreen}
                        focusOnSelect={true}
                        ref={(slider) => featuredSliderRef = slider}
                        beforeChange={(current, next) => setActiveFeaturedSlide(next)}


                    >
                        {
                            business?.featuredContents.map((item, index) => (
                                <div key={index} className="w-full h-full aspect-video  wrap-original-transform focus:outline-none">
                                    <img className={clsx("w-fill h-full object-cover aspect-video transition-all duration-300", index > activeFeaturedSlide && "[transform:rotateY(80deg)] origin-left opacity-50", index < activeFeaturedSlide && "[transform:rotateY(-80deg)] origin-right opacity-50")} src={item.image} alt="" />
                                </div>

                            ))
                        }
                    </Slider>

                    <div className="flex items-center justify-center gap-2">
                        {
                            business?.featuredContents.map((item, index) => (
                                <span key={index} onClick={e => featuredSliderRef.slickGoTo(index)} className={`inline-block rounded-full size-2  transition-all duration-300 cursor-pointer`} style={activeFeaturedSlide == index ? { background: primary } : { background: secondary }}></span>
                            ))
                        }
                    </div>
                </div>
            </div>



            {/* counters  */}

            <div className="my-8 mx-4 py-8 px-4  max-w-[800px] [@media(min-width:1000px)]:mx-auto md:my-12 text-base">
                <h1 className="font-extrabold text-2xl  text-center">Lets Crack some Numbers.</h1>

                <div className="grid grid-cols-1 gap-8  my-12 sm:grid-cols-2 place-items-center">
                    {
                        Array.from({ length: 3 }).map((item, index) => (
                            business?.dataSlate[`value${index + 1}`] ?
                                <div key={index} className={`flex flex-col items-center justify-center gap-2  text-base overflow-hidden `}>
                                    <h2 className="font-bold text-4xl"> {
                                        isNaN(Number(business?.dataSlate[`value${index + 1}`])) ? business?.dataSlate[`value${index + 1}`] : <Counter end={Number(business?.dataSlate[`value${index + 1}`])} />
                                    }</h2>
                                    <h3 className="font-bold text-2xl">{business?.dataSlate[`dataName${index + 1}`]}</h3>
                                    <InView onChange={(inView, entry) => {
                                        inView && entry.target.classList.add("group", "is-published");
                                    }}>
                                        <FaLongArrowAltRight size={50} className="transition-all fill-primary duration-300 -translate-x-[200px] delay-300 group-[.is-published]:!translate-x-0" />
                                    </InView>
                                </div> : null
                        ))
                    }

                </div>
            </div>




            {/* call to action button  */}

            <div className="my-8 mx-4 md:mx-8 rounded-xl  relative overflow-hidden" style={{ background: primary }}>
                <img src="https://t4.ftcdn.net/jpg/00/85/48/55/240_F_85485595_XRXdJXNgXgP44F5CnEtVzSUOMU72T0jr.jpg" alt="" className="absolute  z-0 w-full h-full md:left-1/2 md:w-1/2 md:object-cover" />

                <div className="overlay absolute inset-0 z-[10]   md:left-1/2 md:w-1/2" style={{ background: `linear-gradient(to bottom right, ${from} 60%, ${to})` }}>
                </div>

                <div className="relative z-[20]  text-center pt-8 pb-0 px-4 md:flex md:pt-0 md:px-0" style={{ color: innerText }}>
                    <div className="basis-[50%]  md:bg-primary  self-stretch md:pt-8 md:px-4 flex flex-col justify-center">

                        <h1 className="font-normal text-2xl sm:text-4xl mt-2">{business?.imageWithOverlay?.title}</h1>
                        <p className="font-bold mt-2 sm:text-xl">{business?.imageWithOverlay?.title}</p>
                        <div className="flex items-center justify-center">
                            <Link to={business?.imageWithOverlay?.CtaLink} className=" rounded-lg px-8 py-2 mt-4 font-bold" style={{ background: innerText, color: primary }}>{business?.imageWithOverlay?.CtaName}</Link>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 md:mt-0 basis-[50%]">
                        <img src={backImage} className="object-cover w-full h-auto aspect-square max-w-[300px]" alt="" />
                    </div>
                </div>

            </div>


            {/* footer */}
            <footer className=" py-8 px-8 bg-background">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        sections.map((e, i) => (
                            <div key={i} className="">
                                <h2 className="font-bold text-xl text-base">{e.title}</h2>
                                <div className="mt-2 flex flex-col">
                                    {
                                        e.items.map((e, i) => (
                                            <a href="#" key={i} className="text-muted font-bold w-fit border-border">{e}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className="mt-6 xl:mt-0 col-span-2 xl:col-span-1">
                        <h2 className="text-base font-bold text-xl">NewsLetter</h2>
                        <p className="text-muted font-bold mt-2">You can trust us we can send promo messages.</p>
                        <div className="mt-6">
                            <input type="email" className="w-full p-2 text-inverted outline-none border border-border" placeholder="Your Email Address." />
                            <button className="bg-backgroundInverted text-inverted font-bold text-base p-2 mt-2" >Subscribe</button>
                        </div>
                    </div>
                </div>



                <div className="mt-8 md:flex items-center justify-between text-base">
                    <small className=" block mt-4">
                        ©️ 2024 BridgeYU. All rights Reserved
                    </small>
                    <div className="flex gap-2 mt-4 items-center lg:mt-12">
                        {
                            items.map((e, i) => (
                                <a className="bg-backgroundInverted p-2" href={e.link}><e.icon className="text-inverted" size={18} /></a>
                            ))
                        }
                    </div>

                </div>

            </footer>

            {/* scrollToTop Button  */}
            <div className="fixed cursor-pointer bottom-[5%] bg-primary p-2 rounded-full transition-all duration-200 z-[100]" style={changeNavBg ? { right: "3%" } : { right: "-10%" }} onClick={() => window.scrollTo({
                top: 0, left: 0, behavior: "smooth"
            })}>
                <FaArrowUp className="fill-base" size={15} />
            </div>

        </div >
    );
};

export default HomePage;
