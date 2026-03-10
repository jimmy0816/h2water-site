import { useState } from "react";

const designTokens = {
  colors: {
    primary: {
      aqua: { hex: "#0891B2", name: "水藍", usage: "CTA / 重要連結 / 品牌主色" },
      aquaLight: { hex: "#22D3EE", name: "淺水藍", usage: "Hover / 次要強調" },
      aquaDark: { hex: "#155E75", name: "深水藍", usage: "Footer / 深色區塊" },
    },
    neutral: {
      snow: { hex: "#FAFBFC", name: "雪白", usage: "主要背景（日系偏冷白）" },
      mist: { hex: "#F1F5F9", name: "霧灰", usage: "次要背景 / 卡片" },
      silver: { hex: "#CBD5E1", name: "銀灰", usage: "邊框 / 分隔線" },
      slate: { hex: "#64748B", name: "石灰", usage: "次要文字" },
      graphite: { hex: "#1E293B", name: "墨色", usage: "主要文字" },
      ink: { hex: "#0F172A", name: "黑", usage: "標題 / Footer" },
    },
    accent: {
      mint: { hex: "#5EEAD4", name: "薄荷", usage: "健康 / 自然標籤" },
      amber: { hex: "#F59E0B", name: "琥珀", usage: "警告標記" },
      coral: { hex: "#FB7185", name: "珊瑚", usage: "錯誤" },
    },
    science: {
      paper: { hex: "#3B82F6", name: "論文藍", usage: "論文引用" },
      evidence: { hex: "#22C55E", name: "證據綠", usage: "強證據 ✅" },
      caution: { hex: "#F97316", name: "不足橘", usage: "證據不足 ⚠️" },
      invalid: { hex: "#EF4444", name: "無效紅", usage: "無效 ❌" },
    },
  },
  typography: {
    display: {
      family: "Zen Kaku Gothic New",
      fallback: "Noto Sans TC, sans-serif",
      usage: "Hero / 品牌宣言 / 大區塊標題",
      weights: ["400 Regular", "700 Bold"],
    },
    heading: {
      family: "Noto Sans TC",
      fallback: "sans-serif",
      usage: "H1-H3 / 文章標題（現代科學感，不用 Serif）",
      weights: ["400 Regular", "700 Bold"],
    },
    body: {
      family: "Noto Sans TC",
      fallback: "sans-serif",
      usage: "內文 / UI 元素 / 按鈕 / 表單",
      weights: ["300 Light", "400 Regular", "500 Medium", "700 Bold"],
    },
    mono: {
      family: "JetBrains Mono",
      fallback: "monospace",
      usage: "數據 / ppm / 價格 / 科學數值",
      weights: ["400 Regular"],
    },
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160],
    labels: [
      "0", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl"
    ],
  },
};

const componentSpecs = [
  {
    name: "Hero Section",
    description: "80vh 高度，淡水藍漸層背景，左側品牌宣言文字，右側水分子 SVG 裝飾（圓圈+連線）。傳遞科學清淨感。",
    specs: {
      height: "80vh（首頁）/ 60vh（內頁）",
      background: "linear-gradient(135deg, #F1F5F9 0%, #E0F2FE 50%, #FAFBFC 100%)",
      title: "Zen Kaku Gothic New 48-64px / weight 700",
      subtitle: "Noto Sans TC 18px / weight 300 / color #64748B",
      decoration: "右側 inline SVG 水分子（原子圓圈 + 化學鍵線段）",
      animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1)",
    },
  },
  {
    name: "Navigation Bar",
    description: "極簡水平導航，Logo 居左。Logo 設計：「H₂」用 aqua 色 + 「Water Lab」用 graphite 色。滾動後背景加磨砂透明效果。",
    specs: {
      height: "64px（桌面）/ 52px（行動）",
      background: "透明 → scroll 後 rgba(250,251,252,0.92) + backdrop-blur(12px)",
      font: "Noto Sans TC 14px / weight 500 / letter-spacing 0.06em",
      logo: "H₂ = aqua #0891B2 / Water Lab = graphite #1E293B",
      transition: "background 0.3s ease, box-shadow 0.3s ease",
    },
  },
  {
    name: "Article Card",
    description: "16:9 橫式卡片，border-radius 8px（日系柔和）。上方圖片區，下方分類 pill 標籤 + 標題 + 摘要 + 閱讀時間。",
    specs: {
      ratio: "16:9（圖片區域）",
      borderRadius: "8px（日系柔和）",
      shadow: "none → hover: 0 8px 24px rgba(8,145,178,0.08)",
      categoryTag: "pill 形 / bg #E0F2FE / text #0891B2 / border-radius 9999px",
      title: "Noto Sans TC 18px / weight 700 / color #0F172A",
      meta: "Noto Sans TC 13px / color #64748B",
    },
  },
  {
    name: "Content Article",
    description: "文章閱讀區塊。max-width 720px 居中，左側 sticky TOC（桌面），行距寬鬆，適合長讀。",
    specs: {
      maxWidth: "720px（內文）/ 1200px（含 TOC 外框）",
      layout: "左側 TOC 240px + 內文 720px（桌面）/ 全幅（行動）",
      bodySize: "Noto Sans TC 17px / line-height 1.85 / color #1E293B",
      paragraphSpacing: "28px",
      tocPosition: "sticky top-24 / 顯示 h2/h3 / 當前章節高亮",
    },
  },
  {
    name: "CTA Button",
    description: "主要 CTA 實底按鈕，次要 CTA 邊框按鈕。border-radius 8px（日系柔和，不用方形）。",
    specs: {
      primary: "bg #0891B2 / text white / hover → #155E75",
      secondary: "border 1px #0891B2 / text #0891B2 / hover → bg #0891B2 text white",
      padding: "12px 28px",
      borderRadius: "8px",
      font: "Noto Sans TC 14px / weight 500 / letter-spacing 0.06em",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  {
    name: "Footer",
    description: "深色背景 Footer（#0F172A 深水藍黑），三欄：品牌簡介 / 內容分類 / 聯絡資訊。底部版權資訊。",
    specs: {
      background: "#0F172A",
      textColor: "#64748B（一般）/ #FAFBFC（標題 / Logo）",
      logoColor: "H₂ = #22D3EE / Water Lab = #FAFBFC",
      layout: "3 欄（品牌 / 分類 / 聯絡）→ 行動單欄",
      bottomBar: "border-top 1px rgba(100,116,139,0.2)",
    },
  },
  {
    name: "Evidence Badge",
    description: "4 級證據等級標記系統。用於文章頂部和內容標記。小 pill 設計，icon + 文字。",
    specs: {
      strong: "✅ 強證據 / bg #DCFCE7 / text #15803D / border #22C55E",
      preliminary: "🔬 初步證據 / bg #DBEAFE / text #1D4ED8 / border #3B82F6",
      insufficient: "⚠️ 證據不足 / bg #FFEDD5 / text #C2410C / border #F97316",
      ineffective: "❌ 無效/誤導 / bg #FEE2E2 / text #B91C1C / border #EF4444",
      size: "font 12px / padding 4px 10px / border-radius 9999px / border 1px solid",
      position: "文章頂部標題下方 / 文中段落旁",
    },
  },
  {
    name: "Citation Card",
    description: "論文引用卡片。藍色左邊框（4px paper 藍），輕灰背景，期刊名 + 年份 + 主要結論 + DOI 連結。",
    specs: {
      background: "#EFF6FF（極淡藍）",
      leftBorder: "4px solid #3B82F6（paper 藍）",
      borderRadius: "0 8px 8px 0",
      journalFont: "JetBrains Mono 11px / color #3B82F6",
      conclusionFont: "Noto Sans TC 14px / color #1E293B",
      padding: "16px 20px",
      layout: "期刊+年份（頂部）/ 結論（中）/ DOI 連結（底部）",
    },
  },
];

const pageTemplates = [
  {
    name: "首頁 Homepage",
    purpose: "品牌形象 + SEO 內容入口 + 科學定位建立",
    sections: [
      "Hero（淡水藍漸層 + 品牌宣言 + 水分子 SVG 裝飾）",
      "為什麼是氫水？（3 欄 feature cards：最小分子 / 選擇性抗氧化 / 安全性高）",
      "最新文章（3 張 16:9 橫式卡片）",
      "證據等級說明（解釋本站 4 級標記系統 + 各級範例）",
      "CTA Banner（訂閱電子報 / 了解更多）",
      "Footer",
    ],
  },
  {
    name: "文章列表 Blog Index",
    purpose: "SEO 流量承接頁 + 分類導覽",
    sections: [
      "頁面標題（簡約標頭）",
      "分類篩選列（氫水科學 / 研究文獻 / 健康應用 / 產品評測 / 常見問題）",
      "文章卡片列表（橫式 16:9 + sidebar 分類）",
      "Pagination",
    ],
  },
  {
    name: "文章內頁 Article Detail",
    purpose: "SEO 核心頁 + 科學內容深度閱讀",
    sections: [
      "文章標題 + Evidence Badge + 發布日期 + 閱讀時間",
      "左側 Sticky TOC（自動從 h2/h3 生成，桌面版）",
      "文章內文（prose / max-width 720px / Citation Cards 穿插）",
      "相關文章推薦（底部 3 張卡片）",
      "回饋區塊（這篇文章有幫助嗎？）",
    ],
  },
  {
    name: "分類頁 Category",
    purpose: "SEO 分類頁 + 主題聚合",
    sections: [
      "分類標題 + 說明",
      "該分類文章列表（橫式卡片）",
      "相關分類連結",
    ],
  },
  {
    name: "關於 About",
    purpose: "品牌故事 + 方法論透明化",
    sections: [
      "品牌故事（H₂ Water Lab 的成立初衷）",
      "我們的方法論（如何評估科學證據）",
      "4 級證據等級詳細說明",
      "免責聲明（非醫療建議）",
    ],
  },
];

const layoutGuidelines = {
  grid: {
    maxWidth: "1200px",
    columns: "12 欄（桌面）/ 4 欄（行動）",
    gutter: "24px（桌面）/ 16px（行動）",
    margin: "auto（置中）/ 最小邊距 24px",
  },
  breakpoints: [
    { name: "Mobile", min: "0px", max: "767px", cols: 4 },
    { name: "Tablet", min: "768px", max: "1023px", cols: 8 },
    { name: "Desktop", min: "1024px", max: "1439px", cols: 12 },
    { name: "Wide", min: "1440px", max: "—", cols: 12 },
  ],
  verticalRhythm: "Section 間距 80-120px（桌面）/ 48-64px（行動）",
};

const motionSpecs = [
  { name: "Page Enter", value: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1)", trigger: "Page load" },
  { name: "Stagger Children", value: "delay 0.08s per item", trigger: "Section enter viewport" },
  { name: "Scroll Reveal", value: "translateY(20px) → 0, opacity 0→1, 0.5s", trigger: "IntersectionObserver threshold 0.1" },
  { name: "Card Hover", value: "translateY(-2px), shadow 0.2s ease", trigger: "Hover" },
  { name: "Button Hover", value: "background 0.2s, transform 0.15s", trigger: "Hover" },
  { name: "Nav Scroll", value: "background 0.3s, backdrop-filter 0.3s", trigger: "Scroll > 64px" },
  { name: "TOC Highlight", value: "color 0.15s, border-left 0.15s", trigger: "IntersectionObserver heading" },
];

const dosAndDonts = {
  dos: [
    "日系乾淨留白，讓內容成為視覺焦點",
    "數據可視化：ppm、研究人數、持續時間等用 JetBrains Mono 顯示",
    "每篇文章都標記 Evidence Badge（強/初步/不足/無效）",
    "論文引用用 Citation Card 特殊樣式（藍色左邊框）",
    "行動版優先設計（受眾主要從手機搜尋進站）",
    "使用 WebP/AVIF + lazy loading 優化圖片效能",
    "每篇文章底部保留免責聲明（非醫療建議）",
    "Schema Markup：Article / MedicalWebPage / FAQ",
  ],
  donts: [
    "不使用暖色調（米黃、橘棕 → 科學感不對）",
    "不使用圓體字（如 GenJyuu Gothic → 改用 Zen Kaku Gothic New）",
    "不使用漸層按鈕（實底 aqua 色，保持乾淨）",
    "不誇大療效視覺（不用閃光、光芒等特效）",
    "不使用 stock photo（健康產品模特兒 → 改用數據視覺化）",
    "不在行動版使用複雜動畫（效能優先）",
    "不用暖白 #F7F3EC 背景（改用冷白 #FAFBFC）",
    "不在無根據的狀況下使用「治療」「療效」等詞彙",
  ],
};

function ColorSwatch({ hex, name, usage }) {
  const lightColors = ["#FAFBFC", "#F1F5F9", "#DCFCE7", "#DBEAFE", "#FFEDD5", "#FEE2E2", "#EFF6FF"];
  const isLight = lightColors.includes(hex);
  return (
    <div className="flex items-start gap-3 mb-3">
      <div
        className="w-12 h-12 rounded-lg flex-shrink-0"
        style={{
          backgroundColor: hex,
          border: isLight ? "1px solid #CBD5E1" : "none",
        }}
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-gray-800">{name}</span>
          <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">{hex}</code>
        </div>
        <p className="text-xs text-gray-500 mt-0.5">{usage}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children, sub }) {
  return (
    <div className="mb-6 border-b border-gray-200 pb-4">
      <h2 className="text-2xl font-bold text-gray-900">{children}</h2>
      {sub && <p className="text-sm text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
        active
          ? "bg-cyan-600 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "概覽" },
    { id: "colors", label: "色彩系統" },
    { id: "typography", label: "字型系統" },
    { id: "components", label: "元件規格" },
    { id: "pages", label: "頁面模板" },
    { id: "layout", label: "版面 & 動效" },
    { id: "rules", label: "設計原則" },
    { id: "css", label: "CSS 變數" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-lg font-bold" style={{ color: "#0F172A" }}>
                <span style={{ color: "#0891B2" }}>H₂</span>{" "}
                <span style={{ color: "#1E293B" }}>Water Lab</span>{" "}
                <span className="font-normal text-gray-400">氫水科學研究室</span>
              </h1>
              <p className="text-xs text-gray-400">Design System Specification v1.0 — 2026.03</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block font-medium">用科學，重新認識水</span>
              <span className="text-xs text-gray-300">日系清淨水感 × 科學信任</span>
            </div>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {tabs.map((t) => (
              <TabButton key={t.id} active={activeTab === t.id} onClick={() => setActiveTab(t.id)}>
                {t.label}
              </TabButton>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* ===== OVERVIEW ===== */}
        {activeTab === "overview" && (
          <div>
            <SectionTitle sub="H₂ Water Lab 品牌設計方向 — 科普權威站 + 自有品牌前哨">設計方向總覽</SectionTitle>

            {/* Brand Essence */}
            <div
              className="rounded-xl p-8 mb-8 text-center"
              style={{ background: "linear-gradient(135deg, #F1F5F9 0%, #E0F2FE 50%, #FAFBFC 100%)" }}
            >
              <p className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
                用科學，重新認識水
              </p>
              <p className="text-sm" style={{ color: "#64748B" }}>
                — H₂ Water Lab 品牌核心精神
              </p>
              {/* Mini molecule decoration */}
              <div className="flex justify-center mt-4 opacity-40">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <circle cx="10" cy="20" r="8" fill="#0891B2" />
                  <circle cx="40" cy="10" r="12" fill="#22D3EE" />
                  <circle cx="70" cy="20" r="8" fill="#0891B2" />
                  <line x1="18" y1="20" x2="28" y2="12" stroke="#64748B" strokeWidth="2" />
                  <line x1="52" y1="12" x2="62" y2="18" stroke="#64748B" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">調性定位</div>
                <div className="space-y-2">
                  {["專業 Professional", "實用 Practical", "日系質感 Japanese Aesthetic", "科學信任 Science-Based", "清淨乾淨 Clean & Pure"].map((k) => (
                    <div key={k} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0891B2" }} />
                      <span className="text-sm text-gray-700">{k}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">獨特設計元素</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong className="text-gray-800">Evidence Badge</strong> ← 4 級科學證據標記</p>
                  <p><strong className="text-gray-800">Citation Card</strong> ← 論文引用卡片</p>
                  <p><strong className="text-gray-800">Sticky TOC</strong> ← 長文章導航</p>
                  <p><strong className="text-gray-800">水分子 SVG</strong> ← Hero 裝飾元素</p>
                  <p><strong className="text-gray-800">Mono 字型</strong> ← 數據 / ppm 數值</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">網站目標</div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <div className="font-semibold text-gray-800">首要：SEO 科普內容站</div>
                    <p>Google 搜尋「氫水」「氫水功效」「氫水科學」進站</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">次要：科學信任建立</div>
                    <p>證據等級標記 + 論文引用建立學術公信力</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">轉換：自有品牌前哨</div>
                    <p>為 H₂ Water Lab 自有產品導流（預留）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="text-xs font-semibold text-gray-400 p-4 pb-2 tracking-wider">色彩預覽</div>
              <div className="flex h-16">
                {["#0F172A", "#1E293B", "#0891B2", "#22D3EE", "#CBD5E1", "#F1F5F9", "#FAFBFC"].map((c) => (
                  <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="p-4 flex justify-between text-xs text-gray-400">
                <span>← 深色端（Footer / 標題）</span>
                <span>淺色端（背景 / 留白）→</span>
              </div>
            </div>

            {/* Evidence Badges Preview */}
            <div className="mt-6 border border-gray-200 rounded-xl p-5">
              <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wider">Evidence Badge 預覽</div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: "#DCFCE7", color: "#15803D", borderColor: "#22C55E" }}>✅ 強證據</span>
                <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8", borderColor: "#3B82F6" }}>🔬 初步證據</span>
                <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: "#FFEDD5", color: "#C2410C", borderColor: "#F97316" }}>⚠️ 證據不足</span>
                <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: "#FEE2E2", color: "#B91C1C", borderColor: "#EF4444" }}>❌ 無效/誤導</span>
              </div>
            </div>
          </div>
        )}

        {/* ===== COLORS ===== */}
        {activeTab === "colors" && (
          <div>
            <SectionTitle sub="日系清淨水感 × 科學信任 — 冷色調為主，科學語意色為輔">色彩系統 Color Palette</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b">品牌主色 Primary</h3>
                {Object.values(designTokens.colors.primary).map((c) => (
                  <ColorSwatch key={c.hex} {...c} />
                ))}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b">中性色 Neutral</h3>
                {Object.values(designTokens.colors.neutral).map((c) => (
                  <ColorSwatch key={c.hex} {...c} />
                ))}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b">強調色 Accent</h3>
                {Object.values(designTokens.colors.accent).map((c) => (
                  <ColorSwatch key={c.hex} {...c} />
                ))}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b">科學語意 Science</h3>
                {Object.values(designTokens.colors.science).map((c) => (
                  <ColorSwatch key={c.hex} {...c} />
                ))}
              </div>
            </div>

            <div className="mt-8 p-5 bg-gray-50 rounded-xl">
              <h3 className="text-sm font-bold text-gray-900 mb-3">色彩使用比例指南</h3>
              <div className="flex items-center gap-1 h-8 rounded-lg overflow-hidden mb-3">
                <div className="h-full" style={{ width: "50%", backgroundColor: "#FAFBFC", border: "1px solid #CBD5E1" }} />
                <div className="h-full" style={{ width: "20%", backgroundColor: "#1E293B" }} />
                <div className="h-full" style={{ width: "15%", backgroundColor: "#0891B2" }} />
                <div className="h-full" style={{ width: "10%", backgroundColor: "#F1F5F9" }} />
                <div className="h-full" style={{ width: "5%", backgroundColor: "#22C55E" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>背景 50%</span>
                <span>文字 20%</span>
                <span>品牌色 15%</span>
                <span>卡片 10%</span>
                <span>科學色 5%</span>
              </div>
            </div>
          </div>
        )}

        {/* ===== TYPOGRAPHY ===== */}
        {activeTab === "typography" && (
          <div>
            <SectionTitle sub="現代科學感 Sans-Serif 為主，Mono 用於數據，不使用 Serif">字型系統 Typography</SectionTitle>

            <div className="space-y-6 mb-8">
              {Object.entries(designTokens.typography).map(([key, font]) => (
                <div key={key} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{font.family}</h3>
                      <span className="text-xs text-gray-400">Fallback: {font.fallback}</span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{font.usage}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {font.weights.map((w) => (
                      <span key={w} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">{w}</span>
                    ))}
                  </div>
                  {key === "display" && (
                    <p className="text-3xl font-bold" style={{ color: "#0F172A" }}>
                      用科學，重新認識水
                    </p>
                  )}
                  {key === "heading" && (
                    <p className="text-xl font-bold" style={{ color: "#1E293B" }}>
                      氫水對人體健康的科學評估
                    </p>
                  )}
                  {key === "body" && (
                    <p className="text-base leading-relaxed" style={{ color: "#1E293B", lineHeight: "1.85" }}>
                      H₂ Water Lab 成立於 2024 年，致力於以嚴謹的科學態度評估氫水相關研究，提供台灣讀者正確、可驗證的健康資訊。
                    </p>
                  )}
                  {key === "mono" && (
                    <p className="text-base" style={{ fontFamily: "monospace", color: "#0891B2" }}>
                      1.6 ppm · 研究人數: 38 人 · 持續 8 週
                    </p>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-4">字級系統 Type Scale</h3>
            <div className="space-y-4">
              {[
                { label: "Display", size: "48-64px", lh: "1.1", sample: "氫水科學研究室" },
                { label: "H1", size: "36-48px", lh: "1.2", sample: "氫水功效的科學評估" },
                { label: "H2", size: "24-28px", lh: "1.3", sample: "研究方法與文獻回顧" },
                { label: "H3", size: "20-22px", lh: "1.4", sample: "自由基與選擇性抗氧化" },
                { label: "Body", size: "17px", lh: "1.85", sample: "根據 2023 年發表於 Scientific Reports 的雙盲隨機對照試驗，受試者每日飲用 1.6 ppm 氫水。" },
                { label: "Small/Meta", size: "13-14px", lh: "1.6", sample: "2026年 1 月 · 閱讀時間 8 分鐘 · 氫水科學" },
                { label: "Mono/Data", size: "14px", lh: "1.5", sample: "1.6 ppm · 38 subjects · 8 weeks · p<0.05" },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline gap-4 pb-3 border-b border-gray-100">
                  <div className="w-24 flex-shrink-0">
                    <span className="text-xs font-semibold text-gray-400">{t.label}</span>
                    <div className="text-xs text-gray-300">{t.size}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 truncate">{t.sample}</p>
                  </div>
                  <div className="flex-shrink-0 text-xs text-gray-400 hidden md:block">LH {t.lh}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== COMPONENTS ===== */}
        {activeTab === "components" && (
          <div>
            <SectionTitle sub="6 個通用元件 + 2 個科學專用元件（Evidence Badge + Citation Card）">元件規格 Component Specs</SectionTitle>

            <div className="space-y-6">
              {componentSpecs.map((comp, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-400 w-6">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-base font-bold text-gray-900">{comp.name}</h3>
                    </div>
                    {i >= 6 && (
                      <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "#E0F2FE", color: "#0891B2" }}>
                        H₂ 專屬
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-4">{comp.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(comp.specs).map(([key, val]) => (
                        <div key={key} className="flex gap-2 text-sm">
                          <span className="text-gray-400 font-mono text-xs w-28 flex-shrink-0 pt-0.5">{key}</span>
                          <span className="text-gray-700">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Previews */}
            <div className="mt-8 space-y-4">
              <div className="p-6 rounded-xl" style={{ backgroundColor: "#F1F5F9" }}>
                <h3 className="text-sm font-bold text-gray-900 mb-4">按鈕實際預覽</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <button style={{ backgroundColor: "#0891B2", color: "white", padding: "12px 28px", borderRadius: "8px", border: "none", fontWeight: 500, cursor: "pointer" }}>
                    了解更多
                  </button>
                  <button style={{ backgroundColor: "transparent", color: "#0891B2", padding: "12px 28px", borderRadius: "8px", border: "1px solid #0891B2", fontWeight: 500, cursor: "pointer" }}>
                    瀏覽文章
                  </button>
                  <button style={{ backgroundColor: "transparent", color: "#64748B", padding: "12px 16px", border: "none", cursor: "pointer" }}>
                    查看參考文獻 →
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Citation Card 預覽</h3>
                <div style={{ borderLeft: "4px solid #3B82F6", backgroundColor: "#EFF6FF", borderRadius: "0 8px 8px 0", padding: "16px 20px" }}>
                  <div className="text-xs mb-1" style={{ fontFamily: "monospace", color: "#3B82F6" }}>
                    Scientific Reports · 2023
                  </div>
                  <p className="text-sm" style={{ color: "#1E293B" }}>
                    氫水（1.6 ppm）每日攝取 8 週後，受試者的氧化壓力指標（8-OHdG）顯著下降 23%（p=0.004，n=38）。
                  </p>
                  <a className="text-xs mt-2 block" style={{ color: "#3B82F6" }}>DOI: 10.1038/s41598-023-xxxxx →</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== PAGES ===== */}
        {activeTab === "pages" && (
          <div>
            <SectionTitle sub="H₂ Water Lab 的 5 個核心頁面模板">頁面模板 Page Templates</SectionTitle>

            <div className="space-y-6">
              {pageTemplates.map((page, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 p-4 bg-gray-50">
                    <span className="text-xs font-mono text-gray-400">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{page.name}</h3>
                      <p className="text-xs text-gray-500">{page.purpose}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {page.sections.map((s, j) => (
                        <div key={j} className="flex items-start gap-3 text-sm">
                          <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs text-gray-400 font-mono">
                            {j + 1}
                          </div>
                          <span className="text-gray-700 pt-0.5">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== LAYOUT & MOTION ===== */}
        {activeTab === "layout" && (
          <div>
            <SectionTitle sub="Grid 系統、斷點規格與動態效果定義">版面與動效 Layout & Motion</SectionTitle>

            <h3 className="text-sm font-bold text-gray-900 mb-4">Grid 系統</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(layoutGuidelines.grid).map(([k, v]) => (
                <div key={k} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-1">{k}</div>
                  <div className="text-sm font-semibold text-gray-800">{v}</div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-4">響應式斷點</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium text-xs">裝置</th>
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium text-xs">最小寬度</th>
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium text-xs">最大寬度</th>
                    <th className="text-left py-2 text-gray-400 font-medium text-xs">欄數</th>
                  </tr>
                </thead>
                <tbody>
                  {layoutGuidelines.breakpoints.map((bp) => (
                    <tr key={bp.name} className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 font-semibold text-gray-800">{bp.name}</td>
                      <td className="py-2.5 pr-4 font-mono text-gray-600 text-xs">{bp.min}</td>
                      <td className="py-2.5 pr-4 font-mono text-gray-600 text-xs">{bp.max}</td>
                      <td className="py-2.5 font-mono text-gray-600 text-xs">{bp.cols} cols</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-4">動效規格 Motion Specs</h3>
            <div className="space-y-3">
              {motionSpecs.map((m, i) => (
                <div key={i} className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-800">{m.name}</span>
                  </div>
                  <div className="flex-1 text-sm">
                    <code className="text-xs bg-white px-2 py-0.5 rounded text-gray-600 border border-gray-200">
                      {m.value}
                    </code>
                  </div>
                  <div className="text-xs text-gray-400 w-32 flex-shrink-0">{m.trigger}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== RULES ===== */}
        {activeTab === "rules" && (
          <div>
            <SectionTitle sub="基於科學公信力與日系美學的設計原則">設計原則 Do's & Don'ts</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                  Do's — 要做的
                </h3>
                <div className="space-y-3">
                  {dosAndDonts.dos.map((d, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-700 p-3 bg-green-50 rounded-xl">
                      <span className="text-green-600 flex-shrink-0">{i + 1}.</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600">✕</span>
                  Don'ts — 不做的
                </h3>
                <div className="space-y-3">
                  {dosAndDonts.donts.map((d, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-700 p-3 bg-red-50 rounded-xl">
                      <span className="text-red-600 flex-shrink-0">{i + 1}.</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== CSS VARIABLES ===== */}
        {activeTab === "css" && (
          <div>
            <SectionTitle sub="可直接複製貼入專案的 CSS Custom Properties">CSS 變數 & 設定檔</SectionTitle>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">CSS Custom Properties</h3>
                <pre className="bg-gray-900 text-gray-300 text-xs p-5 rounded-xl overflow-x-auto leading-relaxed">
{`:root {
  /* === Colors: Primary === */
  --color-aqua: #0891B2;
  --color-aqua-light: #22D3EE;
  --color-aqua-dark: #155E75;
  
  /* === Colors: Neutral === */
  --color-snow: #FAFBFC;
  --color-mist: #F1F5F9;
  --color-silver: #CBD5E1;
  --color-slate: #64748B;
  --color-graphite: #1E293B;
  --color-ink: #0F172A;
  
  /* === Colors: Accent === */
  --color-mint: #5EEAD4;
  --color-amber: #F59E0B;
  --color-coral: #FB7185;
  
  /* === Colors: Science === */
  --color-paper: #3B82F6;
  --color-evidence: #22C55E;
  --color-caution: #F97316;
  --color-invalid: #EF4444;
  
  /* === Typography === */
  --font-display: 'Zen Kaku Gothic New', 'Noto Sans TC', sans-serif;
  --font-heading: 'Noto Sans TC', sans-serif;
  --font-body: 'Noto Sans TC', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* === Spacing (4px base) === */
  --space-3xs: 4px;
  --space-2xs: 8px;
  --space-xs: 12px;
  --space-sm: 16px;
  --space-md: 20px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 40px;
  --space-3xl: 48px;
  --space-4xl: 64px;
  --space-5xl: 80px;
  --space-6xl: 96px;
  --space-7xl: 120px;
  --space-8xl: 160px;
  
  /* === Layout === */
  --max-width: 1200px;
  --content-width: 720px;
  --gutter: 24px;
  --gutter-mobile: 16px;
  --nav-height: 64px;
  --nav-height-mobile: 52px;
  
  /* === Border Radius === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(8, 145, 178, 0.04);
  --shadow-md: 0 4px 16px rgba(8, 145, 178, 0.06);
  --shadow-lg: 0 8px 24px rgba(8, 145, 178, 0.08);
  --shadow-xl: 0 16px 48px rgba(8, 145, 178, 0.12);
  
  /* === Transitions === */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.15s;
  --duration-normal: 0.2s;
  --duration-slow: 0.4s;
  --duration-reveal: 0.5s;
}`}</pre>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Google Fonts 載入</h3>
                <pre className="bg-gray-900 text-gray-300 text-xs p-5 rounded-xl overflow-x-auto leading-relaxed">
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&family=Noto+Sans+TC:wght@300;400;500;700&family=JetBrains+Mono&display=swap" rel="stylesheet">`}</pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-12 py-6 text-center text-xs text-gray-400">
        H₂ Water Lab Design System v1.0 — Generated 2026.03 — 日系清淨水感 × 科學信任調性
      </div>
    </div>
  );
}
