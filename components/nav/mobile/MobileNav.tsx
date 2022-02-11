import Link from "next/link";
import Image from "next/image";
import mark from "../../../public/Purple Booth Mark.svg";
import { FC } from "react";

const MobileNav: FC = () => (
  <nav className={"bg-slate-100 dark:bg-slate-900 lg:hidden"}>
    <div className="m-4 flex inline-flex aspect-square content-center items-center justify-center rounded-full bg-slate-100 p-1">
      <Link passHref href={"/"}>
        <a data-testid={"MobileNav"} className={"flex inline-flex"}>
          <Image
            width={49}
            height={49}
            layout={"intrinsic"}
            src={mark}
            alt={"Purple Booth Ltd."}
            unoptimized
          />
        </a>
      </Link>
    </div>
  </nav>
);
export default MobileNav;
