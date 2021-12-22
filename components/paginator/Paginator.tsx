import { PageLink } from "./PageLink";
import { FC } from "react";

const Paginator: FC<{
  page: number;
  maxPage: number;
}> = ({ page, maxPage }) => (
  <nav
    className={
      "rounded-slate-600 dark:rounded-slate-400 rounded border inline-flex mt-4"
    }
  >
    <PageLink page={1} disabled={page == 1}>
      ««
    </PageLink>
    <PageLink page={page - 1} disabled={page == 1}>
      «
    </PageLink>
    {maxPage == page && page > 3 && (
      <PageLink page={page - 3}>{page - 3}</PageLink>
    )}
    {page > 2 && <PageLink page={page - 2}>{page - 2}</PageLink>}
    {page > 1 && <PageLink page={page - 1}>{page - 1}</PageLink>}
    <PageLink selected page={page}>
      {page}
    </PageLink>
    {page + 1 <= maxPage && <PageLink page={page + 1}>{page + 1}</PageLink>}
    {page + 2 <= maxPage && <PageLink page={page + 2}>{page + 2}</PageLink>}
    {page + 3 <= maxPage && page == 1 && (
      <PageLink page={page + 3}>{page + 3}</PageLink>
    )}
    <PageLink disabled={page == maxPage} page={page + 1}>
      »
    </PageLink>
    <PageLink disabled={page == maxPage} page={maxPage}>
      »»
    </PageLink>
  </nav>
);
export default Paginator;
