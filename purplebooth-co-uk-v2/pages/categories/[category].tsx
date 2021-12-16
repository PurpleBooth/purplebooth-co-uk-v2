import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
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
      {meta &&
        meta.map((meta, index) => (
          <IndexItem key={index} articleMeta={meta} pageHasTitle />
        ))}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const service = new ArticlesService();
  const articles = await service.find();

  const uniqueCategories = new Set(
    articles
      .map((value) => value.meta.categories)
      .flat()
      .map((value) => value.toLowerCase())
  );
  const params: { params: { category: string } }[] = Array.from(
    uniqueCategories
  ).map((value) => ({
    params: {
      category: value,
    },
  }));

  return {
    paths: params,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<{ props: Props }> => {
  const category = context?.params?.category || "";
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
