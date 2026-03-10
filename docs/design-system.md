# H₂ Water Lab ｜ 氫水研究室 — Design System v1.0

> 品牌定位：科普權威 → 聯盟導購 → 自有品牌  
> 調性：專業 × 實用 × 日系質感  
> 市場：台灣中文先行，結構預留日文 i18n

---

## 0. 參考網站逆向工程摘要

### 共通設計 DNA（跨站觀察）

| 特徵 | 觀察 |
|------|------|
| **留白策略** | 所有參考站均採大面積留白，尤其 the-tawaraya.jp 和 telhaclarke.com.au 達到極端程度 — section 間距達 120–200px |
| **色彩克制** | 主色通常僅 1–2 色，大面積使用白/近白背景，彩度極低 |
| **字體選擇** | 日系站偏好 Gothic（無襯線）系統字搭配 Mincho（襯線）裝飾；西方站用極細 sans-serif |
| **動態節制** | fade-in + subtle parallax 為主流，無花俏動畫，強調「安靜感」|
| **圖文比** | 圖片高品質但數量克制，每 section 通常僅 1–2 張主圖 |
| **垂直書寫** | seavege-stand.com 大量運用縦書き（tategaki）作為裝飾元素 |

### 個站精華

| 網站 | 關鍵學習 | 應用於 H₂ Water Lab |
|------|---------|-------------------|
| **the-tawaraya.jp** | 極簡結構、季節隨筆、雙語並列、大量呼吸空間 | 首頁「氫水科普隨筆」區塊、中日雙語架構 |
| **telhaclarke.com.au** | 編輯式排版、數字編號系統 (01/02/03)、黑白基底 | 文章分類編號系統、極簡 nav |
| **studiocbr.jp** | 乾淨產品卡片、狀態標籤（極上/美品/未使用）、Shopify 清爽佈局 | 證據等級標籤系統、產品評測卡片 |
| **gokokumai.co.jp** | 日式電商分類清晰、暖色自然食感 | 分類資訊架構（但改用冷色調）|
| **seavege-stand.com** | 大膽 typography、縦書き裝飾、和風圖框 SVG、區塊轉場 | 縦書き作為 H₂O 分子裝飾元素、section 轉場風格 |

---

## 1. Design Tokens

### 1.1 Color Palette

#### Primary — 水藍系（H₂ Blue）

| Token | Hex | 用途 |
|-------|-----|------|
| `--color-primary-50` | `#F0F9FF` | 背景淡色 |
| `--color-primary-100` | `#E0F2FE` | 卡片背景、hover 狀態 |
| `--color-primary-200` | `#BAE6FD` | 標籤背景、進度條 |
| `--color-primary-300` | `#7DD3FC` | 次要按鈕邊框 |
| `--color-primary-400` | `#38BDF8` | 圖表強調色 |
| `--color-primary-500` | `#0EA5E9` | **主品牌色** — 連結、CTA 按鈕 |
| `--color-primary-600` | `#0284C7` | 按鈕 hover |
| `--color-primary-700` | `#0369A1` | 按鈕 active |
| `--color-primary-800` | `#075985` | 深色文字強調 |
| `--color-primary-900` | `#0C4A6E` | 深色背景區塊 |

#### Secondary — 冷白灰系

| Token | Hex | 用途 |
|-------|-----|------|
| `--color-secondary-50` | `#F8FAFC` | **頁面背景**（非純白，帶微冷調）|
| `--color-secondary-100` | `#F1F5F9` | 區塊分隔背景 |
| `--color-secondary-200` | `#E2E8F0` | 分隔線、邊框 |
| `--color-secondary-300` | `#CBD5E1` | disabled 狀態 |
| `--color-secondary-400` | `#94A3B8` | placeholder、輔助文字 |
| `--color-secondary-500` | `#64748B` | 次要內文 |
| `--color-secondary-600` | `#475569` | 主要內文 |
| `--color-secondary-700` | `#334155` | 小標題 |
| `--color-secondary-800` | `#1E293B` | 大標題 |
| `--color-secondary-900` | `#0F172A` | **極深標題色** |

#### Semantic — 證據等級色

| Token | Hex | Emoji | 語義 |
|-------|-----|-------|------|
| `--color-evidence-strong` | `#059669` | ✅ | 強證據（meta-analysis / RCT）|
| `--color-evidence-preliminary` | `#2563EB` | 🔬 | 初步證據（小型 RCT / 動物實驗）|
| `--color-evidence-insufficient` | `#D97706` | ⚠️ | 證據不足（case study / in vitro）|
| `--color-evidence-ineffective` | `#DC2626` | ❌ | 無效 / 已被否定 |

#### Accent — 分子圖示專用

| Token | Hex | 用途 |
|-------|-----|------|
| `--color-accent-hydrogen` | `#DBEAFE` | H₂ 分子圖示填色 |
| `--color-accent-oxygen` | `#BFDBFE` | O 原子圖示 |
| `--color-accent-bubble` | `rgba(14, 165, 233, 0.08)` | 水泡粒子背景效果 |

### 1.2 Typography Scale

#### 字型家族

```css
/* 主字型 — 中日文共用 */
--font-family-primary: 'Zen Kaku Gothic New', 'Noto Sans TC', sans-serif;

/* 數據 / 數字專用 — 等寬更易讀 */
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* 英文裝飾 / 品牌標語 */
--font-family-display: 'Cormorant Garamond', 'Zen Old Mincho', serif;
```

**Zen Kaku Gothic New 可用字重**: Light (300) / Regular (400) / Medium (500) / Bold (700) / Black (900)

#### 標題系統

| Level | Font Size | Line Height | Weight | Letter Spacing | 用途 |
|-------|-----------|-------------|--------|---------------|------|
| `--text-display` | 48px / 3rem | 1.2 | 300 (Light) | -0.02em | 首頁英文大標 |
| `--text-h1` | 32px / 2rem | 1.4 | 700 (Bold) | 0em | 頁面標題 |
| `--text-h2` | 24px / 1.5rem | 1.4 | 700 (Bold) | 0.01em | Section 標題 |
| `--text-h3` | 20px / 1.25rem | 1.5 | 500 (Medium) | 0.01em | 卡片標題 |
| `--text-h4` | 16px / 1rem | 1.5 | 700 (Bold) | 0.02em | 小節標題 |

#### 內文系統

| Level | Font Size | Line Height | Weight | Letter Spacing | 用途 |
|-------|-----------|-------------|--------|---------------|------|
| `--text-body-lg` | 18px / 1.125rem | 1.8 | 400 | 0.02em | 長文閱讀（科普文章）|
| `--text-body` | 16px / 1rem | 1.75 | 400 | 0.01em | 一般內文 |
| `--text-body-sm` | 14px / 0.875rem | 1.7 | 400 | 0.01em | 輔助說明 |
| `--text-caption` | 12px / 0.75rem | 1.6 | 400 | 0.03em | 圖片說明、引用來源 |
| `--text-overline` | 11px / 0.6875rem | 1.5 | 700 | 0.12em | 大寫標籤 (EVIDENCE LEVEL) |

> **中文排版要點**：CJK 內文 line-height 建議 ≥ 1.7（參考俵屋、seavege-stand 均接近 1.8），letter-spacing 比英文略寬 0.01–0.03em 以提升閱讀舒適度。

### 1.3 Spacing System

**基數**: 4px（micro）/ 8px（base）

| Token | Value | 用途範例 |
|-------|-------|---------|
| `--space-1` | 4px | icon 與文字間距 |
| `--space-2` | 8px | inline 元素間距、tag padding |
| `--space-3` | 12px | 表單欄位內距 |
| `--space-4` | 16px | 卡片內距（水平）|
| `--space-5` | 20px | 列表項目間距 |
| `--space-6` | 24px | 卡片內距（垂直）|
| `--space-8` | 32px | Section 內元素間距 |
| `--space-10` | 40px | 段落間距 |
| `--space-12` | 48px | 元件群組間距 |
| `--space-16` | 64px | Section padding (mobile) |
| `--space-20` | 80px | Section padding (tablet) |
| `--space-24` | 96px | Section padding (desktop) |
| `--space-32` | 128px | 首頁 hero 間距 |
| `--space-40` | 160px | 大型 section 間隔（參考 tawaraya 風格）|

### 1.4 Border Radius

| Token | Value | 用途 |
|-------|-------|------|
| `--radius-none` | 0px | 圖片、全幅區塊 |
| `--radius-sm` | 4px | 標籤 (tag)、小按鈕 |
| `--radius-md` | 8px | 卡片、輸入框 |
| `--radius-lg` | 12px | 對話氣泡、浮動面板 |
| `--radius-xl` | 16px | Hero 區塊、大型卡片 |
| `--radius-full` | 9999px | 膠囊按鈕、頭像 |

> **設計原則**：整體偏直角（參考 tawaraya、studiocbr 風格），圓角僅用於互動元素與證據標籤，營造「精準科學」感。

### 1.5 Shadow / Elevation

| Token | Value | 用途 |
|-------|-------|------|
| `--shadow-xs` | `0 1px 2px rgba(15, 23, 42, 0.04)` | 輸入框靜態 |
| `--shadow-sm` | `0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)` | 卡片靜態 |
| `--shadow-md` | `0 4px 6px rgba(15, 23, 42, 0.05), 0 2px 4px rgba(15, 23, 42, 0.03)` | 卡片 hover |
| `--shadow-lg` | `0 10px 15px rgba(15, 23, 42, 0.06), 0 4px 6px rgba(15, 23, 42, 0.03)` | 浮動面板 |
| `--shadow-xl` | `0 20px 25px rgba(15, 23, 42, 0.08), 0 8px 10px rgba(15, 23, 42, 0.03)` | Modal |

> **設計原則**：陰影極度柔和（參考全部日系參考站 — 幾乎看不見陰影），opacity 控制在 0.03–0.08。拒絕 Material Design 強陰影。

### 1.6 動效特徵

| Token | Value | 用途 |
|-------|-------|------|
| `--duration-instant` | 100ms | tooltip、toggle |
| `--duration-fast` | 200ms | button hover、focus ring |
| `--duration-normal` | 300ms | 卡片展開、accordion |
| `--duration-slow` | 500ms | page section fade-in |
| `--duration-slower` | 800ms | hero 文字 stagger |
| `--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | 通用（Material 標準）|
| `--easing-in` | `cubic-bezier(0.4, 0, 1, 1)` | 元素離場 |
| `--easing-out` | `cubic-bezier(0, 0, 0.2, 1)` | 元素入場 |
| `--easing-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 彈性按鈕回饋 |

#### 常見動畫模式

| 模式 | 描述 | 參考來源 |
|------|------|---------|
| **Fade-up** | `opacity: 0 → 1` + `translateY(20px → 0)` | tawaraya, seavege-stand 首頁入場 |
| **Stagger reveal** | 子元素依序 delay 100ms fade-in | telhaclarke 作品集 |
| **Scroll-triggered** | IntersectionObserver 觸發 `threshold: 0.15` | 全站通用 |
| **Parallax (micro)** | 背景圖 `translateY` 比前景慢 0.3x | seavege-stand concept 區 |
| **水泡粒子** | CSS `@keyframes` 緩慢上升 + `opacity` 循環 | 品牌專屬 — H₂ 分子意象 |

---

## 2. Component Inventory

### 2.1 Navigation Bar

**參考**: telhaclarke (極簡左 logo + 右 menu) / tawaraya (中央 logo + 底部 nav)

| 屬性 | 規格 |
|------|------|
| 高度 | 64px (mobile) / 72px (desktop) |
| 背景 | `--color-secondary-50` + `backdrop-filter: blur(12px)` 半透明 |
| Logo | 左對齊，H₂ Water Lab 文字 mark，font-weight: 300，18px |
| Nav items | 右對齊，`--text-body-sm`，weight 500，間距 32px |
| 語言切換 | 最右側：ZH / JP toggle，border pill 形式 |
| Mobile | Hamburger icon → 全螢幕 overlay，垂直排列 |
| Sticky | `position: sticky` + scroll 時背景 opacity 從 0 → 0.95 |
| Active state | 底線 2px `--color-primary-500`，`transition: 200ms` |

### 2.2 Evidence Badge（證據等級標籤）⭐ 核心元件

**靈感**: studiocbr.jp 商品狀態標籤（極上/美品/未使用）

| 狀態 | 背景 | 文字色 | 圖示 |
|------|------|--------|------|
| Strong | `#ECFDF5` | `--color-evidence-strong` | ✅ |
| Preliminary | `#EFF6FF` | `--color-evidence-preliminary` | 🔬 |
| Insufficient | `#FFFBEB` | `--color-evidence-insufficient` | ⚠️ |
| Ineffective | `#FEF2F2` | `--color-evidence-ineffective` | ❌ |

| 屬性 | 規格 |
|------|------|
| 內距 | 4px 10px |
| 字級 | `--text-caption`，weight 700，uppercase |
| 圓角 | `--radius-sm` (4px) |
| 結構 | `[emoji] + [中文標籤] + [英文]` → `✅ 強證據 Strong` |
| hover | tooltip 顯示完整定義（如「至少 2 項隨機對照試驗支持」）|

### 2.3 Citation Card（論文引用卡片）

**靈感**: tawaraya 隨筆框架 + academic paper 風格

| 屬性 | 規格 |
|------|------|
| 背景 | `--color-secondary-50` |
| 邊框 | 左側 3px solid `--color-primary-400` |
| 內距 | 20px 24px |
| 結構 | 上層：論文標題（`--text-body-sm`，weight 500） → 中層：作者 + 期刊 + 年份（`--text-caption`，`--color-secondary-500`） → 下層：關鍵發現摘要 + Evidence Badge |
| 互動 | hover → `--shadow-md`，外連圖示 `↗`，連至 DOI/PubMed |
| 圓角 | `--radius-md` (8px) |

### 2.4 Article Card（文章卡片）

**靈感**: studiocbr 產品卡片 + telhaclarke 作品集格式

| 屬性 | 規格 |
|------|------|
| 佈局 | 垂直：圖片 (aspect-ratio: 16/9) → 內容區 |
| 內距 | 圖片區無 padding，內容區 20px 24px |
| 圖片 | `object-fit: cover`，hover → `scale(1.03)`，`overflow: hidden` |
| 分類標籤 | 頂部 overline text：`--text-overline`，`--color-primary-500` |
| 標題 | `--text-h3`，max 2 行，`-webkit-line-clamp: 2` |
| 摘要 | `--text-body-sm`，`--color-secondary-500`，max 3 行 |
| 底部 | Evidence Badges 橫排 + 閱讀時間（`--text-caption`）|
| hover | 整卡 `--shadow-md`，transition 300ms |
| 圓角 | `--radius-md` (8px) |

### 2.5 Button System

| Variant | 背景 | 文字 | 邊框 | hover |
|---------|------|------|------|-------|
| Primary | `--color-primary-500` | `#FFFFFF` | none | `--color-primary-600` + `translateY(-1px)` |
| Secondary | transparent | `--color-primary-600` | 1px `--color-primary-300` | bg `--color-primary-50` |
| Ghost | transparent | `--color-secondary-600` | none | bg `--color-secondary-100` |
| Danger | `--color-evidence-ineffective` | `#FFFFFF` | none | 暗 10% |

| 屬性 | 小 (sm) | 中 (md) | 大 (lg) |
|------|---------|---------|---------|
| 高度 | 32px | 40px | 48px |
| 內距 | 8px 16px | 10px 20px | 12px 28px |
| 字級 | 13px | 14px | 16px |
| 圓角 | `--radius-sm` | `--radius-sm` | `--radius-md` |
| Font-weight | 500 | 500 | 600 |

| 狀態 | 行為 |
|------|------|
| default | 如上表 |
| hover | 色變 + `translateY(-1px)` + `--shadow-sm` |
| active | 色深 10% + `translateY(0)` + 無陰影 |
| disabled | opacity 0.5，cursor: not-allowed |
| focus-visible | 2px offset ring `--color-primary-300` |

### 2.6 Data Visualization Card（數據圖表卡片）

**品牌專屬** — 用於展示氫水研究數據

| 屬性 | 規格 |
|------|------|
| 背景 | `#FFFFFF` |
| 邊框 | 1px `--color-secondary-200` |
| 內距 | 24px |
| 結構 | 標題列 → 圖表區（Recharts / D3）→ 數據來源註腳 |
| 圖表配色 | primary-400 (主線)、primary-200 (面積填色)、secondary-300 (格線) |
| 註腳 | `--text-caption`，斜體，`--color-secondary-400` |
| 圓角 | `--radius-md` |

### 2.7 Table of Contents（側邊目錄）

**參考**: 長文科普頁面，fixed sidebar

| 屬性 | 規格 |
|------|------|
| 位置 | desktop `position: sticky; top: 96px`，隱藏於 mobile |
| 寬度 | 220px |
| 文字 | `--text-body-sm`，weight 400，`--color-secondary-400` |
| Active | weight 500，`--color-primary-600`，左邊 2px indicator |
| hover | `--color-secondary-700` |
| 連結間距 | 8px |
| Scroll spy | IntersectionObserver，smooth highlight transition |

### 2.8 Search Bar（搜尋列）

| 屬性 | 規格 |
|------|------|
| 高度 | 48px |
| 背景 | `#FFFFFF` |
| 邊框 | 1px `--color-secondary-200`，focus → `--color-primary-400` + ring |
| 內距 | 0 16px |
| 圓角 | `--radius-full` (膠囊形) |
| Icon | 左側 search icon 20px，`--color-secondary-400` |
| Placeholder | `--text-body`，`--color-secondary-400` |
| 清除按鈕 | 右側 × icon，hover `--color-secondary-600` |

### 2.9 Tag / Chip

| 屬性 | 規格 |
|------|------|
| 高度 | 28px |
| 內距 | 4px 12px |
| 字級 | `--text-caption`，weight 500 |
| 背景 | `--color-secondary-100` |
| 文字色 | `--color-secondary-600` |
| 圓角 | `--radius-full` |
| hover | bg `--color-primary-100`，text `--color-primary-600` |
| active (selected) | bg `--color-primary-500`，text white |

### 2.10 Footer

**參考**: tawaraya (極簡中央對齊) + seavege-stand (雙語)

| 屬性 | 規格 |
|------|------|
| 背景 | `--color-secondary-900` |
| 文字色 | `--color-secondary-400` |
| 上距 | 1px `--color-secondary-700` 分隔線 |
| 內距 | 64px（上下）|
| 結構 | 上層：四欄 grid（關於/分類/資源/聯繫） → 中層：電子報訂閱輸入框 → 下層：copyright + 社群 icon |
| Mobile | 單欄 accordion 折疊 |

---

## 3. Layout & Grid

### 3.1 容器與欄位

| Token | Value | 說明 |
|-------|-------|------|
| `--container-max` | 1200px | 主內容最大寬度 |
| `--container-narrow` | 720px | 文章閱讀寬度（最佳 45–75 字/行）|
| `--container-wide` | 1440px | 全幅區塊內最大寬 |
| Grid 系統 | **12-column** | `gap: 24px (mobile) / 32px (desktop)` |
| Sidebar 版面 | `3 + 9` 或 `2 + 8 + 2` | 文章頁（TOC + content）|
| 卡片 Grid | `1 col (mobile) / 2 col (tablet) / 3 col (desktop)` | 文章列表頁 |

### 3.2 Breakpoints

| Token | Value | 說明 |
|-------|-------|------|
| `--bp-sm` | 640px | 手機橫向 |
| `--bp-md` | 768px | 平板 |
| `--bp-lg` | 1024px | 小桌面 |
| `--bp-xl` | 1280px | 標準桌面 |
| `--bp-2xl` | 1536px | 大螢幕 |

### 3.3 垂直節奏

| 區域 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Hero → 首區塊 | 128px | 96px | 64px |
| Section 間 | 96px | 80px | 64px |
| Section 內群組間 | 48px | 40px | 32px |
| 元件內 (h2 → p) | 16–24px | 同左 | 同左 |

### 3.4 留白策略

**哲學**: 採「呼吸式留白」（參考 tawaraya），而非「塞滿資訊」。

| 原則 | 實踐 |
|------|------|
| 圖文不貼邊 | 圖片與文字永遠保留 ≥ 32px 間距 |
| Section 間明確分隔 | 大量垂直留白 + 偶爾使用 1px 淡線 |
| 負空間即內容 | 首頁 hero 區文字量極少，留白佔 60%+ |
| 資訊密度遞增 | 首頁 → 列表頁 → 文章頁，密度逐步提升 |
| 不同底色分區 | 交替使用 `#FFFFFF` 和 `--color-secondary-50` |

### 3.5 頁面模板

#### 首頁 (Landing)

```
[Nav — 72px]
[Hero — 全幅, 80vh, 大標語 + 水泡動畫背景]
[——— 128px gap ———]
[最新科普 — container-max, 3-col grid Article Cards]
[——— 96px gap ———]
[數據看板 — 淡背景 section, 3 個 Data Viz 統計數字]
[——— 96px gap ———]
[證據等級說明 — container-narrow, 4 個 Evidence Badge 解說]
[——— 96px gap ———]
[精選評測 — Phase 2 才上線, 橫滑 carousel]
[——— 96px gap ———]
[電子報 CTA — 淡背景 section]
[Footer]
```

#### 文章頁 (Article)

```
[Nav — 72px]
[Article Header — container-narrow]
  [分類標籤 + 發布日期]
  [H1 標題]
  [摘要 — --text-body-lg, --color-secondary-500]
  [Evidence Badge row]
  [Hero 圖片 — 全寬, aspect-ratio 21/9]
[——— 48px gap ———]
[Article Body — 2+8+2 grid]
  [Left: sticky TOC (desktop only)]
  [Center: 長文內容, container-narrow]
    [Citation Cards inline]
    [Data Viz Cards inline]
    [H₂ / H₃ with anchor links]
  [Right: 空白 or floating CTA]
[——— 64px gap ———]
[Related Articles — 3-col grid]
[Footer]
```

---

## 4. Brand Personality

### 關鍵詞

| # | 關鍵詞 | 日文對照 | 說明 |
|---|--------|---------|------|
| 1 | **冷靜可信** (Cool Credibility) | 冷静な信頼性 | 不是熱情推銷，是安靜地展示證據 |
| 2 | **科學白話** (Accessible Science) | わかりやすい科学 | 像受過訓練的營養師朋友說話 |
| 3 | **日系潔淨** (Japanese Purity) | 日本的な清潔感 | 水藍冷白、大面積留白、Zen 美學 |
| 4 | **精準誠實** (Precise Honesty) | 正確で誠実 | 每個宣稱都有證據等級標注 |
| 5 | **現代克制** (Modern Restraint) | モダンな抑制 | 反養生暖色，反誇大，反過度裝飾 |

### 視覺元素 → 性格對應

| 性格 | 傳遞該性格的視覺元素 |
|------|---------------------|
| 冷靜可信 | 水藍+冷白配色（非養生暖色）、低彩度、柔和陰影、serif 品牌標語 |
| 科學白話 | 清晰的 typography hierarchy、Evidence Badge 系統、Citation Card 讓論文平易近人 |
| 日系潔淨 | Zen Kaku Gothic New 字型、大面積留白（tawaraya 風格）、極簡 nav |
| 精準誠實 | 四級證據標籤系統（✅🔬⚠️❌）、數據圖表、論文引用卡片、「禁止誇大」作為設計準則 |
| 現代克制 | 直角為主的幾何語言、節制的動效、圖片數量克制但品質高、拒絕漸層 |

---

## 5. 設計原則 (Design Principles)

### 5.1 禁止清單 (Never Do)

- ❌ 暖色養生風（金色、橘色、棕色為主色）
- ❌ 誇張療效文案（「治癒」「神奇」「一喝就有效」）
- ❌ 過度漸層或 glassmorphism
- ❌ Stock photo 風格的假笑健康人士
- ❌ 強陰影（Material Design 風格 elevation）
- ❌ 自動播放影片或過度動效
- ❌ 沒有證據等級標注的健康宣稱

### 5.2 務必遵守 (Always Do)

- ✅ 每篇內容標注證據等級
- ✅ 引用論文使用 Citation Card 格式
- ✅ 中日文結構對齊，i18n key 一致
- ✅ 圖片使用真實產品照或科學圖表（非 AI 生成圖）
- ✅ 無障礙：color contrast ratio ≥ 4.5:1，focus ring 可見
- ✅ 所有互動元素有明確 hover/active/disabled 狀態
- ✅ 行動版優先設計，桌面版擴展

---

## 6. i18n 架構備註

| 項目 | 規格 |
|------|------|
| 預設語言 | `zh-TW` |
| 預備語言 | `ja` |
| Key 格式 | `{page}.{section}.{element}` 例：`article.header.title` |
| 字型 fallback | ZH: `'Zen Kaku Gothic New', 'Noto Sans TC'` / JA: `'Zen Kaku Gothic New', 'Noto Sans JP'` |
| 日期格式 | ZH: `2025年3月10日` / JA: `2025年3月10日` |
| 數字分隔 | ZH/JA 均用逗號 `1,000` |
| 證據等級 | ZH: `強證據 / 初步 / 不足 / 無效` / JA: `強い証拠 / 予備的 / 不十分 / 無効` |

---

## 7. CSS Custom Properties 完整輸出

```css
:root {
  /* === Colors === */
  --color-primary-50: #F0F9FF;
  --color-primary-100: #E0F2FE;
  --color-primary-200: #BAE6FD;
  --color-primary-300: #7DD3FC;
  --color-primary-400: #38BDF8;
  --color-primary-500: #0EA5E9;
  --color-primary-600: #0284C7;
  --color-primary-700: #0369A1;
  --color-primary-800: #075985;
  --color-primary-900: #0C4A6E;

  --color-secondary-50: #F8FAFC;
  --color-secondary-100: #F1F5F9;
  --color-secondary-200: #E2E8F0;
  --color-secondary-300: #CBD5E1;
  --color-secondary-400: #94A3B8;
  --color-secondary-500: #64748B;
  --color-secondary-600: #475569;
  --color-secondary-700: #334155;
  --color-secondary-800: #1E293B;
  --color-secondary-900: #0F172A;

  --color-evidence-strong: #059669;
  --color-evidence-preliminary: #2563EB;
  --color-evidence-insufficient: #D97706;
  --color-evidence-ineffective: #DC2626;

  --color-accent-hydrogen: #DBEAFE;
  --color-accent-oxygen: #BFDBFE;
  --color-accent-bubble: rgba(14, 165, 233, 0.08);

  /* === Typography === */
  --font-family-primary: 'Zen Kaku Gothic New', 'Noto Sans TC', sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-family-display: 'Cormorant Garamond', 'Zen Old Mincho', serif;

  --text-display: 3rem;
  --text-h1: 2rem;
  --text-h2: 1.5rem;
  --text-h3: 1.25rem;
  --text-h4: 1rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-overline: 0.6875rem;

  /* === Spacing (4px base) === */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;

  /* === Border Radius === */
  --radius-none: 0;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 4px 6px rgba(15, 23, 42, 0.05), 0 2px 4px rgba(15, 23, 42, 0.03);
  --shadow-lg: 0 10px 15px rgba(15, 23, 42, 0.06), 0 4px 6px rgba(15, 23, 42, 0.03);
  --shadow-xl: 0 20px 25px rgba(15, 23, 42, 0.08), 0 8px 10px rgba(15, 23, 42, 0.03);

  /* === Motion === */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
  --easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === Layout === */
  --container-max: 1200px;
  --container-narrow: 720px;
  --container-wide: 1440px;
}
```

---

---

## v4 修訂（定稿）— 2026-03-10

> 經四輪迭代定稿：初版→v2(留白+動效)→v3(icon日系化)→v4(Emoji替換+字重回調)

### Icon 原則（全站適用）

| # | 原則 | 說明 |
|---|------|------|
| 1 | **能用文字就不用 icon** | 時鐘 icon → `12 min` 純文字、書本 icon → `引用 50 篇` 文字 badge |
| 2 | **線條 1.3px + 平切端點** | `strokeWidth: 1.3`、`strokeLinecap: "square"`，Mon（家紋）風格 |
| 3 | **紋樣化分子圖示** | 三圓交疊（HHO）、1px 描邊、opacity 0.25 作為背景紋理 |
| 4 | **borderRadius 收緊** | 卡片 6px、按鈕/badge 3px |
| 5 | **全站最多 2 種 icon** | 分子紋（裝飾）+ 箭頭（導航），其餘一律用文字 |

### ⛔ Emoji 禁止（不可違反）

| 問題 | 說明 |
|------|------|
| 跨平台不一致 | ✅🔬⚠️❌ 在 iOS/Android/Windows 外觀完全不同 |
| 彩度爆表 | 全彩 emoji 在極低彩度頁面上視覺突兀 |
| 語義模糊 | 🔬 是顯微鏡還是望遠鏡？不同文化解讀不同 |

**替代方案：幾何紋 SVG（填滿度 = 證據強度）**

| 等級 | 圖形 | SVG 邏輯 | 色碼 |
|------|------|---------|------|
| 強證據 | ◉ 實心圓 + 外圈 | `<circle r=5.5/>` + `<circle r=2 fill/>` | `#059669` (green) |
| 初步證據 | ◐ 半填充圓 | `<circle r=5.5/>` + 半圓 `<path>` fill | `#2563EB` (blue) |
| 證據不足 | ◠ 缺口開放圓 | 開放弧 `<path>` 無 fill | `#D97706` (amber) |
| 無效 | ⊘ 斜線穿越圓 | `<circle r=5.5/>` + 對角 `<line>` | `#DC2626` (red) |

統一規格：`viewBox="0 0 14 14"` · `strokeWidth="1.3"` · `strokeLinecap="square"` · 單色 `currentColor`

### Badge 場景分工

| 場景 | 圖示 | 底色 | 原因 |
|------|------|------|------|
| 文章卡片標籤 | ✓ 幾何紋 | ✓ 有底色 | 標籤語境需要跳出辨識 |
| 側邊欄圖例 | ✓ 幾何紋 | ✓ 有底色 | 教學用途，底色輔助分區 |
| 文章頁頂部 | ✓ 幾何紋 | ✓ 有底色 | 大尺寸場景 |
| 文章內文行內 | ✓ 幾何紋 | ✗ 無底色 | 底色會打斷閱讀節奏 |
| Tooltip/說明 | ✗ 無圖示 | ✗ 無底色 | 底線 + 色字即可 |
| Email 電子報 | ✗ 無圖示 | ✗ 無底色 | 純色字，最大相容性 |

### 字重回調（v3→v4，全站 +1 級）

| 元素 | v3 | v4 |
|------|----|----|
| Logo | 300 | 400 |
| Nav 連結 | 400 | 500 |
| Tab (inactive) | 300 | 400 |
| Tab (active) | 500 | 600 |
| Hero 副標 | 300 | 400 |
| 卡片標題 | 600 | 700 |
| 卡片摘要 | 300 | 400 |
| 日期/meta | 300 | 400 |
| 「閱讀」連結 | 400 | 500 |
| 側欄分類 (inactive) | 300 | 400 |
| 側欄分類 (active) | 500 | 600 |
| CTA/訂閱按鈕 | 500 | 600 |
| Newsletter 標題 | 500 | 600 |
| Section heading | 600 | 700 |

### 文字色階回調（v3→v4，全站 +1 級）

| 元素 | v3 | v4 |
|------|----|----|
| Hero 副標 | sec-400 `#94A3B8` | sec-500 `#64748B` |
| 卡片摘要 | sec-500 `#64748B` | sec-600 `#475569` |
| 日期/meta | sec-300 `#CBD5E1` | sec-400 `#94A3B8` |
| 側欄分類 | sec-500 `#64748B` | sec-600 `#475569` |
| Footer 文字 | sec-300 `#CBD5E1` | sec-400 `#94A3B8` |
| Footer 連結 | sec-300 `#CBD5E1` | sec-400 `#94A3B8` |

---

*H₂ Water Lab Design System v1.0 → v4 — Updated 2026-03-10*  
*Based on reverse engineering of: the-tawaraya.jp, telhaclarke.com.au, studiocbr.jp, gokokumai.co.jp, seavege-stand.com*  
*v4 JSX reference: `docs/design-system-v4.jsx`*
