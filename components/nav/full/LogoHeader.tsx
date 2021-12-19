import { FC } from "react";
import { LightLogo } from "./LightLogo";
import { DarkLogo } from "./DarkLogo";

export const LogoHeader: FC = () => (
  <h1 className={"cursor-pointer"}>
    <LightLogo />
    <DarkLogo />
  </h1>
);
