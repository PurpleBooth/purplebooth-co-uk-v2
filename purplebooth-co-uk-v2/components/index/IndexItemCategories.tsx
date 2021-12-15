import { FunctionComponent } from "react";
import Link from "next/link";

export const IndexItemCategories: FunctionComponent<{
  categories: string[];
}> = ({ categories }) => {
  return (
    <ul className={"flex flex-row gap-1 list-none font-bold pl-0"}>
      {categories.map((tag, index) => (
        <li
          key={tag + index}
          className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}
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
