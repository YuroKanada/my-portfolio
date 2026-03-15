+++
title = "[paper]:第18回データ工学と情報マネジメントに関するフォーラム"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2026-02-28T09:00:00+09:00
lastmod = 2025-02-28T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["LoRA", "Model Retrieval", "embedding"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "第18回データ工学と情報マネジメントに関するフォーラム（DEIM 2026）"
event_date = 2026-02-28
venue = "オンライン"
presentation_id = "3F-01"
event_url = "https://pub.confit.atlas.jp/ja/event/deim2026/presentation/3F-01"

# 研究情報
authors = ["金田悠路", "大江優真", "ファム・フーロン", "加藤誠", "大島裕明", "藤田澄男", "莊司慶行"]
my_role = "first_author"
topic = "LoRA Embedding"

# 成果物リンク
paper_url = "https://pub-files.atlas.jp/fs/public/deim2026/ver_26/abstract/ja/3F-01.pdf"
poster_pdf = ""
code_url = "https://github.com/YuroKanada/Learning-Embedding-Representations-of-LoRA-Models-from-Adapter-Weights"
+++

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/5e491be7c74b4fb7a79eb0ab3d3d78eb?slide=1" title="画風変換LoRAの内部パラメータによる変換特徴を考慮したモデルの埋め込み表現の獲得" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

## 概要
第18回データ工学と情報マネジメントに関するフォーラムにて、

**「画風変換LoRAの内部パラメータによる変換特徴を考慮したモデルの埋め込み表現の獲得」**

というタイトルで論文を発表しました。

現在、画像生成分野においてもモデルの共有・再利用が当たり前になっています。
特にLoRA（Low-Rank Adaptation）は、既存の拡散モデルに対する軽量な追加学習手法として広く普及し、多数の画風変換LoRAが公開されています。

しかし、これらのLoRAモデルは主にタグや説明文といったメタデータに基づいて管理されており、内部パラメータそのものに基づいてモデルを比較・分析する枠組みは十分に確立されていません。
その結果、モデル間の構造的類似性を直接扱うことが難しく、未知のLoRAを体系的に整理・検索することが困難であるという課題があります。

そこで本研究では、画風変換LoRAの内部パラメータから直接モデルの埋め込み表現を獲得する手法を提案しました。
LoRAの重み行列を入力とし、構造を保った前処理および次元圧縮を行った上で、Triplet Transformer Encoderによる距離学習を適用することで、LoRAモデルを低次元の密ベクトルとして表現します。

モデルの内部構造を反映した埋め込み空間を構築できれば、メタデータに依存せずにLoRAモデル間の類似度比較やクラスタリング、ランキングが可能になると考えられます。
これにより、大規模に公開されているLoRAモデル群の体系的な管理や検索支援への応用が期待されます。

WebDB2025からは大きな変更として  
・出力例ベースの正解データ作成  
・より細粒度の重みを算出するMLP層  
・人間の類似性判断に合わせたLoRAモデル検索評価  
がある。

評価実験では、構築した埋め込み空間における類似度の妥当性を検証し、モデル検索性能および人間の主観的類似判断との整合性を評価しました。

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

## 受賞
本発表は、👑**学生プレゼンテーション賞**を受賞しました。
