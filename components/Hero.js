function Hero() {
  return (
    <header className="hero" id="home">
  <div className="wrap">
    <div>
      <div className="eyebrow">Two practices, one standard</div>
      <h1>Quality isn&rsquo;t a checklist.<br />It&rsquo;s a <em>practice.</em></h1>
      <p className="lede">By day I lead digital content production and quality for a life-sciences agency. In my spare time I write, build, and ship independent ebooks and PWAs under ericterry.me; held to the same standard.</p>
      <div className="cta-row">
        <a href="#story" className="btn btn-primary">Read my story <span className="btn-arrow">→</span></a>
        <a href="store.html" className="btn btn-ghost">Browse my work <span className="btn-arrow">→</span></a>
      </div>
    </div>
    <div className="hero-stack" aria-hidden="true">
      <div className="tag">
        <div className="tag-title">Sr. Director, Digital Content Production</div>
        <div className="tag-sub">EVERSANA INTOUCH &middot; 2014&ndash;Present</div>
      </div>
      <div className="tag">
        <div className="tag-title">Applitools Ambassador</div>
        <div className="tag-sub">Visual AI testing &middot; est. 2018</div>
      </div>
      <div className="tag">
        <div className="tag-title">Independent Maker</div>
        <div className="tag-sub">Ebooks &amp; PWAs &middot; ericterry.me</div>
      </div>
    </div>
  </div>
</header>
  );
}

export default Hero;
