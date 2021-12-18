import Link from "next/link";
import Image from "next/image";
import mark from "../../public/Purple Booth Mark.svg";

export const MobileNav = () => (
  <nav className={"lg:hidden bg-slate-100 dark:bg-slate-900"}>
    <div className="flex inline-flex m-4 rounded-full aspect-square items-center justify-center bg-slate-100 p-1">
      <Link passHref href={"/"} prefetch>
        <a className={""}>
          <Image
            width={49}
            height={49}
            layout={"intrinsic"}
            src={mark}
            alt={"Purple Booth Ltd."}
          />
        </a>
      </Link>
    </div>
  </nav>
);
