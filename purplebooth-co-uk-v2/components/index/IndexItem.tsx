import { FunctionComponent } from "react";
import { parseISO } from "date-fns";
import { MetaJSON } from "../../models/Meta";
import { IndexItemTitle } from "./IndexItemTitle";
import { IndexItemStatsLine } from "./IndexItemStatsLine";
import { IndexItemCategories } from "./IndexItemCategories";
import { IndexItemArrowButton } from "./IndexItemArrowButton";

interface Props {
  articleMeta: MetaJSON;
  pageHasTitle?: boolean;
}

const IndexItem: FunctionComponent<Props> = ({ articleMeta, pageHasTitle }) => {
  const articleDate = articleMeta.date ? parseISO(articleMeta.date) : undefined;
  let yearParam = encodeURIComponent(articleDate?.getFullYear() || "");
  let monthParam = encodeURIComponent(articleDate?.getMonth() || "");
  let dayParam = encodeURIComponent(articleDate?.getDate() || "");
  let titleParam = encodeURIComponent(
    articleMeta.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
  );

  const url = `/blog/${yearParam}/${monthParam}/${dayParam}/${titleParam}`;

  return (
    <article className={"mb-4"}>
      <IndexItemTitle
        title={articleMeta.title}
        href={url}
        pageHasTitle={pageHasTitle}
      />
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
