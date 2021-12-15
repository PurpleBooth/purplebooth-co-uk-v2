import { FunctionComponent } from "react";
import { intlFormat } from "date-fns";

export const IndexItemStatsLine: FunctionComponent<{
  readLengthMin: number;
  date?: Date;
}> = ({ readLengthMin, date }) => {
  return (
    <div className={"text-slate-600"}>
      {date ? intlFormat(date) + " · " : ""}
      {new Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "minute",
      }).format(readLengthMin)}{" "}
      read
    </div>
  );
};
