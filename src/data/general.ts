import { Dimension } from '../types';

export const GENERAL_SUBJECT_DIMENSIONS: Record<string, Dimension[]> = {
  "1": [
    { id: "gen_school_life", name: "🎒 學校與團體生活適應", labels: { high: "🟢 積極參與團體事務，樂在其中", mid: "🟡 參與事務時能配合常規", low: "🔴 不參與團體事務，孤立於團體之外" } },
    { id: "gen_family_gratitude", name: "🏡 自我了解與生活自理", labels: { high: "🟢 能了解自我，且能發揮優點", mid: "🟡 需再加強自我認識能力", low: "🔴 勉能生活自理，需要鼓勵督促完成" } }
  ],
  "2": [
    { id: "gen_school_life", name: "🎒 學校與團體生活適應", labels: { high: "🟢 積極參與團體事務，樂在其中", mid: "🟡 參與事務時能配合常規", low: "🔴 不參與團體事務，孤立於團體之外" } },
    { id: "gen_family_gratitude", name: "🏡 自我了解與生活自理", labels: { high: "🟢 能了解自我，且能發揮優點", mid: "🟡 需再加強自我認識能力", low: "🔴 勉能生活自理，需要鼓勵督促完成" } }
  ],
  "3": [
    { id: "gen_g3_self_emotion", name: "🔍 自我探索與優缺點省思", labels: { high: "🟢 能了解自我，發揮自我優點並改進缺點", mid: "🟡 雖能了解自我，但需再加強自我認識能力", low: "🔴 難以自我省思，需再加強自我認識能力" } },
    { id: "gen_g3_cooperate_comm", name: "🤝 班級團隊合作與參與", labels: { high: "🟢 積極參與團體事務，樂在其中", mid: "🟡 參與團體事務，僅被動配合", low: "🔴 不參與團體事務，孤立於團體之外" } },
    { id: "gen_g3_life_time", name: "⏰ 生活管理與日常自理", labels: { high: "🟢 非常善於安排日常生活，應用所學管理事務", mid: "🟡 能處理一般家務與生活，自理能力尚可", low: "🔴 勉能生活自理，需要鼓勵督促完成" } }
  ],
  "4": [
    { id: "gen_g4_potential_innovation", name: "💡 多元潛能與生活創意", labels: { high: "🟢 生活高手，創意十足，創造多元生活", mid: "🟡 能按部就班參與，生活探索表現平穩", low: "🔴 生活缺乏創意與主動性，探索動力薄弱" } },
    { id: "gen_g4_division_conflict", name: "🤝 團隊合作與衝突解決", labels: { high: "🟢 積極參與團體事務，樂在團隊之中", mid: "🟡 參與團體合作，僅配合他人工作", low: "🔴 不參與團體事務，容易孤立於團體之外" } },
    { id: "gen_g4_environment_finance", name: "🌱 環境關懷與自然關係", labels: { high: "🟢 具有環保熱忱，能確實掌握人與自然的關係", mid: "🟡 具有環保意識，但僅止於了解與自然關係", low: "🔴 無法保護自我，不了解人與自然的關係" } }
  ],
  "5": [
    { id: "gen_g5_value_resilience", name: "❤️ 生命價值與自我優勢", labels: { high: "🟢 能發揮自我優點並改進缺點，韌性高", mid: "🟡 需再加強自我認識與情緒調適能力", low: "🔴 自我認識不足，需要鼓勵以建立信心" } },
    { id: "gen_g5_project_execution", name: "🎯 專題策劃與生活管理", labels: { high: "🟢 非常善於安排日常生活與專題管理事務", mid: "🟡 勉能生活自理，自主執行力尚可", low: "🔴 勉能生活自理，需要鼓勵督促完成" } },
    { id: "gen_g5_service_empathy", name: "🤝 服務學習與同理心", labels: { high: "🟢 積極參與團體服務事務，樂在其中", mid: "🟡 能配合參與服務，主動關懷程度一般", low: "🔴 不參與團體服務，孤立於團體之外" } }
  ],
  "6": [
    { id: "gen_g6_career_planning", name: "🧭 生涯探索與自我了解", labels: { high: "🟢 能了解自我，發揮優點並改進缺點", mid: "🟡 對未來能思考，但需再加強自我認識能力", low: "🔴 生涯探索缺乏頭緒，需要多加鼓勵督促" } },
    { id: "gen_g6_gratitude_retrospect", name: "🎓 感恩表達與日常生活", labels: { high: "🟢 非常善於安排日常生活，用心管理事務", mid: "🟡 勉能自理生活，並參與感恩活動", low: "🔴 勉能生活自理，需要鼓勵督促完成" } },
    { id: "gen_g6_synthesis_presentation", name: "🎤 綜合統整與人自然關係", labels: { high: "🟢 能確實掌握人與自然的關係，統整力強", mid: "🟡 表現平穩，但僅止於了解與自然關係", low: "🔴 安全與環保意識薄弱，不了解人與自然的關係" } }
  ]
};

export const GENERAL_SUBJECT_FRAGMENTS = {
  gen_school_life: {
    high: "積極參與團體事務並樂在其中",
    mid: "參與團體活動時，大體能配合班級事務",
    low: "不參與團體事務，常孤立於團體之外"
  },
  gen_family_gratitude: {
    high: "能了解自我，生活自理與主動分擔家務做得很好",
    mid: "需再加強自我認識能力，生活自理尚可",
    low: "勉能生活自理，需要鼓勵督促才能完成"
  },
  gen_g3_self_emotion: {
    high: "能發揮自我優點，積極改進缺點",
    mid: "大體能了解自我，但需再加強自我認識能力",
    low: "自我省思與自我認識能力仍需再加強"
  },
  gen_g3_cooperate_comm: {
    high: "積極參與團體事務，在分組合作中樂在其中",
    mid: "參與團體事務時多僅配合，主動性待提升",
    low: "不參與團體事務，容易孤立於團體之外"
  },
  gen_g3_life_time: {
    high: "非常善於安排日常生活，能應用所學管理事務",
    mid: "生活自理狀況穩定，日常事務可獨立完成",
    low: "勉能生活自理，各項日常工作需要鼓勵督促完成"
  },
  gen_g4_potential_innovation: {
    high: "堪稱生活高手，創意十足，創造多才多藝的多元生活",
    mid: "能配合探索特長，生活管理與學習表現平穩",
    low: "探索動機較弱，生活管理的主動性有待提升"
  },
  gen_g4_division_conflict: {
    high: "積極參與團體事務，在團隊合作中樂在其中",
    mid: "能參與分組合作，但多僅被動配合組員",
    low: "不參與團體事務，使自己孤立於團體之外"
  },
  gen_g4_environment_finance: {
    high: "環保觀念優異，能確實掌握人與自然的關係",
    mid: "雖有環保意識，但僅止於了解與自然的關係",
    low: "缺乏保護自我的安全意識，且不了解人與自然的關係"
  },
  gen_g5_value_resilience: {
    high: "能發揮自我優點與長處，改進缺點且面對挫折容忍力佳",
    mid: "能認識自我，但需再加強自我認識與自我調適能力",
    low: "自我認識不足，容易陷入負面情緒，需多給予正向鼓勵"
  },
  gen_g5_project_execution: {
    high: "非常善於安排日常生活，能運用所學高效管理各項事務",
    mid: "能配合規律完成工作，生活管理與實踐力尚可",
    low: "勉能生活自理，在執行企劃任務時需要鼓勵督促完成"
  },
  gen_g5_service_empathy: {
    high: "積極參與團體事務並樂在其中，極富利他與同理心",
    mid: "能配合參與小組與班級的服務項目，表現安穩",
    low: "不參與團體服務事務，容易孤立於團體之外"
  },
  gen_g6_career_planning: {
    high: "能充分了解自我，發揮自我優點並改進缺點，方向明確",
    mid: "對未來能有初步規劃，但自我認識能力仍需再加強",
    low: "對未來探索較感迷惘，自我認識與目標規劃皆顯不足"
  },
  gen_g6_gratitude_retrospect: {
    high: "非常善於安排日常生活，應用所學完美管理生活事務",
    mid: "能完成感恩回顧活動，但在自主生活管理上一般",
    low: "參與回顧動能不足，勉能生活自理且需要鼓勵督促完成"
  },
  gen_g6_synthesis_presentation: {
    high: "能確實掌握人與自然的關係，展現卓越的統整與發表力",
    mid: "能參與發表，但對人與自然環境關係僅止於了解",
    low: "不了解人與自然的關係，且發表自信與安全意識需加強"
  }
};
