import Image from "next/image";
import React from "react";


export default function Intro() {
  return (
    <div className=" flex flex-col">
      <div className="text-7xl  text-[#afafaf]  patlafont ">Hi, I am</div>
      <div className={`nametitle   text-7xl text-[#9CAF88]`}>Arnav Arora</div>
    </div>
  );
}
