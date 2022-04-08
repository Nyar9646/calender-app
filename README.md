# カレンダーの環境構築

## セットアップ

docker をインストールしたのちに、

```shell
$ make
```

これでもろもろインストールやビルドが終わります。`make`コマンドがない場合は、

```shell
$ npm --prefix ./front install ./front
$ npm --cwd ./front run build
$ npm --prefix ./server install ./server
$ cp ./server/env/env-local ./server/.env
```

の 4 つのコマンドを実行してください。

## サーバーの起動と停止

```shell
$ docker-compose up -d
```

を実行すると[localhost:8080]()にサーバーが立ち上がります。最初はいろいろインストールするので時間がかかると思います。

サーバーを止めたいときは、

```shell
$ docker-compose down
```

と実行すれば ok です。

API ドキュメントは[こちら](./server/README.md)

## フロントの開発をするとき

フロントは`webpack`でビルドしてやる必要があります。

```shell
$ cd front
$ npm run watch
```

とすると、ファイルの変更を検知して自動で差分のビルドが走るようになります。自動でビルドされたものはすぐに docker 内の nginx が配信してくれるので、変更のたびに何かコマンドを打つ必要はありません。

---
Nyar memo

当app
  redux-sample
    Redux 機能を簡易に表現したプロジェクト
    本体と同一の webpack でトランスパイルされる。npm run watch で監視。ビルド後は ./public/ に入る
    サーバは異なる。redux-sample 直下で npm start。コマンド実行後に提示されるローカルのパスで画面を確認

  Calender-app
    コマンドは ./fromt で実行する。
    npm run watch でトランスパイル監視(ソースが変更されれば自動でビルド)。ビルド後は ./front/public/ に入る
    localhost:8080、localhost:8080/api/hc で画面を確認

Redux の特徴
  flux : Action > Dispatcher(伝送・function) > Store > View
