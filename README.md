## 参考文献
### 公式HP
https://github.com/google/clasp/blob/master/README.md

### 参考URL
https://zenn.dev/futahei/articles/a6fe22c0efbb5e

## npm 初期インストール
`npm i`

## 認証 ( google ログイン )
`npx clasp login`

## google scriptにプロジェクト追加 
`npx clasp create --title gas-ts-starter`
`Create which script?` では `standalone` を選択

## 既存プロジェクトに割当て
`copy .clasp-default.json .clasp.json`
"scriptId" を割当てるプロジェクトのscript idに更新

### clasp 初回の場合は 権限設定が必要
`https://script.google.com/home/usersettings` を開き権限有効にする

## フォルダ作成
`mkdir dist`
`mkdir src`

## git 初期化
`git init`

### テスト
`npm run test`

### ビルド
`npm run build`

### デプロイ対象ファイル確認
`npx clasp status`

### デプロイ
`npm run push`
