import Image from "next/image";
import React from "react";


export default function Intro() {
  return (
    <div className=" flex flex-col items-start justify-center  h mt-[0px] pl-5">
      <div className="text-4xl lg:text-5xl  text-[#afafaf]  patlafont ">Hi, I am</div>
      <div className={`nametitle tracking-[3px]  text-6xl lg:text-8xl text-[#9CAF88]`}>Arnav Arora</div>
      <div className="job2 text-[#cfcaca] text-4xl md:text-5xl"> Software Engineer</div>
    </div>
  );
}
