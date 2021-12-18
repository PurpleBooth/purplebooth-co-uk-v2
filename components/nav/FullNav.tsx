import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Purple Booth Logo-01.svg";
import mark from "../../public/Purple Booth Mark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import intlFormat from "date-fns/intlFormat";

const FullNav: FunctionComponent = () => (
  <nav
    className={
      "bg-slate-100 dark:bg-slate-800 w-96 p-8 min-h-screen h-100 lg:flex flex-col justify-end text-xl gap-2 hidden"
    }
  >
    <div className={"relative"}>
      <div className={"w-80 fixed bottom-8"}>
        <h1 className={"cursor-pointer"}>
          <Link passHref href={"/"} prefetch>
            <a className={"dark:hidden"}>
              <Image
                layout={"responsive"}
                src={logo}
                alt={"Purple Booth Ltd."}
              />
            </a>
          </Link>
          <div className="hidden dark:flex rounded-full aspect-square items-center justify-center bg-slate-100 m-10 p-5">
            <Link passHref href={"/"} prefetch>
              <a className={""}>
                <Image
                  layout={"intrinsic"}
                  src={mark}
                  alt={"Purple Booth Ltd."}
                />
              </a>
            </Link>
          </div>
        </h1>
        <h2 className={"text-slate-600 dark:text-slate-400 text-2xl ml-4 mt-8"}>
          I write code. I am quite tall and have curly hair.
        </h2>
        <ul className={" ml-16 flex flex-col mt-8"}>
          <li>
            <Link passHref href={"/"} prefetch>
              <a className={"cursor-pointer"}>
                <span className={"text-slate-800 dark:text-slate-200"}>
                  <FontAwesomeIcon icon={["fas", "square"]} />
                </span>
                &nbsp;
                <span className={"hover:underline dark:text-white"}>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href={"/about/me"}>
              <a className={"cursor-pointer"}>
                <span className={"text-slate-800 dark:text-slate-200"}>
                  <FontAwesomeIcon icon={["fas", "square"]} />
                </span>
                &nbsp;
                <span className={"hover:underline dark:text-white"}>
                  About&nbsp;Me
                </span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className={"flex flex-row gap-4 justify-center mt-8"}>
          <li>
            <Link passHref href={"https://github.com/PurpleBooth"}>
              <a
                className={"cursor-pointer text-slate-800 dark:text-slate-200"}
              >
                <FontAwesomeIcon
                  size={"3x"}
                  title={"GitHub"}
                  icon={["fab", "github-square"]}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href={"https://www.linkedin.com/in/purplebooth/"}>
              <a
                className={"cursor-pointer text-slate-800 dark:text-slate-200"}
              >
                <FontAwesomeIcon
                  size={"3x"}
                  title={"LinkedIn"}
                  icon={["fab", "linkedin"]}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link passHref href={"https://twitter.com/PurpleBooth"}>
              <a
                className={"cursor-pointer text-slate-800 dark:text-slate-200"}
              >
                <FontAwesomeIcon
                  size={"3x"}
                  title={"Twitter"}
                  icon={["fab", "twitter-square"]}
                />
              </a>
            </Link>
          </li>
        </ul>
        <footer
          className={"text-slate-600 dark:text-slate-400 text-center mt-8"}
        >
          <Link passHref href={"/license"}>
            <a className={"cursor-pointer hover:underline"}>
              Copyright ©{" "}
              {intlFormat(Date.now(), {
                year: "numeric",
              })}
            </a>
          </Link>
        </footer>
      </div>
    </div>
  </nav>
);

export default FullNav;
