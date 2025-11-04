import React from "react";
import {
  RiGithubFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
const Icons = [
  { url: "https://github.com/MaxyTee", icon: <RiGithubFill /> },
  {
    url: "https://myaccount.google.com/profile?zx=4iixdmf4z9bc",
    icon: <RiGoogleFill />,
  },
  { url: "", icon: <RiTwitterFill /> },
  {
    url: "www.linkedin.com/in/mariam-tairu-487773326",
    icon: <RiLinkedinFill />,
  },
];

const SocialIconCard = ({ url, icon }) => {
  return (
    <li className=" text-amber-600 cursor-pointer text-xl">
      <a target="blank" href={url}>
        {icon}
      </a>
    </li>
  );
};

const SocialIcon = () => {
  const icons = Icons.map((icon, i) => <SocialIconCard key={i} {...icon} />);
  return <ul className="flex gap-4 list-nones">{icons}</ul>;
};

export default SocialIcon;
