import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const License: NextPage = () => {
  return (
    <div className={"flex flex-row"}>
      <Head>
        <title>About me · Billie Thompson</title>
        <meta
          name="description"
          content="Article about software development by Billie Thompson"
        />
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>

      <Nav/>

      <main className={"m-8 prose"}>
        <h1 id="about-me">About Me</h1>
        <figure>
          <Image width="461px" height="614px" src="/me_5_30.jpg"/>
          <figcaption>
            Billie Thompson
          </figcaption>
        </figure>
        <p>
          I’m a software developer working at{" "}
          <Link href="http://armakuni.com/">Armakuni</Link>.
        </p>
        <p>
          I write code, am interested in Agile, Lean, DevOps and Infrastructure.
          I am also quite tall, and have curly hair.
        </p>
        <h2 id="contact">Contact</h2>
        <ul className={"fa-ul"}>
          <li className={"flex items-center"}>
            <Link href="tel:+447813452516">
              <>
                <FontAwesomeIcon
                  title={"Mobile"}
                  icon={["fas", "phone"]}
                  listItem
                  alignmentBaseline={"auto"}
                /> +44 7813 452516
              </>
            </Link>
          </li>
          <li className={"flex items-center"}>
            <Link href="https://twitter.com/purplebooth"><>
              <FontAwesomeIcon
                title={"Twitter"}
                icon={["fab", "twitter"]}
                listItem
              /> @PurpleBooth
            </>
            </Link>
          </li>
          <li className={"flex items-center"}>
            <Link href="https://uk.linkedin.com/in/purplebooth"><>
              <FontAwesomeIcon
                title={"linkedIn"}
                icon={["fab", "linkedin"]}
                listItem
              /> purplebooth
            </>
            </Link>
          </li>
          <li className={"flex items-center"}>
            <Link href="https://github.com/purplebooth"><>
              <FontAwesomeIcon
                title={"GitHub"}
                icon={["fab", "github"]}
                listItem
              /> purplebooth
            </>
            </Link>
          </li>
          <li className={"flex items-center"}>
            <Link href={"mailto:contactus@purplebooth.co.uk"}>
              <>
                <FontAwesomeIcon
                  title={"Email Address"}
                  icon={["fas", "at"]}
                  listItem
                /> contactus@purplebooth.co.uk
              </>
            </Link></li>
        </ul>
        <h3 id="pgp">PGP</h3>
        <ul className={"fa-ul"}>
          <li className={"flex items-center"}>
            <Link href="https://keybase.io/billie"><>
              <FontAwesomeIcon
                title={"PGP Key"}
                icon={["fas", "key"]}
                listItem
              /> 1AE6 1571 6381 6A8F
            </>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default License;
