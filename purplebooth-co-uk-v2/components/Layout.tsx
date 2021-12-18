import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import FullNav from "./nav/FullNav";
import { MobileNav } from "./nav/MobileNav";
import { MobileFooter } from "./nav/MobileFooter";

const Layout: FC<PropsWithChildren<{ pageTitle?: string }>> = ({
  children,
  pageTitle,
}) => (
  <div className={"lg:flex lg:flex-row"}>
    <Head>
      <title>{pageTitle ? pageTitle : "Purple Booth"} · Billie Thompson</title>
      <meta
        name="description"
        content="Article about software development by Billie Thompson"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className={"dark:bg-black"} />
    </Head>

    <FullNav />
    <MobileNav />

    <main className={"m-8 prose dark:prose-invert"}>{children}</main>
    <MobileFooter />
  </div>
);

export default Layout;
