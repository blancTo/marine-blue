# マリンブルー - 広島の海洋散骨サービス

広島県の海洋散骨サービス「マリンブルー」の公式ウェブサイトです。

## 🌊 プロジェクト概要

このウェブサイトは、広島県で海洋散骨サービスを提供するマリンブルーの情報サイトです。サービス紹介、料金プラン、アクセス情報、お客様の声などを掲載しています。

## 🛠️ 技術スタック

- **フロントエンド**: React 18
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **開発言語**: JavaScript (JSX)
- **パッケージマネージャー**: npm

## 📁 プロジェクト構成

```
marine blue/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.jsx      # ヘッダー
│   │   ├── Hero.jsx        # ヒーローセクション
│   │   ├── About.jsx       # サービス紹介
│   │   ├── Features.jsx    # 特徴・サービス内容
│   │   ├── Plans.jsx       # 料金プラン
│   │   ├── Process.jsx     # サービスの流れ
│   │   ├── Testimonials.jsx # お客様の声
│   │   ├── Access.jsx      # アクセス情報
│   │   └── Footer.jsx      # フッター
│   ├── assets/             # 画像などの静的ファイル
│   ├── App.jsx             # メインアプリケーション
│   ├── main.jsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
├── index.html              # HTMLテンプレート
├── package.json            # 依存関係とスクリプト
├── tailwind.config.js      # Tailwind CSS設定
├── postcss.config.js       # PostCSS設定
└── vite.config.js          # Vite設定
```

## 🚀 セットアップ手順

### 前提条件

- Node.js (推奨バージョン: 16.x以上)
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone https://github.com/[ユーザー名]/marine-blue.git
cd marine-blue
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

開発サーバーが起動すると、`http://localhost:5173` でサイトにアクセスできます。

## 📝 利用可能なスクリプト

### 本番環境用
- `npm run dev` - 開発サーバーを起動（本番設定）
- `npm run build` - 本番用にビルド
- `npm run preview` - ビルドしたファイルをプレビュー

### 開発環境用（develop）
- `npm run dev:develop` - 開発サーバーを起動（開発設定、HMR有効）
- `npm run build:develop` - 開発用にビルド（ソースマップ付き、最小化なし）
- `npm run preview:develop` - 開発ビルドをプレビュー

## 🌐 デプロイ環境

このプロジェクトは以下の環境が設定されています：

### 本番環境（Production）
- **ブランチ**: `main`
- **URL**: `https://blanc-eijima.github.io/marine-blue/`
- **デプロイ**: `main`ブランチへのプッシュで自動デプロイ
- **設定**: 最小化あり、ソースマップなし、本番最適化

### 開発環境（Develop）
- **ブランチ**: `develop`
- **動作**: ビルドチェック＆アーティファクト保存
- **目的**: 開発中のコード品質確認、本番デプロイ前のテスト
- **設定**: 最小化なし、ソースマップあり、デバッグ情報付き

### プルリクエスト環境
- **トリガー**: PRの作成・更新
- **動作**: ビルドチェック、テスト実行
- **目的**: コード品質の事前チェック

## 🔄 開発ワークフロー

### 新機能開発の流れ
1. `develop`ブランチから新しいfeatureブランチを作成
2. 機能開発・テスト
3. `develop`ブランチにマージ
4. develop環境で動作確認
5. 本番リリース時に`main`ブランチにマージ

```bash
# 新機能開発開始
git checkout develop
git pull origin develop
git checkout -b feature/新機能名

# 開発・コミット
git add .
git commit -m "新機能を追加"
git push origin feature/新機能名

# developブランチにマージ
git checkout develop
git merge feature/新機能名
git push origin develop

# 本番リリース（develop → main）
git checkout main
git merge develop
git push origin main
```

## 🔧 開発時の注意事項

- コンポーネントは`src/components/`ディレクトリに配置
- スタイリングはTailwind CSSを使用
- 画像などの静的ファイルは`src/assets/`に配置
- レスポンシブデザインに対応

## 📞 お問い合わせ

プロジェクトに関するご質問やご提案がございましたら、Issueを作成するかプルリクエストをお送りください。

---

© 2024 マリンブルー. All rights reserved.
