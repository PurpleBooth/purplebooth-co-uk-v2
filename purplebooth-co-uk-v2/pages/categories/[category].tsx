import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import IndexItem from "../../components/index/IndexItem";
import ArticlesService from "../../services/ArticleService";
import { MetaJSON } from "../../models/Meta";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface Props {
  meta: MetaJSON[];
}

const Category: NextPage<Props> = ({ meta }: Props) => {
  const { query } = useRouter();
  const category: string =
    (Array.isArray(query.category) ? query.category[0] : query.category) || "";
  const capitalisedCategory = category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  return (
    <Layout pageTitle={capitalisedCategory}>
      <h1>Category: {capitalisedCategory}</h1>
      {meta.map((meta, index) => (
        <IndexItem key={index} articleMeta={meta} pageHasTitle />
      ))}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const { category } = context.query;
  const service = new ArticlesService();

  return {
    props: {
      meta: (await service.find({ categories: category })).map((article) =>
        article.meta.toJSON()
      ),
    },
  };
};

export default Category;
