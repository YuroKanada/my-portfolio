+++
title = "相対的に固有な変換特徴の言語化による自然言語クエリからの画風変換LoRAモデル検索"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2026-09-17T09:00:00+09:00
lastmod = 2026-09-25T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["Low-Rank Adaptation", "Model Retrieval", "Natural Language Query"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "WebDB夏のワークショップ2026"
event_date = 2026-09-17
venue = "大阪公立大学 りんくうキャンパス"
presentation_id = "3B-2"
event_url = "https://www.ipsj.or.jp/kenkyukai/event/dbs183ifat164.html"

# 研究情報
authors = ["金田悠路", "杉田大知", "大江優真", "ファム フーロン", "加藤誠", "大島裕明", "藤田澄男", "莊司慶行"]
my_role = "first_author"
topic = "Natural Language Query-based LoRA Retrieval"

# 成果物リンク（公開後に追記）
paper_url = ""
slide_url = ""
code_url = ""
+++

## 発表スライド

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/9be4782c759b437d9b8c40c74d3ebf4b" title="2026_09_15_WebDB_LY研究.pdf" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>
## 概要

WebDB夏のワークショップ2026にて、

**「相対的に固有な変換特徴の言語化による自然言語クエリからの画風変換LoRAモデル検索」**

というタイトルで論文を発表しました。

本発表では、「柔らかな水彩画風にしたい」といった自然言語による変換要望から、対応する画風変換LoRAを検索する手法を提案した。　　
既存のLoRA検索はモデル名やタグ、説明文などのメタデータに依存することが多く、利用者が求める視覚的な変換を自然言語で表現した場合に、適切なLoRAを直接検索することは難しい。　　
そこで本研究では、LoRAが画像に与える変換特徴を自然言語として抽出し、そのテキストとLoRA内部ウェイトを対応付けることで、メタデータに依存しない検索を目指した。

具体的には、対象LoRAによる変換画像だけを見るのではなく、他のLoRAによる変換結果との比較と、複数の元画像に対する反復観測を組み合わせることで、元画像の内容ではなく対象LoRAに特徴的な変換を抽出する。　　
VLMで画像ごとの特徴を観測し、LLMで複数画像に共通する特徴を集約した後、さまざまな検索意図を想定した自然言語クエリへ変換する。    

具体的には以下の3点を工夫した。　　
- 他のLoRAとの比較による相対的な変換特徴の抽出　　
- 複数の元画像から得た観測をLLMで統合し、LoRA固有の特徴を抽出　　
- 視覚属性・タグ・用途・印象など8種類の検索クエリへの展開 　　
さらに、生成した検索クエリをOpenCLIP、LoRA内部ウェイトをLayer-wise LoRA Encoderでベクトル化し、同一LoRAに対応するテキストと内部ウェイトが近づくように対照学習することで、自然言語とLoRAを直接比較可能な共通埋め込み空間を構築した。

評価では、800件の画風変換LoRAを用いて、生成した変換特徴テキストの識別性・多様性、正解LoRAを定めた検索精度、正解を事前に定めないオープンエンドな変換要望に対する検索結果の適合性を検証した。　　
提案した言語化方法は、直接的に変換画像を説明する方法と比較してLoRA間を区別しやすく、多様な検索表現を生成でき、生成されたテキストを用いることで自然言語からのLoRA検索性能が大きく向上することを確認した。

## 発表・投稿情報

- 種別: `{{< param pub_type >}}`
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 日付: {{< param event_date >}}
- 発表ID: {{< param presentation_id >}}
- 著者: 金田 悠路，杉田 大知，大江 優真，ファム フーロン，加藤 誠，大島 裕明，藤田 澄男，莊司 慶行
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})

<!-- ## 成果物 -->

## 受賞
本発表は、👑**学生奨励賞**を受賞しました。
