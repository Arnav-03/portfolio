import Image from "next/image";
import Intro from "../app/components/Intro";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="h-full flex flex-col relative">
      <div className="fixed top-0 w-full z-50">
        <Navigation />
      </div>
      <div className="">
        <Intro />
      </div>
    </div>
  );
}
