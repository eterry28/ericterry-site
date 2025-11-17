import Link from "next/link";
import ComradeColaMachine from "./ComradeColaMachine";

export default function ComradeCola() {

  return (
    <>
      <div className="grid-bg" />
      <nav>
        <ul>
          <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/#story">Story</a>
        </li>
        <li>
          <a href="/#journey">Journey</a>
        </li>
        <li>
          <a href="/#expertise">Expertise</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#connect">Connect</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        </ul>
      </nav>
      <div className="blog-container">
        <ComradeColaMachine />
      </div>
    </>
  );
}