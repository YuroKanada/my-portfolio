+++
title = "16th ACM International Conference on Multimedia Retrieval"
draft = false

# Hugoの公開管理用（未来日で404回避）
date = 2026-04-15T09:00:00+09:00
lastmod = 2026-04-15T09:00:00+09:00

# コンテンツ分類（一覧・表示制御用）
categories = ["publications"]
tags = ["LoRA", "Model Retrieval", "embedding"]
pub_type = "paper"

# 表示用メタデータ（公開制御とは分離）
event_name = "16th ACM International Conference on Multimedia Retrieval（ICMR2026）"
event_date = 2026-06-17
venue = "KIT Royal Tropical Institute"
presentation_id = "Track2 iiWAS-1"
event_url = "https://icmr2026.org/index.html"

# 研究情報
authors = ['Yuro Kanada', 'Yuma Oe', 'Huu-Long Pham', 'Makoto P. Kato', 'Hiroaki Ohshima', 'Sumio Fujita', 'Yoshiyuki Shoji']
my_role = "first_author"
topic = "LoRA Embedding"

# 成果物リンク
paper_url = "https://doi.org/10.1145/3805622.3810428"
poster_pdf = ""
code_url = "https://github.com/YuroKanada/Retrieval_of_LoRA_Models_based_on_Layer-Wise_Weight_Embedding_without_Metadata"
+++

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/e84df584bbaa4ab7b8ba39ba1df5db58" title=" Retrieval of LoRA Models based on Layer-Wise Weight Embedding without Metadata" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>

## 概要
2026年6月にオランダ アムステルダムで開催される  
16th ACM International Conference on Multimedia Retrieval（ICMR2026）にて、

**「Retrieval of LoRA Models based on Layer-Wise Weight Embedding without Metadata」**

というタイトルで論文が採択されました。

ICMRはマルチメディア検索のトップカンファレンスであり、その中でも、「Brave New Ideas Track」
という新規性の高い新しい検索技術の提案を評価するトラックでの採択でした。

近年、画像生成AIで利用されるLoRAモデルは急速に増加していますが、類似したLoRAを探すためには、メタデータや生成画像が必要であり、それらが失われた場合には検索が困難になるという課題があります。  

そこで本研究では、LoRAの内部重みのみから、その変換特徴を表現する埋め込みベクトルを学習する手法を提案しました。  
レイヤごとの重みをベクトル化し、Transformerを用いた距離学習によって、見た目の変換特徴が似ているLoRA同士が近くなる埋め込み空間を構築しています。  

評価実験では、人手による類似度判断との一致性やLoRA検索性能を評価し、提案手法は人間の感覚に近い類似度を学習するとともに、高精度かつ安定したLoRA検索を実現できることを確認しました。  

本研究は、画像そのものではなく、それを生成するAIモデルを検索するという新しいマルチメディア検索の方向性を提案しています。

念願であったトップカンファレンスに主著者として論文が採択され、大変嬉しく思います。 
そして、初の海外発表も経験することができ、研究発表や海外の文化について貴重な機会を与えていただいた莊司先生にはとても感謝しています。　　

本研究は、LoRAモデルの内部重みを対象とした検索という、新しい研究領域への第一歩だと考えています。  
今後はキーワード検索や推薦、著作権保護支援などへ応用を広げながら、「LoRA Weight Embedding」に基づくモデル検索という研究分野を発展・確立していきたいと考えています。

## 発表・投稿情報

- 種別: `{{< param pub_type >}}`
- イベント名: {{< param event_name >}}
- 会場: {{< param venue >}}
- 日付: {{< param event_date >}}
<!-- - 発表ID: {{< param presentation_id >}} -->
- 役割: {{< param my_role >}}
- [公式ページ]({{< param event_url >}})



## 成果物

- [研究関連の実装コード]({{< param code_url >}})
- [論文PDF]({{< param paper_url >}})
<!-- - ポスター: 該当なし（`poster_pdf`） -->
