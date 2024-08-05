import Image from "next/image";
import React from "react";


export default function Intro() {
  return (
    <div className=" flex flex-col items-start   h-full mt-[200px] pl-5">
      <div className="text-5xl  text-[#afafaf]  patlafont ">Hi, I am</div>
      <div className={`nametitle   text-6xl text-[#9CAF88]`}>Arnav Arora</div>
    </div>
  );
}
