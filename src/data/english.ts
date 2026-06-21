import { Dimension } from '../types';

export const ENGLISH_DIMENSIONS: Record<string, Dimension[]> = {
  "1": [
    { id: "phonics", name: "🔤 字母大小寫與基礎Phonics發音規則", labels: { high: "🟢 字母拼讀發音標準流利", mid: "🟡 能辨識基本字母與拼讀", low: "🔴 字母常與注音符號混淆" } },
    { id: "listening", name: "🎧 課堂招呼語與日常簡單英語指令", labels: { high: "🟢 聽力極佳能迅速做出對應肢體動作", mid: "🟡 能聽懂簡單的Hello、Stand up、Sit down", low: "🔴 聽英語時較為發愣容易遲緩" } },
    { id: "english_attitude", name: "💡 英語歌謠唱跳與課堂積極度", labels: { high: "🟢 歌謠跳舞認真又大方", mid: "🟡 乖巧完成齊唱複誦", low: "🔴 課堂活動時容易分心發呆" } }
  ],
  "2": [
    { id: "phonics", name: "🔤 字母發音、日常單字拼讀Phonics", labels: { high: "🟢 辨音能力強，拼讀直覺很好", mid: "🟡 掌握課本單字拼讀大體順暢", low: "🔴 对部分母音發音常指錯搞混" } },
    { id: "speaking", name: "💬 單字口說、問候生活句型（口說信心）", labels: { high: "🟢 口語問答自信大方音準好", mid: "🟡 大聲唸出短小單字問候句型", low: "🔴 唸英文時聲音太小、容易害羞" } },
    { id: "english_attitude", name: "💡 英語學習高度興趣與配合", labels: { high: "🟢 作業整齊聽講活潑參與", mid: "🟡 乖巧寫好習作本", low: "🔴 書寫生字時比較草率、常催促" } }
  ],
  "3": [
    { id: "phonics", name: "🔤 子音母音拼讀與基礎日常對話", labels: { high: "🟢 字母拼讀發音標準流利", mid: "🟡 能辨識基本字母與拼讀", low: "🔴 字母大小寫抄寫常有疏漏" } },
    { id: "listening", name: "🎧 課堂聽力測驗、老師指令大會師", labels: { high: "🟢 聽力敏銳且互動反應快", mid: "🟡 能聽懂日常基本的英語指令", low: "🔴 對英語聽力指令反應偏慢" } },
    { id: "vocabulary", name: "🔤 核心單字抄寫與看圖讀字量", labels: { high: "🟢 單字認讀與累累積極快", mid: "🟡 能記住各課的核心生字", low: "🔴 單字常會遺忘、字母順序顛倒" } },
    { id: "english_attitude", name: "💡 英語課堂專注與口頭答詢", labels: { high: "🟢 上課搶答最積極回答讚", mid: "🟡 認真遵守英文教室規矩", low: "🔴 課堂聽講時偶爾會恍神玩文具" } }
  ],
  "4": [
    { id: "speaking", name: "💬 日常主題問答會話、角色扮演（口說台風）", labels: { high: "🟢 口說發音自然大方又流利", mid: "🟡 能跟讀句子並做簡單會話", low: "🔴 口說時害羞、音量偏小" } },
    { id: "writing", name: "✍️ 格線單字書寫、三字句型仿寫（書寫工整）", labels: { high: "🟢 英文格線書寫工整無誤", mid: "🟡 能完成基本單字抄寫仿寫", low: "🔴 單字字母常拼錯或潦草" } },
    { id: "reading", name: "📖 基礎課文短句讀懂與故事大意摘要", labels: { high: "🟢 自主閱讀理解快速不卡關", mid: "🟡 在老師引導下看讀短故事", low: "🔴 閱讀生字多的段落有退縮感" } },
    { id: "english_attitude", name: "💡 英文作業按時交與訂正習慣", labels: { high: "🟢 作業工整優秀，有錯主動訂正", mid: "🟡 依規繳交英文作業", low: "🔴 功課常會有漏寫、塗改過多" } }
  ],
  "5": [
    { id: "reading", name: "📖 短文閱讀分析與段落主旨擷取", labels: { high: "🟢 閱讀理解力佳、抓重點快", mid: "🟡 能跟著引導讀懂短篇文章", low: "🔴 遇到陌生單字就容易卡住" } },
    { id: "grammar", name: "📝 文法句型結構（主格助動詞現在標記/問答）", labels: { high: "🟢 句型文法邏輯觀念優秀", mid: "🟡 掌握日常對話文法並套用", low: "🔴 句型順序與文法常出錯" } },
    { id: "listening", name: "🎧 長句聽力測驗、情境短文聽解 comprehension", labels: { high: "🟢 聽力反應神速，答對率極高", mid: "🟡 能大致聽清常聽段落大意", low: "🔴 對英聽長句子容易遺漏關鍵字" } },
    { id: "english_attitude", name: "💡 英語小專案發表與同儕合作", labels: { high: "🟢 小組英語簡報分工熱忱負責", mid: "🟡 能扮演好角色認真上台", low: "🔴 合作時主動性弱、容易敷衍" } }
  ],
  "6": [
    { id: "comprehensive", name: "🎓 綜合英語自我介紹短文與英語劇發表", labels: { high: "🟢 能流利寫出自我介紹短文", mid: "🟡 能大方進行分組英語話劇", low: "🔴 寫作與口說組織力偏被動" } },
    { id: "vocabulary", name: "🔤 高階字彙拼讀與主題造句實踐", labels: { high: "🟢 字彙量豐富且拼讀快速", mid: "🟡 能完成各單元字彙認讀", low: "🔴 單字認讀與記憶量常不足" } },
    { id: "reading", name: "📖 跨頁英語長文閱讀、主旨判斷解碼", labels: { high: "🟢 長文解碼思路清晰邏輯佳", mid: "🟡 理解短文故事劇情發展與寓意", low: "🔴 對長段落英語閱讀有畏難情緒" } },
    { id: "english_attitude", name: "💡 畢業前夕英語自主複習與堅持力", labels: { high: "🟢 自主複習極為踏實，成效斐然", mid: "🟡 能安靜配合小論文和期末測驗", low: "🔴 期末複習態度有些浮躁" } }
  ]
};

export const ENGLISH_FRAGMENTS = {
  phonics: {
    high: "字母拼音發音標準自然且流暢",
    mid: "能辨識基本單字發音並大聲跟讀",
    low: "英語拼讀口音害羞，需要多鼓勵"
  },
  listening: {
    high: "聽力極敏銳、指令反應又快又好",
    mid: "聽懂課堂基本的問候語跟英語指令",
    low: "聽力理解不熟，常漏聽重要單字"
  },
  speaking: {
    high: "口說發音自然大方，能自信念讀",
    mid: "能大聲跟著錄音朗讀英語課文句型",
    low: "講英文會害羞緊張，音量偏小"
  },
  writing: {
    high: "單字書寫整齊漂亮，極少出錯",
    mid: "能按部就班抄寫英文生字與仿寫",
    low: "常把字母順序拼錯，大小寫常混淆"
  },
  reading: {
    high: "短篇閱讀理解力佳、閱讀速度快",
    mid: "引導下能讀懂各課短篇英語故事",
    low: "長篇長句閱讀時抓不到主要意思"
  },
  grammar: {
    high: "英語句型文法架構觀念十分靈活",
    mid: "能套用基本文法完成英語對答",
    low: "常用句型結構主格助動詞常會搞錯"
  },
  comprehensive: {
    high: "發表表達好，能寫出流利英語小作文",
    mid: "能完成基本的綜合口語小發表",
    low: "英語綜合發表時有些退縮沒信心"
  },
  vocabulary: {
    high: "字彙量極大，拼音反應與聽讀敏捷",
    mid: "掌握各單元要求之核心必備單字",
    low: "單字累積較少，常有單字遺忘現象"
  },
  english_attitude: {
    high: "上課積極發言互動，學習心態極佳",
    mid: "遵守秩序守秩序，確實做好作業",
    low: "學英語動機偏弱，需要多加引導"
  }
};
