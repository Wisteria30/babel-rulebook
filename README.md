# BABEL Rulebook

[English](#english) | [日本語](#日本語)

---

## English

Interactive rulebook for "BABEL". View the game overview, roles, phases, and victory conditions in a slide format.

**[https://wisteria30.github.io/babel-rulebook/](https://wisteria30.github.io/babel-rulebook/)**

### What is BABEL?

A 4-player cooperative board game where you instruct AI to build an app ("the tower"). However, hiding among the players is a "God's Apostle" secretly trying to destroy it.

- 👥 **Genre**: Vibe Coding × Social Deduction
- ⏱️ **Play Time**: 30-40 minutes
- 🎯 **Players**: 4 (exactly)

### Features

- 📱 Responsive design (PC / Mobile)
- 👆 Swipe & keyboard navigation
- ✨ Framer Motion animations
- 🌐 Multilingual support (EN/JA)

### Slide Contents

1. **Title** - Game concept introduction
2. **Overview** - Basic rules explanation
3. **Roles** - Each role's abilities
4. **Game Flow** - Round structure
5. **Phase Details** - Detailed rules for each phase
6. **Victory Conditions** - Checklist explanation
7. **CTA** - Call to action

### Controls

| Action | Method |
|--------|--------|
| Next slide | `→` key / Space / Swipe left |
| Previous slide | `←` key / Swipe right |
| Select slide | Click dots at bottom |
| Switch language | Click EN/JA button (top-right) |

### Development

#### Setup

```bash
bun install
```

#### Dev Server

```bash
bun run dev
```

#### Build

```bash
bun run build
```

### Deployment

#### GitHub Pages

Automatically deployed when pushing to `main` branch.

For first-time setup, go to GitHub repository Settings > Pages and select "GitHub Actions" as the source.

#### Self-hosting

After building, serve the `dist/` directory with any static file server.

```bash
# Go server example
go build -o server server.go
./server
```

### Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-i18next](https://react.i18next.com/)
- [react-swipeable](https://github.com/FormidableLabs/react-swipeable)

---

## 日本語

「BABEL」のインタラクティブルールブック。スライド形式でゲームの概要・役職・フェーズ・勝利条件を確認できます。

**[https://wisteria30.github.io/babel-rulebook/](https://wisteria30.github.io/babel-rulebook/)**

### BABELとは

4人専用の協力型ボードゲーム。AIに指示を出してアプリ（「塔」）を作り上げますが、プレイヤーの中にはこっそり塔を崩そうとする「神の使い」が潜んでいます。

- 👥 **ジャンル**: Vibe Coding × 人狼系推理
- ⏱️ **プレイ時間**: 30〜40分
- 🎯 **プレイ人数**: 4人専用

### 機能

- 📱 レスポンシブ対応（PC / スマホ）
- 👆 スワイプ & キーボード操作
- ✨ Framer Motionによるアニメーション
- 🌐 多言語対応（日/英）

### スライド構成

1. **タイトル** - ゲームのコンセプト紹介
2. **概要** - 基本ルールの説明
3. **役職** - 各役職の能力紹介
4. **ゲームの流れ** - ラウンド構成
5. **フェーズ詳細** - 各フェーズの詳細ルール
6. **勝利条件** - チェックリスト説明
7. **CTA** - ゲーム開始への導線

### 操作方法

| 操作 | 方法 |
|------|------|
| 次のスライド | `→` キー / スペース / 左スワイプ |
| 前のスライド | `←` キー / 右スワイプ |
| スライド選択 | 下部のドットをクリック |
| 言語切り替え | 右上のEN/JAボタンをクリック |

### 開発

#### セットアップ

```bash
bun install
```

#### 開発サーバー

```bash
bun run dev
```

#### ビルド

```bash
bun run build
```

### デプロイ

#### GitHub Pages

`main`ブランチにプッシュすると自動でデプロイされます。

初回のみ、GitHubリポジトリのSettings > Pagesで「GitHub Actions」をソースとして選択してください。

#### セルフホスト

ビルド後、`dist/`ディレクトリを任意の静的ファイルサーバーで配信できます。

```bash
# Goサーバーの例
go build -o server server.go
./server
```

### 技術スタック

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-i18next](https://react.i18next.com/)
- [react-swipeable](https://github.com/FormidableLabs/react-swipeable)

## License

MIT
