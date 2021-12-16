import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import Nav from "./Nav";

const Layout: FC<PropsWithChildren<{ pageTitle?: string }>> = ({
  children,
  pageTitle,
}) => (
  <div className={"flex flex-row"}>
    <Head>
      <title>{pageTitle ? pageTitle : "Purple Booth"} · Billie Thompson</title>
      <meta
        name="description"
        content="Article about software development by Billie Thompson"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main className={"m-8 prose"}>{children}</main>
  </div>
);

export default Layout;
