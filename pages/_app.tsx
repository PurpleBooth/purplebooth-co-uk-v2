import "../styles/globals.css";

import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { PropsWithChildren } from "react";

import { PrismAsync } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ImageProps } from "next/image";

import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <>.....</>,
});

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
      <PrismAsync language={lang} style={dracula}>
        {children}
      </PrismAsync>
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
