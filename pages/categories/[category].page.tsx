import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import IndexItem from "../../components/index/IndexItem";
import ArticlesService from "../../services/ArticleService";
import { MetaJSON } from "../../models/Meta";
import dynamic from "next/dynamic";
import Spinner from "../../components/Spinner";
const Layout = dynamic(() => import("../../components/Layout"), {
  loading: () => <Spinner />,
});

interface Props {
  meta: MetaJSON[];
}

const Category: NextPage<Props> = ({ meta }: Props) => {
  const { query } = useRouter();
  const category: string =
    (Array.isArray(query.category) ? query.category[0] : query.category) || "";
  const capitalisedCategory = meta[0].categories.filter(
    (realCategory) => realCategory.toLowerCase() === category.toLowerCase()
  )[0];

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
    fallback: false,
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
