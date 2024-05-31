import React, { useEffect, useState, useRef } from "react";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { FaArrowRightLong, FaIndianRupeeSign, FaMinus, FaXmark } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";

import Slider from "react-slick";
import {
    setContent,
    setCurrFont,
    setCurrTheme,
} from "../../redux/slices/appSlice";

import { MdAdd } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaStar, FaTwitch, FaTwitter } from "react-icons/fa";
import AccordianItem from "../../components/AccordianItem";

import headerImage1 from "../../../public/assets/t-5/12.png"
import headerImage2 from "../../../public/assets/t-5/10.png"


import toolImage from "../../../public/assets/t-5/10.png"
import { PiStarFourFill } from "react-icons/pi";
import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import Marquee from "react-fast-marquee";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import Counter from "../../components/Counter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collapse } from "react-collapse";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import FeaturedTestimonials from "../../components/FeaturedTestimonials";


const HomePage = () => {
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
    const [activeSlide, setActiveSlide] = useState(0);
    const [isSideMenuOpen, setMenu] = useState(false);
    const [selectedFaq, setSelectedfaq] = useState(false)
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    let oldScrollY = 0;
    const [direction, setDirection] = useState('up');


    const next = () => {
        sliderRef.slickNext();
    };
    const prev = () => {
        sliderRef.slickPrev();
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
        theme: "fifth-theme-Roboto",

        styles: {
            font: "Lato",
            // gradient: {
            //     from: "#280a38",
            //     via: "#1a072a",
            //     to: "#46063c"
            // },
            gradient: {
                from: "#2995E8",
                via: "#86A8E7",
                to: "#41F152"
            },
            innerText: "#ffffff",
            primary: "#08040d",
            secondary: "#ebff00",
            uiMode: "charcoal"
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
                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYue55f667a86e2bbf02160f0d4b6e07716.jpeg",
                _id: "65f6fd204c4327f063440e59",
            },
        ],
    };

    const setHtmlWithStyle = (htmlString, className = "") => {
        // Regular expression to match all HTML tags
        const regex = /<[^>]*>/g;
        // Add 'text-base' class to each matched HTML tag
        const modifiedHtml = htmlString.replace(regex, (match) => {
            return match.replace(">", ` class="${className}">`);
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
    ];


    // detructring all the styles 

    const { font, primary, secondary, gradient: { from, via, to }, innerText } = bis?.styles;


    const getBusiness = async () => {
        // const res = await axiosInstance.get(
        //   CONST.uri.business.GET_BUSINESS + `/${currSite}`
        // );
        setBusiness(bis);
        // console.log(res.data);
        setFeatured(bis.content[0]);

        // Split the theme into theme and font
        // const [color, theme, font] = bis.theme.split("-");
        // dispatch(setCurrTheme(color + "-" + theme));
        dispatch(setCurrTheme(bis?.styles?.uiMode))
        dispatch(setCurrFont(bis?.styles?.font));
        setIsLoading(false);
    };


    const handleScroll = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            if (isVisible) {
                window.scrollY > oldScrollY ? elementRef.current.scrollLeft += 50 : elementRef.current.scrollLeft -= 50
                oldScrollY = window.scrollY;
            }
        }
    };

    useEffect(() => {
        getBusiness();
        window.addEventListener('scroll', handleScroll);
        // Initial check on component mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_, next) => {
            setActiveSlide(next);
        },
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: true
                }
            },
        ]
    };

    const navlinks = [
        {
            label: "Collections",
            link: "#"
        },
        {
            label: "Men",
            link: "#"
        },
        {
            label: "About",
            link: "#"
        },
        {
            label: "Contact",
            link: "#"
        }
    ];

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

    const hanldeCloseNav = e => {
        setMenu(false)
    }

    const headerCarouselImages = [headerImage1, headerImage2, headerImage1]

    const featuredSectionData = [
        {
            image: "https://media.istockphoto.com/id/2012747478/photo/businessman-computer-or-programming-code-in-night-office-for-software-development.jpg?s=2048x2048&w=is&k=20&c=hpdMAKyO26EFAJ-xB_w0SWCIshT0LN5OF3Kp4eVEWsk=",
            description:
                `<h1 class="text-inverted text-center font-bold text-4xl">Use essential <span class=" font-semibold">skill</span> tool</h1><div class="flex items-start flex-col mt-4 gap-4" ><p class="grow text-inverted text-center text-sm sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit?</p><button class="rounded-xl md:mt-4 py-2 px-4 whitespace-nowrap font-bold mx-auto" style='background:${primary}; color:${innerText}'>Apply Now</button></div >`,
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlciUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            description:
                `<h1 class="text-inverted text-center font-bold text-4xl">Use essential <span class=" font-semibold">skill</span> tool</h1><div class="flex items-start flex-col mt-4 gap-4" ><p class="grow text-inverted text-center text-sm sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit?</p><button class="rounded-xl md:mt-4 py-2 px-4 whitespace-nowrap font-bold mx-auto" style='background:${primary}; color:${innerText}'>Apply Now</button></div >`,
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9yaXpvbnRhbCUyMHdhbGxwYXBlciUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            description:
                `<h1 class="text-inverted text-center font-bold text-4xl">Use essential <span class=" font-semibold">skill</span> tool</h1><div class="flex items-start flex-col mt-4 gap-4" ><p class="grow text-inverted text-center text-sm sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit?</p><button class="rounded-xl md:mt-4 py-2 px-4 whitespace-nowrap font-bold mx-auto" style='background:${primary}; color:${innerText}'>Apply Now</button></div >`,
        },
        {
            image: "https://media.istockphoto.com/id/1329913812/photo/banking-icon-concept.webp?b=1&s=170667a&w=0&k=20&c=dstcrqIfWnIum4pulyoDSc2NAtaFD4y0nvmaERGszC4=",
            description:
                `<h1 class="text-inverted text-center font-bold text-4xl">Use essential <span class=" font-semibold">skill</span> tool</h1><div class="flex items-start flex-col mt-4 gap-4" ><p class="grow text-inverted text-center text-sm sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit?</p><button class="rounded-xl md:mt-4 py-2 px-4 whitespace-nowrap font-bold mx-auto" style='background:${primary}; color:${innerText}'>Apply Now</button></div >`,
        }
    ]


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
            style={inlineStyle}
            data-theme={currTheme}
            className="bg-background"
        // ref={nahiHoRhaTheme}
        >
            {/* home banner section  */}
            <div className={`pb-12`} style={{ background: `linear-gradient(to right, ${from} 30% , ${via} 70%, ${to} 90%)` }}>

                <nav className="flex justify-between px-8 items-center py-6 text-inverted">
                    <div className="flex items-center gap-8">
                        <section className="flex items-center gap-4">
                            {/* menu */}
                            <FiMenu
                                onClick={() => setMenu(true)}
                                className="text-2xl cursor-pointer lg:hidden"
                            />
                            {/* logo */}
                            <Link href={"/"} className="text-4xl font-mono">
                                <h1 className="text-2xl text-base">Bridge <span className="text-base uppercase">Yu</span> </h1>
                            </Link>
                        </section>
                        {navlinks.map((d, i) => (
                            <Link
                                key={i}
                                className="hidden lg:block  text-base hover:font-bold"
                                href={d.link}
                            >
                                {d.label}
                            </Link>
                        ))}
                    </div>

                    {/* sidebar mobile menu */}
                    <div
                        className={clsx(
                            " fixed z-[1000] h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
                            isSideMenuOpen && "translate-x-0"
                        )}

                        onClick={hanldeCloseNav}
                    >
                        <section onClick={(e) => e.stopPropagation()} className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
                            <IoCloseOutline
                                onClick={() => setMenu(false)}
                                className="mt-0 mb-8 text-3xl cursor-pointer"
                            />

                            {navlinks.map((d, i) => (
                                <Link key={i} className="font-bold" href={d.link}>
                                    {d.label}
                                </Link>
                            ))}
                        </section>
                    </div>

                    {/* last section */}
                    <section className="flex items-center gap-4">
                        {/* cart icon */}
                        <button className=" px-5 py-2 rounded-full  border-white border-[1px]" style={{ background: primary, color: innerText }}>Apply Now</button>
                    </section>
                </nav>
                <hr className=" " />


                <div className="py-4 px-8  md:grid grid-cols-4 gap-4">
                    <div className="text-base py-8 md:col-span-2 md:place-content-center">
                        <h1 className={`text-5xl mb-4`}>Best Education Material</h1>
                        <p className="text-xl text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptatum dolorem esse quo? Cumque, assumenda ex! Quia cupiditate culpa iste ducimus sequi quod harum similique, cumque quis molestiae facilis optio.</p>
                        <button className={`text-2xl  mt-4 px-4 py-2 rounded-full`} style={{ background: primary, color: innerText }}>Apply Now</button>
                    </div>
                    <div className="mt-8  rounded-xl relative md:col-span-2">
                        <div className="md:w-1/2 bg-tertiary mx-auto rounded-lg">
                            <Slider
                                arrows={false}
                                fade={true}
                                dots={true}
                                autoplay={true}
                                dotsClass="slick-dots header-slider-dots"

                            >
                                {
                                    headerCarouselImages.map((item, index) => (
                                        <div className="" key={index}>
                                            <img src={item} className="w-full h-full object-contain" alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>

            {/* section  */}

            {/* featured section  */}
            {featured?.contentTitle != null && (
                <div className={`mx-4 md:flex items-center justify-between  overflow-hidden my-8  md:my-12 md:mx-8`}>
                    <div className="relative md:basis-[50%] rounded-xl overflow-hidden  md:flex items-center justify-center md:py-8">
                        <img src={featured.trailerThumbnail} className="object-cover md:w-[90%] md:rounded-xl lg:object-contain" alt="" />
                    </div>
                    <div className="my-8 mx-4 text-base  md:basis-[50%]">
                        <span className="font-bold rounded-2xl text-xl">{featured.category}</span>
                        <h1 className="font-bold text-2xl mt-4">{featured.contentTitle}</h1>
                        <div dangerouslySetInnerHTML={{
                            __html: setHtmlWithStyle(featured.description.substring(0, 100) + "...", "mt-4 text-xl text-muted")
                        }}>
                        </div>
                        <div className="font-bold text-xl mt-4 flex items-center gap-2">
                            <FaIndianRupeeSign />
                            {featured.price}
                        </div>
                        <Link className="flex gap-4 rounded-full font-bold px-4 py-2 w-fit mt-6 items-center group"
                            style={{ background: primary, color: innerText }}
                            onClick={() => {
                                dispatch(setContent(featured))
                                window.scrollTo(0, 0)
                            }}
                            to={`/${currSite.toLowerCase()}/${featured._id}`}
                        >
                            Get Started <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            )}


            {/* <Separator className="mt-8" /> */}

            <div className="mt-8 mx-8 mb-8">
                <div className="flex items-center justify-between text-base">
                    <h2 className="text-center lg:text-start font-bold text-2xl md:text-4xl">Book your <span className="rounded-3xl">educational</span>  journey now</h2>

                    <div className="hidden lg:flex items-center gap-2">
                        <div className="w-[200px]">
                            <input value={activeSlide} className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[#dfdfdf] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#190525] transition-all duration-200" style={{}} onChange={(e) => sliderRef.slickGoTo(e.target.value)} type="range" min={0} max={business?.content?.length - 4} />
                        </div>
                        <div className="flex items-center gap-2">
                            <div onClick={prev} className={`border-2  rounded-full p-2   group   ${activeSlide == 0 ? "cursor-not-allowed border-[gray] hover:border-[gray] hover:bg-[#fff]" : " cursor-pointer border-[#190525] hover:border-white hover:bg-[#190525]"}`}>
                                <HiMiniArrowLeft size={30} className={` ${activeSlide == 0 ? "cursor-not-allowed group-hover:fill-black" : "cursor-pointer group-hover:fill-white"}`} />
                            </div>
                            <div onClick={next} className={`border-2  rounded-full p-2   group   ${activeSlide == business?.content?.length - 4 ? "cursor-not-allowed border-[gray] hover:border-[gray] hover:bg-[#fff]" : " cursor-pointer border-[#190525] hover:border-white hover:bg-[#190525]"}`}>
                                <HiMiniArrowRight className={` ${activeSlide == business?.content?.length - 4 ? "cursor-not-allowed group-hover:fill-black" : "cursor-pointer group-hover:fill-white"}`} size={30} />
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="slider-container my-8" id="fifth-template-slider">
                        <Slider {...settings} ref={slider => {
                            sliderRef = slider;
                        }}>
                            {business?.content.map((item, index) => {
                                return (
                                    <Link className="mt-8 rounded-md overflow-hidden relative min-h-[320px]" key={index} onClick={() => {
                                        dispatch(setContent(item))
                                        window.scrollTo(0, 0)
                                    }}
                                        to={`/${currSite.toLowerCase()}/${item._id}`}>
                                        <div>
                                            <img src={featured.trailerThumbnail} alt="" />
                                        </div>
                                        <div className="py-2 px-2 relative z-10 text-white">
                                            <h1 className="font-bold text-2xl">{item.contentTitle}</h1>
                                            <div className="flex items-center text-sm gap-2 my-1">
                                                <div className="flex gap-2 items-center text-sm">
                                                    <h3 className=" my-1">{item.rating}</h3>
                                                    <div className="flex gap-1">
                                                        {
                                                            Array.from(Array(Math.floor(item.rating)).keys()).map((e) => (
                                                                <FaStar style={{ color: secondary }} />
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    ({item.reviews.length})
                                                </div>


                                            </div>
                                            <div className="flex text-xl items-center">
                                                <FaIndianRupeeSign />
                                                <span>{item.price}</span>
                                            </div>
                                        </div>

                                        <div className="overlay absolute inset-0 bg-gradient-to-b from-transparent from-20% to-card to-60% z-0">
                                        </div>

                                    </Link>
                                );
                            })}
                        </Slider>
                    </div>
                </div>

            </div>

            {/* slider  */}




            {/* counter section  */}

            <div className={`flex flex-col items-center text-inverted p-4 py-8 gap-8 mt-8 md:flex-row md:justify-around md:py-16 md:px-8 `} style={{ background: `linear-gradient(to right, ${from} 30% , ${via} 70%, ${to} 90%)` }}>
                <h1 className="text-center md:text-start text-2xl font-bold md:text-4xl">Join in on <br className="hidden md:block" /> something <span className="rounded-xl">big</span> .</h1>

                <div className="flex items-center justify-around w-full md:w-1/2">

                    {
                        counterData.map((item, index) => (
                            <div className="text-center" key={index}>
                                <h1 className="text-3xl md:text-5xl">
                                    <Counter end={item.count} />
                                </h1>
                                <p className="capitalize md:mt-2">{item.title}</p>
                            </div>
                        ))
                    }

                </div>

            </div>


            {/* featured section  */}

            <div className="my-12 py-4" style={{ background: `linear-gradient(to right, ${from} 30% , ${via} 70%, ${to} 90%)` }}>
                <FeaturedTestimonials data={featuredSectionData} template={"-five"} />
            </div>




            {/* testimonials  */}

            <div className="mx-0 my-12 text-base">
                <h2 className="text-xl md:text-2xl font-semibold text-center my-4">What Our customers have to say.</h2>
                <Marquee pauseOnHover={true} play={true} className="mt-8 md:my-12">
                    {
                        testimonials.map((item, index) => (
                            <div key={index} className={`text-inverted rounded-xl p-4 w-[300px] mx-4 my-2 shadow-shadow shadow-sm bg-backgroundInverted`} >
                                <div className="font-bold">
                                    <RiDoubleQuotesL className="inline-block text-sm mr-1 relative -translate-y-1/2" />
                                    {item.description}
                                    <RiDoubleQuotesR className="inline-block text-sm ml-1 relative -translate-y-1/2" />
                                </div>
                                <div className="mt-4 font-bold text-lg">
                                    <p className="flex gap-2 items-center"><FaUserCircle /> {item.name}</p>
                                </div>
                            </div>
                        ))
                    }

                </Marquee>
            </div>

            {/* client logo section  */}

            {/* <div className="my-8  flex items-center justify-between gap-6 md:gap-8 px-8 py-8 mg:py-16 overflow-x-scroll scrollbar-hidden scroll-smooth relative" ref={elementRef}>
                {
                    Array.from({ length: 6 }).map((item, index) => (
                        <div className=" rounded-lg  overflow-hidden shrink-0 basis-[50%] sm:basis-[30%] lg:basis-[30%]" key={index}>
                            <div className="relative aspect-video">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className=" w-full h-full object-cover object-center" />
                                <div className="absolute bottom-0 right-0 flex gap-4 bg-white px-4 py-2 rounded-tl-lg cursor-pointer">
                                    <FaFacebook size={20} />
                                    <FaGithub size={20} />
                                    <FaInstagram size={20} />
                                </div>
                            </div>
                            <div className="bg-secondary text-white px-4 py-4">
                                <h3 className="font-bold text-xl">Mike Russel</h3>
                                <p className="">Instructor</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className=" flex items-center justify-center gap-5 -translate-y-full">
                <AiOutlineArrowLeft size={30} className="bg-primary fill-white rounded-full p-2 cursor-pointer active:scale-125 transition-scale duration-200" onClick={() => {
                    elementRef.current.scrollLeft -= elementRef?.current?.children[0]?.clientWidth
                }} />
                <AiOutlineArrowRight size={30} className="bg-primary fill-white rounded-full p-2 cursor-pointer active:scale-125 transition-scale duration-200" onClick={() => {
                    elementRef.current.scrollLeft += elementRef?.current?.children[0]?.clientWidth
                }} />
            </div> */}

            {/* call to action with overlay  */}


            <div className="w-full relative grid place-content-center py-8" style={{
                backgroundImage: "url(https://plus.unsplash.com/premium_photo-1673264933445-0112f3cdcb2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="overlay absolute inset-0 bg-overlay">
                </div>
                <div className="relative text-center flex flex-col items-center gap-8 text-inverted max-w-[768px] px-4 md:px-0">
                    <h2 className="text-xl font-bold">Our Services and experties.</h2>
                    <h1 className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit facilis modi natus aperiam ab quae a autem nam quam ducimus debitis dolore, sit repudiandae, aut nisi laboriosam unde? Fuga, ab?</h1>
                    <Link className="py-2 px-4 rounded-md grow-0 w-fit" style={{ background: primary, color: innerText }}>Get Started</Link>
                </div>
            </div>

            {/* Faq section  */}

            <div className="my-12 max-w-[800px] text-base mx-4 [@media(min-width:800px)]:mx-auto">
                <h1 className="text-xl md:text-2xl font-semibold text-center my-4 uppercase">Faq <span className="lowercase">s</span></h1>
                <div>
                    {
                        faqs.map((item, index) => (
                            <div className="flex items-center gap-4 my-8">
                                <div className="grow border-b-[.5px] border-[#11010e]">
                                    <h2 className="text-xl font-bold pb-2">{index < 10 ? `0${++index}` : index}.{item.qustion}</h2>
                                    <Collapse isOpened={selectedFaq === index}>
                                        <p className="mt-4 text-base pb-2 text-muted">{item.answer}</p>
                                    </Collapse>
                                </div>
                                <div>
                                    <span onClick={() => setSelectedfaq(selectedFaq === index ? false : index)} className={`rounded-full p-2 inline-block border-[1px] border-primary overflow-hidden cursor-pointer relative `} style={selectedFaq === index ? { borderColor: primary, background: primary } : { borderColor: primary, background: "white" }}>
                                        <FaMinus size={20} style={selectedFaq === index ? { fill: "white" } : { fill: primary }} />
                                        <FaMinus size={20} className={`rotate-90 absolute  left-[20%]  ${selectedFaq === index ? "-top-[100%]" : "top-[22%]"}`} />
                                    </span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            {/* footer */}

            <footer className={`text-inverted pt-8 px-4`} style={{ background: `linear-gradient(to right, ${from} 30% , ${via} 70%, ${to} 90%)` }}>
                <div className="lg:grid grid-cols-3 lg:border-b-[1px]">
                    <div className="lg:pb-4">
                        <div className="font-bold text-3xl">
                            Subscribe to our Newsletter to stay in touch with us.
                        </div>
                        <div class="relative mt-6 border-white border-[1px] rounded-3xl">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm white bg-transparent rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-white   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Email address.</label>
                            <TbMail className="absolute top-1/2 -translate-y-[50%] right-[3%] bg-white p-1 rounded-full text-black" size={30} />
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-2 lg:text-center">
                        <p className="text-sm  uppercase pb-2">Drop Us a Line</p>
                        <h2 className="font-bold text-xl">Mail@gmail.com</h2>
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
                            <div className="p-2 rounded-full border-white border-[1px]">
                                <a href={e.link}><e.icon size={25} /></a>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center py-4">
                    ©️ copyright BridgeYu
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
