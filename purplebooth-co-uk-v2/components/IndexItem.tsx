import { FunctionComponent, PropsWithChildren } from "react";
import { intlFormat, parseISO } from "date-fns";
import { MetaJSON } from "../models/Meta";
import Link from "next/link";

interface Props {
  articleMeta: MetaJSON;
}

const IndexItemTitle: FunctionComponent<{ title: string; href: string }> = ({
  title,
  href,
}) => (
  <Link passHref href={href}>
    <a className={"no-underline hover:underline"}>
      <h1 className={"mb-1"}>{title}</h1>
    </a>
  </Link>
);

const IndexItemStatsLine: FunctionComponent<{
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

const IndexItemCategories: FunctionComponent<{ categories: string[] }> = ({
  categories,
}) => {
  return (
    <ul className={"flex flex-row gap-1 list-none font-bold pl-0"}>
      {categories.map((tag) => (
        <li
          key={tag}
          className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}
        >
          <Link href={`/categories/${tag.toLowerCase()}/`} passHref>
            <a className={"no-underline font-bold"}>{tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
const IndexItemArrowButton: FunctionComponent<
  PropsWithChildren<{ href: string }>
> = ({ href, children }) => {
  return (
    <Link passHref href={href}>
      <a className={"block p-1 no-underline"}>
        <span className={"hover:underline"}>{children}</span> →
      </a>
    </Link>
  );
};

const IndexItem: FunctionComponent<Props> = ({ articleMeta }) => {
  const articleDate = articleMeta.date ? parseISO(articleMeta.date) : undefined;
  const url = `/blog/${articleDate?.getFullYear()}/${articleDate?.getMonth()}/${articleDate?.getDate()}/${articleMeta.title
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-")}`;

  return (
    <article className={"mb-4"}>
      <IndexItemTitle title={articleMeta.title} href={url} />
      <IndexItemStatsLine
        readLengthMin={articleMeta.readLengthMin}
        date={articleDate}
      />
      <IndexItemCategories categories={articleMeta.categories} />
      <p className={"prose my-2"}>{articleMeta.description}</p>
      <IndexItemArrowButton href={url}>Read On</IndexItemArrowButton>
    </article>
  );
};

export default IndexItem;
