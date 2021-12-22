import { FC } from "react";
import { LightLogo } from "./LightLogo";
import { DarkLogo } from "./DarkLogo";

export const LogoHeader: FC = () => (
  <header data-testid={"LogoHeader"} className={"cursor-pointer"}>
    <LightLogo />
    <DarkLogo />
  </header>
);
