# Mock-ups - Matching App

神戸大学マッチングアプリのモックアップ集

## 概要

このリポジトリは、マッチングアプリケーションの複数のモックアップを一つのGitHub Pagesで公開するプロジェクトです。

## 技術スタック

- **Backend**: Node.js
- **Frontend**: React + TailwindCSS
- **Database**: MySQL
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## モックアップページ

1. **Home** - トップページ（各モックアップへのナビゲーション）
2. **Login** - ログイン画面
3. **Profile** - プロフィール画面
4. **Matching** - マッチング画面（スワイプ機能）
5. **Chat** - チャット画面

## 開発環境のセットアップ

### 前提条件

- Node.js (v20以上推奨)
- npm

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/Kobe-University-MatchingApp/mock-ups.git
cd mock-ups

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

## デプロイ

このプロジェクトはGitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

`main` ブランチにプッシュすると、自動的にビルドとデプロイが実行されます。

デプロイされたサイト: https://kobe-university-matchingapp.github.io/mock-ups/

## プロジェクト構造

```
mock-ups/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions設定
├── public/                     # 静的ファイル
├── src/
│   ├── pages/                  # ページコンポーネント
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Matching.jsx
│   │   └── Chat.jsx
│   ├── components/             # 共通コンポーネント
│   ├── App.jsx                 # メインアプリ
│   ├── main.jsx                # エントリーポイント
│   └── index.css               # グローバルスタイル
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ライセンス

このプロジェクトは教育目的で作成されています。

