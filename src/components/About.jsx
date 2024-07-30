import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg sm:text-xl mt-5">
          Hello there! I'm Sumit Sharma, currently on an exciting journey
          pursuing my Bachelor's in Technology from Lovely Professional
          University. Passionate about all things tech, I thrive on diving deep
          into the realms of programming, UX/UI design, and everything in
          between. As a dedicated Java programmer and full-stack developer, I'm
          constantly honing my skills to craft innovative solutions and create
          seamless user experiences. Whether it's delving into the backend with
          Node.js, crafting elegant frontends with React, or architecting
          databases with SQL, I love the challenge of solving complex problems
          and bringing ideas to life through code. With a keen eye for design
          and a love for clean, intuitive interfaces, I'm equally enthusiastic
          about UX/UI design. Leveraging tools like Redux and Tailwind CSS, I
          strive to create visually stunning and user-friendly applications that
          leave a lasting impression.
        </p>

        <br />

        <p className="text-lg sm:text-xl">
          But beyond the code, what truly drives me is the opportunity to
          collaborate and learn from great minds. I'm passionate about working
          with like-minded individuals who share a common goal of pushing
          boundaries and creating impactful solutions. Whether it's building
          cutting-edge applications, exploring the latest technologies, or
          collaborating on exciting projects, I'm always eager to connect with
          fellow tech enthusiasts and embark on new adventures in the world of
          software development. Let's build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
