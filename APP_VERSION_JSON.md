# `app-version.json` 運用ガイド

LimitBoxアプリは、次のURLから起動時にバージョン情報と重要なお知らせを取得します。

```text
https://limitbox-lp.vercel.app/app-version.json
```

このファイルでは、対応可能な最低アプリバージョン、強制アップデート、App Storeへのリンク、重要なお知らせを設定できます。

## ファイルの配置

設定ファイルは、`limitbox-lp`リポジトリ直下の`app-version.json`です。

```text
limitbox-lp/
├── app-version.json
└── public/
    └── ImportantNotificationVideo.mp4  # 任意
```

Viteのビルド時に、`app-version.json`は`dist/app-version.json`へコピーされます。`public`内の動画も、存在する場合は`dist/ImportantNotificationVideo.mp4`へコピーされます。

## JSONの全体例

```json
{
  "minimumSupportedVersion": "1.8.0",
  "latestVersion": "1.8.0",
  "forceUpdate": false,
  "message": "最新版にアップデートしてください。",
  "storeURL": "https://apps.apple.com/us/app/limitbox/id6762798328",
  "importantNotification": {
    "targetVersion": "1.8.0",
    "message": "【重要】新しい機能を追加しました。\n詳しい内容をここに記載します。"
  }
}
```

文字列内で改行する場合は、実際の改行ではなく`\n`を記述してください。

## プロパティ一覧

| プロパティ | 型 | 内容 |
| --- | --- | --- |
| `minimumSupportedVersion` | 文字列 | このバージョン未満のアプリを強制アップデートの対象にします。 |
| `latestVersion` | 文字列 | 現在の最新バージョンです。`forceUpdate`が`true`の場合、このバージョン未満を強制アップデートの対象にします。 |
| `forceUpdate` | 真偽値 | `true`の場合、`latestVersion`未満のアプリで強制アップデート画面を表示します。 |
| `message` | 文字列 | 強制アップデート画面に表示するメッセージです。重要なお知らせの本文とは別です。 |
| `storeURL` | 文字列 | 強制アップデート画面から開くApp StoreのURLです。 |
| `importantNotification` | オブジェクトまたは`null` | 重要なお知らせの設定です。省略または`null`の場合は表示しません。 |
| `importantNotification.targetVersion` | 文字列 | お知らせを利用可能にする最初のアプリバージョンです。 |
| `importantNotification.message` | 文字列 | 重要なお知らせ画面に表示する本文です。空文字または空白のみの場合、お知らせ自体を表示しません。 |

ルート階層のプロパティはアプリ側では省略可能ですが、運用時の見落としを防ぐため、通常はすべて記載してください。`importantNotification`をオブジェクトとして記載する場合、`targetVersion`と`message`は両方必要です。

## バージョンの判定方法

バージョンは、ピリオドで区切った数値として比較されます。

- `1.8.1`は`1.8.0`より新しい
- `1.8`と`1.8.0`は同じ
- `1.6.10`は`1.6.3`より新しい

強制アップデートは、次のどちらかを満たすと発動します。

1. アプリのバージョンが`minimumSupportedVersion`未満
2. `forceUpdate`が`true`で、アプリのバージョンが`latestVersion`未満

`forceUpdate`が`false`でも、`minimumSupportedVersion`未満のアプリは強制アップデートの対象になります。設定変更時は特に注意してください。

## 重要なお知らせの表示条件

重要なお知らせは、次の条件をすべて満たす場合に利用できます。

1. `importantNotification`が存在する
2. `importantNotification.message`が空ではない
3. アプリのバージョンが`targetVersion`以上

たとえば`targetVersion`が`1.8.0`の場合、`1.7.4`では表示されず、`1.8.0`以降で表示できます。一度対象になったお知らせは、`1.8.1`など後のバージョンでも引き続き開けます。

既存ユーザーには、対象のお知らせを初めて取得したときに一度だけ自動表示します。閉じた後も、アプリ内の重要なお知らせアイコンから再度開けます。新規インストールでは自動表示せず、アイコンから開けます。

お知らせを非表示にする場合は、次のいずれかにします。

```json
"importantNotification": null
```

または`importantNotification`自体を削除します。`message`を空にした場合も、お知らせとアイコンは表示されません。

```json
"importantNotification": {
  "targetVersion": "1.8.0",
  "message": ""
}
```

## お知らせ動画の設定

動画はJSON内でURLを指定せず、次の固定ファイル名で管理します。

```text
public/ImportantNotificationVideo.mp4
```

重要なお知らせが表示可能で、配信先に動画が存在する場合は、説明文の下で無音・リピート再生されます。動画が存在しない、取得できない、または再生できない場合は動画領域を表示しません。

動画を追加・更新する手順は次のとおりです。

1. `public/ImportantNotificationVideo.mp4`を配置または差し替える
2. `app-version.json`の`importantNotification`を設定する
3. ビルドしてVercelへデプロイする
4. 配信URLで動画を確認する

```text
https://limitbox-lp.vercel.app/ImportantNotificationVideo.mp4
```

動画を表示しない場合は、`public/ImportantNotificationVideo.mp4`を配置しないでください。動画ファイルが存在していても、`importantNotification.message`が空なら、お知らせ自体が非表示になるため動画も表示されません。

## 設定例

### 通常運用: 強制アップデートなし、お知らせあり

```json
{
  "minimumSupportedVersion": "1.7.4",
  "latestVersion": "1.8.0",
  "forceUpdate": false,
  "message": "最新版にアップデートしてください。",
  "storeURL": "https://apps.apple.com/us/app/limitbox/id6762798328",
  "importantNotification": {
    "targetVersion": "1.8.0",
    "message": "【重要】新しい機能を追加しました。"
  }
}
```

この例では、`1.7.4`以上のアプリは引き続き利用できます。重要なお知らせは`1.8.0`以上で表示できます。

### お知らせなし

```json
{
  "minimumSupportedVersion": "1.7.4",
  "latestVersion": "1.8.0",
  "forceUpdate": false,
  "message": "最新版にアップデートしてください。",
  "storeURL": "https://apps.apple.com/us/app/limitbox/id6762798328",
  "importantNotification": null
}
```

### 最低対応バージョンを使った強制アップデート

```json
{
  "minimumSupportedVersion": "1.8.0",
  "latestVersion": "1.8.0",
  "forceUpdate": false,
  "message": "重要な更新があります。App Storeから最新版へアップデートしてください。",
  "storeURL": "https://apps.apple.com/us/app/limitbox/id6762798328",
  "importantNotification": null
}
```

この例では、`1.8.0`未満のアプリで強制アップデート画面を表示します。

### 最新版への一律強制アップデート

```json
{
  "minimumSupportedVersion": "1.7.4",
  "latestVersion": "1.8.0",
  "forceUpdate": true,
  "message": "最新版へのアップデートが必要です。",
  "storeURL": "https://apps.apple.com/us/app/limitbox/id6762798328",
  "importantNotification": null
}
```

この例では、`1.8.0`未満のアプリで強制アップデート画面を表示します。

## 更新とデプロイ

1. `app-version.json`を編集する
2. 必要に応じて`public/ImportantNotificationVideo.mp4`を配置または差し替える
3. JSONの構文を確認する

```sh
jq empty app-version.json
```

4. 本番ビルドを確認する

```sh
npm run build
```

5. 生成物を確認する

```sh
jq . dist/app-version.json
ls -lh dist/ImportantNotificationVideo.mp4
```

動画を使用しない場合、5番目の動画確認は不要です。その後、通常の手順でコミット、プッシュ、Vercelへのデプロイを行います。

## デプロイ後の確認

JSONが正しく配信されていることを確認します。

```sh
curl -fsSL https://limitbox-lp.vercel.app/app-version.json | jq .
```

動画を配置した場合は、レスポンスが成功し、`Content-Type`が`video/mp4`になっていることを確認します。

```sh
curl -I https://limitbox-lp.vercel.app/ImportantNotificationVideo.mp4
```

最後に、対象バージョンのiPhone版とMac版で次を確認してください。

- 強制アップデートの発動条件が意図どおりである
- 重要なお知らせアイコンが表示される
- 本文が正しく表示される
- 動画を配置した場合のみ、本文の下で無音・リピート再生される
- `importantNotification.message`を空にすると、お知らせとアイコンが消える

## 注意事項

- JSONの構文が壊れている場合、アプリは設定を読み込めず、強制アップデートと重要なお知らせの両方が機能しません。
- `importantNotification`内の`targetVersion`または`message`が欠けている場合も、JSON全体の読み込みに失敗します。
- 通信エラー、タイムアウト、JSONの読み込み失敗が発生しても、アプリは通常起動を継続します。
- `message`と`importantNotification.message`は入力内容をそのまま表示します。言語の自動切り替えは行わないため、必要な言語を本文内に記載してください。
- 強制アップデートを有効にする前に、指定したバージョンのビルドがApp Storeで選択・配信可能になっていることを確認してください。
