import Link from "next/dist/client/link";
import Nav from "@/components/Nav";

export default function Store() {
  return (
    <>
      <Nav />

        <div className="note-box" style={{ margin: "2rem auto", maxWidth: "600px", textAlign: "center" }}>
            <strong>Note:</strong> This section is currently a placeholder. The shop is still being built.
        </div>
{/*         
      <header className="shop-hero">
        <div className="wrap">
          <div className="eyebrow">ericterry.me</div>
          <h1>
            Ebooks &amp; apps, built one at a time.
          </h1>
          <p>
            Everything here is written, designed, shipped solo, and held to the same standard I apply professionally. No bloat, no filler chapters, no half-finished apps.
          </p>
          <div className="filter-row">
            <a href="#ebooks">Ebooks</a>
            <a href="#apps">PWAs</a>
          </div>
        </div>
      </header>

      <section className="tight" id="ebooks">

        <div className="wrap">
          <div className="cat-head">
            <h2>Ebooks</h2>
            <span className="count">4 titles</span>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-media" style={{ background: "#3C7A56" }}>
                <span className="glyph">52</span>
                <span className="status stamp pass">Live</span>
              </div>
              <div className="product-body">
                <span className="product-cat">Ebook &middot; Leisure</span>
                <h3>52 Tuesdays</h3>
                <p className="desc">
                  A year of deliberate leisure. One guided, decision-free
                  Tuesday at a time &mdash; for anyone worn out by having to
                  choose what to do with their own free time.
                </p>
                <div className="product-meta">
                  <span>PDF &amp; EPUB</span>
                  <span className="product-price">$14</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/52tuesdays"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#1B2430" }}>
                <span className="glyph">R</span>
                <span className="status stamp amber">New</span>
              </div>
              <div className="product-body">
                <span className="product-cat">
                  Ebook &middot; Relationships
                </span>
                <h3>
                  The Slow Return{" "}
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: ".7rem",
                      color: "var(--ink-45)",
                    }}
                  >
                    (working title)
                  </span>
                </h3>
                <p className="desc">
                  A short, practical guide to finding your way back to each
                  other after distance creeps in &mdash; built around small,
                  repeatable acts of reconnection.
                </p>
                <div className="product-meta">
                  <span>PDF &amp; EPUB</span>
                  <span className="product-price">$12</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/the-slow-return"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#DD8F32" }}>
                <span className="glyph">L</span>
                <span className="status stamp amber">New</span>
              </div>
              <div className="product-body">
                <span className="product-cat">Ebook &middot; Cozy Living</span>
                <h3>
                  The Art of Doing Less{" "}
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: ".7rem",
                      color: "var(--ink-45)",
                    }}
                  >
                    (working title)
                  </span>
                </h3>
                <p className="desc">
                  An anti-productivity field guide &mdash; permission and
                  practical structure for a slower, cozier way to spend your
                  days.
                </p>
                <div className="product-meta">
                  <span>PDF &amp; EPUB</span>
                  <span className="product-price">$12</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/doing-less"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#5B6472" }}>
                <span className="glyph">S</span>
                <span className="status stamp amber">New</span>
              </div>
              <div className="product-body">
                <span className="product-cat">Ebook &middot; Intimacy</span>
                <h3>
                  Say It Better{" "}
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: ".7rem",
                      color: "var(--ink-45)",
                    }}
                  >
                    (working title)
                  </span>
                </h3>
                <p className="desc">
                  A communication companion for couples &mdash; scripts,
                  prompts, and check-ins that pair naturally with the Desire
                  Deck.
                </p>
                <div className="product-meta">
                  <span>PDF &amp; EPUB</span>
                  <span className="product-price">$14</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/say-it-better"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tight" id="apps">
        <div className="wrap">
          <div className="cat-head">
            <h2>PWAs</h2>
            <span className="count">6 apps</span>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-media" style={{ background: "#7A3C5E" }}>
                <span className="glyph">D</span>
                <span className="status stamp pass">Live</span>
              </div>
              <div className="product-body">
                <span className="product-cat">PWA &middot; Couples</span>
                <h3>Desire Deck</h3>
                <p className="desc">
                  A conversation-starting card deck for couples. Installable on
                  any device, no app store required.
                </p>
                <div className="product-meta">
                  <span>Web &middot; iOS &middot; Android</span>
                  <span className="product-price">$9</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/desire-deck"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#3C5E7A" }}>
                <span className="glyph">P</span>
                <span className="status stamp pass">Live</span>
              </div>
              <div className="product-body">
                <span className="product-cat">PWA &middot; Social</span>
                <h3>PulsePoll</h3>
                <p className="desc">
                  Ask one question, share it anywhere. Votes and reactions land
                  in real time, built for a single social post.
                </p>
                <div className="product-meta">
                  <span>Web &middot; installable</span>
                  <span className="product-price">Free</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/pulsepoll"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#8A6D3C" }}>
                <span className="glyph">O</span>
                <span className="status stamp pass">Live</span>
              </div>
              <div className="product-body">
                <span className="product-cat">PWA &middot; Learning</span>
                <h3>Old Hands Games</h3>
                <p className="desc">
                  A daily collection of bite-size games teaching analog skills
                  &mdash; cursive, clock reading, cash handling, and more.
                </p>
                <div className="product-meta">
                  <span>Web &middot; installable</span>
                  <span className="product-price">$6</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/old-hands-games"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#2F4A3E" }}>
                <span className="glyph">T</span>
                <span className="status stamp amber">Beta</span>
              </div>
              <div className="product-body">
                <span className="product-cat">
                  PWA &middot; Interactive Fiction
                </span>
                <h3>The Last Message</h3>
                <p className="desc">
                  A chat-based choose-your-own-adventure mystery. Every reply
                  you send moves the story &mdash; and the danger &mdash;
                  forward.
                </p>
                <div className="product-meta">
                  <span>Web &middot; installable</span>
                  <span className="product-price">$5</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/the-last-message"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#4A3C7A" }}>
                <span className="glyph">E</span>
                <span className="status stamp amber">Beta</span>
              </div>
              <div className="product-body">
                <span className="product-cat">PWA &middot; Daily Ritual</span>
                <h3>Everday</h3>
                <p className="desc">
                  A quiet daily check-in app &mdash; a small, honest ritual for
                  tracking how each day actually went.
                </p>
                <div className="product-meta">
                  <span>Web &middot; installable</span>
                  <span className="product-price">Free</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/everday"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-media" style={{ background: "#1B2430" }}>
                <span className="glyph">DF</span>
                <span className="status stamp amber">Beta</span>
              </div>
              <div className="product-body">
                <span className="product-cat">PWA &middot; Creator Tool</span>
                <h3>DeckForge</h3>
                <p className="desc">
                  The card-deck engine behind Desire Deck &mdash; build,
                  preview, and ship your own prompt-card app on the same stack.
                </p>
                <div className="product-meta">
                  <span>Web &middot; installable</span>
                  <span className="product-price">$19</span>
                </div>
              </div>
              <a
                href="https://ericterry.gumroad.com/l/deckforge"
                className="product-buy"
              >
                Get it on Gumroad <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
*/} 
      <footer>
        <div className="wrap">
          <p>&copy; 2026 Eric Terry &mdash; ericterry.me</p>
          <p>
            <Link href="/">(&larr; Back to main site)</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
