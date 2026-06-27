import type { CtaContent, ResultType } from '../types';

export const ctas: Record<ResultType, CtaContent> = {
  writing: {
    title: 'まずは投稿10本と小さなテンプレを作る',
    description: '30日ロードマップでは、投稿ネタ出し、note構成、販売ページ作りをまとめる予定です。',
    buttonLabel: '30日ロードマップを見る',
    pendingLabel: '準備中',
    pendingMessage: '詳細版は準備中です。今は上の30日プレビューを見ながら、1週目の投稿づくりから始めてください。',
    notePrompt: 'noteには「誰向けに何を作るか」と、最初に作るテンプレ案を書いておくのがおすすめです。',
    xPrompt: 'Xでは、今日作った投稿案や学びを1つだけ共有してみてください。',
  },
  creative: {
    title: 'まずは3案だけ商品ページ風に整える',
    description: '30日ロードマップでは、ニッチ選び、AI画像作成、SNSで反応を見る手順をまとめる予定です。',
    buttonLabel: '30日ロードマップを見る',
    pendingLabel: '準備中',
    pendingMessage: '詳細版は準備中です。今は上の30日プレビューを見ながら、1週目のニッチ選びから始めてください。',
    notePrompt: 'noteには、選んだジャンルと作った3案を並べて、どれを伸ばすかを書いてみてください。',
    xPrompt: 'Xでは、作例1枚と「どんな人向けに作ったか」を短く投稿するのがおすすめです。',
  },
  tool: {
    title: 'まずは1機能だけのMVPを公開する',
    description: '30日ロードマップでは、仕様書、Codexへの指示、スマホ確認、収益導線をまとめる予定です。',
    buttonLabel: '30日ロードマップを見る',
    pendingLabel: '準備中',
    pendingMessage: '詳細版は準備中です。今は上の30日プレビューを見ながら、1週目の仕様メモから始めてください。',
    notePrompt: 'noteには、作るツールの目的、3画面のメモ、次に直したい点を書いておくと制作ログになります。',
    xPrompt: 'Xでは、作っている画面や仕様メモを1つ共有し、改善点を聞いてみてください。',
  },
  research: {
    title: 'まずは比較表1本と投稿5本を作る',
    description: '30日ロードマップでは、調査テンプレ、比較表、ニュースレター導線をまとめる予定です。',
    buttonLabel: '30日ロードマップを見る',
    pendingLabel: '準備中',
    pendingMessage: '詳細版は準備中です。今は上の30日プレビューを見ながら、1週目の比較テーマ決めから始めてください。',
    notePrompt: 'noteには、比較した3つの候補と、初心者が迷いそうな点をまとめると記事にしやすいです。',
    xPrompt: 'Xでは、比較して気づいたことを1投稿にして反応を見てみてください。',
  },
};
