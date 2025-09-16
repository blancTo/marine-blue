# GitHub Pages 設定手順

## エラーの原因
GitHub Actionsで「Setup Pages」ステップが失敗しているのは、リポジトリでGitHub Pagesが有効になっていないためです。

## 解決手順

### 1. GitHub リポジトリの設定を開く
1. GitHubリポジトリページを開く
2. 上部メニューの「Settings」をクリック

### 2. GitHub Pages を有効にする
1. 左側メニューの「Pages」をクリック
2. 「Source」セクションで以下を設定：
   - **Source**: 「GitHub Actions」を選択
   
### 3. 設定を保存
- 設定が自動的に保存されます
- GitHub Actions のワークフローが再度実行されるのを待つか、手動で再実行

### 4. 再度ビルドを実行
1. 「Actions」タブに移動
2. 失敗したワークフローを選択
3. 「Re-run all jobs」をクリック

## 代替案（GitHub Actions を使わない場合）

もしGitHub Actionsを使わずにNetlifyでホスティングする場合：

1. `.github/workflows` ディレクトリを削除
2. Netlifyの自動デプロイ設定を使用

## 確認事項

- リポジトリが公開（Public）になっているか確認
- プライベートリポジトリの場合、GitHub Pagesを使用するには有料プランが必要

これらの設定を行うことで、GitHub ActionsのSetup Pagesエラーが解消されます。
