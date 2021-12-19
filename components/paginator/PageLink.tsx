import { PropsWithChildren } from "react";
import { DisabledLink } from "./DisabledLink";
import { ActiveLink } from "./ActiveLink";

interface PageLinkProps {
  page: number;
  disabled?: boolean;
  selected?: boolean;
}

export const PageLink = ({
  disabled,
  page,
  children,
  selected,
}: PropsWithChildren<PageLinkProps>) => {
  if (disabled) {
    return <DisabledLink>{children}</DisabledLink>;
  }

  return (
    <ActiveLink page={page} selected={selected}>
      {children}
    </ActiveLink>
  );
};
