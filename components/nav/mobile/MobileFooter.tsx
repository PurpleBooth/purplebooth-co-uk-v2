import { CopyrightNotice } from "../CopyrightNotice";
import { NavLink } from "./NavLink";
import { FC } from "react";
import MobileNav from "./MobileNav";

const MobileFooter: FC = () => (
  <footer
    className={"mt-8 text-center text-slate-600 dark:text-slate-400 lg:hidden"}
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
export default MobileFooter;
