# リモートリポジトリ接続ガイド

GitHubなどのリモートリポジトリに接続するときの手順です。
外部サービスに関わるため、Codexはユーザーから明示的に依頼されるまでリモート作成、接続、pushを行いません。

## 事前確認

- ローカルGitが初期化済みである
- 初回コミットが作成済みである
- `git status --short` が空である
- `npm.cmd run build` が成功する
- `npm.cmd test` が成功する
- `dist/`、`node_modules/`、`*.tsbuildinfo` がコミット対象外である

## リモートURLを用意する

GitHubなどで空のリポジトリを作成し、リモートURLを用意します。

例:

```text
https://github.com/USER/REPO.git
```

または:

```text
git@github.com:USER/REPO.git
```

## 接続コマンド

```bash
git remote add origin <REMOTE_URL>
git remote -v
```

`<REMOTE_URL>` は実際のリモートURLに置き換えます。

## 初回push

```bash
git push -u origin main
```

pushは外部サービスへコードを送る操作なので、Codexはユーザー確認なしでは実行しません。

## Codexへ依頼するときの例

```text
目的：
このプロジェクトをGitHubのリモートリポジトリへ接続したい。

現状：
ローカルGitの初回コミットは作成済み。

今回やってほしいこと：
次のURLをoriginに設定し、mainブランチを初回pushしてください。
<REMOTE_URL>

やってはいけないこと：
別のリポジトリURLへpushしないでください。

完了条件：
git remote -v でURLが確認でき、git status --short が空であること。

報告してほしいこと：
remote設定、push結果、現在のブランチ。
```

## 注意点

- リモートURLはユーザーが指定する
- private/publicの設定はリモート作成時にユーザーが判断する
- 本番URLやアフィリエイトURLとは別の話として扱う
- 認証が必要な場合はユーザーがログインする
