import React from "react";
const skills = [
  { num: "90%", skill: "HTML & CSS" },
  { num: "80%", skill: "TailWind Css" },
  { num: "70%", skill: "Javascript" },
  { num: "60%", skill: "React" },
];

const Skill = () => {
  const skillElement = skills.map((skill, i) => (
    <div
      key={i}
      className="flex w-full bg-black shadow-xl shadow-neutral-900 flex-col p-4 items-center justify-center rounded-md gap-3"
    >
      <div className="flex justify-between w-full">
        <p>{skill.skill}</p>
        <p>{skill.num}</p>
      </div>
      <div className="w-full h-3 bg-neutral-900 ">
        <div className={`h-2 w-[${skill.num}]  bg-amber-600`}></div>
      </div>
    </div>
  ));
  return (
    <div className="bg-neutral-900 flex items-center justify-between gap-6 py-24 px-12">
      <div className=" flex-1  flex-col items-center justify-between ">
        <h1 className="font-space text-2xl md:text-4xl lg:text-5xl">
          My Skills
        </h1>
        <div className="flex w-full flex-col justify-center items-center gap-7">
          {skillElement}
        </div>
      </div>
      <div className="flex-1  flex-col items-center justify-between ">
        <h1 className="font-space text-2xl md:text-4xl lg:text-5xl">
          My Skills
        </h1>
        <div className="flex w-full flex-col justify-center items-center gap-7">
          {skillElement}
        </div>
      </div>
    </div>
  );
};

export default Skill;
