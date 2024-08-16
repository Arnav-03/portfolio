"use client"
import React, { useState } from "react";
import menu from '../../../public/menu.png'
import cross from '../../../public/cross.png'
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact-me", link: "/contact-me" },
];

function Navigation() {
  const [showmenu, setmenu] = useState(false); 

  return (
    <>
      <div className="back py-4 px-3 md:px-5 shiny-border flex justify-between overflow-hidden colo nametitle text-2xl  lg:text-3xl items-center min-h-[75px] max-h-[75px]">
        <div className="">Arnav Arora</div>
        <div onClick={() => setmenu(!showmenu)} className="md:hidden cursor-pointer">
          <Image src={showmenu ? cross : menu} height={40} alt="menu" />
        </div>
        <div className="md:flex gap-[40px] text-xl lg:text-2xl  hidden">
          {links.map((link, index) => (
            <Link key={index} href={link.link} className="cursor-pointer">&lt;{link.name}/&gt;</Link>
          ))}
        </div>
      </div>
      <div className="h-[1px] shiny-border bg-white"></div>

      {showmenu && (
        <div className="fixed h-full top-[85px]  w-full  back colo flex flex-col items-center justify-center text-center text-2xl md:hidden">
          <div className="flex flex-col mt-[-75px] gap-8 w-4/5 ">
            {links.map((link, index) => (
              <Link key={index} href={link.link} 
              className="cursor-pointer  nametitle border-b-[1px] border-[#e9e3d5] p-2 "
               onClick={() => setmenu(false)}>
                &lt;{link.name}/&gt;
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
