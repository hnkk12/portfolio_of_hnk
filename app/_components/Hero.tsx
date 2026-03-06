import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <img
        src="/hero.gif"
        alt="hero"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute w-full flex flex-col items-center mt-24">
        <h2 className="font-bold text-7xl font-game ">Welcome to</h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Khang’s Portfolio
        </h2>
        <h2 className=" text-2xl font-game ">
          Showcasing projects, skills, and creative experiments
        </h2>
      </div>
    </div>
  );
}

export default Hero;
