import { FunctionComponent } from "react";
import { intlFormat, parseISO } from "date-fns";
import { ArticleJSON } from "../models/Article";
import { MetaJSON } from "../models/Meta";

interface Props {
  articleMeta: MetaJSON;
}

const IndexItem: FunctionComponent<Props> = ({ articleMeta }) => {
  const articleDate = articleMeta.date ? parseISO(articleMeta.date) : undefined;

  return (
    <article>
      <h1 className={"mb-1"}>{articleMeta.title}</h1>
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
            {tag}
          </li>
        ))}
      </ul>
      <p className={"prose"}>{articleMeta.description}</p>
      <button className={"block p-1"}>Read On →</button>
    </article>
  );
};

export default IndexItem;
