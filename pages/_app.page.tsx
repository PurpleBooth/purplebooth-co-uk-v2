import "../styles/globals.css";

import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { PropsWithChildren } from "react";

import { PrismAsync } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import "@fontsource/iosevka";
import "@fontsource/space-grotesk";
import "@fontsource/ibm-plex-sans";

import dynamic from "next/dynamic";
import { MDXComponents } from "mdx/types";
import type { ImgHTMLAttributes } from "react";

const Image = dynamic(() => import("next/image"), {
  loading: () => <>.....</>,
});

const components: MDXComponents = {
  img: ({
    alt,
    src,
    width,
    height,
    ...props
  }: PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>>) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt || ""}
        src={typeof src === "string" ? src : ""}
        width={width}
        height={height}
        {...props}
      />
    );
  },
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
