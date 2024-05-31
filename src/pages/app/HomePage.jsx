import React, { useEffect, useState, useRef } from "react";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav";
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
import { Separator } from "@/components/ui/separator";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import { Testimonial } from "../../components/Testimonial";

const HomePage = () => {
  const [business, setBusiness] = useState(null);
  const [featured, setFeatured] = useState({});
  const { currSite } = useSelector((state) => state.app);
  const [isLoading, setIsLoading] = useState(true);
  const { currTheme, currFont } = useSelector((state) => state.app);
  const nahiHoRhaTheme = useRef();
  const dispatch = useDispatch();

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

    "imageWithOverlay": {
      "title": "Image with text overlay",
      "description": "Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story.",
      "image": "https://bridgeyu.s3.ap-south-1.amazonaws.com/Bridgeyu-17f24c0d88a3cb1ee7b2a2a1680969e4.jpeg",
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
        "description": "Featured content description",
        "image": "C:\\fakepath\\wallpaperflare.com_wallpaper (5).jpg",
        "CtaName": "Apply Now",
        "CtaLink": "www.google.com",
        "_id": "6645a1bb0ffcc96fe8badb39"
      },
      {
        "title": "Test Content",
        "description": "Description",
        "image": "C:\\fakepath\\wallpaperflare.com_wallpaper (5).jpg",
        "CtaName": "Apply",
        "CtaLink": "www.google.com",
        "_id": "6645a1fe0ffcc96fe8badb64"
      },
      {
        "title": "Featured",
        "description": "description",
        "image": "https://bridgeyu.s3.ap-south-1.amazonaws.com/Bridgeyu-0f115bc0d35b7703b5815b679218e89c.jpeg",
        "CtaName": "Apply",
        "CtaLink": "www.google.com",
        "_id": "6645a2620ffcc96fe8badb90"
      }
    ],
    "styles": {
      "primary": "#EC2020",
      "secondary": "#F8D605",
      "innerText": "#F8FAFC",
      "uiMode": "charcoal",
      "font": "Poppins",
      "gradient": {
        "to": "#129BE7",
        "from": "#5001FD",
        "via": "#1F66DE"
      }
    },
    "theme": "withbannner",
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
    ],
    banners: [
      {
        title: "Banner1",
        link: "https://bridgeyu.s3.ap-south-1.amazonaws.com/BridgeYue55f667a86e2bbf02160f0d4b6e07716.jpeg",
        _id: "65f6fd204c4327f063440e59",
      },
      {
        title: "Banner1",
        link: "https://www.simplilearn.com/ice9/assets/1410243f-aea7-497b-9bd1-737a4a6a9e34.png",
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
  };

  useEffect(() => {
    getBusiness();
  }, []);

  return (
    <div
      className="bg-background"
      style={inlineStyle}
      data-theme={`${currTheme}`}
    // ref={nahiHoRhaTheme}
    >
      <Nav />
      {/* banner */}
      <div className={`mx-auto mt-4 bg-background `}>
        <Carousel>
          <CarouselContent>
            {business?.banners.map((item, id) => (
              <CarouselItem key={id}>
                <img src={item.link} alt="" className="w-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Separator className="mt-8" />
      {/* featured section */}
      {featured?.contentTitle != null && (
        <div className="mt-8 mx-8">
          <span className="font-bold texl-3xl text-base">
            Our Top Picks For You
          </span>
          <div className="bg-card border-[1px] rounded-lg mt-4 p-8 sm:flex sm:flex-col md:flex-row shadow-md shadow-shadow">
            <div className="md:w-1/2">
              <img
                src={featured.trailerThumbnail}
                alt=""
                className="sm:h-48 md:h-80 rounded-lg hover:opacity-80 duration-150"
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 md:ml-8 flex flex-col justify-between">
              <div>
                <p className="font-bold text-2xl text-base">
                  {featured.contentTitle}
                </p>
                <p className="text-sm mt-4 text-base">
                  {featured.description.length > 100
                    ? `${featured.description.substring(0, 100)}...`
                    : featured.description}
                </p>
                <p className="font-medium text-sm mt-4 text-muted">
                  by: {featured.author.name}
                </p>
                <div className="flex flex-row mt-8 space-x-2 items-center">
                  <p className="font-medium text-sm text-muted">
                    {featured.rating}
                  </p>
                  <StarRating rating={featured.rating} />
                  <p className="font-medium text-sm text-muted">
                    ({featured?.reviews.length})
                  </p>
                  <div className="bg-primary px-3 py-1 rounded-sm hover:opacity-70 duration-150">
                    <span className="text-gray-100 text-sm font-medium ">
                      Best Seller
                    </span>
                  </div>
                </div>
              </div>
              <p className="justify-self-end mb-0 font-bold text-lg text-base">
                &#x20B9;{featured.price}
              </p>
            </div>
          </div>
        </div>
      )}
      <Separator className="mt-8" />
      <div className="mt-8 mx-8 mb-8">
        <p className="font-bold texl-3xl text-base">Recommended for you</p>
        <div className="rounded-lg mt-8 flex flex-row space-x-4">
          {" "}
          {business?.content.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-lg w-1/5 shadow-lg shadow-shadow hover:scale-105 duration-200"
              >
                <div className="w-full rounded-lg">
                  <img
                    src={item.trailerThumbnail}
                    alt=""
                    className="w-full mx-auto rounded-lg"
                  />
                </div>
                <div className="p-4 bg-card">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center space-x-1">
                      <MdOutlineLibraryBooks size={15} className="fill-muted" />
                      <p className="text-xs font-medium text-muted">
                        {item.sections.length} Sections
                      </p>
                    </div>
                    <div className="flex flex-row space-x-1 text-muted items-center">
                      <FaStar size={12} className="fill-primary" />
                      <p className="text-xs font-medium">{item.rating}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Link
                      onClick={() => dispatch(setContent(item))}
                      to={`/${currSite.toLowerCase()}/${item._id}`}
                      className="text-md font-semibold text-base hover:text-muted duration-150"
                    >
                      {item.contentTitle}
                    </Link>
                  </div>

                  <p className="text-xs mt-2 font-medium text-muted">
                    &#x20B9;{item.price}
                  </p>
                </div>
                {/* <p className="text-xs font-medium">{item.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>

      <Separator className="mt-8" />

      {/* testimonial */}

      <div className="mt-8 mx-8 mb-8">
        <p className="font-bold texl-3xl text-base">
          Here&apos;s what our customers have to say{" "}
        </p>
        <div className={`mx-auto w-full mt-8 bg-background pb-8`}>
          <Testimonial />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePage;



// <input type="checkbox" className="fixed bottom-[5%] right-[5%] size-10 z-[100000]" onChange={(e) => setSnowFall(e.target.checked)} name="" id="" />

// uiMode: snowFall ? "snowfall" : "charcoal"

// const [snowFall, setSnowFall] = useState(true)

