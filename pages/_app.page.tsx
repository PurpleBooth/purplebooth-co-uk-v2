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
import { ImageProps } from "next/image";

const Image = dynamic(() => import("next/image"), {
  loading: () => <>.....</>,
});

const components = {
  img: ({
    alt,
    src,
    placeholder,
    ...props
  }: PropsWithChildren<
    Omit<Omit<Omit<ImageProps, "alt">, "src">, "placeholder"> & {
      alt?: string;
      src?: string;
      placeholder?: string;
    }
  >) => {
    var realPlaceholder: "blur" | "empty" | undefined;

    if (placeholder == "blur") {
      realPlaceholder = "blur";
    }
    if (placeholder == "empty") {
      realPlaceholder = "empty";
    }

    return (
      <Image
        alt={alt || ""}
        src={src || ""}
        placeholder={realPlaceholder}
        layout="responsive"
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
