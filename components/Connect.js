import Link from "next/link";

function Connect() {
  return (
    <section id="connect">
      <div className="wrap">
        <div className="connect-box reveal">
          <div>
            <div className="eyebrow">Let&rsquo;s connect</div>
            <h2>Two practices. <em>One conversation.</em></h2>
            <p>I spend my days helping teams build and deliver better digital work. I spend my independent time turning ideas into things people can use.</p>
            <p>If either side of that sounds interesting, let&rsquo;s connect.</p>
          </div>
          <div className="social-row">
            <a href="https://github.com/eterry28" className="btn btn-ghost">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eric-terry-kc/"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <Link href="/store" className="btn btn-ghost">
              Shop
            </Link>
            <Link href="/store" className="btn btn-primary">
              Work With Me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Connect;
