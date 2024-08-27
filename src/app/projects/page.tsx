import React from "react";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../public/arrow.png";
import kashi from "../../../public/kashi.PNG";
import shop from "../../../public/shopkrow.PNG";
import fileophile from "../../../public/fileophile.PNG";
import peermeet from "../../../public/peermeet.PNG";

function page() {
  const projects = [
    {
      title: "Kashitokaru",
      link: "https://kashitokaru.onrender.com/",
      tags: ["React", "Websocket", "Gemini API", "MongoDb", "Express"],
      desc: "Kashitokaru is a dynamic chat application offering real-time messaging, file sharing, and AI-powered smart replies. It integrates Google Sign-In and ensures seamless communication with a modern, responsive interface.",
      image: kashi,
    },
    {
      title: "ShopKrow",
      link: "https://shopkrow.onrender.com/",
      tags: [
        "React",
        "Express",
        "Tailwind CSS",
        "MongoDb",
        "Google Cloud Platform",
      ],
      desc: "ShopKrow is an e-commerce platform built with React and Tailwind CSS, featuring Stripe integration for secure payments and dynamic product pages. It offers optimized performance through dynamic content delivery, providing a seamless shopping experience.",
      image: shop,
    },
    {
      title: "Fileophile",
      link: "https://fileophile.vercel.app/ ",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "Google Cloud Platform"],
      desc: "Fileophile is a user-friendly platform designed for seamless file sharing and storage. With features like real-time sharing, cloud storage, and easy integration with Google authentication, Fileophile ensures that your files are always at your fingertips.",
      image: fileophile,
    },
    ,
    {
      title: "PeerMeet",
      link: "https://peermeet.onrender.com/",
      tags: ["React","WebRTC", "Tailwind CSS", "Socket.io"],
      desc: "PeerMeet is a video calling platform for seamless one-to-one interactions. Using WebRTC for high-quality, real-time communication and built with React and Tailwind CSS, it provides a sleek, responsive interface with smooth performance.",
      image: peermeet,
    },
  ];

  return (
    <div className="nametitle h-fit flex items-center flex-col text-white mt-[75px]">
      <div className="mt-4 colo text-3xl">Major Projects</div>
      <div className="flex flex-wrap p-[10px] gap-4 items-center justify-center">
        {projects.map((project) => (
          <div
            key={project?.title}
            className="flex flex-col border-[2px] w-[300px] h-[480px] rounded-3xl overflow-hidden border-[#e9e3d5]"
          >
            <div>
              <img
                className="h-[150px] w-auto object-cover"
                src={project?.image.src}
                alt=""
              />
            </div>
            <div className="flex job2 p-2  flex-wrap gap-2">
              {project?.tags.map((tag) => (
                <div key={tag} className="inline-block bg-gray-600  rounded-lg bg-muted px-3 py-1 text-sm">
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-[#e9e3d5] p-2 pb-0 text-2xl">
              {project?.title}
            </div>
            <div className="job2 text-[#bdbab5] p-2 pt-0 text-[14px] text-start flex-grow">
              {project?.desc}
            </div>
            <div className="w-full flex justify-end px-4 mt-auto">
              <a
                target="_blank"
                href={project?.link}
                className="bg-[#e9e3d5] job mx-5 mb-2 text-lg flex gap-1 items-center text-[#252525] w-fit p-1.5 rounded"
              >
                View Website
                <Image src={arrow} width={25} alt="card" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
