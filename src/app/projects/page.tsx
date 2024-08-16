import React from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../public/arrow.png";
import kashi from "../../../public/kashi.png";

function page() {
  const projects = [
    {
      title: "Kashitokaru",
      link: "/projects/kashitokaru",
      desc: "Kashitokaru is a dynamic chat application offering real-time messaging, file sharing, and AI-powered smart replies. It integrates Google Sign-In and ensures seamless communication with a modern, responsive interface.",
      image: kashi,
    },
    {
      title: "Kashitokaru",
      link: "/projects/kashitokaru",
      desc: "Kashitokaru is a dynamic chat application offering real-time messaging, file sharing, and AI-powered smart replies. It integrates Google Sign-In and ensures seamless communication with a modern, responsive interface.",
      image:
       kashi,
    },
    {
      title: "Kashitokaru",
      link: "/projects/kashitokaru",
      desc: "Kashitokaru is a dynamic chat application offering real-time messaging, file sharing, and AI-powered smart replies. It integrates Google Sign-In and ensures seamless communication with a modern, responsive interface.",
      image:
       kashi,
    },
  ];
  return (
    <div className="nametitle h-fit flex items-center flex-col  text-white  h mt-[75px]">
      <div className="mt-4 colo text-3xl">Projects</div>
      <div className="flex flex-wrap p-[10px] gap-4 items-center justify-center  ">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col  border-[2px] w-[300px] rounded-3xl overflow-hidden  border-[#e9e3d5] "
            >
              <div>
              <img className="h-[150px] w-auto" src={project.image.src} alt="" />
              </div>
              <div className="text-[#e9e3d5] p-2 pb-0 text-2xl">
                {project.title}
              </div>
              <div className="job2 text-[#bdbab5] p-2 pt-0 text-[14px] text-start">
                {project.desc}
              </div>
              <div className="w-full flex justify-end  px-4 ">
                <Link
                  href={project.link}
                  className="bg-[#e9e3d5] mx-5 my-2 text-lg flex gap-1 items-center text-[#252525] w-fit p-1.5  rounded"
                >
                  Full Details
                  <Image src={arrow} width={25}  alt="card" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default page;
