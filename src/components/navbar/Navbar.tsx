"use client";

import { NavLinks } from "@/utils/constant/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href="/" className="font-bold text-base">
        lamamia
      </Link>
      <div className="flex items-center space-x-[20px] text-sm">
        {/* <DarkModeToggle /> */}
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )} */}
        <button
          className="bg-[#F5F5F5] text-[#333333] rounded-[10px] px-[20px] py-[10px] text-sm"
          onClick={() => {}}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
