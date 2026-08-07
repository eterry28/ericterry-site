"use client";

import Link from "next/link";

function Nav() {
  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="nav-mark">
          <span className="dot"></span>ERIC TERRY
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded="false"
          id="navToggle"
        >
          <span></span>
        </button>
        <ul className="nav-links" id="navLinks">
          <li>
            <Link href="/#story">Story</Link>
          </li>
          <li>
            <Link href="/#journey">Journey</Link>
          </li>
          <li>
            <Link href="/#expertise">Expertise</Link>
          </li>
          <li>
            <Link href="/#store">Store Preview</Link>
          </li>
          <li>
            <Link href="/#connect">Connect</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/store" className="store-link">
              Shop →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
