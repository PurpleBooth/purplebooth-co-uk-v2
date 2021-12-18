import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { PropsWithChildren } from "react";
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
import { ImageProps } from "next/image";
import Image from "next/image";

config.autoAddCss = false;

library.add(fab, fas, far);

const components = {
  img: ({ alt, ...props }: PropsWithChildren<ImageProps & { alt: string }>) => (
    <Image alt={alt} layout="responsive" {...props} />
  ),
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
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
