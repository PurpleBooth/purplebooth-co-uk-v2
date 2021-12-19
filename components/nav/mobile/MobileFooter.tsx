import Link from "next/link";
import { CopyrightNotice } from "../CopyrightNotice";
import { NavLink } from "./NavLink";

export function MobileFooter() {
  return (
    <footer
      className={
        "text-slate-600 dark:text-slate-400 text-center mt-8 lg:hidden"
      }
    >
      <ul>
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about/me"}>About Me</NavLink>
        </li>
        <li>
          <NavLink href={"/license"}>
            <CopyrightNotice />
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
