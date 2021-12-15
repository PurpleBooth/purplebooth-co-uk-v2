import { FunctionComponent } from "react";
import { intlFormat, parseISO } from "date-fns";
import { ArticleJSON } from "../models/Article";
import { MetaJSON } from "../models/Meta";
import Link from "next/link";

interface Props {
  articleMeta: MetaJSON;
}

const IndexItem: FunctionComponent<Props> = ({ articleMeta }) => {
  const articleDate = articleMeta.date ? parseISO(articleMeta.date) : undefined;
  const url = `/blog/${articleDate?.getFullYear()}/${articleDate?.getMonth()}/${articleDate?.getDate()}/${articleMeta.title.toLowerCase().trim().replaceAll(" ", "-")}`

  return (
    <article className={"mb-4"}>
      <Link passHref href={url}><a className={"no-underline hover:underline"}><h1 className={"mb-1"}>{articleMeta.title}</h1></a></Link>
      <div className={"text-slate-600"}>
        {articleDate ? intlFormat(articleDate) + " · " : ""}
        {new Intl.NumberFormat(undefined, {
          style: "unit",
          unit: "minute",
        }).format(articleMeta.readLengthMin)}{" "}
        read
      </div>
      <ul className={"flex flex-row gap-1 list-none font-bold pl-0"}>
        {articleMeta.categories.map((tag) => (
          <li
            key={tag}
            className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}
          >
            <Link href={`/categories/${tag.toLowerCase()}/`} passHref>
            <a  className={"no-underline font-bold"}>
            {tag}
            </a>
            </Link>
          </li>
        ))}
      </ul>
      <p className={"prose my-2"}>{articleMeta.description}</p>
      <Link passHref href={url}><a className={"block p-1 no-underline"}><span className={"hover:underline"} >Read On</span> →</a></Link>
    </article>
  );
};

export default IndexItem;
