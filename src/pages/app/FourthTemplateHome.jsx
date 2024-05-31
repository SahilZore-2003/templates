import React, { useEffect, useState, useRef } from "react";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { HiPlay } from "react-icons/hi2";
import user from "../../../public/assets/user.png"
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
import { MdOutlineLibraryBooks, MdOutlineStarRate } from "react-icons/md";
import { FaAngleRight, FaArrowRight, FaRupeeSign, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import { Testimonial } from "../../components/Testimonial";
import HomeBannerImage from "../../../public/assets/t-4-home-banner.png"
import { IoChevronBackCircleOutline, IoMenuOutline } from "react-icons/io5";
import { FaIndianRupeeSign, FaXmark } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "../../../public/logo.png"
import { TiMinus } from "react-icons/ti";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from "react-icons/fa";
import Counter from "../../components/Counter";
import clsx from "clsx";
import { FaCaretRight, FaCaretDown, FaSquare } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { BsDiamondFill } from "react-icons/bs";

import img1 from "../../../public/assets/t-4/1.png"
import img2 from "../../../public/assets/t-4/2.png"
import img3 from "../../../public/assets/t-4/3.png"
import featuredImg from "../../../public/assets/t-4/featured.png"
import VisibilitySensor from "react-visibility-sensor";
import { InView } from "react-intersection-observer";
import wave2 from "../../../public/assets/wave-t2.svg"
import { LuMessagesSquare } from "react-icons/lu";
import Marquee from "react-fast-marquee";

const HomePage = () => {

    const faqs = [
        {
            qustion: "What are some good FAQ questions?",
            answer: "Some common examples include questions about service hours, shipping and handling, product details, return policies, etc., depending on the industry. You can have different FAQ sections for different pages of your website. Your FAQ page demonstrates how well you understand your customers.",
            isopen: false
        },
        {
            qustion: "How do you answer FAQ questions?",
            answer: "What is General FAQ? It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies.",
            isopen: false
        },
        {
            qustion: "Why is FAQ important?",
            answer: "Visitors will primarily use your site menus to navigate through your site, but an FAQ page can also serve as a way to point them where they need to go—whether that's a product page, a whitepaper, or a blog post they might not have found otherwise",
            isopen: false
        },
    ]


    const [business, setBusiness] = useState(null);
    const [featured, setFeatured] = useState({});
    const { currSite } = useSelector((state) => state.app);
    const [isLoading, setIsLoading] = useState(true);
    const { currTheme, currFont } = useSelector((state) => state.app);
    const nahiHoRhaTheme = useRef();
    const dispatch = useDispatch();
    const [NavOpen, setNavOpen] = useState(false)
    const [courseShow, setCourseShow] = useState(3)
    const [activeSlide, setActiveSlide] = useState(0);
    const [progressWidth, setProgressWidth] = useState(25)
    const [activeFaq, setActiveFaq] = useState(faqs)
    const [visible, setVisible] = useState(false)
    const [count, setCount] = useState(0)
    const [isMobileScreen, setIsMobileScreen] = useState((window.innerWidth || document.documentElement.clientWidth) < 768)

    let sliderRef = useRef(null);
    let headerSliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (_, current) => setActiveSlide(current),
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]

    };

    console.log(isMobileScreen)


    const handleMobileScreen = () => {
        setIsMobileScreen((window.innerWidth || document.documentElement.clientWidth) < 768)
    }



    const inlineStyle = {
        fontFamily: currFont,
    };

    const setHtmlWithStyle = (htmlString, className) => {
        // Regular expression to match all HTML tags
        const regex = /<[^>]*>/g;
        // Add 'text-base' class to each matched HTML tag
        const modifiedHtml = htmlString.replace(regex, (match) => {
            return match.replace(">", ` class="${className}">`);
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
        theme: "green-children-Lato",
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
        ],
        banners: [
            {
                title: "Banner1",
                link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYue55f667a86e2bbf02160f0d4b6e07716.jpeg",
                _id: "65f6fd204c4327f063440e59",
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

    // footer data 

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



    const getBusiness = async () => {
        // const res = await axiosInstance.get(
        //   CONST.uri.business.GET_BUSINESS + `/${currSite}`
        // );
        setBusiness(bis);
        // console.log(res.data);
        setFeatured(bis.content[0]);
        // Split the theme into theme and font
        const [color, theme, font] = bis.theme.split("-");
        dispatch(setCurrTheme(color + "-" + theme));
        dispatch(setCurrFont(font));
        setIsLoading(false);

        window.addEventListener("resize", handleProgressWidth)

        return () => {
            window.removeEventListener("resize", handleProgressWidth)
        }
    };

    const handleProgressWidth = () => {
        setProgressWidth(innerWidth < 600 ? 100 / testimonials.length : innerWidth < 900 ? (100 / (testimonials.length - 1)) : (100 / (testimonials.length - 2)))
    }


    const HandleBrowseAll = () => {
        const { clientHeight, offsetTop } = document.getElementById("courses-section");
        window.scrollTo({
            top: clientHeight + offsetTop,
            behavior: "smooth"
        })
        setCourseShow(business?.content.length)
    }

    useEffect(() => {
        getBusiness();
        handleProgressWidth()
        window.addEventListener("resize", handleMobileScreen)

        return () => {
            window.removeEventListener("resize", handleMobileScreen)
        }
    }, []);

    const links = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About",
            href: "#"
        },
        {
            name: "Courses",
            href: "#"
        },
        {
            name: "Teachers",
            href: "#"
        },
    ]

    const counterData = [
        {
            count: 80,
            title: "Monthly Users"
        },
        {
            count: 65,
            title: "New Audience"
        },
        {
            count: 95,
            title: "satisfied Customers"
        },

    ]

    const headerCarousel = [
        img1, img2, img3
    ]

    const customHeaderDots = dots => (
        <div
            style={{
                padding: "10px",
                bottom: "0"
            }}
        >
            <ul style={{ margin: "0px" }}> {
                dots
            } </ul>
        </div>
    )

    return (
        <div
            className="bg-background"
            style={inlineStyle}
            data-theme={`${currTheme}`}
        // ref={nahiHoRhaTheme}
        >
            {/* navbar */}
            <nav className="bg-[#ceff42] px-8 md:px-12 border-b-[.5px] border-black flex items-center justify-between relative z-[10]">
                <div className="flex items-center gap-4">
                    <div className="border-r-[1px] border-black">
                        <h1 className="text-xl font-bold pr-4 py-2">Company <br />Name</h1>
                    </div>
                    <div className="md:flex gap-4 hidden">
                        {
                            links.map((e) => (
                                <a key={e.name} className="relative before:w-0 before:absolute before:bottom-0 before:bg-black before:h-[2px] rounded-md hover:before:w-full before:transition-all  before:duration-200 block" href={e.href}>{e.name}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="rounded-lg border-[1px] border-black px-4 py-1 mr-6">Book Demo</button>
                    {
                        NavOpen ? <FaXmark className="md:hidden" onClick={() => setNavOpen(false)} size={30} /> : <IoMenuOutline className="md:hidden" onClick={() => setNavOpen(true)} size={30} />
                    }

                </div>
            </nav>

            {/* mobile links  */}
            <div className={`bg-[#ceff42] flex flex-col gap-4 md:hidden overflow-hidden transition-all duration-300 ${NavOpen ? "h-[200px] px-12 py-6" : "h-0"}`}>
                {
                    links.map((e) => (
                        <a key={e.name} className="text-xl" href={e.href}>{e.name}</a>
                    ))
                }
            </div>

            <div className="min-h-[calc(100vh-72.67px)] bg-[#ceff42] flex flex-col lg:flex-row items-center justify-between md:px-12 px-4">
                <div className="mt-12 lg:mt-0 lg:w-1/2">
                    <div>
                        <h1 className="text-xl lg:text-4xl py-4 px-8 -rotate-[4deg] bg-white text-white  uppercase translate-x-10 w-fit titleshadow relative z-10 text-stroke-3">
                            the Easiest way
                        </h1>
                        <h1 className="text-lg lg:text-2xl py-4 px-8 rotate-[2deg] bg-black text-white w-fit uppercase mt-4">
                            to grow
                        </h1>
                        <h1 className="text-xl lg:text-4xl py-4 px-8 -rotate-[6deg] bg-[#ffc700] text-white uppercase w-fit translate-x-8 sm:translate-x-14 titleshadow z-10 relative -translate-y-4">With the technology</h1>
                    </div>
                    <p className="text-center mt-12 w-[80%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quasi aut atque ullam alias! Architecto distinctio mollitia consequuntur possimus perferendis.</p>
                    <div className="text-center">
                        <button className="bg-white px-8 py-2 rounded-3xl mt-4 hover:bg-[#ceff42] hover:text-white border-2 hover:border-white transition-all duration-200">Learn More</button>
                    </div>
                </div>

                <div className="lg:w-[50%] p-8 self-stretch">
                    <div className="bg-white rounded-full overflow-hidden relative">
                        <Slider autoplay={true} dots={true} dotsClass="slick-dots headersliderdots" appendDots={customHeaderDots} arrows={false} ref={slider => {
                            headerSliderRef = slider;
                        }}>
                            {
                                headerCarousel.map((item, index) => (

                                    <div key={index} className="">
                                        <img src={item} alt="" />
                                    </div>
                                ))
                            }
                        </Slider>

                        <CiCircleChevLeft size={30} className="absolute top-1/2 left-[2%] text-black cursor-pointer active:text-[#ceff42] transition-all duration-200 active:scale-125" onClick={() => headerSliderRef.slickPrev()} />
                        <CiCircleChevRight size={30} className="absolute top-1/2 right-[2%] text-black cursor-pointer active:scale-125 active:text-[#ceff42]" onClick={() => headerSliderRef.slickNext()} />
                    </div>

                </div>
            </div>
            {/* banner */}

            {/* featured section */}


            {featured?.contentTitle != null && (
                <div className="my-12 mx-8 md:flex items-center justify-between">
                    <div className="relative md:basis-[45%] group">
                        <img src={featured.trailerThumbnail} className="object-cover border-[2px] border-black rounded-lg relative z-10 w-[95%] group-hover:translate-x-[-3%] group-hover:translate-y-[-3%] transition-all duration-200" alt="" />
                        <div className="bg-[#ceff42] w-[95%] h-full border-[2px] border-black rounded-lg absolute left-[5%] top-[8%] md:left-0 md:top-0 transition-all duration-200 group-hover:top-[3%] group-hover:left-[3%]"></div>
                    </div>
                    <div className="my-14 sm:mt-20  md:basis-[45%]">
                        <span className="font-bold text-black bg-[#ceff42] rounded-2xl px-8 py-2">{featured.category}</span>
                        <h1 className="font-bold text-2xl mt-4">{featured.contentTitle}</h1>
                        <div dangerouslySetInnerHTML={{
                            __html: setHtmlWithStyle(featured.description.substring(0, 200) + "...", "mt-4 text-xl")
                        }}>
                        </div>
                        <div className="font-bold text-xl mt-4 flex items-center gap-2">
                            <FaIndianRupeeSign />
                            {featured.price}
                        </div>
                        <Link className="flex gap-2 border-[#ceff42] border-[2px] rounded-full font-bold px-4 py-2 w-fit mt-6 items-center group"
                            onClick={() => {
                                dispatch(setContent(featured))
                                window.scrollTo(0, 0)
                            }}
                            to={`/${currSite.toLowerCase()}/${featured._id}`}
                        >
                            See Course Details
                            <div className="flex items-center "><TiMinus className="group-hover:text-[#ceff42]" size={20} /><HiPlay className="group-hover:text-[#ceff42]" /></div>
                        </Link>
                    </div>
                </div>
            )}

            {/* recommendation  */}

            <div className="pt-12 px-8 relative" id="courses-section">
                <div className={`flex items-center justify-between bg-white z-10 py-4 ${courseShow > 3 ? "relative" : "sticky top-0"}`}>
                    <h1
                        className="uppercase  xl tracking-wider text-black md:text-white text-base sm:text-xl md:text-4xl font-bold md:[text-shadow:_-4px_3px_6px_rgb(0_0_0_/_100%)]"><span className="text-[#f43737] mr-4 ">Courses</span>You 'll find.</h1>
                    {
                        courseShow <= 3 && <button
                            onClick={HandleBrowseAll} className="active:bg-[#ceff42] active:text-white active:scale-75 transition-all duration-200 text-bold text-sm px-4 rounded-2xl p-2 border-[1px] active:border-none  border-black">Browse All</button>
                    }
                </div>
                <div className="mt-12 flex flex-wrap justify-around gap-4 gap-y-10">
                    {
                        business?.content.slice(0, courseShow).map((item) => (
                            <div className="md:basis-[40%] lg:basis-[30%] rounded-xl" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                <div className=" overflow-hidden p-2 ">
                                    <img className="object-cover w-full h-full rounded-xl" src={item.trailerThumbnail} alt="" />
                                </div>
                                <div className="px-6 pb-4 flex items-center justify-between">
                                    <div>
                                        <div className="mt-4">
                                            <span className="font-semibold text-sm text-black/60 uppercase">{item.category}</span>
                                        </div>
                                        <div className="mt-1 font-extrabold flex items-center justify-between text-lg">
                                            {item.contentTitle}
                                        </div>
                                        <div className="mt-1 flex items-center gap-2">
                                            <MdOutlineStarRate className="text-black/60 bg-black/20 rounded-sm p-1" size={25} />
                                            {item.rating}
                                        </div>
                                    </div>
                                    <div>
                                        <Link onClick={() => {
                                            dispatch(setContent(item))
                                            window.scrollTo(0, 0)
                                        }} to={`/${currSite.toLowerCase()}/${item._id}`}>
                                            <FaAngleRight size={40} className="bg-black/10 rounded-md text-black/60" />
                                        </Link>
                                    </div>

                                    {/* <div dangerouslySetInnerHTML={{ __html: setHtmlWithStyle(item.description.substring(0, 100) + "...", "text-black/60 mt-4 font-bold") }}>
                                    </div> */}

                                    {/* <div className="mt-4 flex items-center gap-4">
                                        <div className="flex items-center gap-4 grow">
                                            <img className="w-12 h-12 object-cover rounded-md" src={item.author.pfp} alt="" />
                                            <div>
                                                <h2 className="font-bold text-lg">{item.author.name}</h2>
                                                <p className="text-base text-black/60">Web Developer</p>
                                            </div>
                                        </div>
                                        <Link onClick={() => {
                                            dispatch(setContent(item))
                                            window.scrollTo(0, 0)
                                        }} to={`/${currSite.toLowerCase()}/${item._id}`}>
                                            <FaAngleRight size={40} className="bg-black/10 rounded-md text-black/60" />
                                        </Link>
                                    </div> */}
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

            {/* counters  */}

            <div className="bg-[#ceff42] text-black px-8 py-12 my-8 md:flex gap-8">
                <h1 className="capitalize text-xl md:basis-[50%] md:self-center md:text-2xl lg:text-3xl">We've helped businesses increase their revenue on average by 90% in their first year with us!</h1>

                <div className="my-8 flex flex-col lg:flex-row flex-wrap gap-4 md:basis-[50%] lg:justify-between">
                    {
                        counterData.map((item, index) => (
                            <div className="bg-white text-blackuppercase flex items-center flex-col gap-4 py-4 lg:basis-[48%]">
                                <h1 className="text-black text-5xl font-bold "><Counter end={item.count} /></h1>
                                <h2 className="font-bold text-xl">{item.title}</h2>
                            </div>
                        ))
                    }


                </div>
            </div>


            {/* testimonial */}
            {/* <div className=" py-8 bg-white">
                <h1 className="text-center font-bold text-4xl">Learn From Best</h1>
                <div className="mt-12 " id="testimonial-slider">
                    <Slider {...settings} ref={slider => {
                        sliderRef = slider;
                    }}>
                        {
                            testimonials.map((e, i) => (
                                <div key={i} className="">
                                    <div className="mt-4 p-4 rounded-md bg-[#ceff42]" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                        <h2 className="font-bold text-xl capitalize">{e.name}</h2>
                                        <h3 className="font-bold text-sm mt-2">~{e.description}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                    <div className="flex items-center justify-center mt-4 sm:mt-8 md:mt-10 gap-3">
                        <IoChevronBackCircleOutline onClick={previous} size={40} className="text-black cursor-pointer" />

                        <span className="relative overflow-hidden inline-block w-1/3 bg-white h-2 rounded-xl max-w-[100px] border-2 border-black">
                            <span className={`bg-black absolute h-full top-0 left-0 transition-all duration-200`} style={{
                                width: `${progressWidth}%`,
                                left: `${activeSlide * progressWidth}%`
                            }}></span>
                        </span>

                        <IoChevronBackCircleOutline onClick={next} size={40} className="rotate-180 text-black cursor-pointer font-extrabold" />
                    </div>
                </div>
            </div> */}

            <div className="my-12 mx-8 flex flex-col md:flex-row md:gap-4 md:items-center overflow-hidden">
                <div className="md:basis-[40%] mb-4 md:mb-0">
                    <span className="inline-block bg-[#ceff42] rounded-full px-4 py-2 font-bold">Testimonials</span>
                    <h1 className="font-bold text-2xl mt-2">What our customers say about us.</h1>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas magni eligendi corporis maiores, unde est deleniti laboriosam minima odit expedita!</p>
                </div>

                <div className="md:basis-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 relative">



                    <Slider
                        dots={false}
                        arrows={false}
                        slidesToShow={isMobileScreen ? 1.2 : 2}
                        slidesToScroll={1}
                        vertical={!isMobileScreen}
                        infinite={true}
                        verticalSwiping={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                        speed={5000}
                        cssEase={"linear"}
                        className={isMobileScreen && `testimoninal-slider`}
                    // adaptiveHeight={false}
                    >

                        {
                            testimonials.map((item, index) => (
                                <div key={index} className="rounded-lg p-4 bg-[#ceff42] my-4 max-md:min-h-[200px]">
                                    <p className="font-bold">{item.description}</p>
                                    <small className="mt-2 inline-block">{item.quote}</small>

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-2">
                                            <img className="size-12 object-cover" src={user} alt="" />
                                            <div className="font-bold">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div>
                                            <LuMessagesSquare size={30} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }





                    </Slider>


                    <Slider
                        dots={false}
                        arrows={false}
                        slidesToShow={2}
                        slidesToScroll={1}
                        vertical={true}
                        infinite={true}
                        verticalSwiping={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                        speed={5000}
                        cssEase={"linear"}
                        rtl={true}
                        className="hidden md:block"
                    >

                        {
                            testimonials.map((item, index) => (
                                <div key={index} className="rounded-lg p-4 bg-[#ceff42] my-4">
                                    <p className="font-bold">{item.description}</p>
                                    <small className="mt-2 inline-block">{item.quote}</small>

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-2">
                                            <img className="size-12 object-cover" src={user} alt="" />
                                            <div className="font-bold">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div>
                                            <LuMessagesSquare size={30} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }





                    </Slider>

                </div>

            </div>


            {/* call to action button  */}

            <div className="my-12 mx-8 relative flex items-center justify-center py-8 rounded-lg overflow-hidden bg-[#ceff42] ">
                <div className="text-center relative z-[1000] px-2">
                    <h1 className="text-2xl font-bold">Check all data for all domains</h1>
                    <p className="max-w-[600px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore nemo quos cupiditate perferendis odio error, eligendi inventore hic natus labore explicabo porro eius quis adipisci sequi quod? Provident, recusandae.</p>
                    <button className="inline-block mx-auto mt-4 bg-black text-white py-4 px-8 rounded-lg">Get Course Now</button>
                </div>

                <InView triggerOnce={true}>
                    {
                        ({ inView, ref }) => (
                            <svg ref={ref} class={`absolute max-sm:hidden duration-1000 top-0 right-0 size-40 translate-x-1/3 -translate-y-1/3 ${inView ? "rotate-45" : "rotate-0"}`} viewBox="0 0 116 121" xmlns="http://www.w3.org/2000/svg" fill="#000"><path d="M.55 62.3c.7 32.3 26.6 57.9 58.6 58.6.8 0 1.4-.6 1.4-1.4v-3.8c30.3 0 54.9-24.6 54.9-54.9 0-30.3-24.6-54.9-54.9-54.9V2.1c0-.8-.6-1.4-1.4-1.4-15.5.4-29.6 6.6-40.1 16.6-.5.5-.5 1.4 0 1.9l2.7 2.7c-9.9 9.9-16.1 23.6-16.1 38.8h-3.7c-.8.2-1.4.8-1.4 1.6z"></path></svg>
                        )
                    }
                </InView>

                <InView triggerOnce={true}>
                    {
                        ({ ref, inView }) => (
                            <svg ref={ref} class={`absolute max-sm:hidden transition-all duration-1000 left-0 bottom-0 size-40 -translate-x-1/3 translate-y-1/3 ${inView ? "rotate-45" : "rotate-0"}`} viewBox="0 0 127 121" xmlns="http://www.w3.org/2000/svg" fill="#000"><path d="M107.95 34.8c-3.9-12.9-11.7-25.3-22.3-33.9-.4-.3-1-.4-1.4-.2l-17 7.7c-15.2-2.8-30.4-3.4-45.1 2-.5.2-.9.7-.9 1.2-.2 4.2-1.1 21.5-1.1 21.5-10.1 10.7-18.1 24.2-20 38.8-.1.5.2 1 .6 1.3l18.2 12.7c3.9 12.9 11.7 25.3 22.3 33.9.4.3 1 .4 1.4.2l17-7.7c15.2 2.8 30.4 3.4 45.1-2 .5-.2.9-.7.9-1.2l1.1-21.5c10.1-10.7 18.1-24.2 20-38.8.1-.5-.2-1-.6-1.3l-18.2-12.7z"></path></svg>
                        )
                    }
                </InView>




            </div>

            {/* faqs  */}



            <div className="my-12 mx-8 grid grid-cols-1">

                <h2 className="font-bold text-2xl">We Got the ansers of thousand qustions.</h2>

                <div className="my-8 grid grid-col-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
                    {
                        activeFaq.map((item, index) => (
                            <div key={index} className="p-4 border-[1px] border-black/65 rounded-sm">
                                <h2 className="font-bold text-xl">{item.qustion}</h2>

                                <Collapse isOpened={true}>
                                    <p className="mt-2">{item.isopen ? item.answer : item.answer.length > 150 ? item.answer.substring(0, 150) + " ..." : item.answer}</p>
                                </Collapse>


                                {
                                    item.answer.length > 150 && (
                                        <button onClick={() => {
                                            activeFaq[index].isopen = !activeFaq[index].isopen
                                            setActiveFaq([...activeFaq])
                                        }} className="underline text-gray-900 mt-2 pb-1">{item.isopen ? "Read Less" : "Read More"}</button>
                                    )
                                }
                            </div>
                        ))
                    }



                </div>
            </div>

            {/* featured section with image  */}

            <div className="my-8 relative py-8 px-8 overflow-hidden">
                <InView triggerOnce={true}>
                    {
                        ({ inView, ref }) => (
                            <img ref={ref} src={wave2} className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${inView ? "translate-y-0" : "-translate-y-full"}`} alt="" />
                        )
                    }
                </InView>

                <div className="relative z-10 md:flex lg:justify-around">

                    <InView triggerOnce={true}>
                        {
                            ({ ref, inView }) => (
                                <div ref={ref} className={`basis-[50%] lg:basis-[40%] transition-all duration-500 ${inView ? "translate-x-0" : "-translate-x-full"}`}>
                                    <div>
                                        <h1 className="text-5xl font-bold">Quick Electric </h1>
                                        <h2 className="mt-3 tracking-[1rem] text-5xl">Service</h2>
                                    </div>
                                    <p className="mt-4 text-xl">Our mission is to provide electrical service, information and support to our customers and their family.</p>

                                    <button className="text-2xl rounded-full px-8 py-4 bg-black text-white mt-4">Contact Us</button>
                                </div>
                            )
                        }
                    </InView>



                    <div className="relative z-10 mt-8 basis-1/2 lg:basis-[40%] overflow-hidden">
                        <InView triggerOnce={true}>
                            {
                                ({ inView, ref }) => (
                                    <img ref={ref} src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/5ba163a740815738a184886d/min.png" className={`w-full h-full object-cover transall  duration-500 ${inView ? "translate-x-0" : "translate-x-full"} `} alt="" />
                                )
                            }
                        </InView>

                    </div>

                </div>



            </div>

            {/* newsletter  */}
            <div className="bg-black p-12 px-8 text-center">
                <h1 style={{ wordSpacing: "6px" }} className="text-2xl text-white md:text-4xl max-w-[800px] mx-auto md:leading-relaxed">Subscribe to newslater to get <span className="uppercase">access</span>  to free <span className="text-[#2f9bbc] uppercase">Mentorship</span> for a week.</h1>
                <div className="mt-8">
                    <div className="border-white border-2 border-r-0 rounded-xl overflow-hidden flex max-w-[600px] mx-auto">
                        <input className="text-white outline-none border-none grow p-2 bg-black md:pr-12" type="email" name="" id="" placeholder="Enter Your Email" />
                        <button className="bg-white px-4 py-2 rounded-xl">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* footer  */}

            <footer className="bg-black relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ceff42" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,58.7C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

                <div className="md:absolute w-full left-0 top-[40%]">
                    <div className="bg-[#ceff42] px-8 py-8">
                        <div className="sm:col-span-2 md:col-span-3 sm:mb-4 lg:col-span-1">
                            <img src={logo} className="object-cover w-[150px]" alt="" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {
                                sections.map((e) => (
                                    <div className="mt-4">
                                        <h2 className="font-bold">{e.title}</h2>
                                        <div className="flex flex-col mt-2">
                                            {
                                                e.items.map((x) => (
                                                    <a href="#">{x}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="bg-white flex flex-col gap-4 items-center justify-between py-4 px-8 sm:flex-row">
                        <div>
                            BridgeYu 2024, All rigths reserved.
                        </div>
                        <div className="flex gap-2">
                            {
                                items.map((e) => (
                                    <a className="hover:text-[#ceff42]" href={e.link}><e.icon size={20} /></a>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </footer>

        </div>
    );
};

export default HomePage;
