import Link from "next/link";
import intlFormat from "date-fns/intlFormat";

export function MobileFooter() {
  return (
    <footer
      className={
        "text-slate-600 dark:text-slate-400 text-center mt-8 lg:hidden"
      }
    >
      <div>
        <Link passHref href={"/about/me"}>
          <a className={"cursor-pointer"}>
            <span className={"hover:underline dark:text-white"}>About Me</span>
          </a>
        </Link>
      </div>
      <div>
        <Link passHref href={"/license"}>
          <a className={"cursor-pointer hover:underline"}>
            Copyright ©{" "}
            {intlFormat(Date.now(), {
              year: "numeric",
            })}
          </a>
        </Link>
      </div>
    </footer>
  );
}
