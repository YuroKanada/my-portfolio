+++
title = "The 27th International Conference on Information Integration and Web Intelligence"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2025-12-08T09:00:00+09:00
lastmod = 2025-12-08T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["disentangled-representation", "embedding"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "The 27th International Conference on Information Integration and Web Intelligence（iiWAS 2025）"
event_date = 2025-12-08
venue = "くにびきメッセ"
presentation_id = "Track2 iiWAS-1"
event_url = "https://www.iiwas.org/conferences.html"

# 研究情報
authors = ["Yuro Kanada", "Sumio Fujita", "Yoshiyuki Shoji"]
my_role = "first_author"
topic = "Disentangled Representation"

# 成果物リンク
paper_url = "https://dl.acm.org/doi/10.1007/978-3-032-11976-6_5"
poster_pdf = ""
code_url = "https://github.com/YuroKanada/Learning-Disentangled-Document-Representations-Based-on-a-Classical-Shallow-Neural-Encoder"
+++

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/6495f6755ff4402dbfcf29db991a516d?slide=1" title="レビューデータからの各次元が意味を持つ Disentangled な映画のベクトル表現の獲得" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

## 概要
The 27th International Conference on Information Integration and Web Intelligenceにて、

**「Learning Disentangled Document Representations Based on a Classical Shallow Neural Encoder」**

というタイトルで論文を発表しました。

現在、どの機械学習においてもembeddingが当たり前になっています。  
入力データを機械学習モデルが処理できる形に変換するこの仮定に注目すると、embeddingから得られるベクトルの各次元が意味を持っていないという現状があります。  
この現状は、人間がベクトルを解釈不可能、より意味的に踏み込んだベクトル演算ができないという二つの問題を抱えていると考えました。

そこで本研究では、文書をベクトル化した際にその各次元が独立して意味を持つようにする、Disentangled Representationの獲得が可能なエンコーダの作成を行いました。

文書ベクトルの各次元が独立して意味を持つようになれば、文書ベクトルを観点ごとに比較可能になり、人間のあいまいな要望に対する検索も可能になるのではないかと考えています。

評価実験で映画のレビューデータを使用し、一つの映画につく複数のレビューから得られるベクトルを映画ベクトルとして定量評価、被験者評価を行いました。

人生初の国際会議でしたが、発表、質疑含めすべて英語で堂々と発表できました。


## 発表・投稿情報

- 種別: `{{< param pub_type >}}`
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 日付: {{< param event_date >}}
- 発表ID: {{< param presentation_id >}}
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})



## 成果物

- [研究関連の実装コード]({{< param code_url >}})
- [論文PDF]({{< param paper_url >}})
<!-- - ポスター: 該当なし（`poster_pdf`） -->
