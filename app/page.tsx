const primitives = [
  ["01", "Sources", "ورودی‌های مختلف را بدون قاطی‌کردن معنای آن‌ها وارد لایه signal کنید."],
  ["02", "Observe", "event، state و telemetry را به‌صورت یک جریان قابل بررسی ببینید."],
  ["03", "Detect", "تغییر مهم را از نویز معمولی جدا کنید؛ با rule، context یا correlation."],
  ["04", "Signal", "خروجی را به یک واحد روشن، قابل حمل و قابل مصرف تبدیل کنید."],
  ["05", "Route", "signal را به مقصد درست برسانید؛ انسان، سرویس، workflow یا agent."],
];

const examples = [
  { tag: "DEVICE", title: "Silence is a signal", text: "وقتی یک منبعی که باید حرف بزند، دیگر event نمی‌دهد؛ نبود داده هم می‌تواند معنا داشته باشد." },
  { tag: "OPS", title: "Change needs context", text: "عبور از threshold همیشه incident نیست. context کمک می‌کند تفاوت تغییر طبیعی و تغییر مهم روشن شود." },
  { tag: "SYSTEM", title: "One event is rarely enough", text: "چند event کوچک وقتی کنار هم دیده می‌شوند می‌توانند یک signal واقعی بسازند." },
];

export default function Home() {
  return (
    <main>
      <header className="topbar shell">
        <a className="parent-brand" href="https://coreplatform.ir"><span className="core-dot" /> CORE PLATFORM</a>
        <a className="signal-brand" href="#top"><span className="pulse-mark"><i/><i/><i/><i/></span><b>CORE</b> SIGNAL</a>
        <nav aria-label="Primary navigation">
          <a href="#model">مدل</a>
          <a href="#patterns">Patterns</a>
          <a href="https://docs.coreplatform.ir">Docs</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">CORE PLATFORM / SIGNAL LAYER</p>
          <h1>نویز همه‌جا هست.<br/><em>Signal کمیاب است.</em></h1>
          <p className="lede">Core Signal لایه‌ای برای تشخیص چیزی است که واقعاً اهمیت دارد؛ تبدیل streamهای خام event و telemetry به signalهای قابل فهم، قابل انتقال و آماده برای اقدام.</p>
          <div className="actions">
            <a className="primary" href="#model">مدل Signal را ببینید <span>↙</span></a>
            <a className="secondary" href="https://coreplatform.ir">Core Platform ↗</a>
          </div>
        </div>

        <div className="signal-stage" aria-label="Raw events converging into one meaningful signal">
          <div className="stream-label input">RAW EVENTS</div>
          <div className="stream-label output">MEANINGFUL SIGNAL</div>
          <div className="noise-grid">
            {Array.from({length: 48}).map((_, i) => <i key={i} className={i === 31 ? "hot" : ""} />)}
          </div>
          <div className="focus-line" />
          <div className="signal-card">
            <small>SIGNAL / 031</small>
            <strong>meaningful_change</strong>
            <span>confidence 0.94</span>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="index">01 / WHY SIGNAL</p>
          <blockquote>داده بیشتر، الزاماً فهم بیشتر نیست. <em>فهم از انتخابِ درست شروع می‌شود.</em></blockquote>
          <p className="statement-copy">Core Signal قرار است مرز مشخصی میان جمع‌آوری داده و تصمیم‌گیری ایجاد کند: ابتدا تغییر معنادار را استخراج کن، بعد آن را به مصرف‌کننده مناسب برسان.</p>
        </div>
      </section>

      <section className="model shell" id="model">
        <div className="section-head"><p>02 / SIGNAL MODEL</p><h2>از ورودی خام تا یک واحد روشن.</h2></div>
        <div className="primitive-list">
          {primitives.map(([n,title,text]) => (
            <article key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p><i>→</i></article>
          ))}
        </div>
      </section>

      <section className="diagram-wrap">
        <div className="shell diagram">
          <div className="source-cluster">
            <span>event</span><span>state</span><span>metric</span><span>absence</span><span>change</span>
          </div>
          <div className="processor"><small>DETECT + CONTEXT</small><b>CORE SIGNAL</b><div className="mini-pulse"><i/><i/><i/><i/><i/></div></div>
          <div className="routes"><span>Human</span><span>Workflow</span><span>Service</span><span>Agent</span></div>
        </div>
      </section>

      <section className="patterns shell" id="patterns">
        <div className="section-head"><p>03 / SIGNAL PATTERNS</p><h2>چیزی که مهم است همیشه loud نیست.</h2></div>
        <div className="pattern-grid">
          {examples.map((item, i) => (
            <article key={item.title}><div><span>{item.tag}</span><i>0{i+1}</i></div><h3>{item.title}</h3><p>{item.text}</p></article>
          ))}
        </div>
      </section>

      <section className="family">
        <div className="shell family-grid">
          <div><p className="index">04 / PRODUCT FAMILY</p><h2>Signal بعد از اتصال معنا پیدا می‌کند.</h2><p>CoreLink مسئول اتصال و نرمال‌سازی است. Core Signal روی جریان حاصل تمرکز می‌کند و تغییر معنادار را برای تصمیم یا اقدام آماده می‌کند.</p></div>
          <div className="family-flow" dir="ltr"><span className="link">CORELINK</span><b>→</b><span className="raw">EVENT STREAM</span><b>→</b><span className="sig">CORE SIGNAL</span><b>→</b><span className="act">ACTION</span></div>
        </div>
      </section>

      <section className="cta shell"><div><p>BUILD ON THE SYSTEM, NOT AROUND IT.</p><h2>Core Signal بخشی از Core Platform است.</h2></div><div><a href="https://coreplatform.ir">Explore Core Platform ↗</a><a href="https://docs.coreplatform.ir">Developer Docs ↗</a></div></section>

      <footer className="footer shell">
        <a className="signal-brand" href="#top"><span className="pulse-mark"><i/><i/><i/><i/></span><b>CORE</b> SIGNAL</a>
        <p>Turn noise into signal.</p>
        <div><a href="https://coreplatform.ir">Platform</a><a href="https://link.coreplatform.ir">Link</a><a href="https://docs.coreplatform.ir">Docs</a></div>
      </footer>
    </main>
  );
}
