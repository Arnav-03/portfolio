import Image from "next/image";
import Intro from '../app/components/Intro'
export default function Home() {
  return (
    <div className="bg-[#0D1321] h-screen flex flex-col items-center justify-center">
      <Intro/>
    </div>
  );
}
