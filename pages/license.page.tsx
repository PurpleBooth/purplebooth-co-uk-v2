import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Spinner from "../components/Spinner";
import Image from "next/image";

const Layout = dynamic(() => import("../components/Layout"), {
  loading: () => <Spinner />,
});

const License: NextPage = () => {
  return (
    <Layout pageTitle={"License"}>
      <h1 data-testid={"License"}>License</h1>
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
        <strong>Attribution</strong> — You must give appropriate credit, provide
        a link to the license, and indicate if changes were made. You may do so
        in any reasonable manner, but not in any way that suggests the licensor
        endorses you or your use.
      </p>
      <p>
        <strong>ShareAlike</strong> — If you remix, transform, or build upon the
        material, you must distribute your contributions under the same license
        as the original.
      </p>
      <p>
        <strong>No additional restrictions</strong> — You may not apply legal
        terms or technological measures that legally restrict others from doing
        anything the license permits.
      </p>
      <h2>Notices</h2>
      <p>
        You do not have to comply with the license for elements of the material
        in the public domain or where your use is permitted by an applicable
        exception or limitation. No warranties are given. The license may not
        give you all of the permissions necessary for your intended use. For
        example, other rights such as publicity, privacy, or moral rights may
        limit how you use the material.
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
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
          Creative Commons Attribution-ShareAlike 4.0 International License
        </a>
        .
      </p>
      <p>
        Based on a work at{" "}
        <a href="https://purplebooth.co.uk">https://purplebooth.co.uk</a>.
      </p>
    </Layout>
  );
};

export default License;
