import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import FullNav from "./nav/FullNav";
import { MobileNav } from "./nav/MobileNav";
import { MobileFooter } from "./nav/MobileFooter";
import SEO from "@bradgarropy/next-seo";

const Layout: FC<
  PropsWithChildren<{ pageTitle?: string; pageDescription?: string }>
> = ({ children, pageTitle, pageDescription }) => {
  const title = pageTitle ? pageTitle : "Purple Booth";
  return (
    <>
      <SEO description={pageDescription} title={title} />
      <Head>
        <title>{title}</title>
        <body className={"dark:bg-black"} />
      </Head>
      <div className={"lg:flex lg:flex-row"}>
        <FullNav />
        <MobileNav />

        <main className={"m-8 prose dark:prose-invert"}>{children}</main>
        <MobileFooter />
      </div>
    </>
  );
};

export default Layout;
