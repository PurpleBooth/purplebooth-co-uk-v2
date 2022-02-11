import { FunctionComponent } from "react";
import Link from "next/link";

export const IndexItemCategories: FunctionComponent<{
  categories: string[];
}> = ({ categories }) => {
  return (
    <ul className={"flex list-none flex-row flex-wrap gap-1 pl-0 font-bold"}>
      {categories.map((tag, index) => (
        <li
          key={tag + index}
          className={
            "m-0 inline-block whitespace-nowrap rounded bg-slate-100 p-1 dark:bg-slate-900"
          }
        >
          <Link
            href={`/categories/${encodeURIComponent(tag.toLowerCase())}/`}
            passHref
          >
            <a
              data-testid={`IndexItemCategories ${tag} a`}
              className={"font-bold no-underline"}
            >
              {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
