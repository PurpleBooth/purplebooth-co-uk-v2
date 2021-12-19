import { FC } from "react";
import intlFormat from "date-fns/intlFormat";

export const CopyrightNotice: FC = () => (
  <>
    Copyright ©{" "}
    {intlFormat(Date.now(), {
      year: "numeric",
    })}
    <span data-testid={"CopyrightNotice"} />
  </>
);
