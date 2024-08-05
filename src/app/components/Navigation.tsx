"use client"
import React, { useState } from "react";
import menu from '../../../public/menu.png'
import cross from '../../../public/cross.png'
import Image from "next/image";

function Navigation() {
  const [showmenu, setmenu] = useState(true);
  return (
    <div className="bg-[#070b13] py-4 px-3 md:px-5 shiny-border flex justify-between overflow-hidden text-[#9CAF88]  nametitle text-2xl md:text-3xl items-center">
      <div className="">Arnav Arora</div>
      <div onClick={()=>setmenu(!showmenu)} className="md:hidden cursor-pointer">
        <Image src={showmenu?menu:cross} height={40} alt="menu"/>
      </div>
      <div className="md:flex gap-[40px] hidden">
        <div className="">Home</div>
        <div className="">About</div>
        <div className="">Projects</div>
        <div className="">Contact</div>
      </div>
    </div>
  );
}

export default Navigation;
