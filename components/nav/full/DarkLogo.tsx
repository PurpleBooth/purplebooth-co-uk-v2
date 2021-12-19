import Link from "next/link";
import Image from "next/image";
import mark from "../../../public/Purple Booth Mark.svg";
import { FC } from "react";

export const DarkLogo: FC = () => (
  <div className="hidden dark:flex rounded-full aspect-square items-center justify-center bg-slate-100 m-10 p-5">
    <Link passHref href={"/"}>
      <a data-testid={"DarkLogo"} className={""}>
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
