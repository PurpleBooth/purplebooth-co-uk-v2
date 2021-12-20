import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import DefaultErrorPage from "next/error";
import { parseISO } from "date-fns";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import ArticlesService from "../../../../../services/ArticleService";
import { ArticleJSON } from "../../../../../models/Article";
import { IndexItemStatsLine } from "../../../../../components/index/IndexItemStatsLine";
import { IndexItemCategories } from "../../../../../components/index/IndexItemCategories";
import { IndexItemTitle } from "../../../../../components/index/IndexItemTitle";
import dynamic from "next/dynamic";
import Spinner from "../../../../../components/Spinner";
const Layout = dynamic(() => import("../../../../../components/Layout"), {
  loading: () => <Spinner />,
});

interface Props {
  article?: ArticleJSON;
  contents?: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const IndexPage: NextPage<Props> = ({ article, contents }: Props) => {
  if (!article || !contents) {
    return (
      <>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  const articleDate = article.meta.date
    ? parseISO(article.meta.date)
    : undefined;

  return (
    <Layout
      pageTitle={article.meta.title}
      pageDescription={article.meta.description}
    >
      <article className={"mb-4"}>
        <IndexItemTitle title={article.meta.title} />
        <IndexItemStatsLine
          readLengthMin={article.meta.readLengthMin}
          date={articleDate}
        />
        <IndexItemCategories categories={article.meta.categories} />
        <div className={"prose dark:prose-invert my-2"}>
          <MDXRemote {...contents} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const service = new ArticlesService();
  const articles = await service.find();

  return {
    paths: articles.map((value) => ({
      params: {
        year: value.meta.date?.getFullYear().toString(),
        month: value.meta.date?.getMonth().toString(),
        day: value.meta.date?.getDate().toString(),
        slug: value.meta.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}): Promise<{ props: Props }> => {
  const { year, month, day, slug } = params || {};

  const service = new ArticlesService();
  const articles = await service.find({
    year: year,
    month: month,
    day: day,
    slug: slug,
  });
  const article = articles[0];

  return {
    props: {
      article: article.toJSON(),
      contents: await serialize(article.contents),
    },
  };
};

export default IndexPage;
