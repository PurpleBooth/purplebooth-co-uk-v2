import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import IndexItem from "../components/IndexItem";

const Home: NextPage = () => {
  return (
    <div className={"flex flex-row"}>
      <Head>
        <title>Purple Booth · Billie Thompson</title>
        <meta
          name="description"
          content="Article about software development by Billie Thompson"
        />
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>

      <Nav/>

      <main className={"m-8 prose"}>
        <IndexItem />
        <hr />
        <IndexItem />
        <hr />
        <IndexItem />
        <hr />
        <IndexItem />
        <hr />
        <IndexItem />
      </main>
    </div>
  );
};

export default Home;
