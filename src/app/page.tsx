import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className="flex-1 flex items-center gap-[100px]">
      <div className="item flex flex-col gap-[50px]">
        <h1 className="title  bg-clip-text text-transparent text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb]">
          Better design for your digital products.
        </h1>
        <p className="desc text-base font-light">
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className="item flex flex-col gap-[50px]">
        <Image src={Hero} alt="" className={`w-full h-[500px] object-contain ${styles.img}`} />
      </div>
    </main>
  );
}
