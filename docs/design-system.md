# H2 Water Lab — 設計系統

> Version: 1.0 | 2026-03

---

## 1. 設計哲學

**日系清淨 × 科學信任**

- 留白大方，資訊密度適中
- 色彩克制：以冷色系水藍為主，避免暖色
- 數據至上：每個設計決策服務「資訊清晰傳達」
- 行動版優先（Mobile First）

---

## 2. 色彩系統

### Primary（主色調 — 水藍系）
| 名稱 | Token | Hex | 用途 |
|------|-------|-----|------|
| 水藍 aqua | `--color-aqua` | `#0891B2` | CTA 按鈕、重要連結 |
| 淺水藍 aquaLight | `--color-aqua-light` | `#22D3EE` | Hover 狀態、次要強調 |
| 深水藍 aquaDark | `--color-aqua-dark` | `#155E75` | Footer、深色區塊、active 狀態 |

### Neutral（中性色 — 日系冷白灰）
| 名稱 | Token | Hex | 用途 |
|------|-------|-----|------|
| 雪白 snow | `--color-snow` | `#FAFBFC` | 主要背景（偏冷白，日系感） |
| 霧灰 mist | `--color-mist` | `#F1F5F9` | 次要背景、卡片底色 |
| 銀灰 silver | `--color-silver` | `#CBD5E1` | 邊框、分隔線 |
| 石灰 slate | `--color-slate` | `#64748B` | 次要文字、meta info |
| 墨色 graphite | `--color-graphite` | `#1E293B` | 主要內文 |
| 黑 ink | `--color-ink` | `#0F172A` | 標題、最高對比 |

### Accent（強調色）
| 名稱 | Token | Hex | 用途 |
|------|-------|-----|------|
| 薄荷 mint | `--color-mint` | `#5EEAD4` | 自然、健康標籤 |
| 琥珀 amber | `--color-amber` | `#F59E0B` | 警告、重要標記 |
| 珊瑚 coral | `--color-coral` | `#FB7185` | 錯誤、注意事項 |

### Science Trust（科學信任色）
| 名稱 | Token | Hex | 用途 |
|------|-------|-----|------|
| 論文藍 paper | `--color-paper` | `#3B82F6` | 論文引用連結 |
| 證據綠 evidence | `--color-evidence` | `#22C55E` | 強證據標記 ✅ |
| 不足橘 caution | `--color-caution` | `#F97316` | 證據不足標記 ⚠️ |

---

## 3. 字型系統

### Display Font — Zen Kaku Gothic New
- **來源**：Google Fonts（免費，日系現代感）
- **用途**：Hero 標題、品牌宣言
- **Weights**：400、700
- **Fallback**：`Noto Sans TC, sans-serif`

### Heading Font — Noto Sans TC
- **用途**：H1–H3 文章標題
- **Weights**：400、700

### Body Font — Noto Sans TC
- **用途**：內文、UI 文字
- **Weights**：300、400、500、700

### Mono Font — JetBrains Mono
- **用途**：數據、ppm 濃度值、價格數字
- **Weights**：400

### 字級規格

| 用途 | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hero H1 | 40–64px | 700 | 1.2 |
| 頁面 H1 | 32px | 700 | 1.3 |
| 文章 H2 | 24px | 700 | 1.4 |
| 文章 H3 | 20px | 500 | 1.5 |
| Body | 17px | 400 | 1.85 |
| Small / Meta | 14px | 400 | 1.6 |
| Caption | 12px | 400 | 1.5 |

---

## 4. 元件規格

### Hero Section
```
高度: 80vh（首頁）/ 50vh（內頁）
背景: linear-gradient(135deg, #F1F5F9 0%, #E0F2FE 50%, #FAFBFC 100%)
標題: Zen Kaku Gothic New, 40-64px, weight 700
副標: Noto Sans TC, 16px, weight 300, letter-spacing 0.05em
裝飾: 右側抽象水分子 SVG（圓圈 + 連線，aqua 色，opacity 0.15-0.3）
```

### Navigation
```
高度: 64px（桌面）/ 52px（行動）
背景: transparent → scroll 後 rgba(250,251,252,0.95) + backdrop-blur(12px)
Logo: H₂（aqua #0891B2）+ Water Lab（graphite #1E293B）
導覽連結: Noto Sans TC 14px weight 500
風格: 極簡、乾淨、呼吸感
```

### Article Card
```
比例: 16:9（橫式科學感）
border-radius: 8px（日系柔和）
背景: #FAFBFC
border: 1px solid #CBD5E1
shadow: 0 1px 3px rgba(15,23,42,0.04)
shadow(hover): 0 8px 25px rgba(15,23,42,0.08)
transform(hover): translateY(-2px)
標籤: pill 形，mint 綠底或 aqua 藍底，6px border-radius
底部: 分類標籤 + 閱讀時間
```

### Evidence Badge（核心差異化元件）
```
✅ 強證據:   bg #22C55E, text white
🔬 初步證據: bg #3B82F6, text white
⚠️ 證據不足: bg #F97316, text white
❌ 無效:     bg #EF4444, text white

通用規格: font-size 12px, padding 4px 12px, border-radius 100px
位置: 文章頂部、健康宣稱旁
```

### CTA Button
```
Primary:
  bg: #0891B2, text: white
  hover: bg #155E75
  
Secondary:
  border: 1.5px solid #0891B2, text: #0891B2
  hover: bg #0891B2, text: white
  
通用: border-radius 8px, padding 12px 28px
font: Noto Sans TC 14px weight 500
transition: 0.2s ease
```

### 論文引用卡片（Citation Card）
```
背景: #F8FAFF
border-left: 4px solid #3B82F6
border-radius: 0 8px 8px 0
padding: 16px 20px
font-size: 14px
```

### Footer
```
背景: #0F172A
文字: slate #64748B（次要）/ snow #FAFBFC（重要）
三欄: 品牌 + tagline / 導覽連結 / 聯絡資訊
底部: 版權行
```

---

## 5. 頁面模板

### 首頁結構
1. **Hero** — 品牌宣言 + 水分子 SVG 裝飾
2. **Why H₂?** — 3 欄 feature card（最小分子 / 抗氧化 / 安全性高）
3. **最新研究** — 3 張文章卡片
4. **證據等級說明** — 4 個 badge 的說明區塊（差異化元素）
5. **CTA Banner** — 探索更多氫水科學
6. **Footer**

### 文章內頁結構
```
┌─────────────────────────────────┐
│  Nav                            │
├─────────────────────────────────┤
│  文章 Hero (50vh)               │
│  標題 + Evidence Badge + Meta   │
├──────────┬──────────────────────┤
│ Sticky   │ 內文 max-width 720px │
│ TOC      │ font: 17px / 1.85   │
│ (桌面)   │ 論文引用卡片         │
│          │ 比較表              │
├──────────┴──────────────────────┤
│  相關文章                       │
│  回饋區塊                       │
│  Footer                         │
└─────────────────────────────────┘
```

---

## 6. 設計原則

### ✅ Do's
- 日系乾淨留白，每個 section 都有足夠呼吸空間
- 數據視覺化：比較表、數字指標要突出顯示
- 每個健康宣稱都必須標註證據等級 badge
- 行動版優先設計
- 論文引用要有特殊視覺處理（不能和普通段落混在一起）
- 使用 monospace 字型顯示數據（ppm 值、樣本數等）

### ❌ Don'ts
- **不用暖色調**（這是科學站，不是養生館）
- **不用圓體字**（感覺不夠專業嚴謹）
- **不用漸層按鈕**（太花俏，降低信任感）
- **不用光芒/能量波等裝飾**（會讓人聯想到誇大宣傳）
- **不用 stock photo 的假笑人物**（和科學調性不符）
- **不在按鈕/標題用過多動畫**（分散注意力）

---

## 7. 響應式斷點

| 名稱 | Width | 說明 |
|------|-------|------|
| Mobile | < 640px | 單欄、底部 nav |
| Tablet | 640–1024px | 部分雙欄 |
| Desktop | > 1024px | 完整三欄、左側 TOC |

---

*最後更新：2026-03-10*
