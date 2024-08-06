import Image from "next/image";
import React from "react";


export default function Intro() {
  return (
    <div className=" flex flex-col items-start justify-center  h mt-[0px] pl-5 md:pl-14">
      <div className="text-4xl text-[#afafaf]  patlafont ">Hi, I am</div>
      <div className={`nametitle md:tracking-[6px]  text-6xl lg:text-8xl colo`}>Arnav Arora</div>
      <div className="job2 text-[#b6b2b2] text-4xl ">Computer Science Undergraduate </div>
    </div>
  );
}
/* #9CAF88 */