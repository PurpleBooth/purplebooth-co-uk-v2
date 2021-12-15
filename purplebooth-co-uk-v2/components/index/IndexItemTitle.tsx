import { FC } from "react";

interface Props {
  title: string;
  pageHasTitle?: boolean;
}

export const IndexItemTitle: FC<Props> = ({ title, pageHasTitle }) => {
  if (pageHasTitle) {
    return <h2 className={"mb-1"}>{title}</h2>;
  }

  return <h1 className={"mb-1"}>{title}</h1>;
};
