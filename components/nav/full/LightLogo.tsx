import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Purple Booth Logo-01.svg";

export const LightLogo = () => (
  <Link passHref href={"/"}>
    <a data-testid={"LightLogo"} className={"dark:hidden"}>
      <Image
        layout={"intrinsic"}
        src={logo}
        alt={"Purple Booth Ltd."}
        width="320"
        height="215"
        unoptimized
      />
    </a>
  </Link>
);
