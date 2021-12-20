import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../../components/Layout"));

import { faPhone, faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe: NextPage = () => {
  return (
    <Layout
      pageTitle={"About Me"}
      pageDescription={"About Billie Thompson, the author of this site"}
    >
      <h1 data-testid={"AboutMe"} id="about-me">
        About Me
      </h1>
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
                icon={faPhone}
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
              <FontAwesomeIcon title={"Twitter"} icon={faTwitter} listItem />{" "}
              @PurpleBooth
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link passHref href="https://uk.linkedin.com/in/purplebooth">
            <a>
              <FontAwesomeIcon title={"linkedIn"} icon={faLinkedin} listItem />{" "}
              purplebooth
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link passHref href="https://github.com/purplebooth">
            <a>
              <FontAwesomeIcon title={"GitHub"} icon={faGithub} listItem />{" "}
              purplebooth
            </a>
          </Link>
        </li>
        <li className={"flex items-center"}>
          <Link href={"mailto:contactus@purplebooth.co.uk"}>
            <a>
              <FontAwesomeIcon title={"Email Address"} icon={faAt} listItem />{" "}
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
              <FontAwesomeIcon title={"PGP Key"} icon={faKey} listItem /> 1AE6
              1571 6381 6A8F
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default AboutMe;
