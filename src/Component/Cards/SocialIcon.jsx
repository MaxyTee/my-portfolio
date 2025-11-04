import React from "react";
import {
  RiFacebookBoxFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
const Icons = [
  <RiFacebookBoxFill />,
  <RiGoogleFill />,
  <RiTwitterFill />,
  <RiLinkedinFill />,
];

const SocialIconCard = (props) => {
  return (
    <li className=" text-amber-600 cursor-pointer text-xl">{props.icon}</li>
  );
};

const SocialIcon = () => {
  const icons = Icons.map((icon, i) => <SocialIconCard key={i} icon={icon} />);
  return <ul className="flex gap-4 list-nones">{icons}</ul>;
};

export default SocialIcon;
