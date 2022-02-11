import { FC } from "react";
import { LogoHeader } from "./nav/full/LogoHeader";

const Spinner: FC = () => (
  <div
    data-testid={"Spinner"}
    className={
      "prose flex h-screen min-w-full items-center justify-center transition-all delay-100 duration-150 ease-in-out motion-safe:animate-spin dark:prose-invert"
    }
  >
    <LogoHeader />
  </div>
);

export default Spinner;
