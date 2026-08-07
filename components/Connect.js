import Link from "next/link";

function Connect() {
  return (
    <section id="connect">
      <div className="wrap">
        <div className="connect-box reveal">
          <div>
            <div className="eyebrow">Let&rsquo;s connect</div>
            <h2>Fellow quality nerds &amp; fellow makers, welcome.</h2>
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
                <Link href="/store" className="btn btn-primary">
              Shop →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Connect;
