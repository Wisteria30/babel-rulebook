# BABEL Rulebook - 開発者向けドキュメント / Developer Documentation

[English](#english) | [日本語](#日本語)

---

## English

Developer documentation for the BABEL interactive rulebook.

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/wisteria30/babel-rulebook.git
cd babel-rulebook

# Install dependencies
bun install
```

### Development

```bash
# Start dev server (http://localhost:5173)
bun run dev
```

### Build

```bash
bun run build
```

Built files are output to `dist/` directory.

### Deployment

#### GitHub Pages

Automatically deployed when pushing to `main` branch.

For first-time setup:
1. Go to GitHub repository Settings > Pages
2. Select "GitHub Actions" as the source

#### Self-hosting

Serve the `dist/` directory with any static file server.

```bash
# Example with Go server
go build -o server server.go
./server
```

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|--------|
| [React](https://react.dev/) | 19 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type Safety |
| [Vite](https://vite.dev/) | 6.x | Build Tool |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations |
| [react-i18next](https://react.i18next.com/) | 15.x | i18n |
| [react-swipeable](https://github.com/FormidableLabs/react-swipeable) | 7.x | Touch Gestures |

### Project Structure

```
src/
├── components/     # React components
│   └── slides/     # Slide components
├── i18n/
│   └── locales/    # Translation files (en.json, ja.json)
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```

### Adding a New Slide

1. Create a new component in `src/components/slides/`
2. Add translations to `src/i18n/locales/en.json` and `ja.json`
3. Import and add the slide to the slides array in `App.tsx`

---

## 日本語

BABELインタラクティブルールブックの開発者向けドキュメントです。

### 必要要件

- [Bun](https://bun.sh/)（推奨）または Node.js 18+
- Git

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/wisteria30/babel-rulebook.git
cd babel-rulebook

# 依存関係をインストール
bun install
```

### 開発

```bash
# 開発サーバー起動 (http://localhost:5173)
bun run dev
```

### ビルド

```bash
bun run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

### デプロイ

#### GitHub Pages

`main`ブランチにプッシュすると自動でデプロイされます。

初回セットアップ:
1. GitHubリポジトリの Settings > Pages に移動
2. ソースとして「GitHub Actions」を選択

#### セルフホスト

`dist/` ディレクトリを任意の静的ファイルサーバーで配信できます。

```bash
# Goサーバーの例
go build -o server server.go
./server
```

### 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| [React](https://react.dev/) | 19 | UIフレームワーク |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | 型安全性 |
| [Vite](https://vite.dev/) | 6.x | ビルドツール |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | アニメーション |
| [react-i18next](https://react.i18next.com/) | 15.x | 多言語対応 |
| [react-swipeable](https://github.com/FormidableLabs/react-swipeable) | 7.x | タッチジェスチャー |

### プロジェクト構成

```
src/
├── components/     # Reactコンポーネント
│   └── slides/     # スライドコンポーネント
├── i18n/
│   └── locales/    # 翻訳ファイル (en.json, ja.json)
├── App.tsx         # メインアプリコンポーネント
└── main.tsx        # エントリーポイント
```

### 新しいスライドの追加方法

1. `src/components/slides/` に新しいコンポーネントを作成
2. `src/i18n/locales/en.json` と `ja.json` に翻訳を追加
3. `App.tsx` のスライド配列にインポートして追加

## License

This project is **NOT** open source. All rights reserved.  
Viewing is permitted, but copying, modification, and redistribution are prohibited.
