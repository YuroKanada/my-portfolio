+++
title = "33rd International Conference on Multimedia Modeling"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2026-10-20T09:00:00+09:00
lastmod = 2026-10-28T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["Low-Rank Adaptation", "Model Retrieval", "Cross-Modal Retrieval", "Training Data Attribution"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "33rd International Conference on Multimedia Modeling（MMM 2027）"
event_date = 2027-01-05
venue = "Sokha Angkor Resort, Siem Reap, Cambodia"
# presentation_id = "開催前のため未定"
event_url = "https://mmm2027.net/"

# 研究情報
authors = ["Yuro Kanada", "Yoshiyuki Shoji"]
my_role = "first_author"
topic = "Training Image Attribution for LoRA"

# 成果物リンク（開催後または公開準備が整い次第、有効化してURLを追記）
# paper_url = ""
# slide_url = ""
# code_url = ""
+++

<!--
発表資料の公開後、埋め込みコードをここに追加する。
<iframe class="speakerdeck-iframe" src="" title="Which LoRA Was Trained on My Image? Retrieving Candidate LoRAs from Internal Weights"></iframe>
-->

## 概要

2027年1月にカンボジアのシェムリアップで開催される、マルチメディア分野における主要な国際会議の一つである33rd International Conference on Multimedia Modeling（MMM 2027）にて、

**「Which LoRA Was Trained on My Image? Retrieving Candidate LoRAs from Internal Weights」**

というタイトルの論文がFull Paperとして採択されました。

本研究では、1枚の画像を入力として、その画像を学習に使用した可能性の高いLoRAモデルを、多数の候補からランキングする手法を提案しました。
近年、多数のLoRAが共有・公開されている一方で、公開されたLoRAが特定の作品を学習に利用しているかを、モデル名やタグなどのメタデータだけから確認することは困難です。
そこで、LoRAの内部ウェイトそのものを利用し、詳細な監査を行う候補を効率的に絞り込む検索問題として定式化しました。

提案手法では、画像とLoRA内部ウェイトをそれぞれベクトル化し、同じ埋め込み空間上で比較するTwo-Tower型のアーキテクチャを構築しています。
画像を学習データに含むLoRAを正例、それ以外を負例として対照学習することで、関連する画像とLoRAが埋め込み空間上で近くなるように学習します。
検索時には候補LoRAを事前にベクトル化できるため、候補ごとに画像を生成することなく、入力画像との類似度に基づいてランキングできます。

具体的には、以下の3点を工夫しました。

- OpenCLIPを用いた入力画像のベクトル表現
- レイヤ構造を保持したLayer-wise LoRA Encoderによる内部ウェイトのベクトル化
- 複数の正例を扱う双方向Multi-Positive対照学習による画像とLoRAの対応付け

本手法は、著作権侵害や学習利用を直接断定するものではありません。
大規模なLoRA群から確認対象を絞り込む一次検索として位置づけることで、学習データの監査や著作権保護を支援することを目指しています。

ICMR 2026に続き、国際会議のFull Paperに主著者として採択されたことを大変嬉しく思います。
これまで取り組んできたLoRA内部ウェイトに基づくモデル検索を、学習データの監査という新たな課題へ発展させた研究です。
今後も、LoRA Weight Embeddingに基づくモデル検索の応用範囲を広げていきたいと考えています。

## 発表・投稿情報

- 種別: Full Paper
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 開催期間: 2027年1月5日〜8日
<!-- - 発表ID: 開催後に追記 -->
- 著者: Yuro Kanada, Yoshiyuki Shoji
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})

## 成果物

論文PDF、発表資料、実装コードは、MMM 2027の開催後または公開準備が整い次第、このページに追加予定です。

<!--
- [論文PDF](公開後にURLを追記)
- [発表資料](公開後にURLを追記)
- [研究関連の実装コード](公開後にURLを追記)
-->
