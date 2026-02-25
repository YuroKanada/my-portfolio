+++
title = "[poster]:第17回データ工学と情報マネジメントに関するフォーラム"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2025-03-04T09:00:00+09:00
lastmod = 2025-03-04T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["disentangled-representation", "embedding"]
pub_type = "poster"

# 表示用メタデータ（公開制御とは分離）
event_name = "第17回データ工学と情報マネジメントに関するフォーラム（DEIM 2025）"
event_date = 2025-03-04
venue = "福岡国際会議場"
presentation_id = "7E-01"
event_url = "https://pub.confit.atlas.jp/ja/event/deim2025/presentation/7E-01"

# 研究情報
authors = ["金田悠路", "藤田澄男", "莊司慶行"]
my_role = "first_author"
topic = "Disentangled Representation"

# 成果物リンク
paper_url = ""
poster_pdf = "./DEIM2025_poster.pdf"
code_url = ""
+++

<iframe
  src="./DEIM2025_poster.pdf"
  width="100%"
  height="900"
  style="border: 1px solid #ddd; border-radius: 8px;">
</iframe>

## 概要
第17回データ工学と情報マネジメントに関するフォーラムにて、

**「レビューデータからの各次元が意味を持つDisentangledな映画のベクトル表現の獲得」**

というタイトルでポスター発表しました。

本ポスターでは、文書埋め込みにおける「各次元の意味性」に着目し、  
Disentangled Representation の獲得を目的としたエンコーダ設計について紹介した。  
特に、従来のembeddingが各次元の解釈可能性を持たない点を課題として提示し、次元ごとに独立した意味を持つ文書表現を獲得する枠組みについて議論した。

映画レビューデータを用いた評価結果や、各次元の独立性を促進するための設計上の工夫についてポスター形式で整理し、参加者との議論を通じて、解釈可能な文書表現の有効性や今後の拡張可能性について多くの示唆を得た。

ポスター発表では、埋め込み空間の解釈可能性や応用可能性に関する質問が多く寄せられ、検索や推薦への応用に関する具体的な議論を行うことができた。
## 発表・投稿情報

- 種別: `{{< param pub_type >}}`
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 日付: {{< param event_date >}}
- 発表ID: {{< param presentation_id >}}
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})



## 成果物

- [発表ポスター]({{< param poster_pdf >}})

## 受賞
本ポスターは、👑**優秀インタラクティブ賞**を受賞しました。