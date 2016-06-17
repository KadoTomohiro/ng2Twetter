# ng2Twitter

Angular2でTwitterクライアントを作ってみる

## usage

1. Clone this repository.
```bash
$ git clone this repository
$ npm install
```
2. Add config file.

`./config/default.json`
```json
{
  "twitter_keys": {
    "consumer_key": "{consumer_ksy}",
    "consumer_secret": "{consumer_secret}",
    "access_token_key": "{access_token_key}",
    "access_token_secret": "{access_token_secret}p"
  }
}
```
3. Run
```bash
$ npm start
```

## やってみたこと

* Angular2 rc2
* Angular2 RouterV3 alpha-6
* ng2-bootstrap
* node/express経由でのTwitterAPI呼び出し
* service作成
* component作成
* componentのネスト
* Rxjsでの配列検索
