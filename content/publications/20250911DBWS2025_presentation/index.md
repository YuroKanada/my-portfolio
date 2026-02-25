+++
title = "[poster]:東海関西データベースワークショップ 2025"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2025-09-11T09:00:00+09:00
lastmod = 2025-09-11T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["LoRA", "embedding"]
pub_type = "poster"

# 表示用メタデータ（公開制御とは分離）
event_name = "東海関西データベースワークショップ 2025（DBWS 2025）"
event_date = 2025-09-11
venue = "同志社大学（今出川キャンパス）良心館ラーニングコモンズ"
presentation_id = "C-4"
event_url = "https://sites.google.com/mil.doshisha.ac.jp/dbws-2025/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0?authuser=0"

# 研究情報
authors = ["金田悠路", "大江優真", "ファム・フーロン", "加藤誠", "大島裕明", "藤田澄男", "莊司慶行"]
my_role = "first_author"
topic = "LoRA Embedding"

# 成果物リンク
paper_url = ""
poster_pdf = "./DBWS2025_poster.pdf"
code_url = ""
+++

<iframe
  src="./DBWS2025_poster.pdf"
  width="100%"
  height="900"
  style="border: 1px solid #ddd; border-radius: 8px;">
</iframe>

## 概要
関西・東海データベース・ワークショップ2025（DBWS2025）にて、

**「画風変換LoRAの内部パラメータによるモデルの埋め込み表現の獲得」**

というタイトルでポスター発表しました。

DBWS2025は、関西・東海エリアの大学が集まり、データベースおよび情報アクセス技術に関する研究成果をポスター形式で発表・議論する学術イベントである。

本ポスターでは、画風変換LoRAの内部パラメータからモデルの埋め込み表現を獲得する手法について紹介した。

近年、多数のLoRAモデルが共有・公開されているが、それらは主にメタデータ（タグや説明文）に基づいて管理されている。一方で、内部パラメータそのものを活用し、モデル間の構造的特徴を反映したベクトル表現を直接獲得する研究はまだ十分に行われていない。

本研究では、LoRAの重み行列を入力とし、次元圧縮と距離学習を組み合わせることで、LoRAモデルを低次元ベクトルとして表現する枠組みを提案した。特に以下の3点に着目して設計を行った。

- パラメータのFlatten化と構造を保った前処理
- PCAによる次元圧縮
- Triplet Transformer Encoderを用いた距離学習

これにより、LoRAモデル間の類似度比較やクラスタリング、ランキングを可能にする埋め込み空間の構築を目指した。

ポスター発表では、内部パラメータに基づくモデル比較の有効性や、タグ情報との整合性について多くの議論を行った。評価では、タグ情報に基づく類似関係との一致度および人間の主観的類似判断との整合性を検証した。
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
本ポスターは、👑**優秀賞**を受賞しました。