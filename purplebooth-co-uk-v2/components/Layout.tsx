import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import Nav from "./Nav";
import { Body } from "next/dist/server/web/spec-compliant/body";

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
      <body className={"dark:bg-black"} />
    </Head>

    <Nav />

    <main className={"m-8 prose dark:prose-invert"}>{children}</main>
  </div>
);

export default Layout;
