+++
title = "[paper]:WebDB夏のワークショップ2025"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2025-09-16T09:00:00+09:00
lastmod = 2025-09-16T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["LoRA", "embedding"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "WebDB夏のワークショップ2025"
event_date = 2025-09-16
venue = "アクトシティ浜松コングレスセンター"
presentation_id = "3B-2"
event_url = "https://db-event.jpn.org/webdbw2025/program/"

# 研究情報
authors = ["金田悠路", "大江優真", "ファム・フーロン", "加藤誠", "大島裕明", "藤田澄男", "莊司慶行"]
my_role = "first_author"
topic = "LoRA Embedding"

# 成果物リンク
paper_url = "https://ipsj.ixsq.nii.ac.jp/records/2004152"
poster_pdf = ""
code_url = ""
+++

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/9623c5fcaa044d6bb64f2ce5ae81e95f?slide=1" title="画風変換LoRAの内部パラメータによるモデルの埋め込み表現の獲得" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

## 概要
WebDB夏のワークショップ2025にて、

**「画風変換LoRAの内部パラメータによるモデルの埋め込み表現の獲得」**

というタイトルで論文を発表しました。

WebDB夏のワークショップ2025は、データベース分野の主要な研究集会である研究発表会である。

本発表では、画風変換LoRAの内部パラメータからモデルの埋め込み表現を獲得する手法を提案した。 

近年、多数のLoRAモデルが共有・公開されているが、それらは主にメタデータ（タグや説明文）に基づいて管理されている。
しかし、内部パラメータ自体を直接活用し、モデル間の構造的特徴を反映したベクトル表現を獲得する研究は十分に行われていない。 

本研究では、LoRAの重み行列を入力とし、次元圧縮および距離学習を組み合わせることで、LoRAモデルを低次元ベクトルとして表現する手法を設計した。  
具体的には以下の3点を工夫した。

- パラメータのFlat化と構造を保った前処理 
- PCAによる次元圧縮 
- Triplet Transformer Encoderを用いた距離学習 

これにより、LoRAモデル間の類似度比較、クラスタリング、ランキングが可能となる埋め込み空間の構築を目指した。  
評価では、タグ情報に基づく類似関係との整合性、および人間による主観評価との一致度を検証した。
## 発表・投稿情報

- 種別: `{{< param pub_type >}}`
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 日付: {{< param event_date >}}
- 発表ID: {{< param presentation_id >}}
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})



## 成果物

- [論文PDF]({{< param paper_url >}})


## 受賞
本発表は、👑**学生奨励賞**を受賞しました。