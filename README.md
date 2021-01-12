# PARAMS

## How to

```bash
# マイグレーションに必要
$ npm install -g sequelize-cli

```

### 開発環境の構築

```bash
# リモートリポジトリからソースを取得
$ git clone git@github.com:kmasuda1986/params.git
$ cd params
$ git checkout develop

# 初期設定
$ npm install
$ npx sequelize-cli init
$ docker-compose up -d

# phpMyAdminの接続確認
# http://localhost:18080/
# パスワードは.envを確認

```

### Migration

```bash
# マイグレーション実行
$ npx sequelize-cli db:migrate --env development

# テーブルを削除して再度マイグレーション実行
$ npx sequelize-cli db:migrate:undo:all --env development

# ロールバック
$ npx sequelize-cli db:migrate:undo --env development

# 一つ前に戻す
$ npx sequelize-cli db:migrate:undo　--env development

# Seederのみを実行
$ npx sequelize-cli db:seed:all --env development

# Model作成コマンド (modelとmigrationが作成される)
$ npx sequelize-cli model:generate --name users --attributes name:string

# Seeder作成コマンド
$ npx sequelize-cli seed:generate --name users

$ sequelize db:drop # dbを落とす
$ sequelize db:create # dbを作成
$ sequelize db:migrate # migrate実行
$ sequelize db:migrate:undo:all # 実行されたmigrateを全て取り消し
$ sequelize db:seed:all # 設定されていたseedファイルをmigrate
$ seqeulize db:seed:undo:all # seedファイルのmigrateを全て取り消し

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
