import { FunctionComponent } from "react";
import Link from "next/link";

export const IndexItemCategories: FunctionComponent<{
  categories: string[];
}> = ({ categories }) => {
  return (
    <ul className={"flex flex-row list-none font-bold flex-wrap gap-1 pl-0"}>
      {categories.map((tag, index) => (
        <li
          key={tag + index}
          className={
            "bg-slate-100 dark:bg-slate-900 rounded p-1 whitespace-nowrap inline-block m-0"
          }
        >
          <Link
            href={`/categories/${encodeURIComponent(tag.toLowerCase())}/`}
            passHref
          >
            <a className={"no-underline font-bold"}>{tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
