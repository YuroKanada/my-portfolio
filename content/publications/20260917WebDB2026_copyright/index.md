+++
title = "画風変換LoRAの内部パラメータによる著作権保護支援のための学習画像由来LoRA検索"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2026-09-17T09:00:00+09:00
lastmod = 2026-09-25T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["Low-Rank Adaptation", "Model Retrieval", "Cross-Modal Retrieval", "Training Data Attribution"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "WebDB夏のワークショップ2026"
event_date = 2026-09-17
venue = "大阪公立大学 りんくうキャンパス"
presentation_id = "3B-3"
event_url = "https://www.ipsj.or.jp/kenkyukai/event/dbs183ifat164.html"

# 研究情報
authors = ["金田悠路", "莊司慶行"]
my_role = "first_author"
topic = "Training Image Attribution for LoRA"

# 成果物リンク（公開後に追記）
paper_url = ""
slide_url = ""
code_url = ""
+++

## 発表スライド

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/55ad5624302242b38495b3fb621612bf" title="2026_09_15_WebDB2026個人研究.pdf" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

## 概要

WebDB夏のワークショップ2026にて、

**「画風変換LoRAの内部パラメータによる著作権保護支援のための学習画像由来LoRA検索」**

というタイトルで論文を発表しました。


本発表では、1枚の画像を入力として、その画像を学習に使用した可能性の高いLoRAモデルを大量の候補からランキングする手法を提案した。  
近年、多数のLoRAが共有・公開されている一方で、公開されたLoRAが特定の作品を学習に利用しているかを、モデル名やタグなどの情報だけから確認することは難しい。  
そこで本研究では、LoRAの内部ウェイトそのものを利用して、監査対象となるLoRA候補を効率的に絞り込む検索問題として定式化した。    

本手法では、画像とLoRA内部ウェイトをそれぞれベクトル化し、同一の共通埋め込み空間上で比較できるTwo-Tower型アーキテクチャを構築した。  
画像を学習データに含むLoRAを正例、それ以外を負例として対照学習することで、関連する画像とLoRAが埋め込み空間上で近接するよう学習する。  
検索時には候補LoRAを事前にベクトル化しておき、入力画像との類似度からランキングするため、候補ごとに画像生成を行う必要がない。    

具体的には以下の3点を工夫した。  
- OpenCLIPを用いた入力画像のベクトル表現  
- レイヤ構造を保持したLayer-wise LoRA Encoderによる内部ウェイトのベクトル化  
- 複数の正例を扱える双方向Multi-Positive対照学習による画像とLoRAの対応付け  

これにより、LoRAのメタデータや生成画像を利用せず、内部ウェイトのみから新しいLoRAを検索対象へ追加できる検索基盤を目指した。  
また、本手法は著作権侵害や学習利用を直接断定するものではなく、大規模なLoRA群から詳細な監査を行う候補を絞り込む一次検索として位置付けている。

評価では、西洋美術画像から構築したLoRAを用い、入力画像を学習に含むLoRAの検索精度、新規LoRAを追加する際の登録効率、複数アーティストの作品が部分的に混入したLoRAに対する検索性能を検証した。  
特に、学習時に使用していないアーティストから構築したLoRAや、対象画像が学習データの一部のみを占める条件でも検索可能であることを確認し、生成画像に基づいて候補を検索する手法と比較して、内部ウェイトを直接利用することの有効性と大規模LoRA共有環境への適用可能性を示した。

## 発表・投稿情報

- 種別: `{{< param pub_type >}}`
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 日付: {{< param event_date >}}
- 発表ID: {{< param presentation_id >}}
- 著者: 金田 悠路，莊司 慶行
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})

## 成果物

<!-- 論文PDF、発表スライド、実装コードなどのリンクをここに追加 -->
