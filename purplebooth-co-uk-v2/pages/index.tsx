import type { GetServerSideProps, NextPage } from "next";
import IndexItem from "../components/index/IndexItem";
import ArticlesService from "../services/ArticleService";
import { MetaJSON } from "../models/Meta";
import Layout from "../components/Layout";

interface Props {
  meta: MetaJSON[];
}

const Home: NextPage<Props> = ({ meta }: Props) => (
  <Layout>
    {meta.map((meta, index) => (
      <IndexItem key={index} articleMeta={meta} />
    ))}
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const service = new ArticlesService();

  return {
    props: {
      meta: (await service.find()).map((article) => article.meta.toJSON()),
    },
  };
};

export default Home;
