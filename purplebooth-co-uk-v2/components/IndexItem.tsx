import { FunctionComponent } from "react";

const IndexItem: FunctionComponent = () => (<article>
  <h1 className={"mb-1"}>Pair Programming: A Practical Guide</h1>
  <div className={"text-slate-600"}>May 26, 2018 · 6 minute read</div>
  <ul className={"font- flex flex-row gap-1 list-none font-bold pl-0"}>
    <li className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}>Development</li>
    <li className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}>Process</li>
    <li className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}>Agile</li>
    <li className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}>Pair Programming</li>
    <li className={"bg-slate-50 rounded p-1 whitespace-nowrap inline-block"}>Extreme Programming</li>
  </ul>
  <p>What is pair programming, how to do it, and how to fix it when things go wrong.</p>
  <button className={"block p-1"}>Read On →</button>
</article>)

export default IndexItem;
