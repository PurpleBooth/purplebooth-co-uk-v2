import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import IndexItem from "../components/IndexItem";
import ArticlesService from "../services/ArticleService";
import Article, { ArticleJSON } from "../models/Article";
import { MetaJSON } from "../models/Meta";

interface Props {
  meta: MetaJSON[];
}

const Home: NextPage<Props> = ({ meta }: Props) => {
  return (
    <div className={"flex flex-row"}>
      <Head>
        <title>Purple Booth · Billie Thompson</title>
        <meta
          name="description"
          content="Article about software development by Billie Thompson"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={"m-8 prose"}>
        {meta.map((meta, index) => (
          <IndexItem key={index} articleMeta={meta} />
        ))}
      </main>
    </div>
  );
};

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
