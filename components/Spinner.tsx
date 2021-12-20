import { FC } from "react";
import { LogoHeader } from "./nav/full/LogoHeader";

const Spinner: FC = () => (
  <div
    data-testid={"Spinner"}
    className={
      "transition-all duration-150 delay-100 ease-in-out prose dark:prose-invert motion-safe:animate-spin flex min-w-full h-screen justify-center items-center"
    }
  >
    <LogoHeader />
  </div>
);

export default Spinner;
