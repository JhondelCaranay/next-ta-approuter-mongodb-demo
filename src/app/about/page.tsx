import Button from "@/components/button/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover grayscale"
        />
        <div className="absolute bottom-5 left-5 bg-[#53c28b] p-[5px] text-white rounded-md">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
          <h1 className="font-semibold">Who Are We?</h1>
          <p className="text-[18px] font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
            voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit
            eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos.
            Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
          <h1 className="font-semibold">What We Do?</h1>
          <p className="text-[18px] font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
            voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};
export default About;
