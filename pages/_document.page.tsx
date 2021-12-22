import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={"en-US"}>
        <Head>
          <link rel="icon" href="/Purple Booth Mark.svg" />
          <meta
            name="description"
            content={"Articles about software development by Billie Thompson"}
          />
          <meta name="keywords" content="Coding, Billie Thompson, Blog" />
          <meta name="theme-color" content="#f1f5f9" />
          <meta name="color-scheme" content="light" />
          <meta property="og:url" content="https://purplebooth.co.uk" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={"Articles about software development by Billie Thompson"}
          />
          <meta property="og:image" content="/Purple Booth Logo-01.svg" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@PurpleBooth" />
          <meta
            name="twitter:description"
            content={"Articles about software development by Billie Thompson"}
          />
          <meta name="twitter:image" content="/Purple Booth Logo-01.svg" />
          <meta property="og:title" content={"Purple Booth"} />
          <meta name="twitter:title" content={"Purple Booth"} />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className={"dark:bg-black"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
