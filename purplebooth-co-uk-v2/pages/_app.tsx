import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/iosevka";
import "@fontsource/space-grotesk";
import "@fontsource/ibm-plex-sans";

config.autoAddCss = false;

library.add(fab, fas, far);

const ResponsiveImage: FunctionComponent<ImageProps> = (
  props
) => {
  const { alt, src, ...rest } = props;
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt || ""} src={`${src}`} {...rest} />;
};
const Heading1: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => <h1 {...rest}>{children}</h1>;

const Heading2: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => <h2 {...rest}>{children}</h2>;

const Text: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => <p {...rest}>{children}</p>;

const Code: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => (
  <pre {...rest}>
    <code>{children}</code>
  </pre>
);

const InlineCode: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...rest
}) => <code {...rest}>{children}</code>;

const components = {
  img: ResponsiveImage,
  h1: Heading1,
  h2: Heading2,
  p: Text,
  code: Code,
  inlineCode: InlineCode,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
