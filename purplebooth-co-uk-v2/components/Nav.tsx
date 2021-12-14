import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Purple Booth Logo-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import intlFormat from "date-fns/intlFormat";

const Nav: FunctionComponent = () => (
  <nav
    className={
      "bg-slate-50 w-96 p-8 min-h-screen h-100 flex flex-col justify-end text-xl gap-2"
    }
  >
    <div className={"relative"}>
      <div className={"w-80 fixed bottom-8"}>
        <h1 className={"cursor-pointer"}>
          <Link href={"/"}>
            <Image layout={"responsive"} src={logo} alt={"Purple Booth Ltd."}/>
          </Link>
        </h1>
        <h2 className={"text-slate-600 text-2xl ml-4 mt-8"}>
          I write code. I am quite tall and have curly hair.
        </h2>
        <ul className={" ml-16 flex flex-col mt-8"}>
          <li>
            <Link href={"/"}>
          <span className={"cursor-pointer"}>
            <span className={"text-slate-800"}><FontAwesomeIcon icon={["fas", "square"]}/></span>
            &nbsp;Home
          </span>
            </Link>
          </li>
          <li>
            <Link href={"/about/me"}>
          <span className={"cursor-pointer"}>
            <span className={"text-slate-800"}><FontAwesomeIcon icon={["fas", "square"]}/></span>
            &nbsp;About&nbsp;Me
          </span>
            </Link>
          </li>
        </ul>
        <ul className={"flex flex-row gap-4 justify-center mt-8"}>
          <li>
            <Link href={"https://github.com/PurpleBooth"}>
          <span className={"cursor-pointer text-slate-800"}>
            <FontAwesomeIcon
              size={"3x"}
              title={"GitHub"}
              icon={["fab", "github-square"]}
            />
          </span>
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/purplebooth/"}>
          <span className={"cursor-pointer text-slate-800"}>
            <FontAwesomeIcon
              size={"3x"}
              title={"LinkedIn"}
              icon={["fab", "linkedin"]}
            />
          </span>
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/PurpleBooth"}>
          <span className={"cursor-pointer text-slate-800"}>
            <FontAwesomeIcon
              size={"3x"}
              title={"Twitter"}
              icon={["fab", "twitter-square"]}
            />
          </span>
            </Link>
          </li>
        </ul>
        <footer className={"text-slate-600 text-center mt-8"}>
          <Link href={"/license"}>
        <span className={"cursor-pointer"}>
          Copyright ©{" "}
          {intlFormat(Date.now(), {
            year: "numeric",
          })}
        </span>
          </Link>
        </footer>
      </div>
    </div>
  </nav>
);

export default Nav;
