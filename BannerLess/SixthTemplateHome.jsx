import React, { useEffect, useState, useRef } from "react";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaIndianRupeeSign, FaXmark } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import Slider from "react-slick";
import {
    setContent,
    setCurrFont,
    setCurrTheme,
} from "../../redux/slices/appSlice";
import { FaFacebook, FaGithub, FaInstagram, FaStar, FaTwitch, FaTwitter } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";
import clsx from "clsx";
import Counter from "../../components/Counter";
import { BsTriangleFill } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h1 from "../../../public/assets/t-6/h1.jpg"
import h2 from "../../../public/assets/t-6/h2.jpg"
import sec1 from "../../../public/assets/t-6/sec1.jpg"
import sec2 from "../../../public/assets/t-6/sec2.jpg"
import bg from "../../../public/assets/t-6/bg.jpg"
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import StarRating from "../../components/StarRating";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Collapse } from "react-collapse";
import CustomSlider from "../../components/CustomSlider"
import { InView } from "react-intersection-observer";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';



const SixthTemplateHome = () => {
    const [business, setBusiness] = useState(null);
    const [featured, setFeatured] = useState({});
    const { currSite } = useSelector((state) => state.app);
    const [isLoading, setIsLoading] = useState(true);
    const { currTheme, currFont } = useSelector((state) => state.app);
    const nahiHoRhaTheme = useRef();
    const dispatch = useDispatch();
    const [showNav, setShowNav] = useState(false)
    const [open, setOpen] = useState(false)
    let sliderRef = useRef(null);
    let testSliderRef = useRef(null);
    let featuredSliderRef = useRef(null)
    const [activeSlide, setActiveSlide] = useState(0);
    const [testActiveSlide, setTestActiveSlide] = useState(0);
    const [featuredActiveSlide, setFeaturedActiveSlide] = useState(0);
    const [showSlides, setShowSlides] = useState(1)
    const [activeFaq, setActiveFaq] = useState(0)
    const [stickNav, setStickNav] = useState(false)
    const [hideNav, setHideNav] = useState(false)




    const next = () => {
        sliderRef.slickNext();
    };

    const prev = () => {
        sliderRef.slickPrev();
    };

    const testimonialNext = () => {
        testSliderRef.slickNext();
    };

    const testimonialPrev = () => {
        testSliderRef.slickPrev();
    };

    const toggle = (index) => {
        if (open === index) {
            return setOpen(false)
        }
        setOpen(index)
    }

    const inlineStyle = {
        fontFamily: currFont,
    };

    const bis = {
        _id: "65dffaa008aacf44c5579563",
        ownerId: "65dffa9208aacf44c557955f",
        business: "DVM",
        sitename: "dvm",
        createdAt: "2024-02-29T03:31:44.095Z",
        updatedAt: "2024-03-18T07:23:36.394Z",
        __v: 0,
        theme: "schooltheme",
        featuredContents: [
            {
                "title": "Visual Designs & Art Director",
                "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Optio Eaque, Commodi In Tempore Ipsa Expedita Facere Voluptatum Odit Accusantium Deleniti.",
                "image": "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/3b51555cfc1f5bf58c84e059/x-min.png",
                "CtaName": "Apply Now",
                "CtaLink": "www.google.com",
                "_id": "6645a1bb0ffcc96fe8badb39"
            },
            {
                "title": "Test content two of featured section",
                "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Optio Eaque, Commodi In Tempore Ipsa Expedita Facere Voluptatum Odit Accusantium Deleniti.",
                "image": "http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715769399/imcxnsrltfz698iq3r8g.png",
                "CtaName": "Apply",
                "CtaLink": "www.google.com",
                "_id": "6645a1fe0ffcc96fe8badb64"
            },
            {
                "title": "Featured",
                "description": "description",
                "image": "https://img.freepik.com/free-photo/university-student-laptop-e-learning-concept_23-2148550676.jpg?size=626&ext=jpg&ga=GA1.1.1109326158.1697181750&semt=sph",
                "CtaName": "Apply",
                "CtaLink": "www.google.com",
                "_id": "6645a2620ffcc96fe8badb90"
            }
        ],
        styles: {
            font: "Roboto",
            gradient: {
                from: "#6571e2",
                via: "#d2daf8",
                to: "#cfd2f2"
            },
            innerText: "#ffffff",
            primary: "#5c66c1",
            secondary: "#eab308",
            uiMode: "charcoal"
        },
        dataSlate: {
            "title": "We created own Digital transform methodlogy.",
            "dataName1": "Monthly Users",
            "value1": "50000",
            "dataName2": "Customers",
            "value2": "3Cr+",
            "dataName3": "Happy Customers",
            "value3": "100000"
        },
        categories: ["coding", "design"],
        content: [
            {
                author: {
                    name: "Dr. Angela Yu",
                    about:
                        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.\n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu21a40491b14f877492f21fe87c42f379.mp3",
                },
                contentTitle: "React Crash Course",
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
                reviews: [
                    {
                        profile: "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FIMG_5439%2B-%2BParth%2BSingh.jpg&w=96&q=75",
                        name: "Parth Singh",
                        qualification: "2nd year student",
                        review: "The way bhaiya has explained everything is phenomenal when he said he will start from zero he actually did it everything was explained from very basic and was repeated 3-4 times on different test cases Live classes also",
                        rating: 4
                    },
                    {
                        profile: "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FIMG_20230712_212229_241_Vedant_Jain_93e26ddb97.jpg&w=96&q=75",
                        name: "Vedant Jain",
                        qualification: "2nd year student",
                        review: "I've tried understanding DSA many times earlier through different resources, but Supreme batch really stood out on the top. The way and quality of teaching is unmatched.",
                        rating: 4.5
                    },
                    {
                        profile: "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FIMG_0419%2B-%2BRishi%2BKant.jpeg&w=96&q=75",
                        name: "Rishi Kant",
                        qualification: "BBA student",
                        review: "This was the best, course I ever completed. You won’t believe I’m graduating from BBA, but his teaching made me start loving coding. Now just because of this course I am looking for a job in IT.",
                        rating: 4
                    },
                    {
                        profile: "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FIMG_1560_chirag_arora_bb181b9a5f.jpeg&w=96&q=75",
                        name: "Chirag Arora",
                        qualification: "BCOM student",
                        review: "Best DSA paid Course one could ever come across online . Affordable but got delivered more than that what it costed. Variety of question top notch Definitely better than those costing 20-25 K",
                        rating: 5
                    },
                ],
                _id: "65f6c7b64d3ce8c2d0c8aacb",
                sections: [
                    {
                        sectionTitle: "Introduction",
                        _id: "65f7ebc74c4327f063440e81",
                        material: [
                            {
                                type: "quiz",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "Download the course syllabus",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
                                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu784f2b93005394529024d1a6e1bf1f37.mp4",
                                duration: 200.36454,
                                passPercentage: 0,
                                _id: "65f7ebf84c4327f063440e9f",
                                quiz: [],
                            },
                            {
                                type: "note",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "Download the 12 Rules to Learn to Code eBook [Latest Edition]",
                                description:
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
                                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu784f2b93005394529024d1a6e1bf1f37.mp4",
                                duration: 120.195374,
                                passPercentage: 0,
                                _id: "65f7ebf84c4327f063440e9f",
                                quiz: [],
                            },
                            {
                                type: "video",
                                thumbnail:
                                    "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu08eadaf5d1d34197bd6df59c2273af08.jpeg",
                                title: "What you will get this course",
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
        banners: [
            {
                title: "Banner1",
                link: "https://img.freepik.com/free-photo/university-student-laptop-e-learning-concept_23-2148550676.jpg?size=626&ext=jpg&ga=GA1.1.1109326158.1697181750&semt=sph",
                _id: "65f6fd204c4327f063440e59",
            },
            {
                title: "Banner2",
                link: h2,
                _id: "65f6fd204c4327f063440e59",
            },
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
        ]
    };

    const setHtmlWithStyle = (htmlString, className = "") => {
        // Regular expression to match all HTML tags
        const regex = /<[^>]*>/g;
        // Add 'text-base' class to each matched HTML tag
        const modifiedHtml = htmlString.replace(regex, (match) => {
            return match.replace(">", ` className="${className}">`);
        });
        return modifiedHtml;
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

        // Split the theme into theme and font
        const [color, theme, font] = bis.theme.split("-");
        // dispatch(setCurrTheme(color + "-" + theme));
        dispatch(setCurrTheme(bis.styles.uiMode));
        dispatch(setCurrFont(bis.styles.font));
        setIsLoading(false);
    };

    // detructring all the styles 

    const { font, primary, secondary, gradient: { from, via, to }, innerText } = bis?.styles;

    const handleSlidesCount = () => {
        window.innerWidth < 768 ? setShowSlides(1) : window.innerWidth < 1024 ? setShowSlides(2) : setShowSlides(3)
    }

    const handleStickyNav = e => {
        window.scrollY > 100 ? setHideNav(true) : setHideNav(false);
        const section = document.getElementById("header-section");
        setStickNav(window?.scrollY > section?.clientHeight)

    }

    useEffect(() => {
        getBusiness();
        window.addEventListener("scroll", handleSlidesCount)
        window.addEventListener("scroll", handleStickyNav)

        return () => {
            window.removeEventListener("scroll", handleStickyNav)
            window.removeEventListener("scroll", handleSlidesCount)
        }

    }, []);

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




    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: showSlides,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_, next) => {
            setActiveSlide(next);
        },
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
    };

    const testimonialSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_, next) => {
            setTestActiveSlide(next);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const navLinks = [
        { title: 'Tools', link: '#' },
        { title: 'Blog', link: '#' },
        { title: 'Contact', link: '#' },
        { title: 'About', link: '#' },
    ]

    const handleShowNav = () => {
        setShowNav(!showNav)
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





    return (
        <div
            className="relative bg-background"
            style={inlineStyle}
            data-theme={`${currTheme}`}
            id={bis?.theme}

        // ref={nahiHoRhaTheme}
        >
            <nav className={`relative top-0 left-0 w-full z-[1000] shadow-sm shadow-shadow ${hideNav && " -translate-y-full"} ${stickNav && "translate-y-0 duration-500 transition-all sticky"}`}>
                <div className={`mx-auto flex items-center justify-between px-2 py-2 md:py-0  sm:px-6 lg:px-8 relative ${stickNav ? "!bg-background" : ``}`} style={{ background: primary }}>
                    <div className="flex items-center gap-4 sm:gap-10">
                        {/* hamburger menu */}
                        <button onClick={handleShowNav} aria-label="Toggle Menu" className="md:hidden">
                            <FiMenu className={`text-inverted ${stickNav && "!text-base"}`} />
                        </button>
                        {/* logo */}
                        <a href="#" className="flex items-center gap-3">
                            <span className={`self-center whitespace-nowrap !text-xl font-semibold text-inverted md:text-2xl ${stickNav && "!text-base"}`}>
                                BridgeYU
                            </span>
                        </a>
                        {/* nav links */}
                        <div
                            className={`absolute  left-0 right-0 -z-10 flex w-full flex-col gap-3  p-3 shadow transition-all duration-300 ease-in-out md:relative md:left-0 md:right-auto md:top-auto md:z-auto bg-background text-base md:bg-transparent  md:flex-row md:shadow-none ${showNav ? 'top-[57.33px]' : 'top-[-250px]'
                                } ${stickNav && "bg-background !text-base"}`}>
                            {navLinks.map(({ title, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    className={`rounded-md px-3 py-2 text-base md:text-inverted transition-colors duration-100 ease-linear ${stickNav && "!text-base"}`}>
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            className={`flex items-center gap-2 rounded-lg border  px-4 py-2 border-border  font-semibold  transition duration-300 ease-in-out active:scale-95 sm:px-5 sm:py-2.5`} style={{ background: primary, color: innerText }}>
                            <span>SignUp</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-lg border-[1px] border-border  px-4 py-2  font-semibold  transition duration-300 ease-in-out active:scale-95 sm:px-5 sm:py-2.5 bg-background text-base">
                            <span>SignIn</span>
                        </button>
                    </div>
                </div>
            </nav >



            {/* home banner section  */}

            <div div className=" md:flex items-center min-h-screen px-4 py-4 pb-8 justify-around" id="header-section" style={{ background: primary }} >
                <div className="basis-[40%]">
                    <CustomSlider color={primary}>
                        {business?.banners?.map((image, index) => {
                            return <img key={index} src={image?.link} alt={image?.title} />;
                        })}
                    </CustomSlider>
                </div>
                <div className="basis-[40%] text-inverted flex items-center justify-between mt-8">
                    <div>
                        <h1 className=" text-4xl">Create new experince way of  <span className="font-bold">learning</span>.</h1>
                        <p className="py-2 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, distinctio perspiciatis officiis corrupti odit illum nobis ipsam cupiditate repellendus nostrum?</p>

                    </div>
                </div>
            </div >



            {/* section  */}

            <div div className="bg-background pt-4 overflow-hidden" >
                {/* featured section  */}
                {
                    featured?.contentTitle != null && (
                        <div className="mx-8  md:flex items-center justify-between  overflow-hidden my-8  md:my-12 md:mx-8 rounded-3xl" >
                            <div className="relative md:basis-[50%] rounded-xl overflow-hidden  md:flex items-center justify-center md:mx-8 md:py-8 p-8 lg:my-8" style={{ background: primary }}>
                                <img src={featured.trailerThumbnail} className="object-cover rounded-lg" alt="" />
                            </div>
                            <div className="my-8 mx-4  md:basis-[50%] text-base">
                                <span className="font-bold  rounded-2xl text-xl">{featured.category}</span>
                                <h1 className="font-bold text-2xl mt-4">{featured.contentTitle}</h1>
                                <div dangerouslySetInnerHTML={{
                                    __html: setHtmlWithStyle(featured.description.substring(0, 100) + "...", "mt-4 text-xl text-muted")
                                }}>
                                </div>
                                <div className="font-bold text-xl mt-4 flex items-center gap-2">
                                    <FaIndianRupeeSign />
                                    {featured.price}
                                </div>
                                <span className=" rounded-full mt-6 px-2 py-2 inline-block" style={{ background: primary }}>
                                    <Link className="flex gap-4 rounded-full font-bold px-4 py-2 w-fit items-center group"
                                        style={{ background: primary, color: innerText }}
                                        onClick={() => {
                                            dispatch(setContent(featured))
                                            window.scrollTo(0, 0)
                                        }}
                                        to={`/${currSite.toLowerCase()}/${featured._id}`}
                                    >
                                        Get Started <FaArrowRightLong />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    )
                }


                {/* <Separator className="mt-8" /> */}

                <div className=" rounded-3xl mx-8 p-8" style={{ background: primary }}>
                    <h2 className="text-xl text-inverted md:text-4xl font-bold mb-8 text-center my-4 overflow-hidden">Top Courses for you.</h2>
                    <div className=" relative">
                        <div className="slider-container">
                            <Slider {...settings} ref={slider => {
                                sliderRef = slider
                            }}>
                                {
                                    business?.content.map((item, index) => (
                                        <Link key={index} onClick={() => {
                                            dispatch(setContent(item))
                                            window.scrollTo(0, 0)
                                        }}
                                            to={`/${currSite.toLowerCase()}/${item?._id}`} className="bg-card text-base inline-block h-auto my-8 rounded-xl overflow-hidden mx-auto cursor-pointer" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                                            <div className="overflow-hidden">
                                                <img className="w-full h-auto aspect-video" src={item.trailerThumbnail} alt="" />
                                            </div>
                                            <div className="m-4">
                                                <h2 className="font-bold text-muted capitalize">{item.category}</h2>
                                                <h1 className="font-bold text-xl mt-1">{item.contentTitle}</h1>
                                                <div className="mt-2 flex items-center justify-between">
                                                    <div>
                                                        <h2 className="flex items-center gap-2 font-bold"><FaIndianRupeeSign /> {item.price}</h2>
                                                        <div className="flex gap-2 mt-2 items-center font-semibold text-muted">
                                                            <FaStar className="" style={{ fill: secondary }} />
                                                            <span className="font-bold">{item.rating}</span>
                                                            <small>({item?.reviews?.length} reviews)</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="rounded-full size-12" src={item?.author?.pfp} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </Slider>
                        </div>
                        {
                            activeSlide != 0 && <BsTriangleFill size={20} onClick={prev} className="-rotate-90 absolute top-1/2 right-full -translate-y-1/2 z-10 cursor-pointer fill-white" />
                        }

                        {
                            activeSlide != business?.content.length - showSlides && <BsTriangleFill size={20} className="rotate-90 absolute top-1/2 left-full -translate-y-1/2 z-10 cursor-pointer fill-white" onClick={next} />
                        }
                    </div>

                </div>

                {/* slider  */}







                {/* testimonials  */}

                <div className=" my-12 rounded-3xl mx-8 py-4 overflow-hidden" style={{ background: primary }}>
                    <h2 className="text-xl md:text-4xl font-bold mb-8 text-center my-4 overflow-hidden text-inverted">Here's What Our customers have to say.</h2>
                    <div className="slider-container relative mx-4 md:mx-4" id="testimonial-slider">
                        <Slider {...testimonialSettings} ref={slider => {
                            testSliderRef = slider
                        }} >
                            {
                                testimonials.map((item, index) => (
                                    <div key={index} className={`text-base bg-background rounded-xl p-4 min-h-[150px] !flex justify-center flex-col`} >
                                        <div className="font-bold">
                                            {item.description}
                                        </div>
                                        <div className="mt-4 font-bold text-lg">
                                            <p className="flex gap-2 items-center justify-end text-muted">~ {item.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <span onClick={testimonialPrev}><IoMdArrowDropleftCircle size={30} className={`bg-black hidden md:block transition-left duration-500 rounded-full fill-white absolute top-1/2  -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer ${testActiveSlide == 0 ? '-left-[10%]' : 'left-0'}`} /> </span>
                        <span onClick={testimonialNext}><IoMdArrowDroprightCircle size={30} className={`bg-black hidden md:block rounded-full transition-right duration-300 fill-white top-1/2  absolute -translate-y-1/2 z-10 cursor-pointer ${testActiveSlide == testimonials.length - 3 ? "-right-[10%]" : "right-0"}`} /> </span>

                        <div className="md:hidden flex items-center justify-center  mt-4">

                            <div className="flex items-center justify-center gap-2 w-[40%]">
                                {
                                    testimonials.map((item, index) => (
                                        <span key={item} className={`basis-[10%] transition-all bg-background duration-200 shrink-0 h-2  rounded-full ${testActiveSlide == index ? "basis-[30%]" : "basis-[10%]"}`}></span>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>

                {/* CTA + image overlay  */}

                <div className="my-12 relative md:py-12">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full" src={h2} alt="" />
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full z-10" style={{ background: `linear-gradient(to bottom, ${from + "99"}, ${to + "b3"})` }} >
                    </div>

                    <div className=" py-4 px-4 flex flex-col justify-center text-center uppercase basis-[60%] relative z-[100] text-inverted">
                        <h2 className=" font-bold ">Join the Course</h2>
                        <div className="my-4">
                            <h1 className="text-5xl  font-bold">Get 20% of</h1>
                            <p className=" text-lg  font-bold">Your Next Order</p>
                        </div>
                        <Link className="  py-2 font-bold xs:w-[50%] mx-auto px-4 sm:w-fit" style={{ background: primary, color: innerText }}>Enroll Now</Link>
                        <small className=" mt-4 font-bold">Limited Seats Available, don't miss out</small>
                    </div>
                </div>


                {/* counter  */}

                {/* <div className="my-12 rounded-3xl mx-8 py-4 overflow-hidden px-4" style={{ background: primary }}>
                    <h1 className="text-xl md:text-4xl font-bold mb-8 text-center my-4 overflow-hidden text-inverted">We created own Digital transform methodlogy.</h1>

                    <div className="my-8 flex flex-col sm:flex-row flex-wrap gap-8 justify-between sm:gap-0">
                        {
                            counterData.map((item, index) => (
                                <div className="rounded-3xl flex p-4 sm:basis-[30%] gap-4 bg-background" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                    <span className="inline-block h-fit p-2 rounded-full">
                                        <FaIndianRupeeSign className=" text-black" style={{ color: primary }} size={30} />
                                    </span>
                                    <div className="text-base">
                                        <h1 className="text-2xl font-bold"><Counter end={item.count} /></h1>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, doloribus.</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div> */}

                {/* new counter  */}

                <div className=" text-inverted my-8 px-8 py-8 lg:py-12 lg:grid grid-cols-5" style={{ background: primary }}>
                    <h1 className="font-bold text-2xl lg:col-span-2">{business?.dataSlate?.title}</h1>
                    <div className="my-8 lg:my-0 flex lg:col-span-3 gap-6 flex-wrap justify-between">

                        {
                            Array.from({ length: 3 }).map((item, index) => (
                                business?.dataSlate[`value${index + 1}`] ?
                                    <InView triggerOnce={true} threshold={.5}>
                                        {
                                            ({ ref, inView }) => (
                                                <div ref={ref} className={clsx("font-bold transition-all duration-500 basis-[40%] sm:basis-[25%] w-fit py-2 relative before:absolute before:h-[2px] before:bg-white before:w-0 before:top-0 before:left-0 before:transition-all before:duration-500", inView && "before:w-1/2")}>
                                                    <h1 className={clsx("text-2xl transition-all duration-500 ", inView ? "translate-y-0" : "translate-y-1/2")}>
                                                        {
                                                            isNaN(Number(business?.dataSlate[`value${index + 1}`])) ? business?.dataSlate[`value${index + 1}`] : <Counter end={Number(business?.dataSlate[`value${index + 1}`])} />
                                                        }

                                                    </h1>
                                                    <p className={clsx("uppercase text-sm font-semibold transition-all duration-500 ", inView ? "translate-y-0" : "translate-y-1/2")}>{business?.dataSlate[`dataName${index + 1}`]}</p>
                                                </div>
                                            )
                                        }

                                    </InView> : null
                            ))
                        }



                        {/* <InView triggerOnce={true} threshold={.5}>
                            {
                                ({ ref, inView }) => (
                                    <div ref={ref} className={clsx("font-bold transition-all duration-500 basis-[40%] sm:basis-[25%] w-fit py-2 relative before:absolute before:h-[2px] before:bg-white before:w-0 before:top-0 before:left-0 before:transition-all before:duration-500", inView && "before:w-1/2")}>
                                        <h1 className={clsx("text-2xl transition-all duration-500 ", inView ? "translate-y-0" : "translate-y-1/2")}>{business?.dataSlate?.value2}</h1>
                                        <p className={clsx("uppercase text-sm font-semibold transition-all duration-500 ", inView ? "translate-y-0" : "translate-y-1/2")}>{business?.dataSlate?.dataName2}</p>
                                    </div>
                                )
                            }

                        </InView>

                        <InView triggerOnce={true} threshold={.5}>
                            {
                                ({ ref, inView }) => (
                                    <div ref={ref} className={clsx("font-bold transition-all duration-500 basis-[40%] sm:basis-[25%] w-fit py-2 relative before:absolute before:h-[2px] before:bg-white before:w-0 before:top-0 before:left-0 before:transition-all before:duration-500", inView && "before:w-1/2")}>
                                        <h1 className={clsx("text-2xl transition-all duration-500 ", inView ? "translate-y-0" : "translate-y-1/2")}>{business?.dataSlate?.value3}</h1>
                                        <p className={clsx("uppercase text-sm font-semibold transition-all duration-500 ", inView ? "translate-y-0" : "translate-y-1/2")}>{business?.dataSlate?.dataName3}</p>
                                    </div>
                                )
                            }

                        </InView> */}

                    </div>
                </div>



                {/* faqs  */}

                <div className="my-12 mx-8 py-8 px-4 rounded-3xl">
                    <h1 className="text-base text-center text-xl font-bold mb-4">Frequntly Ask Qstions</h1>
                    <div className="max-w-[800px] mx-auto">
                        {
                            business?.faq.map((item, index) => (
                                <div key={index} className={"p-4 rounded-xl cursor-pointer"} style={index == activeFaq ? { background: primary } : {}}>
                                    <div className="flex" onClick={() => setActiveFaq(index)}>
                                        <h2 className={`grow text-base ${activeFaq == index && "text-inverted"}`}>{item?.question}</h2>
                                        {
                                            index == activeFaq ? <FiMinusCircle size={20} className="text-inverted" /> : <FiPlusCircle size={20} className="text-base" />
                                        }
                                    </div>
                                    <Collapse isOpened={index == activeFaq}>
                                        <p className="mt-2 text-inverted">{item?.answer}</p>
                                    </Collapse>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* section  */}



                <div style={{ background: `linear-gradient(225deg, ${from} 30%, ${to} 100%)` }} className="py-12 ">

                    <div className="bg-background mx-8 relative rounded-md shadow-md shadow-shadow grid grid-cols-1 [@media(min-width:900px)]:grid-cols-2 lg:max-w-[80%] lg:mx-auto">


                        <div className="flex items-center justify-center py-8 text-center">
                            <AwesomeSlider style={{ "--content-background-color": "hsl(var(--background))" }} selected={featuredActiveSlide} bullets={false} organicArrows={false} animation="foldOutAnimation">
                                {
                                    business?.featuredContents?.map((item, index) => (
                                        <div key={index} className={`p-4 left-0 w-full flex flex-col justify-center gap-2 custom-transition text-base `}>
                                            <h1 className="text-2xl">{item?.title}</h1>
                                            <p className="text-muted">{item?.description}</p>
                                            <a href={item?.CtaLink} className="px-4 py-2 rounded-sm w-fit inline-block mx-auto" style={{ background: primary, text: innerText }}>{item?.CtaName}</a>

                                        </div>
                                    ))
                                }
                            </AwesomeSlider>
                        </div>

                        <div className="w-full h-full relative">
                            <Slider
                                arrows={false}
                                ref={slider => {
                                    featuredSliderRef = slider;
                                }}
                                beforeChange={
                                    (current, next) => {

                                        setFeaturedActiveSlide(next);
                                    }
                                }

                                infinite={true}

                            >
                                {
                                    business?.featuredContents?.map((item, index) => (
                                        <img className="w-full h-full object-contain aspect-square" src={item?.image} key={index} alt="" />
                                    ))
                                }
                            </Slider>
                            <div className="flex gap-2 absolute bottom-[2%] -translate-x-1/2 left-1/2">
                                {
                                    business?.featuredContents?.map((item, index) => (
                                        <span key={index} className="inline-block size-2 rounded-full bg-background cursor-pointer" style={index === featuredActiveSlide ? { background: primary } : {}} onClick={() => featuredSliderRef.slickGoTo(index)}></span>
                                    ))
                                }
                            </div>
                        </div>



                        <MdKeyboardArrowLeft size={60} className="absolute top-1/2 -translate-x-[80%] left-0 text-background cursor-pointer -translate-y-1/2 rounded-full custom-transition hover:scale-125 hidden [@media(min-width:900px)]:block" onClick={() => featuredSliderRef.slickPrev()} />

                        <MdKeyboardArrowRight className="absolute top-1/2 translate-x-[80%] right-0 text-background cursor-pointer -translate-y-1/2  rounded-full  custom-transition hover:scale-125 hidden [@media(min-width:900px)]:block" onClick={() => featuredSliderRef.slickNext()} size={60} />

                    </div>

                </div>





                {/* footer */}
                <footer className="mt-8 py-12 px-4">
                    <div className="flex items-center justify-center">
                        <div className="text-center text-base">
                            <h1 className="text-2xl font-bold uppercase">Join the course now.</h1>
                            <h2 className="font-bold mt-2 text-muted">Be the the to hero about signle and next project !</h2>
                            <div className="max-w-[500px] flex items-center border-border  border-2 mt-2 pl-4">
                                <input type="email" name="" id="" placeholder="Enter your email here *" className="outline-none bg-transparent border-none grow placeholder:text-base placeholder:font-bold" />
                                <button className="bg-base  text-inverted px-4 py-2">Join</button>
                            </div>
                        </div>
                    </div>



                    <div className="md:flex items-center justify-center mt-12 text-base">
                        <div className="basis-1/2 md:border-r-[1px] border-border grid place-items-center grid-cols-2 gap-4">
                            {
                                sections.map((item, index) => (
                                    <div className="w-fit" key={index}>
                                        <h2 className="font-medium text-center uppercase relative before:absolute before:w-full before:h-[2px] before:bg-base before:left-0 before:bottom-0">{item.title}</h2>
                                        <div className="text-center mt-2 flex flex-col items-center gap-1">
                                            {
                                                item.items.map((item, index) => (
                                                    <Link key={index} className="uppercase font-normal text-sm text-muted">{item}</Link>
                                                ))
                                            }

                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                        <div className="basis-1/2 px-8 mt-8 md:mt-0  flex flex-col self-stretch justify-around ">
                            <small className="text-center inline-block font-bold my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quidem incidunt ex consequuntur cupiditate vero ipsum fugit suscipit sit. Velit expedita itaque vero eaque, doloremque ab, dignissimos quisquam illo rem totam, eligendi ipsam nobis sequi? Quae corporis est perferendis fugit?</small>
                            <p className="text-center text-sm font-bold text-muted">
                                Copyright ©️ BridgeYU 2024.
                            </p>
                        </div>
                    </div>

                </footer>
            </div >


        </div >
    );
};

export default SixthTemplateHome;
