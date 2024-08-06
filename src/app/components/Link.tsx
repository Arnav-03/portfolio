"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface LinkProps {
  link: string;
  image: StaticImageData;
  name: string;
}

const SocialLink: React.FC<LinkProps> = ({ link, image, name }) => {
  const [showname, setShowname] = useState("");

  return (
    <div className="flex border-2 rounded  border-[#e9e3d5] ">
      <div
        onMouseEnter={() => setShowname(name)}
        onMouseLeave={() => setShowname("")}
        className=" flex text-center w-fit  rounded"
      >
  
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`border-r-2 m-2 mr-0 p-2 min-w-[110px] border-[#e9e3d5] ${
            showname === name ? "" : "hidden "
          }`}
        >
          {name}
        </a>
        <div className="max-w-[60px]">
          <Image className="m-4" src={image} height={30} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
