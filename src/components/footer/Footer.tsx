import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between text-[#333333] text-sm">
      <div>©2023 Jhondel. All rights reserved.</div>
      <div className="flex items-center gap-[10px]">
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Lama Dev Facebook Account"
          className="cursor-pointer opacity-60"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="Lama Dev"
          className="cursor-pointer opacity-60"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="Lama Dev"
          className="cursor-pointer opacity-60"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="Lama Dev"
          className="cursor-pointer opacity-60"
        />
      </div>
    </div>
  );
};
export default Footer;
