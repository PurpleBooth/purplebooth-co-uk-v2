import Link from "next/link";
import { CopyrightNotice } from "./CopyrightNotice";

export function MobileFooter() {
  return (
    <footer
      className={
        "text-slate-600 dark:text-slate-400 text-center mt-8 lg:hidden"
      }
    >
      <ul>
        <li>
          <Link passHref href={"/"}>
            <a className={"cursor-pointer"}>
              <span className={"hover:underline dark:text-white"}>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link passHref href={"/about/me"}>
            <a className={"cursor-pointer"}>
              <span className={"hover:underline dark:text-white"}>About Me</span>
            </a>
          </Link>
        </li>
        <li>
          <Link passHref href={"/license"}>
            <a className={"cursor-pointer hover:underline"}>
              <CopyrightNotice/>
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
