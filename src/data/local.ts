import { Dimension } from '../types';

export const LOCAL_DIMENSIONS: Record<string, Dimension[]> = {
  "1": [
    { id: "speaking", name: "🗣️ 本土歌謠吟唱與基礎生活字詞朗誦", labels: { high: "🟢 本土語口說口音道地棒", mid: "🟡 能配合指令誦讀簡單歌謠", low: "🔴 回答時顯得退縮不敢開口" } }
  ],
  "2": [
    { id: "speaking", name: "🗣️ 本土話生活用語、俗諺吟誦朗讀（諺語）", labels: { high: "🟢 本土語口說口音道地棒", mid: "🟡 能配合指令誦讀簡單歌謠", low: "🔴 回答時顯得退縮不敢開口" } }
  ],
  "3": [
    { id: "speaking", name: "🗣️ 本土話日常聽解與趣味搶答互動（對答）", labels: { high: "🟢 本土語口說口音道地棒", mid: "🟡 能配合指令誦讀簡單歌謠", low: "🔴 回答時顯得退縮不敢開口" } }
  ],
  "4": [
    { id: "speaking", name: "🗣️ 本土俗諺生用、情境對白朗讀（俗諺）", labels: { high: "🟢 本土俗諺口音自然，台風好", mid: "🟡 按拼音念出基本日常句子", low: "🔴 對俗諺對答理解不熟，害羞" } }
  ],
  "5": [
    { id: "speaking", name: "🗣️ 閩客故事理解朗讀、主題短文拼讀觀念", labels: { high: "🟢 語句精準，常識分析力足", mid: "🟡 能用本土語做簡單生動答詢", low: "🔴 退縮不敢回答，口說不習慣" } }
  ],
  "6": [
    { id: "speaking", name: "🗣️ 本土情懷文化融合與畢業感恩致詞致敬", labels: { high: "🟢 本土話致詞高妙，腔調流暢", mid: "🟡 順利讀完指定篇章並了解大意", low: "🔴 複誦速度慢，開口時音量不夠" } }
  ]
};

export const LOCAL_FRAGMENTS = {
  speaking: {
    high: "口音自然大方腔調道地流利",
    mid: "引導下能念出課文基本的語意",
    low: "口說本土語時有些退縮、音量小"
  }
};
