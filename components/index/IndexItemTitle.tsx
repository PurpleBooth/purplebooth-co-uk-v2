import { FC, PropsWithChildren } from "react";

interface Props {
  title: string;
  pageHasTitle?: boolean;
}

const Heading2 = ({ children }: PropsWithChildren<{}>) => (
  <h2 data-testid={"IndexItemTitle h2"} className={"mb-1"}>
    {children}
  </h2>
);
const Heading1 = ({ children }: PropsWithChildren<{}>) => (
  <h1 data-testid={"IndexItemTitle h1"} className={"mb-1"}>
    {children}
  </h1>
);

export const IndexItemTitle: FC<Props> = ({ title, pageHasTitle }) => {
  if (pageHasTitle) {
    return <Heading2>{title}</Heading2>;
  }

  return <Heading1>{title}</Heading1>;
};
