+++
date = '2025-03-01'
draft = false
title = 'DEIM2025_Disentangled_Representation_paper'
tags = ['workshop', 'disentangled-representation', 'embedding']
categories = ['publications']
+++

## レビューデータからの各次元が意味を持つ Disentangled な映画ベクトル表現の獲得

**第17回 データ工学と情報マネジメントに関するフォーラム（DEIM 2025）**  
発表ID：7E-01  
[公式ページ](https://pub.confit.atlas.jp/ja/event/deim2025/presentation/7E-01)

本研究では、文書埋め込み（embedding）において各次元が独立して意味を持つ **Disentangled Representation** を獲得可能なエンコーダの設計を行った。

近年、機械学習において embedding は広く用いられているが、得られるベクトルの各次元は一般に解釈不能である。そのため、人間による意味的理解や、意味に基づく高度なベクトル演算が困難であるという課題がある。

本研究では、文書をベクトル化する際に各次元が独立した意味的要素を保持するよう学習を制御することで、解釈可能な文書表現の獲得を目指した。

評価実験では映画レビューデータを用い、複数レビューから集約した映画ベクトルに対して定量評価および被験者評価を実施し、次元ごとの意味的一貫性と解釈可能性を検証した。
