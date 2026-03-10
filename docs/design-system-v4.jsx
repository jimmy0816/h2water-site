import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════
   H₂ Water Lab — v4
   Changes from v3:
   ✓ Emoji → Geometric SVG (Mon-style, 1.3px stroke)
   ✓ Font weight +1 step across board (300→400, 400→500, etc.)
   ✓ Text color +1 step (sec-300→400, sec-400→500)
   ✓ Evidence badge: card = icon+bg, inline = icon+color only
   ═══════════════════════════════════════════ */

/* ── Geometric Evidence Icons ── */
/* "Fill level" metaphor: full → half → gap → crossed */

const EviStrong = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="square">
    <circle cx="7" cy="7" r="5.5" />
    <circle cx="7" cy="7" r="2" fill={color} stroke="none" />
  </svg>
);

const EviPreliminary = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="square">
    <circle cx="7" cy="7" r="5.5" />
    <path d="M7 1.5 A5.5 5.5 0 0 0 7 12.5 Z" fill={color} stroke="none" />
  </svg>
);

const EviInsufficient = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="square">
    <path d="M9.5 2.2 A5.5 5.5 0 1 1 4.5 2.2" />
  </svg>
);

const EviIneffective = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="square">
    <circle cx="7" cy="7" r="5.5" />
    <line x1="3.5" y1="3.5" x2="10.5" y2="10.5" />
  </svg>
);

const MoleculeIcon = ({ size = 40, color = "currentColor", opacity = 0.3 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
    <circle cx="14" cy="16" r="7" />
    <circle cx="26" cy="16" r="7" />
    <circle cx="20" cy="28" r="9" />
  </svg>
);

const ArrowRight = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    <line x1="2" y1="8" x2="13" y2="8" />
    <polyline points="9 4 13 8 9 12" />
  </svg>
);

/* ── Icon registry ── */
const eviIcons = {
  strong: EviStrong,
  preliminary: EviPreliminary,
  insufficient: EviInsufficient,
  ineffective: EviIneffective,
};

/* ── Data ── */
const articles = [
  {
    id: 1, category: "氫水科學", eviKey: "strong",
    badge: { label: "強證據", color: "#059669", bg: "#ECFDF5" },
    title: "氫水有沒有用？整合 50 篇 PubMed 研究的真實結論【2026】",
    excerpt: "你可能在蝦皮看過富氫水廣告，也聽過「吸氫氣」的保健說法。它到底是科學突破還是智商稅？我們整合 50+ 篇 PubMed 研究，給你一個不偏不倚的數據答案。",
    date: "2026.03.10", readTime: "12 min", papers: 50,
  },
  {
    id: 2, category: "氫水科學", eviKey: "preliminary",
    badge: { label: "初步證據", color: "#2563EB", bg: "#EFF6FF" },
    title: "氫水、鹼性水、電解水差在哪？一張表搞懂三種水",
    excerpt: "氫水、鹼性水、電解水行銷話術常常混用，連店員都搞不清楚。本文用科學證據等級釐清三種水的核心差異與製作技術。",
    date: "2026.03.08", readTime: "8 min", papers: 23,
  },
  {
    id: 3, category: "選購評測", eviKey: "preliminary",
    badge: { label: "初步證據", color: "#2563EB", bg: "#EFF6FF" },
    title: "2026 氫水杯推薦：5 款台灣買得到的產品實測比較",
    excerpt: "我們實際購入市面上 5 款熱門氫水杯，用溶存量計測試濃度，搭配論文標準判斷「有效濃度」門檻。",
    date: "2026.03.05", readTime: "15 min", papers: 12,
  },
  {
    id: 4, category: "選購評測", eviKey: "insufficient",
    badge: { label: "證據不足", color: "#D97706", bg: "#FFFBEB" },
    title: "氫水機值得買嗎？從 ORP、濃度到耐用性完整解析",
    excerpt: "一台氫水機動輒上萬元，廠商宣稱的功效有多少科學根據？我們拆解核心參數，告訴你哪些指標真正重要。",
    date: "2026.03.01", readTime: "10 min", papers: 8,
  },
  {
    id: 5, category: "安全指南", eviKey: "strong",
    badge: { label: "強證據", color: "#059669", bg: "#ECFDF5" },
    title: "氫水安全嗎？WHO、FDA 與日本厚生勞動省怎麼說",
    excerpt: "氫氣在 2007 年被日本厚生勞動省認定為食品添加物。本文整理三大國際機構的官方立場。",
    date: "2026.02.25", readTime: "6 min", papers: 15,
  },
];

const categories = [
  { name: "全部", count: 5 },
  { name: "氫水科學", count: 2 },
  { name: "選購評測", count: 2 },
  { name: "安全指南", count: 1 },
];

const evidenceLevels = [
  { key: "strong", label: "強證據", desc: "多個 RCT 支持", color: "#059669", bg: "#ECFDF5" },
  { key: "preliminary", label: "初步證據", desc: "小型試驗 / 動物實驗", color: "#2563EB", bg: "#EFF6FF" },
  { key: "insufficient", label: "證據不足", desc: "個案 / 體外實驗", color: "#D97706", bg: "#FFFBEB" },
  { key: "ineffective", label: "無效", desc: "已被研究否定", color: "#DC2626", bg: "#FEF2F2" },
];

/* ── Badge component ── */
function EvidenceBadge({ eviKey, label, color, bg, variant = "card" }) {
  const Icon = eviIcons[eviKey];
  if (variant === "card") {
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 11, fontWeight: 600, letterSpacing: "0.02em",
        padding: "3px 9px", borderRadius: 3,
        background: bg, color: color,
      }}>
        <Icon size={13} color={color} />
        {label}
      </span>
    );
  }
  // sidebar variant — same as card but smaller
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 3,
      background: bg, color: color, whiteSpace: "nowrap", flexShrink: 0,
    }}>
      <Icon size={12} color={color} />
      {label}
    </span>
  );
}

/* ═══════════════════════════════════════════ */

export default function H2WaterLab() {
  const [activeTab, setActiveTab] = useState("全部");
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const filtered = activeTab === "全部" ? articles : articles.filter(a => a.category === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --pri-50:#F0F9FF; --pri-100:#E0F2FE; --pri-200:#BAE6FD;
          --pri-300:#7DD3FC; --pri-400:#38BDF8; --pri-500:#0EA5E9;
          --pri-600:#0284C7; --pri-700:#0369A1; --pri-800:#075985;
          --sec-50:#F8FAFC; --sec-100:#F1F5F9; --sec-200:#E2E8F0;
          --sec-300:#CBD5E1; --sec-400:#94A3B8; --sec-500:#64748B;
          --sec-600:#475569; --sec-700:#334155; --sec-800:#1E293B;
          --sec-900:#0F172A;
        }

        body {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          background: var(--sec-50);
          color: var(--sec-800);
          -webkit-font-smoothing: antialiased;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .card {
          transition: transform 300ms cubic-bezier(0.4,0,0.2,1),
                      box-shadow 300ms cubic-bezier(0.4,0,0.2,1);
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(15,23,42,0.06);
        }
        .card:hover .card-link { color: var(--pri-600); }
        .card:hover .card-link svg { transform: translateX(3px); }
        .card-link svg { transition: transform 200ms ease; }

        .tab {
          transition: color 200ms ease;
          position: relative;
        }
        .tab::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:1.5px; background:var(--pri-500);
          transform:scaleX(0); transform-origin:left;
          transition: transform 250ms cubic-bezier(0.4,0,0.2,1);
        }
        .tab.on::after { transform:scaleX(1); }

        .side-item {
          transition: background 150ms ease, border-color 150ms ease;
          border-left: 1.5px solid transparent;
        }
        .side-item:hover { background: var(--pri-50); border-left-color: var(--pri-300); }
        .side-item.on { background: var(--pri-50); border-left-color: var(--pri-500); }

        .cta-btn {
          transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
        }
        .cta-btn:hover {
          background: var(--pri-600);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(14,165,233,0.25);
        }
      `}</style>

      <div style={{ minHeight: "100vh" }}>

        {/* ══════ NAV ══════ */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 100, height: 68,
          background: "rgba(248,250,252,0.88)",
          backdropFilter: "blur(14px) saturate(180%)",
          WebkitBackdropFilter: "blur(14px) saturate(180%)",
          borderBottom: "1px solid rgba(226,232,240,0.5)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 48px",
        }}>
          <span style={{
            fontSize: 18, fontWeight: 400, letterSpacing: "-0.03em",
            color: "var(--pri-700)",
          }}>
            H<sub style={{ fontSize: 11, fontWeight: 400 }}>2</sub> Water Lab
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {["科學文章", "分類", "關於"].map((t, i) => (
              <span key={t} style={{
                fontSize: 13, fontWeight: 500, letterSpacing: "0.02em",
                color: i === 0 ? "var(--pri-600)" : "var(--sec-500)",
                cursor: "pointer",
              }}>{t}</span>
            ))}
            <button className="cta-btn" style={{
              height: 36, padding: "0 20px",
              background: "var(--pri-500)", color: "#fff",
              border: "none", borderRadius: 3,
              fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
              cursor: "pointer", fontFamily: "inherit",
            }}>開始閱讀</button>
          </div>
        </nav>

        {/* ══════ HERO ══════ */}
        <header style={{
          padding: "72px 48px 0",
          maxWidth: 1200, margin: "0 auto",
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp 600ms cubic-bezier(0,0,0.2,1) forwards" : "none",
        }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.14em",
            color: "var(--sec-400)", textTransform: "uppercase",
            marginBottom: 28,
          }}>科學文章</div>

          <h1 style={{
            fontSize: 38, fontWeight: 700, letterSpacing: "-0.01em",
            color: "var(--sec-900)", lineHeight: 1.35, marginBottom: 20,
          }}>氫水科學文章庫</h1>

          <p style={{
            fontSize: 16, fontWeight: 400, lineHeight: 1.9,
            color: "var(--sec-500)", maxWidth: 480,
            letterSpacing: "0.03em",
          }}>
            每篇文章均標示科學證據等級，讓你一眼辨識研究可靠性。
          </p>
        </header>

        <div style={{ height: 72 }} />

        {/* ══════ MAIN ══════ */}
        <main style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 48px 120px",
          display: "grid", gridTemplateColumns: "1fr 260px",
          gap: 56, alignItems: "start",
        }}>
          {/* ── LEFT ── */}
          <div>
            {/* Tabs */}
            <div style={{
              display: "flex", gap: 0,
              borderBottom: "1px solid var(--sec-200)",
              marginBottom: 48,
            }}>
              {categories.map(c => (
                <button key={c.name}
                  className={`tab ${activeTab === c.name ? 'on' : ''}`}
                  onClick={() => setActiveTab(c.name)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "10px 20px", fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: activeTab === c.name ? 600 : 400,
                    color: activeTab === c.name ? "var(--pri-600)" : "var(--sec-500)",
                    letterSpacing: "0.02em",
                  }}
                >{c.name}</button>
              ))}
            </div>

            {/* Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {filtered.map((a, idx) => (
                <article key={a.id} className="card" style={{
                  display: "grid", gridTemplateColumns: "180px 1fr",
                  background: "#fff", borderRadius: 6, overflow: "hidden",
                  border: "1px solid var(--sec-200)", cursor: "pointer",
                  animation: visible ? `fadeUp 500ms cubic-bezier(0,0,0.2,1) ${150 + idx * 100}ms both` : "none",
                }}>
                  {/* Thumbnail */}
                  <div style={{
                    background: "linear-gradient(160deg, var(--pri-50) 0%, var(--pri-100) 100%)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    position: "relative", minHeight: 200, gap: 8,
                  }}>
                    <MoleculeIcon size={56} color="var(--pri-500)" opacity={0.25} />
                    <span style={{
                      fontSize: 11, fontWeight: 500, letterSpacing: "0.06em",
                      color: "var(--pri-600)", opacity: 0.8,
                    }}>
                      引用 {a.papers} 篇
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column" }}>
                    {/* Category + Evidence Badge */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: 11, fontWeight: 500, color: "var(--sec-500)",
                        padding: "2px 8px", borderRadius: 3,
                        border: "1px solid var(--sec-200)", letterSpacing: "0.03em",
                      }}>{a.category}</span>
                      <EvidenceBadge eviKey={a.eviKey} {...a.badge} variant="card" />
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontSize: 18, fontWeight: 700, lineHeight: 1.55,
                      color: "var(--sec-800)", marginBottom: 10,
                      letterSpacing: "0.01em",
                    }}>{a.title}</h2>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: 13, fontWeight: 400, lineHeight: 1.85,
                      color: "var(--sec-600)", marginBottom: 18,
                      flex: 1, letterSpacing: "0.02em",
                      display: "-webkit-box", WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>{a.excerpt}</p>

                    {/* Footer */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      borderTop: "1px solid var(--sec-100)", paddingTop: 14,
                    }}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 12,
                        fontSize: 11, color: "var(--sec-400)", fontWeight: 400,
                        letterSpacing: "0.04em",
                      }}>
                        <span>{a.date}</span>
                        <span style={{ color: "var(--sec-300)" }}>|</span>
                        <span>{a.readTime}</span>
                      </div>
                      <span className="card-link" style={{
                        fontSize: 12, fontWeight: 500, color: "var(--sec-500)",
                        display: "flex", alignItems: "center", gap: 6,
                        letterSpacing: "0.02em",
                      }}>
                        閱讀
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <aside style={{
            position: "sticky", top: 92,
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeUp 500ms cubic-bezier(0,0,0.2,1) 350ms both" : "none",
          }}>
            {/* Categories */}
            <div style={{
              background: "#fff", borderRadius: 6,
              border: "1px solid var(--sec-200)",
              padding: "24px 0", marginBottom: 20,
            }}>
              <h3 style={{
                fontSize: 11, fontWeight: 700, color: "var(--sec-400)",
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0 20px", marginBottom: 14,
              }}>文章分類</h3>
              {categories.filter(c => c.name !== "全部").map(c => (
                <button key={c.name}
                  className={`side-item ${activeTab === c.name ? 'on' : ''}`}
                  onClick={() => setActiveTab(c.name)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    width: "100%", padding: "9px 20px",
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: activeTab === c.name ? 600 : 400,
                    color: activeTab === c.name ? "var(--pri-700)" : "var(--sec-600)",
                    textAlign: "left",
                  }}
                >
                  <span>{c.name}</span>
                  <span style={{ fontSize: 11, color: "var(--sec-400)", fontWeight: 400 }}>{c.count}</span>
                </button>
              ))}
            </div>

            {/* Evidence Guide */}
            <div style={{
              background: "#fff", borderRadius: 6,
              border: "1px solid var(--sec-200)",
              padding: "24px 20px", marginBottom: 20,
            }}>
              <h3 style={{
                fontSize: 11, fontWeight: 700, color: "var(--sec-400)",
                letterSpacing: "0.12em", textTransform: "uppercase",
                marginBottom: 18,
              }}>證據等級</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {evidenceLevels.map(ev => (
                  <div key={ev.label} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <EvidenceBadge eviKey={ev.key} label={ev.label} color={ev.color} bg={ev.bg} variant="sidebar" />
                    <span style={{
                      fontSize: 11, fontWeight: 400, color: "var(--sec-500)",
                      lineHeight: 1.4,
                    }}>{ev.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{
              background: "var(--pri-50)",
              borderRadius: 6,
              border: "1px solid var(--pri-200)",
              padding: "24px 20px",
            }}>
              <div style={{
                fontSize: 13, fontWeight: 600, color: "var(--pri-700)",
                lineHeight: 1.7, marginBottom: 6,
              }}>每月科學摘要</div>
              <div style={{
                fontSize: 12, fontWeight: 400, color: "var(--pri-600)",
                lineHeight: 1.6, marginBottom: 16, opacity: 0.8,
              }}>只有研究，沒有推銷。</div>
              <div style={{ display: "flex", gap: 6 }}>
                <input type="email" placeholder="email" style={{
                  flex: 1, height: 34, padding: "0 10px",
                  border: "1px solid var(--pri-200)", borderRadius: 3,
                  fontSize: 12, fontWeight: 400, background: "rgba(255,255,255,0.7)",
                  outline: "none", fontFamily: "inherit", color: "var(--sec-700)",
                }} />
                <button className="cta-btn" style={{
                  height: 34, padding: "0 14px",
                  background: "var(--pri-500)", color: "#fff",
                  border: "none", borderRadius: 3,
                  fontSize: 11, fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit",
                }}>訂閱</button>
              </div>
            </div>
          </aside>
        </main>

        {/* ══════ FOOTER ══════ */}
        <footer style={{
          borderTop: "1px solid var(--sec-200)",
          padding: "40px 48px",
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <div style={{
              fontSize: 14, fontWeight: 400, color: "var(--sec-500)",
              letterSpacing: "-0.01em", marginBottom: 3,
            }}>
              H<sub style={{ fontSize: 9 }}>2</sub> Water Lab ・氫水研究室
            </div>
            <div style={{
              fontSize: 10, fontWeight: 400, color: "var(--sec-400)",
              letterSpacing: "0.03em",
            }}>
              © 2026 — 科學優先，不誇大療效
            </div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["隱私政策", "使用條款", "聯繫我們"].map(l => (
              <span key={l} style={{
                fontSize: 11, fontWeight: 400, color: "var(--sec-400)",
                cursor: "pointer", letterSpacing: "0.02em",
              }}>{l}</span>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
