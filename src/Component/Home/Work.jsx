import React, { useState } from "react";
import img1 from "../../../public/img1.png";
import img3 from "../../../public/img3.png";
import img4 from "../../../public/img4.png";
import img6 from "../../../public/img6.jpeg";
import img7 from "../../../public/img7.jpeg";
import img8 from "../../../public/img8.jpeg";
import Line from "../Cards/Line";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

const works = [
  {
    id: 0,
    imgMain: img1,
    status: "all",
    name: "OmniFood",
    description: "Ominifodd is a company I did the website for",
    favourite: true,
  },

  {
    id: 1,
    imgMain: img3,
    status: "recent",
    name: "OmniFood",
    description: "Ominifodd is a company I did the website for",
    favourite: true,
  },
  {
    id: 2,
    imgMain: img4,
    status: "recent",
    name: "OmniFood",
    description: "Ominifodd is a company I did the website for",
    favourite: true,
  },

  {
    id: 3,
    imgMain: img6,
    status: "old",
    name: "OmniFood",
    description: "Ominifodd is a company I did the website for",
    favourite: true,
  },
  {
    id: 4,
    imgMain: img7,
    status: "recent",
    name: "OmniFood",
    description: "Ominifodd is a company I did the website for",
    favourite: true,
  },
  {
    id: 5,
    imgMain: img8,
    status: "old",
    name: "OmniFood",
    description: "Ominifodd is a company I did the website for",
    favourite: true,
  },
];

const WorkCard = (props) => {
  return (
    <div
      className={`shadow-lg  overflow-hidden ${
        props.dark
          ? "bg-neutral-950 shadow-black"
          : "bg-neutral-300 shadow-neutral-400"
      } p-3  rounded-md`}
    >
      <img
        src={props.imgMain}
        className="w-[100%]  h-[16rem] rounded-md 
         delay-150 duration-300 hover:scale-110"
        alt=""
      />

      <div className="mt-4 ">
        <div className="flex mb-2 justify-between">
          <h5>{props.name}</h5>
          <button>
            {props.Newfavourite ? <RiStarFill /> : <RiStarHalfFill />}
          </button>
        </div>
        <p className="text-sm md:text-md">{props.description}</p>
      </div>
    </div>
  );
};
const Work = ({ dark }) => {
  const [btn, setBtn] = useState(1);

  const Work = works
    .slice()
    .map((work, i) => <WorkCard dark={dark} key={i} {...work} />);

  const workRecent = works
    .slice()
    .filter((work) => work.status === "recent")
    .map((work, i) => <WorkCard key={i} {...work} />);

  const workOld = works
    .slice()
    .filter((work) => work.status === "old")
    .map((work, i) => <WorkCard key={i} {...work} />);

  let btnElement;
  if (btn === 1) {
    btnElement = Work;
  } else if (btn === 2) {
    btnElement = workRecent;
  } else {
    btnElement = workOld;
  }

  return (
    //  text-center font-bold  flex items-center justify-between gap-2 py-4 px-2`}

    <section
      className={`${
        dark
          ? "bg-neutral-900 text-neutral-400"
          : "bg-neutral-200 text-neutral-800"
      } flex flex-col px-6 py-10 sm:px-18 sm:py-24 items-center justify-between gap-6 md:px-12 lg:px-18`}
    >
      <h1 className="font-poppins text-2xl md:text-4xl lg:text-5xl">
        Projects
      </h1>
      <Line />

      <div className="bg-amber-700 px-4 py-2 flex gap-4 rounded-full">
        <button
          onClick={() => setBtn(1)}
          className={`${
            btn === 1 && "bg-black"
          } cursor-pointer rounded-full px-2`}
        >
          All
        </button>
        <button
          onClick={() => setBtn(2)}
          className={`${
            btn === 2 && "bg-black"
          } cursor-pointer rounded-full px-2`}
        >
          Recent
        </button>
        <button
          onClick={() => setBtn(3)}
          className={`${
            btn === 3 && "bg-black "
          } cursor-pointer rounded-full px-2`}
        >
          Old
        </button>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {btnElement}
      </div>

      <button className="mt-2 px-4 py-2 rounded-full bg-linear-to-b from-black  to-amber-600 hover:bg-transparent hover:inset-1 hover:border-b duration-200 delay-150 transition-all hover:inset-ring-current">
        See more
      </button>
    </section>
  );
};

export default Work;
