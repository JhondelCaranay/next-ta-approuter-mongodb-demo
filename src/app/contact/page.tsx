import Button from "@/components/button/Button";
import Image from "next/image";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[60px] mb-[100px] text-center">Let's Keep in Touch</h1>
      <div className="flex items-center gap-[100px]">
        <div className="flex-1 h-[500px] relative hidden md:block">
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};
export default Contact;
