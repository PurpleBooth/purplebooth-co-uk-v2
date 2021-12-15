import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/Layout";

const License: NextPage = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <h1 id="about-me">About Me</h1>
      <figure>
        <Image
          width="461px"
          height="614px"
          alt={
            "A somewhat tall girl with a black t-shirt on with long curly red-brown hair"
          }
          src="/me_5_30.jpg"
        />
        <figcaption>Billie Thompson</figcaption>
      </figure>
      <p>
        I’m a software developer working at{" "}
        <Link href="http://armakuni.com/">Armakuni</Link>.
      </p>
      <p>
        I write code, am interested in Agile, Lean, DevOps and Infrastructure. I
        am also quite tall, and have curly hair.
      </p>
      <h2 id="contact">Contact</h2>
      <ul className={"fa-ul"}>
        <li className={"flex items-center"}>
          <Link href="tel:+447813452516" passHref>
            <a>
              <FontAwesomeIcon
                title={"Mobile"}
                icon={["fas", "phone"]}
                listItem
                alignmentBaseline={"auto"}
              />{" "}
              +44 7813 452516
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link passHref href="https://twitter.com/purplebooth">
            <a>
              <FontAwesomeIcon
                title={"Twitter"}
                icon={["fab", "twitter"]}
                listItem
              />{" "}
              @PurpleBooth
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link passHref href="https://uk.linkedin.com/in/purplebooth">
            <a>
              <FontAwesomeIcon
                title={"linkedIn"}
                icon={["fab", "linkedin"]}
                listItem
              />{" "}
              purplebooth
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link passHref href="https://github.com/purplebooth">
            <a>
              <FontAwesomeIcon
                title={"GitHub"}
                icon={["fab", "github"]}
                listItem
              />{" "}
              purplebooth
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link href={"mailto:contactus@purplebooth.co.uk"}>
            <a>
              <FontAwesomeIcon
                title={"Email Address"}
                icon={["fas", "at"]}
                listItem
              />{" "}
              contactus@purplebooth.co.uk
            </a>
          </Link>
        </li>
      </ul>
      <h3 id="pgp">PGP</h3>
      <ul className={"fa-ul"}>
        <li className={"flex items-center"}>
          <Link href="https://keybase.io/billie">
            <a>
              <FontAwesomeIcon
                title={"PGP Key"}
                icon={["fas", "key"]}
                listItem
              />{" "}
              1AE6 1571 6381 6A8F
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default License;
