import { FC } from "react";
import { PrimaryNavItem } from "./PrimaryNavItem";
import { LogoHeader } from "./LogoHeader";
import { Description } from "./Description";
import { PrimaryNav } from "./PrimaryNav";
import { NavFooter } from "./NavFooter";
import { BrandNavItem } from "./BrandNavItem";
import { BrandNav } from "./BrandNav";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Nav: FC = () => (
  <nav
    className={
      "h-100 hidden min-h-screen w-96 flex-col justify-end gap-2 bg-slate-100 p-8 text-xl dark:bg-slate-800 lg:flex"
    }
  >
    <div className={"relative"}>
      <div className={"fixed bottom-8 w-80"}>
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
            icon={faGithubSquare}
          />
          <BrandNavItem
            href={"https://www.linkedin.com/in/purplebooth/"}
            title={"LinkedIn"}
            icon={faLinkedin}
          />
          <BrandNavItem
            href={"https://twitter.com/PurpleBooth"}
            title={"Twitter"}
            icon={faTwitterSquare}
          />
        </BrandNav>
        <NavFooter />
      </div>
    </div>
  </nav>
);

export default Nav;
