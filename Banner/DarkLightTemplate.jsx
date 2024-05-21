import React, { useEffect, useState, useRef } from "react";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
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

import { FaChevronDown, FaRupeeSign, FaStar } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import clsx from "clsx";
import Slider from "react-slick";
import { FaChevronCircleRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from "react-icons/fa";
import { Collapse } from "react-collapse";
import Counter from "../../components/Counter";
import { InView } from "react-intersection-observer"

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


const DarkLightTemplate = () => {



    const faqs = [
        {
            qustion: "What are some good FAQ questions?",
            answer: "Some common examples include questions about service hours, shipping and handling, product details, return policies, etc., depending on the industry. You can have different FAQ sections for different pages of your website. Your FAQ page demonstrates how well you understand your customers.",
            show: false
        },
        {
            qustion: "How do you answer FAQ questions?",
            answer: "What is General FAQ? It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies.",
            show: false
        },
        {
            qustion: "Why is FAQ important?",
            answer: "Visitors will primarily use your site menus to navigate through your site, but an FAQ page can also serve as a way to point them where they need to go—whether that's a product page, a whitepaper, or a blog post they might not have found otherwise",
            show: false
        },
    ]
    const [business, setBusiness] = useState(null);
    const [featured, setFeatured] = useState({});
    const { currSite } = useSelector((state) => state.app);
    const [isLoading, setIsLoading] = useState(true);
    const { currTheme, currFont } = useSelector((state) => state.app);
    const nahiHoRhaTheme = useRef();
    const dispatch = useDispatch();
    const [isSideMenuOpen, setMenu] = useState(false);
    const [activeTab, setActiveTab] = useState("all")
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [dark, setDark] = useState(false)
    const [faq, setFaq] = useState(faqs)
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeBanner, setActiveBanner] = useState(0);

    let sliderRef = useRef(null);
    let featuredRef = useRef(null)
    let featuredRef1 = useRef(null)

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
        theme: "darklight",
        styles: {
            font: "Lato",
            gradient: {
                from: "#b3c1f3",
                via: "#d2daf8",
                to: "#ebeffc"
            },
            innerText: "#ffffff",
            primary: "#b3c1f3",
            secondary: "#6258bd",
            uiMode: "snowfall"
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
                    name: "Dr. Angela Yu",
                    about:
                        "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.\n\n",
                    pfp: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYu21a40491b14f877492f21fe87c42f379.mp3",
                },
                contentTitle: "Python Crashcourse",
                category: "Web Development",
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
                category: "App development",
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
                category: "Python development",
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
                category: "Software Testing",
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
                link: "https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/11ce5eba-e62a-41b0-93a4-7a34361b4740/image.png",
                mobile: "https://dukaan.b-cdn.net/800x800/webp/upload_file_service/e7b49fea-f9e9-4e66-9302-0811f6669476/image.png",

                _id: "65f6fd204c4327f063440e59",
            },
            {
                title: "Banner1",
                link: "https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/07c5a500-b76e-490d-9c42-33985d32f329/image.png",
                mobile: "http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715756157/k30kyrtxfnqflcwjwrsq.webp",
                _id: "65f6fd204c4327f063440e59",
            },
            {
                title: "Banner1",
                link: "https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/11ce5eba-e62a-41b0-93a4-7a34361b4740/image.png",
                mobile: "https://dukaan.b-cdn.net/800x800/webp/upload_file_service/e7b49fea-f9e9-4e66-9302-0811f6669476/image.png",

                _id: "65f6fd204c4327f063440e59",
            },
        ],
    };

    const getBusiness = async () => {
        // const res = await axiosInstance.get(
        //   CONST.uri.business.GET_BUSINESS + `/${currSite}`
        // );
        setBusiness(bis);
        // console.log(res.data);
        setFeatured(bis.content[0]);

        // Split the theme into theme and font
        dispatch(setCurrTheme(bis.styles.uiMode))
        dispatch(setCurrFont(bis.styles.font));
        setIsLoading(false);
    };

    // detructring all the styles 

    const { font, primary, secondary, gradient: { from, via, to }, innerText } = bis?.styles;

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

    useEffect(() => {
        getBusiness();
        setNav1(featuredRef);
        setNav2(featuredRef1);
        // window.onload = ()=>{
        //     document.getElementById(bis.theme)?.style.cssText = `--slider-indicators: ${bis?.styles.primary}`;
        // }

    }, []);

    const hanldeCloseNav = e => {
        setMenu(false)
    }

    const handleTabScroll = () => {
        const container = document.getElementById("tab-container");
        container.scrollLeft += window.innerWidth;
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;

        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ background: primary }} >
                <AiOutlineArrowLeft class="arrows text-white rounded-full" style={{ color: innerText }} />
            </div>
        )
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ background: primary }} >
                <AiOutlineArrowRight className="arrows  rounded-full" style={{ color: innerText }} />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        className: "slides",
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const bannerSettings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "80px",
        beforeChange: (_, next) => {
            setActiveBanner(next)
        },
        className: "header-slider-tdl center",
        dotsClass: "slick-dots header-dots",
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };


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

    const counterData = [
        {
            count: 60,
            title: "Monthly Users",
        },
        {
            count: 30,
            title: "New Audience",
        },
        {
            count: 10,
            title: "satisfied Customers",
        },

    ]

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



    const setHtmlWithStyle = (htmlString, className = "") => {
        // Regular expression to match all HTML tags
        const regex = /<[^>]*>/g;
        // Add 'text-base' class to each matched HTML tag
        const modifiedHtml = htmlString.replace(regex, (match) => {
            return match.replace(">", ` class="${className}">`);
        });
        return modifiedHtml;
    };


    return (
        <div
            style={inlineStyle}
            data-theme={`${currTheme}`}
            id={business?.theme}
            className="bg-background"
        // ref={nahiHoRhaTheme}
        >
            <div className="">
                {/* navbar  */}

                <nav className="flex justify-between px-8 items-center py-4 text-base border-b-[.5px] border-border">
                    <div className="flex items-center gap-8">
                        <section className="flex items-center gap-4">
                            {/* menu */}
                            <FiMenu
                                onClick={() => setMenu(true)}
                                className="cursor-pointer lg:hidden"
                            />
                            {/* logo */}
                            <Link href={"/"} className="text-4xl font-mono">
                                <h1 className="text-xl xs:text-2xl text-base">Bridge <span className="text-[#5172ff] uppercase">Yu</span> </h1>
                            </Link>
                        </section>
                        <div className=" flex items-center justify-between gap-4 group">
                            {navlinks.map((d, i) => (
                                <Link
                                    key={i}
                                    className="hidden lg:block text-base"
                                    href={d.link}
                                >
                                    {d.label}
                                </Link>
                            ))}
                        </div>

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

                    {/* search bar  */}

                    <div className="hidden lg:flex items-center gap-2 grow border-border dark:border-white border-[1px] rounded-full overflow-hidden px-4 py-2 mx-8 max-w-[400px]">
                        <IoSearchOutline className="dark:text-white" />
                        <input type="text" name="" id="" placeholder="Search Here" className="grow text-base  placeholder:text-base border-none outline-none bg-transparent " />
                    </div>



                    {/* last section */}
                    <section className="flex items-center gap-4">
                        {/* <input
                            className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-black after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-white dark:checked:after:bg-[#202020]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault" onChange={() => setDark(!dark)} /> */}

                        <button className=" dark:bg-white text-sm text-white dark:text-black px-2 sm:px-5 py-2 rounded-full  border-[1px]" style={{ background: primary, color: innerText }}>Sign Up</button>
                    </section>
                </nav>

                {/* banner */}

                <div className="md:my-4 relative">
                    <Slider {...bannerSettings} ref={slider => {
                        sliderRef = slider;
                    }}>
                        {
                            business?.banners?.map((item, index) => (
                                <picture key={index}>
                                    <source media="(min-width:768px)" srcset={item.link} />
                                    <img src={item.mobile} alt="" />
                                </picture>
                            ))
                        }

                    </Slider>

                    {/* custum dots  */}

                    <div className="flex items-center justify-center gap-2 mt-2">
                        {
                            business?.banners?.map((item, index) => (
                                <span key={index} onClick={() => sliderRef.slickGoTo(index)} className="inline-block size-3 transition-all duration-1000 cursor-pointer" style={activeBanner === index ? { background: primary, borderRadius: "50px" } : { background: "#c3c8ce", borderRadius: "0px" }}></span>
                            ))
                        }
                    </div>

                    <div className="absolute top-1/2 left-[3%]  p-2 rounded-sm shadow-sm shadow-shadow cursor-pointer hidden md:block" style={{ background: primary, color: innerText }} onClick={() => sliderRef.slickPrev()}>
                        <AiOutlineArrowLeft size={20} />
                    </div>

                    <div className="absolute top-1/2 right-[3%] p-2 rounded-sm shadow-sm shadow-shadow cursor-pointer hidden md:block" style={{ background: primary, color: innerText }} onClick={() => sliderRef.slickNext()}>
                        <AiOutlineArrowRight size={20} />
                    </div>
                </div>




                {/* featured section  */}
                {featured?.contentTitle != null && (
                    <div className=" mx-8 text-prime py-8 mt-16 relative flex flex-col-reverse md:flex-row justify-between md:px-8  items-center gap-8 rounded-3xl">
                        <div className="basis-[40%] text-base">
                            <h1 className="text-xl font-medium uppercase w-fit   relative before:absolute  before:-bottom-[10%] before:w-full before:h-[2px] before:bg-gray-800">Our Best Course</h1>
                            <div className="mt-8">
                                <div className="flex space-x-2 font-bold">
                                    <StarRating rating={featured.rating} color={secondary} />
                                    <p>{featured.rating}</p>
                                    <p className="text-muted">({featured.reviews.length} reviews)</p>
                                </div>
                                <h2 className=" text-2xl font-semibold mt-2">{featured.contentTitle}</h2>
                                <div dangerouslySetInnerHTML={{ __html: setHtmlWithStyle(featured.description.substring(0, 100) + "...", "text-muted mt-2") }}>
                                </div>
                                <div className="mt-4">
                                    <div className="flex gap-2 text-xl items-center font-bold">
                                        <FaRupeeSign />
                                        {featured.price}
                                    </div>
                                </div>
                                <Link onClick={() => {
                                    dispatch(setContent(featured))
                                    window.scrollTo(0, 0)
                                }}
                                    to={`/${currSite.toLowerCase()}/${featured._id}`} className="py-2 px-4 mt-4  inline-block  rounded-md" style={{ background: primary, color: innerText }}>Enroll Now</Link>
                            </div>
                        </div>
                        <div className="basis-[60%]">
                            <div className="rounded-md overflow-hidden md:w-[80%] mx-auto">
                                <img src={featured.trailerThumbnail} className="w-full h-auto object-cover" alt="" />
                            </div>
                        </div>

                    </div>
                )}



                {/* Recommanded  */}


                <div className="mt-16 mx-8 mb-8">
                    <div className="flex gap-2 items-center">
                        <div className="flex grow gap-2 overflow-x-scroll scrollbar-hidden scroll-smooth" id="tab-container">
                            <span className={clsx("border-[2px] border-border  text-base  inline-block px-4 py-1 rounded-full shrink-0 cursor-pointer")} onClick={() => setActiveTab("all")} style={activeTab === "all" ? { background: primary, color: innerText } : {}}>
                                All
                            </span>
                            {
                                business?.content?.map((item, index) => (
                                    <span key={index} className={clsx(" text-base border-[2px] border-border   inline-block px-4 py-1 rounded-full shrink-0 cursor-pointer last:mr-12")} style={activeTab === item.category.toLowerCase() ? { background: primary, color: innerText } : {}} onClick={() => setActiveTab(item.category.toLowerCase())}>
                                        {item.category}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="h-full">
                            <div className="bg-black  rounded-full cursor-pointer" onClick={handleTabScroll}>
                                <FaChevronCircleRight size={30} className="fill-white" />
                            </div>
                        </div>
                    </div>

                    <div className="slider-container relative mt-8">
                        <Slider {...settings}>
                            {
                                activeTab === "all" ? business?.content.map((item, i) => {
                                    return (
                                        <Link
                                            onClick={() => dispatch(setContent(item))}
                                            to={`/${currSite.toLowerCase()}/${item._id}`}
                                            key={i}
                                            className="rounded-2xl bg-card text-base overflow-hidden"
                                            style={{ boxShadow: "rgba(0, 0, 0, 1) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                                        >
                                            <div className="w-full rounded-lg">
                                                <img
                                                    src={item.trailerThumbnail}
                                                    alt=""
                                                    className="w-full mx-auto"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div>
                                                    <h1 className="font-extrabold text-2xl">{item.contentTitle}</h1>
                                                    <p className="mt-1 capitalize font-bold">{item.author.name}</p>
                                                    <div className="flex items-center gap-4 text-xl font-semibold">
                                                        <h2>{item.rating}</h2>
                                                        <div>
                                                            <StarRating rating={item.rating} color={secondary} />
                                                        </div>
                                                        <div className="text-muted">({item.reviews.length})</div>
                                                    </div>
                                                    <div className="mt-1 flex gap-2 items-center">
                                                        <FaRupeeSign />
                                                        <span className="text-2xl font-bold">{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }) : business?.content.filter((item) => item.category.toLowerCase() === activeTab).map((item, i) => {
                                    return (
                                        <Link
                                            onClick={() => dispatch(setContent(item))}
                                            to={`/${currSite.toLowerCase()}/${item._id}`}
                                            key={i}
                                            className="rounded-2xl bg-card overflow-hidden text-base"
                                            style={{ boxShadow: "rgba(0, 0, 0, 1) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                                        >
                                            <div className="w-full rounded-lg">
                                                <img
                                                    src={item.trailerThumbnail}
                                                    alt=""
                                                    className="w-full mx-auto rounded-lg"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div>
                                                    <h1 className="font-extrabold text-2xl">{item.contentTitle}</h1>
                                                    <p className="mt-1 capitalize font-bold">{item.author.name}</p>
                                                    <div className="flex items-center gap-4 text-xl font-semibold">
                                                        <h2>{item.rating}</h2>
                                                        <div>
                                                            <StarRating rating={item.rating} color={secondary} />
                                                        </div>
                                                        <div className="text-muted">({item.reviews.length})</div>
                                                    </div>
                                                    <div className="mt-1 flex gap-2 items-center">
                                                        <FaRupeeSign />
                                                        <span className="text-2xl font-bold">{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })
                            }
                        </Slider>

                        <div>

                        </div>
                    </div>
                </div>

                {/* features slider secion  */}


                <div className="my-12 md:my-16 mx-8 block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative pb-16 md:pb-0">
                        <div className="slider-container md:relative">
                            <Slider arrows={false} beforeChange={(_, current) => setActiveSlide(current)} asNavFor={nav1} ref={slider => (featuredRef1 = slider)}>
                                {
                                    featuredSectionData.map((item, index) => (
                                        <div className="text-base">
                                            <h1 className="text-2xl font-bold">Fun Moments.</h1>
                                            <p className="mt-2 text-muted text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet in adipisci aspernatur quasi maxime quam veritatis, ratione amet quae?</p>
                                            <button className="rounded-full px-4 py-2 bg-tertiary text-white mt-4 border-white border-2">Explore Now</button>
                                        </div>
                                    ))
                                }
                            </Slider>

                            <div className="flex items-center justify-center gap-4 mt-8 absolute md:bottom-[5%] bottom-0 w-full z-10">
                                {
                                    featuredSectionData.map((item, index) => (

                                        <div onClick={() => featuredRef.slickGoTo(index)} className={`relative cursor-pointer border-2  p-1 rounded-sm ${activeSlide === index ? "border-border" : "border-transparent"}`}>
                                            <img key={index} className="size-10  object-cover rounded-sm" src={item.image} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden">
                            <Slider asNavFor={nav2} ref={slider => {
                                featuredRef = slider;
                            }}>
                                {
                                    featuredSectionData.map((item, index) => (
                                        <img className="w-full h-full object-cover aspect-video" src={item.image} alt="" />
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>

                </div>




                {/* CTA section  */}

                <div className="my-8 py-12 px-4 text-inverted bg-overlay relative overflow-hidden">
                    <div className="flex flex-col items-center gap-4 max-w-[800px] text-center mx-auto px-4 relative z-[100]">
                        <h1 className="text-3xl font-bold">Scale Your business with BridgeYu.</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio dolore sint deleniti a quisquam eveniet obcaecati tempora accusamus dolorem.</p>
                        <button className="px-4 mt-4 transition-all duration-300 rounded-sm py-2 hover:-translate-y-[10%] font-bold" style={{ background: primary, color: innerText }}>Learn More</button>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full z-10">
                        <img src="https://mydukaan.io/_next/static/media/banner-bg-grid.9316afcddfcb78d705d0f20c456dd4be.svg" className="object-cover w-full h-full scale-150" alt="" />
                    </div>
                </div>

                {/* faq section  */}

                <div className="mx-8 my-12 md:mb-16">
                    <div className="text-base">
                        <h1 className="font-bold text-2xl">FAQ</h1>
                        <p className="my-4 italic text-muted text-xl sm:w-1/2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    <div className="flex flex-col gap-8 my-8 md:flex-row items-start md:justify-around">
                        <div className="my-4 overflow-hidden md:basis-[45%]">
                            {
                                faq.map((item, index) => (
                                    <div key={index} className="border-b-[.5px] border-border  py-4 mt-2 text-base">
                                        <div className="flex items-start gap-4 cursor-pointer" onClick={() => {
                                            const newFaq = [...faq]
                                            newFaq[index].show = !item.show;
                                            setFaq(newFaq)
                                        }}>
                                            <div className="grow font-semibold text-xl">
                                                {item.qustion}
                                            </div>
                                            <FaChevronDown size={20} className={`transition-all duration-300 ${item.show ? "rotate-180" : "rotate-0"}`} />
                                        </div>
                                        <Collapse isOpened={item.show}>
                                            <div className={`mt-4 text-lg  transition-all duration-500 delay-300 text-muted`}>
                                                {item.answer}
                                            </div>
                                        </Collapse>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="rounded overflow-hidden md:basis-[45%]">
                            <InView triggerOnce={true}>
                                {
                                    ({ inView, ref }) => (
                                        <img ref={ref} src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/fd068b0559d35b9586516e6d/pexels-photo-6802050.jpg?version=" className={` transition-all duration-500 ${inView ? 'translate-y-[0%] opacity-100' : "translate-y-[50%] opacity-0"}`} alt="" />
                                    )
                                }
                            </InView>

                        </div>
                    </div>
                </div>

                {/* counter section  */}

                <div className="my-8 px-8 py-4 md:flex gap-8">

                    <div className="md:basis-[40%] overflow-hidden">
                        <InView triggerOnce={true} threshold={.3}>
                            {
                                ({ inView, ref }) => (
                                    <img ref={ref} src="https://assets.nicepagecdn.com/d2cc3eaa/1546336/images/fgfg7-min.png" className={`w-full h-full object-contain transition-all duration-500 ${inView ? "translate-y-0 opacity-100" : "translate-y-1/2 opacity-0"}`} alt="" />
                                )
                            }
                        </InView>
                    </div>

                    <div className="flex flex-col my-8 sm:flex-row gap-4 md:my-12 lg:my-16  py-12 px-8 flex-wrap sm:gap-y-8 sm:text-center sm:justify-between md:basis-[60%] rounded-md" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", background: primary }}>
                        {
                            counterData.map((item, index) => (
                                <div key={index} className={`sm:basis-[40%] text-base`}>
                                    <h1 className="font-bold text-6xl "><Counter end={item.count} suffix={"+"} /></h1>
                                    <p className="text-2xl mt-4 text-muted ">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>




                {/* section  */}




                {/* tsetimonials  */}


                <InView triggerOnce={true} threshold={.5}>
                    {
                        ({ ref, inView }) => (
                            <div ref={ref} className="my-8 py-8 lg:py-12 px-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-8" style={{ background: `linear-gradient(to right,${from} , ${to} )` }}>
                                {
                                    testimonials.map((item, index) => (

                                        <div key={index} className={`bg-backgroundInverted rounded-sm p-4 relative sm:basis-[45%] transition-all duration-1000 lg:basis-[30%] ${inView ? "-translate-y-[10%]" : "translate-y-[0%]"}`}>
                                            <div className="">
                                                <h2 className="font-bold">{item.name}</h2>
                                                <p className="text-sm">{item.quote}</p>
                                            </div>
                                            <div className="text-sm font-semibold mt-2">
                                                {item.description}
                                            </div>
                                            <BiSolidQuoteAltRight size={50} className=" opacity-50 absolute right-[10%] top-[5%]" style={{ fill: primary }} />
                                        </div>
                                    ))
                                }


                            </div>
                        )}
                </InView>


                {/* footer  */}

                <div className=" w-full py-10 px-14 mt-20 text-base">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5">
                        <div>
                            <h2>Follow Us.</h2>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {
                                    items.map((e, i) => (
                                        <div key={i} className=" p-2 rounded-full">
                                            <a className="text-2xl" style={{ color: secondary }} href={e.link}>{e.icon()}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            sections.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <h2>{e.title}</h2>
                                        <div className="mt-2">
                                            {
                                                e.items.map((e, i) => (
                                                    <a key={i} className="block" href="">{e}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="mt-6 border-t-[1px] border-border  pt-4">
                        <p className="text-center  font-bold">copyright ©️ Bridge YU</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DarkLightTemplate;
