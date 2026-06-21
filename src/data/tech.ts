import { Dimension } from '../types';

export const TECH_DIMENSIONS: Record<string, Dimension[]> = {
  "1": [
    { id: "google_tools", name: "💻 滑鼠控制、拖曳與數位互動小遊戲（手眼）", labels: { high: "🟢 操作流暢，學習興趣旺盛", mid: "🟡 在配合下完成簡單拼圖互動", low: "🔴 鍵盤滑鼠手眼配合較為緩慢" } }
  ],
  "2": [
    { id: "google_tools", name: "💻 滑鼠單擊雙擊、點選與打字初體驗（基礎）", labels: { high: "🟢 操作流暢，學習興趣旺盛", mid: "🟡 在配合下完成簡單拼圖互動", low: "🔴 鍵盤滑鼠手眼配合較為緩慢" } }
  ],
  "3": [
    { id: "google_tools", name: "💻 電腦帳密輸入、Google雲端教室帳號登入", labels: { high: "🟢 登入快速操作熟練無誤", mid: "🟡 能順利在引導下登入雲端", low: "🔴 帳密輸入常漏字常忘步驟" } },
    { id: "google_doc_email", name: "📧 Google 文書系統與 Email 收發操作", labels: { high: "🟢 熟悉雲端文件排版，能高效率流暢收發電子郵件", mid: "🟡 能完成基本雲端文件編輯，並能接收引導寄信", low: "🔴 文書與 Email 介面操作生疏，需師長反覆協助" } }
  ],
  "4": [
    { id: "google_tools", name: "💻 雲端文書處理編輯與個人密碼防衛倫理", labels: { high: "🟢 雲端打字文件格式掌握優良", mid: "🟡 熟悉密碼安全並能打短文", low: "🔴 雲端檔案儲存概念不熟，常迷路" } },
    { id: "scratch_code", name: "🧩 簡易 Scratch 積木程式與邏輯控制", labels: { high: "🟢 邏輯推理優異，能自主編排與創意設計 Scratch 程式碼", mid: "🟡 能跟隨步驟組裝事件積木，對簡易程式控制觀念平穩", low: "🔴 面對積木拼貼與控制指令理解感吃力，邏輯待加強" } }
  ],
  "5": [
    { id: "doc_layout", name: "📝 簡報版面排版、重點突出與簡報美化設計", labels: { high: "🟢 簡報版面清爽重點突出", mid: "🟡 能完成基本打字與插入圖", low: "🔴 文書打字偏慢排版常錯位" } }
  ],
  "6": [
    { id: "doc_layout", name: "📝 試算表統計圖、試算表加總函數與數位卡設計", labels: { high: "🟢 Google試算表統計概念好", mid: "🟡 在指引下完成數位畢業卡", low: "🔴 打字慢且試算表儲存格概念不熟" } }
  ]
};

export const TECH_FRAGMENTS = {
  google_tools: {
    high: "雲端軟體登入操作極其流暢純熟",
    mid: "能在老師導引下順利完成Google登入",
    low: "打帳號密碼常出錯，需要多次提醒"
  },
  google_doc_email: {
    high: "熟悉雲端文件排版且打字順暢，並能高效率自主收發電子郵件",
    mid: "可按指示編輯基本雲端文件，並在輔導下理解 Email 信件收發流程",
    low: "對 Google 文書輸入與 Email 郵件往返較陌生，經常需要個別指導"
  },
  scratch_code: {
    high: "邏輯推理與圖像思考敏捷，能自主拼貼流暢且具創意的 Scratch 程式碼",
    mid: "能跟隨步驟順序排列基本積木，對簡易的重複與條件邏輯有穩健了解",
    low: "對程式邏輯常感到困惑，於 Scratch 拼裝控制與除錯時表現較為被動"
  },
  doc_layout: {
    high: "簡報設計構圖優良、打字美觀重點棒",
    mid: "能利用文書工具打字並簡單放上插圖",
    low: "打字偏慢，投影片編排與大小不一"
  }
};
