# MongoDBの操作学習用アプリ
- 以下のサイトを参考
  - https://qiita.com/hairui/items/5e3c4de1f7e9dbf14d16

## 注意点
- mongodbのモジュールをインストールする手順では、「package.json」の編集は行わず、npmで `mongodb` と `monk` をインストールする。
  ```shall
  $ npm install mongodb
  $ npm install monk
  ```
- Debug用に `nodemon` をインストールする。
  ```shell
  npm install nodemon
  ```
  