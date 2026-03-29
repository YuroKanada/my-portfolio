# my-portfolio

研究・発表実績をまとめた、Hugo製のポートフォリオサイトです。  
GitHub Pages で公開しています。

- 公開URL: https://yurokanada.github.io/my-portfolio/
- 使用テーマ: `PaperMod`
- 主な掲載内容: `About / Projects / Research / Awards / Publications / Posts`

## 技術スタック

- Static Site Generator: `Hugo`
- Theme: `PaperMod`（git submodule）
- Hosting: `GitHub Pages`
- CI/CD: `GitHub Actions`（`.github/workflows/deploy.yml`）

## リポジトリ構成

```text
.
├─ content/            # ページ本文（Markdown）
│  ├─ about.md
│  ├─ awards/
│  ├─ posts/
│  ├─ projects/
│  ├─ publications/
│  └─ research/
├─ themes/PaperMod/    # テーマ（submodule）
├─ static/             # 静的ファイル
├─ assets/             # 追加アセット
├─ hugo.toml           # サイト設定
└─ .github/workflows/deploy.yml
```

<!-- ## ローカル開発

1. リポジトリを取得

```bash
git clone --recurse-submodules https://github.com/YuroKanada/my-portfolio.git
cd my-portfolio
```

2. 開発サーバー起動

```bash
hugo server -D
```

3. ブラウザ確認

```text
http://localhost:1313/my-portfolio/
```

## ビルド

```bash
hugo --minify --baseURL "https://yurokanada.github.io/my-portfolio/"
```

生成物は `public/` に出力されます。

## コンテンツ追加の基本

- 通常ページ: `content/` 以下に Markdown を追加
- 発表実績: `content/publications/<YYYYMMDD_name>/index.md` を追加
- 下書き運用: Front Matter の `draft = true/false` で公開制御

`Publications` では、以下のようなメタデータを Front Matter に持たせる構成です。

- `pub_type`
- `event_name`
- `event_date`
- `venue`
- `presentation_id`
- `authors`
- `paper_url`
- `code_url`

## デプロイ

`main` ブランチへの push をトリガーに GitHub Actions が走り、GitHub Pages へ自動デプロイされます。

1. `build` ジョブで Hugo ビルド
2. `public/` を artifact 化
3. `deploy` ジョブで Pages 反映

## メモ

- サイト設定は [`hugo.toml`](./hugo.toml) を参照
- テーマ更新時は submodule の更新を忘れないこと -->
