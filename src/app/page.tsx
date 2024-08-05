import Image from "next/image";
import Intro from "../app/components/Intro";
import Navigation from "./components/Navigation";
import Loading from "./loading";

export default function Home() {
  return (
    <div className=" flex flex-col  ">
        <Intro/>
    </div>
  );
}
