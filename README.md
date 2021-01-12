# params

## How to

```bash
# CLIをインストール
$ npm install -g sequelize-cli

# テーブル作成
$ npx sequelize-cli migration:generate --name Users

# マイグレーション実行
$ npx sequelize-cli db:migrate --env development

# 一つ前に戻す
$ npx sequelize-cli db:migrate:undo　--env development

# ロールバック
$ npx sequelize-cli db:migrate:undo:all --env development

# Seederを作成
$ npx sequelize-cli seed:generate --name users

# Seederを実行
$ npx sequelize-cli db:seed:all --env development

# テーブルを削除して再度マイグレーション実行
$ npx sequelize-cli db:migrate:undo:all --env development
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
