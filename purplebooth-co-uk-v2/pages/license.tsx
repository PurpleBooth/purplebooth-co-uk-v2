import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Image from "next/image";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const License: NextPage<{
  source: MDXRemoteSerializeResult;
  frontMatter: { title: string };
}> = ({ source, frontMatter }) => {
  return (
    <div className={"flex flex-row"}>
      <Head>
        <title>License · Billie Thompson</title>
        <meta
          name="description"
          content="Article about software development by Billie Thompson"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={"m-8 prose"}>
        <h1>License</h1>
        <h2>You are free to</h2>
        <p>
          <strong>Share</strong> — copy and redistribute the material in any
          medium or format
        </p>
        <p>
          <strong>Adapt</strong> — remix, transform, and build upon the material
          for any purpose, even commercially. The licensor cannot revoke these
          freedoms as long as you follow the license terms.
        </p>
        <h2>Under the following terms</h2>
        <p>
          <strong>Attribution</strong> — You must give appropriate credit,
          provide a link to the license, and indicate if changes were made. You
          may do so in any reasonable manner, but not in any way that suggests
          the licensor endorses you or your use.
        </p>
        <p>
          <strong>ShareAlike</strong> — If you remix, transform, or build upon
          the material, you must distribute your contributions under the same
          license as the original.
        </p>
        <p>
          <strong>No additional restrictions</strong> — You may not apply legal
          terms or technological measures that legally restrict others from
          doing anything the license permits.
        </p>
        <h2>Notices</h2>
        <p>
          You do not have to comply with the license for elements of the
          material in the public domain or where your use is permitted by an
          applicable exception or limitation. No warranties are given. The
          license may not give you all of the permissions necessary for your
          intended use. For example, other rights such as publicity, privacy, or
          moral rights may limit how you use the material.
        </p>
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
          <Image
            alt="Creative Commons Licence"
            width="88px"
            height="31px"
            src="/cc-image.png"
          />
        </a>
        <p>
          <span>Purple Booth Blog</span> by{" "}
          <a href="https://purplebooth.co.uk">Purple Booth Ltd</a> is licensed
          under a{" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>
          .
        </p>
        <p>
          Based on a work at{" "}
          <a href="https://purplebooth.co.uk">https://purplebooth.co.uk</a>.
        </p>
      </main>
    </div>
  );
};

export default License;
