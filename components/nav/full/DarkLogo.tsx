import Link from "next/link";
import Image from "next/image";
import mark from "../../../public/Purple Booth Mark.svg";

export const DarkLogo = () => (
  <div className="hidden dark:flex rounded-full aspect-square items-center justify-center bg-slate-100 m-10 p-5">
    <Link passHref href={"/"}>
      <a className={""}>
        <Image
          layout={"intrinsic"}
          src={mark}
          width="200"
          height="200"
          alt={"Purple Booth Ltd."}
          unoptimized
        />
      </a>
    </Link>
  </div>
);
