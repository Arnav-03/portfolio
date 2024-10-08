import Link from "next/link";
import notfound from "../../public/notfound.png";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="text-[#e9e3d5] flex flex-col items-center justify-center h ">
      <Image src={notfound} alt="not-found" height={300} />
      <Link className="text-3xl text-purple-800 nametitle" href="/">
        return <span className="text-emerald-500">&lt;Home/&gt;</span><span className="text-white">;</span>
      </Link>
    </div>
  );
}
