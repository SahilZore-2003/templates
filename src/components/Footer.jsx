import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

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

const Footer = ({ colors }) => {
  const { primary, secondary } = colors;
  return (
    <div className=" text-inverted w-full py-10 px-14 mt-20" style={{ background: primary, color: 'hsl(var(--text-inverted))' }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5">
        <div>
          <h2>Follow Us.</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {
              items.map((e, i) => (
                <div key={i} className=" p-2 rounded-full">
                  <a className="text-2xl" href={e.link}>{e.icon()}</a>
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
                      <a key={i} className="block text-inverted" href="#">{e}</a>
                    ))
                  }
                </div>
              </div>
            )
          })
        }

      </div>
      <div className="mt-6 border-t-[1px] border-inverted pt-4">
        <p className="text-center text-inverted font-bold">copyright ©️ Bridge YU</p>
      </div>
    </div>
  );
};

export default Footer;
