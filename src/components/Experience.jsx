import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Java from "../assets/java.png";
import redux from "../assets/redux.png";
import AWS from "../assets/aws.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: mongodb, title: "MongoDB", style: "shadow-white" },
    { id: 7, src: sql, title: "SQL", style: "shadow-blue-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: Java, title: "Java", style: "shadow-red-400" },
    { id: 10, src: redux, title: "Redux", style: "shadow-purple-400" },
    { id: 11, src: AWS, title: "AWS", style: "shadow-red-400" },
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-16 pb-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-15 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="flex-grow">
                <img src={src} alt={title} className="w-20 mx-auto" />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
