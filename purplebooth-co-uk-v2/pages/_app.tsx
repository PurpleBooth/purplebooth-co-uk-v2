import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ImageProps } from "next/image";
import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useEffect,
} from "react";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "prismjs/themes/prism-tomorrow.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fontsource/iosevka";
import "@fontsource/space-grotesk";
import "@fontsource/ibm-plex-sans";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SEO from "@bradgarropy/next-seo";

config.autoAddCss = false;

library.add(fab, fas, far);

const components = {
  code: ({
    className,
    children,
  }: PropsWithChildren<{ className?: string }>) => {
    const lang = className?.replace("language-", "") || "shell";
    return (
      <SyntaxHighlighter language={lang} style={dracula}>
        {children}
      </SyntaxHighlighter>
    );
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
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
        title={"Purple Booth"}
        description="Article about software development by Billie Thompson"
        icon={"/Purple Booth Mark.svg"}
      />
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
