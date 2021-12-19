import { FC } from "react";
import { PrimaryNavItem } from "./PrimaryNavItem";
import { LogoHeader } from "./LogoHeader";
import { Description } from "./Description";
import { PrimaryNav } from "./PrimaryNav";
import { NavFooter } from "./NavFooter";
import { BrandNavItem } from "./BrandNavItem";
import { BrandNav } from "./BrandNav";

const Nav: FC = () => (
  <nav
    className={
      "bg-slate-100 dark:bg-slate-800 w-96 p-8 min-h-screen h-100 lg:flex flex-col justify-end text-xl gap-2 hidden"
    }
  >
    <div className={"relative"}>
      <div className={"w-80 fixed bottom-8"}>
        <LogoHeader />
        <Description>
          I write code. I am quite tall and have curly hair.
        </Description>
        <PrimaryNav>
          <PrimaryNavItem href={"/"}>Home</PrimaryNavItem>
          <PrimaryNavItem href={"/about/me"}>About&nbsp;Me</PrimaryNavItem>
        </PrimaryNav>
        <BrandNav>
          <BrandNavItem
            href={"https://github.com/PurpleBooth"}
            title={"GitHub"}
            icon={["fab", "github-square"]}
          />
          <BrandNavItem
            href={"https://www.linkedin.com/in/purplebooth/"}
            title={"LinkedIn"}
            icon={["fab", "linkedin"]}
          />
          <BrandNavItem
            href={"https://twitter.com/PurpleBooth"}
            title={"Twitter"}
            icon={["fab", "twitter-square"]}
          />
        </BrandNav>
        <NavFooter />
      </div>
    </div>
  </nav>
);

export default Nav;
