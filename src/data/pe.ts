import { Dimension } from '../types';

export const PE_DIMENSIONS: Record<string, Dimension[]> = {
  "1": [
    { id: "skills", name: "🏃 大肌肉動作、肢體協調與跑步動作（體能）", labels: { high: "🟢 肢體發展運動神經極佳", mid: "🟡 肢體配合熱身活動安穩", low: "🔴 基礎運動技能肌肉待鍛鍊" } }
  ],
  "2": [
    { id: "skills", name: "🏃 單腳雙腳跳躍爬行、滾翻活動協調（體力）", labels: { high: "🟢 肢體發展運動神經極佳", mid: "🟡 肢體配合熱身活動安穩", low: "🔴 基礎運動技能肌肉待鍛鍊" } }
  ],
  "3": [
    { id: "rules", name: "🏆 體育常規與小組競賽規則配合（運動家風度）", labels: { high: "🟢 運動風度佳且遵守常規", mid: "🟡 能聽懂競賽遊戲的規則", low: "🔴 競賽得失心稍重容易急躁" } }
  ],
  "4": [
    { id: "rules", name: "🏆 球類拍擊拋接、躲避球規則與運動風度（規矩）", labels: { high: "🟢 運動風度佳且遵守常規", mid: "🟡 能聽懂競賽遊戲的規則", low: "🔴 競賽得失心稍重容易急躁" } }
  ],
  "5": [
    { id: "fitness", name: "📈 體適能心肺、仰臥起坐與耐力挑戰（毅力）", labels: { high: "🟢 心肺耐力與柔軟度優異", mid: "🟡 體能考驗皆能努力跟上", low: "🔴 體能訓練時常顯得被動" } }
  ],
  "6": [
    { id: "fitness", name: "📈 球操跑道接力、拔河技巧與畢業體能挑選", labels: { high: "🟢 體能與球類技能俱優", mid: "🟡 認真跑完體力長跑測驗", low: "🔴 體能與球拍拋接掌握度偏低" } }
  ]
};

export const PE_FRAGMENTS = {
  skills: {
    high: "肢體發展運動神經好，肢體協調棒",
    mid: "能確實跟完熱身操與跑步動作",
    low: "大肌肉肢體力量較慢，活動容易累"
  },
  rules: {
    high: "很有體育常規與風度，是合作大師",
    mid: "能聽明白競賽遊戲的規則並配合",
    low: "運動競賽得失心稍重容易急躁吵架"
  },
  fitness: {
    high: "心肺耐力與肢體柔軟度都在高水準",
    mid: "體適能與跑步常能認真努力跑完",
    low: "跑步等耐力訓練常跑不動、常偷懶"
  }
};
