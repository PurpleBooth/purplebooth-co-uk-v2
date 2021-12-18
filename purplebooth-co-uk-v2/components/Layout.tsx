import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import FullNav from "./nav/FullNav";
import { MobileNav } from "./nav/MobileNav";
import { MobileFooter } from "./nav/MobileFooter";
import SEO from "@bradgarropy/next-seo";

const Layout: FC<PropsWithChildren<{ pageTitle?: string }>> = ({
  children,
  pageTitle,
}) => (
  <div className={"lg:flex lg:flex-row"}>
    <Head>
      <title>{pageTitle ? pageTitle : "Purple Booth"} · Billie Thompson</title>
      <body className={"dark:bg-black"} />

      <SEO
        keywords={["Coding", "Billie Thompson", "Blog"]}
        themeColor="#f1f5f9"
        colorScheme="light"
        facebook={{
          image: "/Purple Booth Logo-01.svg",
          url: "https://purplebooth.co.uk",
          type: "website",
        }}
        twitter={{
          image: "/Purple Booth Logo-01.svg",
          site: "@PurpleBooth",
          card: "summary",
        }}
        title={pageTitle ? pageTitle : "Purple Booth"}
        description="Article about software development by Billie Thompson"
        icon={"/Purple Booth Logo-01.svg"}
      />
    </Head>
    <FullNav />
    <MobileNav />

    <main className={"m-8 prose dark:prose-invert"}>{children}</main>
    <MobileFooter />
  </div>
);

export default Layout;
