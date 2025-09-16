# SSGform 設定ガイド

このガイドでは、SSGformを使用してお問い合わせフォームとお見積りフォームを設定する方法を説明します。

## SSGformとは

SSGformは、静的サイト向けのフォーム送信サービスです。フォーム送信の処理を簡単に実装でき、送信者への自動返信メール機能も提供しています。

## セットアップ手順

### 1. SSGformアカウントの作成

1. [SSGform公式サイト](https://ssgform.com/)にアクセス
2. アカウントを作成してログイン
3. ダッシュボードから新しいフォームを作成

### 2. フォームの作成

#### お問い合わせフォームの作成

1. ダッシュボードで「新規フォーム作成」をクリック
2. フォーム名を「マリンブルー お問い合わせフォーム」に設定
3. 以下のフィールドを追加：
   - name（お名前）
   - email（メールアドレス）
   - phone（電話番号）
   - subject（お問い合わせ内容）
   - message（メッセージ）

#### お見積りフォームの作成

1. ダッシュボードで「新規フォーム作成」をクリック
2. フォーム名を「マリンブルー お見積りフォーム」に設定
3. 以下のフィールドを追加：
   - plan（ご希望のプラン）
   - name（お名前）
   - email（メールアドレス）
   - phone（電話番号）
   - participants（参加人数）
   - preferredDate（ご希望日）
   - requests（ご要望・ご質問）

### 3. 自動返信メールの設定

#### お問い合わせフォーム用

1. フォームの設定画面で「自動応答メール設定」をONに変更
2. 以下の項目を設定：

**自動応答メール送信元メールアドレス:** info@marineblue.jp
**自動応答メール送信元メールアドレス表示名:** マリンブルー
**自動応答メール件名:** 【マリンブルー】お問い合わせありがとうございます
**自動応答メール上部文章:**
```
{{name}} 様

この度は、マリンブルー公式サイトよりお問い合わせをいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました：
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**自動応答メール下部文章:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

担当者より2営業日以内にご連絡させていただきます。
お急ぎの場合は、お電話（090-6845-2863）にてお問い合わせください。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
マリンブルー
〒静岡県熱海市
電話：090-6845-2863
メール：info@marineblue.jp
ウェブサイト：https://marineblue.jp

※このメールは自動配信されています。
※このメールに心当たりがない場合は、お手数ですが削除をお願いいたします。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### お見積りフォーム用

同様に、お見積りフォーム用の自動返信メールも設定します。

### 4. 通知メールの設定

管理者向けの通知メールも設定できます：

**通知先メールアドレス:** info@marineblue.jp
**件名:** 【マリンブルー公式サイト】新しいお問い合わせがあります

### 5. エンドポイントURLの取得

1. 各フォームの設定画面で「エンドポイント」タブをクリック
2. 表示されるエンドポイントURLをコピー
3. 例：`https://api.ssgform.com/submit/YOUR_FORM_ID`

### 6. コードの更新

取得したエンドポイントURLを使って、以下のファイルを更新してください：

#### ContactForm.jsx（84行目付近）
```javascript
// SSGformに送信
const response = await fetch('YOUR_SSGFORM_ENDPOINT_URL', {
  // ↑ ここに実際のお問い合わせフォーム用エンドポイントURLを設定
  method: 'POST',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  body: params
})
```

#### EstimateForm.jsx（85行目付近）
```javascript
// SSGformに送信
const response = await fetch('YOUR_SSGFORM_ESTIMATE_ENDPOINT_URL', {
  // ↑ ここに実際のお見積りフォーム用エンドポイントURLを設定
  method: 'POST',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  body: params
})
```

### 7. DNS設定（独自ドメインを使用する場合）

独自ドメインのメールアドレス（info@marineblue.jp）を送信元として使用する場合、DNS設定が必要です：

1. SSGformの管理画面で提供されるSPFレコードを確認
2. ドメインのDNS設定にSPFレコードを追加
3. 例：`v=spf1 include:ssgform.com ~all`

### 8. テストと確認

1. ローカル環境でフォームをテスト送信
2. 管理者宛てのメールが届くことを確認
3. 送信者宛ての自動返信メールが届くことを確認
4. 迷惑メールフォルダも確認

### トラブルシューティング

**メールが届かない場合：**
- SSGformダッシュボードで送信ログを確認
- エンドポイントURLが正しいか確認
- DNS設定が完了しているか確認
- 迷惑メールフォルダを確認

**エラーが発生する場合：**
- ブラウザのコンソールでエラーメッセージを確認
- フィールド名がSSGformの設定と一致しているか確認
- CORS設定が適切か確認

### セキュリティ対策

1. **スパム対策：** SSGformの管理画面でスパムフィルターを有効化
2. **送信制限：** 必要に応じて同一IPからの送信制限を設定
3. **SSL：** HTTPSでの通信を確保

### 注意事項

- SSGformの無料プランには送信数の制限があります
- 本番環境では、エンドポイントURLを環境変数で管理することを推奨します
- 定期的にSSGformダッシュボードで送信状況を確認してください

### 環境変数を使った実装（推奨）

本番環境では、エンドポイントURLを環境変数で管理することを推奨します：

#### .envファイルの作成
```
# SSGform設定
VITE_SSGFORM_CONTACT_ENDPOINT=https://api.ssgform.com/submit/YOUR_CONTACT_FORM_ID
VITE_SSGFORM_ESTIMATE_ENDPOINT=https://api.ssgform.com/submit/YOUR_ESTIMATE_FORM_ID
```

#### ContactForm.jsxの修正例
```javascript
const response = await fetch(import.meta.env.VITE_SSGFORM_CONTACT_ENDPOINT, {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  body: params
})
```

#### EstimateForm.jsxの修正例
```javascript
const response = await fetch(import.meta.env.VITE_SSGFORM_ESTIMATE_ENDPOINT, {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  body: params
})
```

#### Netlifyでの環境変数設定
1. Netlifyダッシュボードにログイン
2. サイトの設定ページへ移動
3. 「Environment variables」セクションで上記の環境変数を追加
