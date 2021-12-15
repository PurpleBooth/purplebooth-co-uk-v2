import { FunctionComponent } from "react";
import { parseISO } from "date-fns";
import { MetaJSON } from "../../models/Meta";
import { IndexItemTitle } from "./IndexItemTitle";
import { IndexItemStatsLine } from "./IndexItemStatsLine";
import { IndexItemCategories } from "./IndexItemCategories";
import { IndexItemArrowButton } from "./IndexItemArrowButton";

interface Props {
  articleMeta: MetaJSON;
}

const IndexItem: FunctionComponent<Props> = ({ articleMeta }) => {
  const articleDate = articleMeta.date ? parseISO(articleMeta.date) : undefined;
  const url = `/blog/${articleDate?.getFullYear()}/${articleDate?.getMonth()}/${articleDate?.getDate()}/${articleMeta.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")}`;

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
