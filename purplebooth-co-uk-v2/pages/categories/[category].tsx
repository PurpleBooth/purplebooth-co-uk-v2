import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import IndexItem from "../../components/index/IndexItem";
import ArticlesService from "../../services/ArticleService";
import Article, { ArticleJSON } from "../../models/Article";
import { MetaJSON } from "../../models/Meta";
import { useRouter } from "next/router";

interface Props {
  meta: MetaJSON[];
}

const Category: NextPage<Props> = ({ meta }: Props) => {
  const { query } = useRouter();
  const category: string = (Array.isArray(query.category) ? query.category[0] : query.category) || "";
  const capitalisedCategory = category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  return (
    <div className={"flex flex-row"}>
      <Head>
        <title>{capitalisedCategory} · Billie Thompson</title>
        <meta
          name="description"
          content="Article about software development by Billie Thompson"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={"m-8 prose"}>
        <h1>{capitalisedCategory}</h1>
        {meta.map((meta, index) => (
          <IndexItem key={index} articleMeta={meta} pageHasTitle />
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const { category } = context.query;
  let categories: string[] | undefined;

  if (Array.isArray(category)) {
    categories = category;
  } else if (category !== undefined) {
    categories = [category];
  } else {
    categories = undefined;
  }

  const service = new ArticlesService();

  return {
    props: {
      meta: (await service.find({ "categories": categories })).map((article) =>
        article.meta.toJSON()
      ),
    },
  };
};

export default Category;
