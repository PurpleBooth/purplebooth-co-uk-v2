import type { GetStaticProps, NextPage } from "next";
import { GetStaticPaths } from "next";
import IndexItem from "../../components/index/IndexItem";
import ArticlesService from "../../services/ArticleService";
import { MetaJSON } from "../../models/Meta";
import Layout from "../../components/Layout";
import { Paginator } from "../../components/paginator/Paginator";
import Article from "../../models/Article";
import { getMaxPage } from "../../components/paginator/GetMaxPage";

interface Props {
  meta?: MetaJSON[];
  page: number;
  maxPage: number;
}

const BlogPage: NextPage<Props> = ({ meta, page, maxPage }: Props) => {
  return (
    <Layout>
      {meta &&
        meta.map((meta, index) => <IndexItem key={index} articleMeta={meta} />)}
      <Paginator page={page} maxPage={maxPage} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const service = new ArticlesService();
  const articles = await service.find();
  const maxPage = getMaxPage(articles);

  const pages: number[] = Array.from(new Array(maxPage).keys());
  const paths: { params: { page: string } }[] = pages
    .map((index) => ({ page: `${index + 1}` }))
    .map((item) => ({ params: item }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<{ props: Props }> => {
  const service = new ArticlesService();
  let page: number;

  if (Array.isArray(context?.params?.page)) {
    page = parseInt(context?.params?.page[0] || "1");
  } else {
    page = parseInt(context?.params?.page || "1");
  }

  const articleMetas = (await service.find()).map((article: Article) =>
    article.meta.toJSON()
  );

  return {
    props: {
      maxPage: getMaxPage(articleMetas),
      meta: articleMetas.slice(page * 10 - 10, page * 10),
      page: page,
    },
  };
};

export default BlogPage;
