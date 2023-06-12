import { NavLinks } from "@/utils/constant/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">lamamia</Link>
      <div>
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
      </div>
    </div>
  );
};
export default Navbar;
