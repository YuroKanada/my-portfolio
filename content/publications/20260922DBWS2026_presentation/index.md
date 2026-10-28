+++
title = "東海関西データベースワークショップ 2026"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2026-09-22T09:00:00+09:00
lastmod = 2026-10-28T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["LoRA", "Model Retrieval"]
pub_type = "poster"

# 表示用メタデータ（公開制御とは分離）
event_name = "東海関西データベースワークショップ 2026（DBWS 2026）"
event_date = 2026-09-22
venue = "静岡大学浜松キャンパス"
presentation_id = "8-2"
event_url = "https://dbws2026.github.io/"

# 研究情報
authors = ["金田悠路"]
my_role = "first_author"
topic = "LoRA Retrieval"

# 成果物リンク
paper_url = ""
poster_pdf = "./DBWS2026_poster.pdf"
code_url = ""
+++

<iframe
  src="./DBWS2026_poster.pdf"
  width="100%"
  height="900"
  style="border: 1px solid #ddd; border-radius: 8px;">
</iframe>

## 概要
関西・東海データベース・ワークショップ2026（DBWS2026）にて、

**「相対的に固有な変換特徴の言語化による自然言語クエリからの内部ウェイトによる画風変換LoRAモデル検索」**

というタイトルでポスター発表しました。

DBWS2026は、関西・東海エリアの大学が集まり、データベースおよび情報アクセス技術に関する研究成果をポスター形式で発表・議論する学術イベントである。

本研究では、WebDB2026での発表同様、「柔らかな水彩画風にしたい」といった自然言語の要望から、対応する画風変換LoRAを検索する手法を提案した。  
既存の検索がモデル名やタグなどのメタデータに依存するのに対し、LoRAが画像に与える変換特徴をVLMとLLMで言語化し、そのテキストとLoRAの内部ウェイトを対応付ける。

生成した自然言語クエリとLoRA内部ウェイトを共通の埋め込み空間で比較することで、メタデータに依存しないLoRA検索を実現した。  

ポスター発表では、変換特徴の抽出方法や自然言語によるモデル検索の応用について議論し、今後の研究につながる意見をいただきました。

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


<!-- ## 受賞
本ポスターは、👑**優秀賞**を受賞しました。 -->