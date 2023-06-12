import Link from "next/link";

type ButtonProps = {
  text: string;
  url: string;
};

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button className="p-5 cursor-pointer bg-[#53c28b] border-none rounded-[5px] min-w-max text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
