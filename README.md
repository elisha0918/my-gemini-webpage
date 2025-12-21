<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Elisha_0918 Portfolio

[![Deploy to GitHub Pages](https://github.com/elisha0918/my-gemini-webpage/actions/workflows/deploy.yml/badge.svg)](https://github.com/elisha0918/my-gemini-webpage/actions/workflows/deploy.yml)

> 打造智能自動化的未來 - 透過 Gemini Canvas、n8n 和 Python 實現極致懶人哲學

## 🚀 專案簡介

這是一個使用 React + TypeScript + Vite 打造的個人作品集網站，展示我在 AI 工具開發、自動化流程和 Python 應用方面的實踐案例。

### ✨ 特色功能

- 🎨 **現代化設計** - 採用 Glassmorphism 和漸層效果的深色主題
- 📱 **響應式佈局** - 完美適配各種螢幕尺寸
- 🎬 **互動式展示** - 支援影片預覽和專案演示
- ⚡ **高效能** - 使用 Vite 構建，載入速度極快
- 🔄 **自動部署** - 透過 GitHub Actions 自動部署到 GitHub Pages

### 🛠️ 技術棧

- **前端框架**: React 19.2.3
- **開發語言**: TypeScript 5.8.2
- **建構工具**: Vite 6.2.0
- **圖示庫**: Lucide React
- **樣式方案**: Vanilla CSS
- **部署平台**: GitHub Pages

## 📦 本地開發

### 前置需求

- Node.js 18+ 
- npm 或 yarn

### 安裝步驟

1. **Clone 專案**
   ```bash
   git clone https://github.com/elisha0918/my-gemini-webpage.git
   cd my-gemini-webpage
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```
   
   開啟瀏覽器訪問 `http://localhost:3000`

4. **建置生產版本**
   ```bash
   npm run build
   ```

5. **預覽生產版本**
   ```bash
   npm run preview
   ```

## 🚢 部署

### 自動部署（推薦）

專案已配置 GitHub Actions，當你推送到 `main` 分支時會自動部署到 GitHub Pages。

**首次部署設定：**

1. 進入 GitHub 專案設定
2. 前往 `Settings` > `Pages`
3. 在 `Build and deployment` 區域：
   - Source: 選擇 `GitHub Actions`
4. 推送程式碼到 `main` 分支即可觸發自動部署

部署完成後，網站將可在以下網址訪問：
```
https://elisha0918.github.io/my-gemini-webpage/
```

### 手動部署

如需手動部署，可以執行：

```bash
npm run build
```

然後將 `dist` 資料夾的內容部署到任何靜態網站託管服務。

## 📁 專案結構

```
my-gemini-webpage/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── src/
│   ├── App.tsx                 # 主應用程式組件
│   ├── index.tsx               # 應用程式入口
│   └── types.ts                # TypeScript 類型定義
├── index.html                  # HTML 模板
├── vite.config.ts              # Vite 配置
├── tsconfig.json               # TypeScript 配置
├── package.json                # 專案依賴
└── .gitignore                  # Git 忽略檔案
```

## 🎯 作品展示

專案包含以下類別的作品：

- **Gemini 工具** - 使用 Gemini Canvas 開發的智能應用
- **Python 工具** - 自動化腳本和 GUI 工具
- **n8n 流程** - 自動化工作流程和資料處理

## 📝 開發指令

| 指令 | 說明 |
|------|------|
| `npm install` | 安裝專案依賴 |
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產版本 |
| `npm run preview` | 預覽生產版本 |

## 🔧 環境變數

如需使用 Gemini API，請建立 `.env.local` 檔案：

```env
GEMINI_API_KEY=your_api_key_here
```

> ⚠️ 注意：`.env.local` 已加入 `.gitignore`，不會被提交到版本控制

## 📄 授權

© 2025 Elisha_0918. Built with React & Gemini.



---

<div align="center">
  <strong>享受生活 ☕</strong>
</div>
