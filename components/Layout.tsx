import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import Nav from "./nav/full/Nav";
import { MobileNav } from "./nav/mobile/MobileNav";
import { MobileFooter } from "./nav/mobile/MobileFooter";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "prismjs/themes/prism-tomorrow.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(fab, fas, far);

const Layout: FC<
  PropsWithChildren<{ pageTitle?: string; pageDescription?: string }>
> = ({ children, pageTitle, pageDescription }) => {
  const title = pageTitle || "Purple Booth";
  const description =
    pageDescription || "Articles about software development by Billie Thompson";
  return (
    <>
      <Head>
        <title>{title} · Billie Thompson</title>
        <link rel="icon" href="/Purple Booth Mark.svg" />
        <meta name="description" content={description} />
        <meta name="keywords" content="Coding, Billie Thompson, Blog" />
        <meta name="theme-color" content="#f1f5f9" />
        <meta name="color-scheme" content="light" />
        <meta property="og:url" content="https://purplebooth.co.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/Purple Booth Logo-01.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@PurpleBooth" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/Purple Booth Logo-01.svg" />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <body className={"dark:bg-black"} />
      </Head>
      <div className={"lg:flex lg:flex-row"}>
        <Nav />
        <MobileNav />

        <main className={"m-8 prose dark:prose-invert"}>{children}</main>
        <MobileFooter />
      </div>
    </>
  );
};

export default Layout;
