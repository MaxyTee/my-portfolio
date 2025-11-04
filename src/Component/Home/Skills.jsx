import React from "react";
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "TailWind" },
  { skill: "Javascript" },
  { skill: "React" },
];

const Skill = ({ dark }) => {
  const skillElement = skills.map((skill, i) => (
    <div
      key={i}
      className="flex-1 w-full flex-col p-4 items-center justify-center rounded-md gap-3"
    >
      <p className="sm:text-lg text-xs">{skill.skill}</p>
    </div>
  ));
  return (
    <div
      className={`${
        dark
          ? "bg-neutral-900 text-neutral-400"
          : "bg-neutral-200 text-neutral-800"
      } text-center font-bold  flex items-center justify-between gap-2 py-4 px-2`}
    >
      {skillElement}
    </div>
  );
};

export default Skill;
