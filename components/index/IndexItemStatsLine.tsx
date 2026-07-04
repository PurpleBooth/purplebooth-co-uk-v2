import { FunctionComponent, useMemo } from "react";
import { intlFormat } from "date-fns";

export const IndexItemStatsLine: FunctionComponent<{
  readLengthMin: number;
  date?: Date;
}> = ({ readLengthMin, date }) => {
  const timestamp = useMemo(
    () =>
      new Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "minute",
      }).format(readLengthMin),
    [readLengthMin]
  );
  const formattedDate = useMemo(
    () => (date ? intlFormat(date) + " · " : ""),
    [date]
  );

  return (
    <div
      data-testid={"IndexItemStatsLine"}
      className={"text-slate-600 dark:text-slate-400"}
    >
      {formattedDate} {timestamp} read
    </div>
  );
};
