## 参考文献
https://zenn.dev/futahei/articles/a6fe22c0efbb5e

## npm 初期インストール
`npm install  -D typescript @google/clasp @types/google-apps-script esbuild esbuils-script esbuild esbuild-gas-plugin`

## tsc初期化
`npx tsc --init`

## 認証 ( google ログイン )
`npx clasp login`

## gas starter
`npx clasp create --title gas-ts-starter`
`Create which script?` では `standalone` を選択

### crasp 初回の場合は 権限設定が必要
`https://script.google.com/home/usersettings` を開き権限有効にする

## フォルダ作成
`mkdir dist`
`mkdir src`

## git 初期化
`git init`

## .gitignore を追加
`.clasp.json` は scriptId を記録しない為にgitから除外する
`echo .clasp.json > .gitignore`
`echo node_modules >> .gitignore`
`echo dist >> .gitignore`
`echo coverage >> .gitignore`

## ビルド設定追加
`build.js` 追加
`package.json` に scripts.build を追加
`.clasp.json` の rootDir を `./dist` に更新

### テスト
`npm run test`

### ビルド
`npm run build`
`npm run watch`

### デプロイ
`npm run push`
