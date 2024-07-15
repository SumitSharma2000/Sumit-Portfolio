import React from "react";
import RecipeApp from "../assets/portfolio/RecipeApp.png";
import ChatApp from "../assets/portfolio/ChatApp.png";
import ExpenseTracker from "../assets/portfolio/ExpenseTracker.png";
import TodoApp from '../assets/portfolio/todo.png';
import BlogWebsite from '../assets/portfolio/Blog Website.png';
import CredClone from '../assets/portfolio/CredClone.png';
import WeatherWise from '../assets/portfolio/WeatherWise.png';
import ZaikaBazaar from '../assets/portfolio/ZaikaBazaar.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: RecipeApp,
      demo: "https://recipe-by-sumit.vercel.app",
      github: "https://github.com/SumitSharma2000/Recipe-By-Sumit",
    },
    {
      id: 2,
      src: ChatApp,
      demo: "https://chat-app-by-sumit.vercel.app/",
      github: "https://github.com/SumitSharma2000/Chat-App",
    },
    {
      id: 3,
      src: ExpenseTracker,
      demo: "https://expense-tracker-delta-umber.vercel.app/",
      github: "https://github.com/SumitSharma2000/Expense-Tracker",
    },
    {
      id: 4,
      src: BlogWebsite,
      demo: "https://modern-blog-website-react-redux-tail-wind.vercel.app/",
      github: "https://github.com/SumitSharma2000/Modern-Blog-Website-React-Redux-TailWind",
    },
    {
      id: 5,
      src: CredClone,
      demo: "https://cred-clone-mu-blond.vercel.app/",
      github: "https://github.com/SumitSharma2000/Cred-Clone",
    },
    {
      id: 6,
      src: WeatherWise,
      demo: "https://weatherwisebysumit.netlify.app/",
      github: "https://github.com/SumitSharma2000/WeatherWise",
    },
    {
      id: 7,
      src: ZaikaBazaar,
      demo: "https://zaika-bazaar.vercel.app",
      github: "https://github.com/SumitSharma2000/ZaikaBazaar",
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-blue-500 rounded-md text-white"
                >
                  Demo
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-800 rounded-md text-white"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
