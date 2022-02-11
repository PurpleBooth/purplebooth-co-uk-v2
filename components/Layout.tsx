import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { config } from "@fortawesome/fontawesome-svg-core";
import "prismjs/themes/prism-tomorrow.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dynamic from "next/dynamic";

config.autoAddCss = false;

const MobileNav = dynamic(() => import("./nav/mobile/MobileNav"));

const MobileFooter = dynamic(() => import("./nav/mobile/MobileFooter"));

const Nav = dynamic(() => import("./nav/full/Nav"));

const Layout: FC<
  PropsWithChildren<{ pageTitle?: string; pageDescription?: string }>
> = ({ children, pageTitle, pageDescription }) => {
  let title = pageTitle || "Purple Booth";
  return (
    <>
      <Head>
        <title>{title} · Billie Thompson</title>
        {pageDescription && (
          <meta name="description" content={pageDescription} />
        )}
        {pageDescription && (
          <meta property="og:description" content={pageDescription} />
        )}
        {pageDescription && (
          <meta name="twitter:description" content={pageDescription} />
        )}
        {pageTitle && <meta property="og:title" content={pageTitle} />}
        {pageTitle && <meta name="twitter:title" content={pageTitle} />}
      </Head>
      <div data-testid={"Layout"} className={"lg:flex lg:flex-row"}>
        <Nav />
        <MobileNav />

        <main className={"prose m-8 dark:prose-invert"}>{children}</main>
        <MobileFooter />
      </div>
    </>
  );
};

export default Layout;
