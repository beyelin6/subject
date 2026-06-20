import { SubjectKey, SubjectInfo, Dimension } from './types';

export const GRADE_SUBJECTS: Record<string, Record<SubjectKey, SubjectInfo>> = {
  "1": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    life: { name: '🌱 生活課程', icon: 'Sparkles' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    social: { name: '🌍 社會', icon: 'Globe' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    fineart: { name: '🎨 美勞', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' }
  },
  "2": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    life: { name: '🌱 生活課程', icon: 'Sparkles' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    social: { name: '🌍 社會', icon: 'Globe' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    fineart: { name: '🎨 美勞', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' }
  },
  "3": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 美勞', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    life: { name: '🌱 藝美課程', icon: 'Sparkles' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  },
  "4": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 美勞', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    life: { name: '🌱 藝美課程', icon: 'Sparkles' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  },
  "5": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 美勞', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    life: { name: '🌱 藝美課程', icon: 'Sparkles' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  },
  "6": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 美勞', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    life: { name: '🌱 藝美課程', icon: 'Sparkles' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  }
};

export const GENERAL_DIMENSIONS: Dimension[] = [
  { id: "gen_attitude", name: "💡 課堂學習與專注態度", labels: { high: "🟢 課堂聽講主動專注", mid: "🟡 上課規矩平穩守紀", low: "🔴 課堂聽講較易分心" } },
  { id: "gen_homework", name: "📖 作業繳交與訂正習慣", labels: { high: "🟢 作業工整且主動訂正", mid: "🟡 按時完成每日功課", low: "🔴 功課書寫急躁馬虎" } },
  { id: "gen_cooperation", name: "🤝 同儕相處與分組合作", labels: { high: "🟢 團隊合作協調力優", mid: "🟡 配合分組友善相處", low: "🔴 團體分工配合被動" } },
  { id: "gen_discipline", name: "📜 生活常規與自律負責", labels: { high: "🟢 自律負責有責任感", mid: "🟡 能遵守班級常規", low: "🔴 自控力弱常需提點" } }
];

export const SUBJECT_DIMENSIONS: Record<string, Record<string, Dimension[]>> = {
  chinese: {
    "1": [
      { id: "phonics", name: "🗣️ 注音符號拼讀與聽寫（拼音/聲調訓練）", labels: { high: "🟢 注音拼讀準確流暢", mid: "🟡 能拼讀課本拼音", low: "🔴 注音常拼錯、聽寫慢" } },
      { id: "characters", name: "📖 常用漢字認讀與識字（認讀/認字量）", labels: { high: "🟢 識字量大認讀快", mid: "🟡 能認讀課本內生字", low: "🔴 常用字詞常認錯" } },
      { id: "stroke_order", name: "✏️ 握筆姿勢與基本筆畫（筆順/硬筆基礎）", labels: { high: "🟢 握筆端正筆順正確", mid: "🟡 能大致按筆順寫字", low: "🔴 握筆偏低、寫字常錯" } },
      { id: "reading_aloud", name: "🗣️ 課文朗讀與口語發表（看圖說話/流暢度）", labels: { high: "🟢 朗讀聲調優美有感情", mid: "🟡 能跟讀課文並簡單回答", low: "🔴 朗讀易漏字或不敢發表" } },
      { id: "attitude", name: "💡 國語學習興趣與常規配合", labels: { high: "🟢 上課專注作業極優", mid: "🟡 能乖巧寫完每日功課", low: "🔴 寫功課比較急躁分心" } }
    ],
    "2": [
      { id: "stroke_order_2", name: "✏️ 生字部首結構與硬筆書寫（字形/部首）", labels: { high: "🟢 部首字形端正精準", mid: "🟡 字體大致端正工整", low: "🔴 常漏寫筆劃、字跡偏亂" } },
      { id: "phrases", name: "✍️ 詞彙造詞與短句仿寫（造句/詞庫擴充）", labels: { high: "🟢 造詞豐富造句有創意", mid: "🟡 能通順仿寫短句", low: "🔴 詞彙量少造句不完整" } },
      { id: "ext_reading", name: "📖 故事聆聽理解與看圖解說（摘要/口說）", labels: { high: "🟢 閱讀理解力與發表佳", mid: "🟡 能在提示下答故事主旨", low: "🔴 聽長篇故事易恍神" } },
      { id: "radical_concept", name: "🔍 部首概念與字義關聯理解（部首辨識）", labels: { high: "🟢 部首概念極熟能舉一反三", mid: "🟡 認識常用部首與基本意涵", low: "🔴 部首混淆常查錯分類" } },
      { id: "attitude", name: "💡 國語學科學習與作業訂正", labels: { high: "🟢 作業工整且用心訂正", mid: "🟡 能按時繳交作業完成", low: "🔴 作業書寫不夠細緻常漏" } }
    ],
    "3": [
      { id: "paragraph", name: "✍️ 段落寫作與完整造句（短文/標點練習）", labels: { high: "🟢 段落通順結構完整", mid: "🟡 能寫出基本通順短文", low: "🔴 段落語句破碎常用口語" } },
      { id: "dictionary", name: "🔍 字典檢索與字音字形辨析（查字/形近字）", labels: { high: "🟢 查字典熟練字音極熟", mid: "🟡 能順利查字找出解釋", low: "🔴 拼音或部首查字典較慢" } },
      { id: "reading_comprehension", name: "📖 課文情節理解與重點摘要（閱讀策略）", labels: { high: "🟢 能迅速抓出課文大意", mid: "🟡 引導下可說出課文情節", low: "🔴 文本段落理解較吃力" } },
      { id: "rhetoric_intro", name: "📝 基礎修辭賞析與句型練習（譬喻/擬人）", labels: { high: "🟢 巧妙融入修辭句型精湛", mid: "🟡 能理解並套用基礎修辭", low: "🔴 句子結構單一或常有語病" } },
      { id: "attitude", name: "💡 國語課堂參與及聽講專注", labels: { high: "🟢 作業用心、主動閱讀", mid: "🟡 作業平實完成無違規", low: "🔴 課堂聽講定性需加強" } }
    ],
    "4": [
      { id: "narrative", name: "✍️ 記敘文段落佈局與起承轉合（作文）", labels: { high: "🟢 修辭豐富段落佈局優", mid: "🟡 能按起承轉合寫記敘文", low: "🔴 修辭單調、字數較零碎" } },
      { id: "idioms", name: "📝 成語運用與句型擴寫（成語/造句擴充）", labels: { high: "🟢 成語運用精當句型多樣", mid: "🟡 能妥善運用基礎成語", low: "🔴 成語意思常混淆、句子單薄" } },
      { id: "long_reading", name: "📖 長文自主閱讀理解與摘要（多版本閱讀）", labels: { high: "🟢 閱讀理解快且能抓重點", mid: "🟡 能讀懂中長篇文章", low: "🔴 長文閱讀時易分心馬虎" } },
      { id: "writing_detail", name: "✏️ 標點精準度與錯別字更正（精緻描寫）", labels: { high: "🟢 字形與標點運用極少出錯", mid: "🟡 書寫工整、錯字大體能更正", low: "🔴 常見錯別字多且標點混亂" } },
      { id: "attitude", name: "💡 國語學習熱忱與發表自信", labels: { high: "🟢 主動挑戰延伸寫作", mid: "🟡 按部就班配合教學", low: "🔴 學習心態偏於被動" } }
    ],
    "5": [
      { id: "expository", name: "✍️ 說明文要素與議論文撰寫（思辨寫作）", labels: { high: "🟢 論點清晰且論證合理", mid: "🟡 能分段並說明基本觀點", low: "🔴 說明混亂、論據不夠充分" } },
      { id: "classical", name: "📜 文言字詞與經典文學賞析（白話/注釋）", labels: { high: "🟢 文言文語譯理解極佳", mid: "🟡 能讀懂白話譯文與常識", low: "🔴 對文言字詞語譯感到頭痛" } },
      { id: "critical_thinking", name: "💡 文本批判思辨、提問與省思（深究）", labels: { high: "🟢 思辨敏捷能主動質疑提問", mid: "🟡 能回答有深度的課文提問", low: "🔴 回答問題較為被動或敷衍" } },
      { id: "speed_reading", name: "📖 快速閱讀與多重文本比對（閱讀自學）", labels: { high: "🟢 跨篇章資料整合極具條理", mid: "🟡 能完成兩篇短文的比較重點", low: "🔴 面對複雜資料整合較為吃力" } },
      { id: "attitude", name: "💡 語文自主學習與預習札記", labels: { high: "🟢 學習極主動、閱讀面廣", mid: "🟡 確實做好預習與課堂筆記", low: "🔴 作業需師長多次催促繳交" } }
    ],
    "6": [
      { id: "grad_writing", name: "✍️ 畢業感懷與抒情主題深度寫作（心靈感悟）", labels: { high: "🟢 文筆深刻、富含感悟思想", mid: "🟡 結構完整能寫出畢業感懷", low: "🔴 寫作字數偏少、內容較空洞" } },
      { id: "rhetoric", name: "📝 修辭多變融會與用字文采（綜合展現）", labels: { high: "🟢 修辭高妙、成語信手拈來", mid: "🟡 句型多變且用字通順", low: "🔴 詞庫貧乏、常有語句重複" } },
      { id: "cross_domain", name: "📖 跨領域長文分析與生活應用（統整閱讀）", labels: { high: "🟢 跨文本資訊統整能力極佳", mid: "🟡 能整合多方資料進行摘要", low: "🔴 長文本分析與統整速度慢" } },
      { id: "project_presentation", name: "🗣️ 主題專案報告撰寫與口頭發表（簡報/報告）", labels: { high: "🟢 簡報結構邏輯極優且口談落落大方", mid: "🟡 能完成口頭報告的基本內容", low: "🔴 上台發表時表現較為緊繃怯場" } },
      { id: "attitude", name: "💡 畢業專案自主規劃與自我負責度", labels: { high: "🟢 自主規劃能力好、極負責", mid: "🟡 本分工作皆主動做好", low: "🔴 做事拖沓需要多次提醒" } }
    ]
  },
  math: {
    "1": [
      { id: "number100", name: "🔢 100以內的數、位值與加減運算（直式計算）", labels: { high: "🟢 加減快且能直式計算", mid: "🟡 算得慢但答案多正確", low: "🔴 加減位值常搞混出錯" } },
      { id: "shapes", name: "🧩 幾何圖形分類與特徵辨識（形狀分析）", labels: { high: "🟢 空間感好能辨析圖形", mid: "🟡 能依圖形分類歸納", low: "🔴 圖形分類常辨認不清" } },
      { id: "time_clock", name: "⏰ 鐘面整點與半點識讀（時間量感）", labels: { high: "🟢 識讀時間又快又精準", mid: "🟡 能認出整點與半點鐘", low: "🔴 時針分針關係常指錯" } },
      { id: "comparison", name: "📏 基礎長度、重量與分堆比較（基礎量感）", labels: { high: "🟢 量感佳能精準按特徵分類", mid: "🟡 能完成基礎長短大小比較", low: "🔴 直接比較或看圖數數常漏算" } },
      { id: "attitude", name: "💡 數學作業端正作答與專注力", labels: { high: "🟢 專心算題且極少粗心", mid: "🟡 乖巧寫完每日功課", low: "🔴 寫功課比較急躁草率" } }
    ],
    "2": [
      { id: "multiplication", name: "🔢 九九乘法口訣熟練與應用（乘加乘減）", labels: { high: "🟢 乘法表倒背如流且靈活", mid: "🟡 乘法表背誦順暢可運用", low: "🔴 乘法口訣不熟易背錯" } },
      { id: "money", name: "🪙 錢幣換算找零與兩步驟加減（位值估算）", labels: { high: "🟢 錢幣找零與換算極快", mid: "🟡 能完成兩步驟估算加減", low: "🔴 錢幣找零常算錯或漏算" } },
      { id: "measurement", name: "📏 長度公分公尺與水量容積測量（長度/容量）", labels: { high: "🟢 單位量感極佳作答好", mid: "🟡 能掌握長度基本測量", low: "🔴 直尺測量起點常看錯" } },
      { id: "fraction_intro", name: "🍰 等分與基礎分數概念前置（等分實作）", labels: { high: "🟢 等分觀念精巧幾分之幾好", mid: "🟡 能圈出或折出指定的等分", low: "🔴 對幾分之幾的意思常會卡住" } },
      { id: "attitude", name: "💡 數學列式完整與單位標記細緻度", labels: { high: "🟢 確實按格式列式書寫", mid: "🟡 能配合進度寫完作業", low: "🔴 常粗心大意漏寫單位" } }
    ],
    "3": [
      { id: "calc_10000", name: "🔢 萬以內數直式加減與乘除法（多位數）", labels: { high: "🟢 三位數乘除算又快又準", mid: "🟡 直式計算大致平穩正確", low: "🔴 直式乘除位數常對不齊" } },
      { id: "fraction_decimal", name: "🍰 基本分數與一位小數等值對應（量感換算）", labels: { high: "🟢 數值量感極好觀念透徹", mid: "🟡 懂分數與小數等值對應", low: "🔴 分數分子分母概念易混淆" } },
      { id: "circle_time", name: "⏰ 時間、時刻換算與圓規半徑畫圓（圓/時間）", labels: { high: "🟢 圓規畫圓對稱與量感好", mid: "🟡 能順利完成時間單位換算", low: "🔴 時間進位或畫圓容易歪掉" } },
      { id: "word_problems", name: "📝 兩步驟除乘應用題解題結構（應用題型）", labels: { high: "🟢 解題步驟條理分明速度快", mid: "🟡 能列出式子算出正確結果", low: "🔴 應用題常因看不懂題意卡關" } },
      { id: "attitude", name: "💡 數學專注算題與耐挫力", labels: { high: "🟢 作業整齊、解題專注", mid: "🟡 上課認真聽且完成作業", low: "🔴 作業寫得比較急躁粗心" } }
    ],
    "4": [
      { id: "calc_mixed", name: "🔢 四則混合運算與括號併式（運算順序）", labels: { high: "🟢 先乘後除觀念清楚快速", mid: "🟡 大數直式加減運算平穩", low: "🔴 括號與四則計算順序常錯" } },
      { id: "fraction_op", name: "🍰 同分母分數與小數二位加減（假分數/帶分數）", labels: { high: "🟢 分數運算精準量感好", mid: "🟡 掌握帶分數與假分數換算", low: "🔴 分數加減分母常算成相加" } },
      { id: "geometry_angle", name: "📐 角度大小量測與垂直平行特徵（量角器幾何）", labels: { high: "🟢 量角器使用純熟幾何佳", mid: "🟡 能認出平行線與直角", low: "🔴 角度識讀與量角器常讀錯" } },
      { id: "stat_chart", name: "📊 統計圖表與折線圖報讀分析（圖表分析）", labels: { high: "🟢 圖表資訊掌握精細且分析佳", mid: "🟡 能報讀折線圖與二維表格", low: "🔴 圖表交叉比對時容易看錯行" } },
      { id: "attitude", name: "💡 錯題主動分析與複習自控", labels: { high: "🟢 主動分析錯題、定性高", mid: "🟡 能乖巧按時完成練習", low: "🔴 容易有逃避難題的傾向" } }
    ],
    "5": [
      { id: "factors_multiples", name: "🔢 因數與倍數、公因數公倍數（公因倍數）", labels: { high: "🟢 找公因倍數極快且邏輯佳", mid: "🟡 能按步驟列出因數與倍數", low: "🔴 因數倍數常遺漏、找不齊" } },
      { id: "hetero_fraction", name: "🍰 異分母分數加減與通分技巧（分數乘法）", labels: { high: "🟢 通分與小數計算純熟", mid: "🟡 能通分完成異分母運算", low: "🔴 通分時分子分母常忘同乘" } },
      { id: "volume_3d", name: "📦 角柱角錐特徵與幾何表面積體積（複合幾何）", labels: { high: "🟢 空間感好能算複合體積", mid: "🟡 基本柱體公式能掌握應用", low: "🔴 表面積與體積公式易混淆" } },
      { id: "symmetry_time", name: "📐 線對稱圖形與時間乘除法應用", labels: { high: "🟢 對稱量感極優，算式步驟快", mid: "🟡 理解對稱軸特點，算對時間乘除", low: "🔴 對稱軸繪製常歪、時間乘除易錯" } },
      { id: "attitude", name: "💡 高年段數學抗挫力與算式精確", labels: { high: "🟢 耐心克服繁瑣算式", mid: "🟡 本分完成、確實訂正", low: "🔴 面對複雜算式易粗心放棄" } }
    ],
    "6": [
      { id: "four_ops_mixed", name: "🔢 分數小數四則混合運算與巧算（精度控制）", labels: { high: "🟢 計算細心度與精確度高", mid: "🟡 分數小數混和運算平順", low: "🔴 分小數互換與四則運算易錯" } },
      { id: "circle_area", name: "🔴 圓周率與圓面積複合圖形（複合圓周長/面積）", labels: { high: "🟢 扇形與圓面積複合邏輯棒", mid: "🟡 能帶入3.14公式算圓面積", low: "🔴 圓周長與圓面積公式常搞混" } },
      { id: "ratio_percent", name: "📊 比與比值、比例尺及百分比圓形圖", labels: { high: "🟢 比例尺及百分比概念清楚", mid: "🟡 能讀懂百分比圓形圖數據", low: "🔴 比例概念與生活百分比應用不熟" } },
      { id: "speed_equations", name: "⏱️ 速度問題、天平原理與等量公理（方程式）", labels: { high: "🟢 速度量感強，等量公理解題精準", mid: "🟡 能掌握速度三要素及基本代數", low: "🔴 速度單位換算易錯、方程式變號不熟" } },
      { id: "attitude", name: "💡 自我挑戰難題與生活解題應變", labels: { high: "🟢 樂於思索挑戰高難度難題", mid: "🟡 能乖巧做好總複習考卷", low: "🔴 遇到變化題容易卡住或放棄" } }
    ]
  },
  social: {
    "1": [
      { id: "campus_guide", name: "🏠 學校生活與作息適應（校園常規）", labels: { high: "🟢 新生作息適應奇佳規矩棒", mid: "🟡 能配合日常作息生活安穩", low: "🔴 校園大範圍環境常規需多加提醒" } },
      { id: "peer_relation", name: "🤝 同學良好互動與和諧分享（同儕）", labels: { high: "🟢 樂於分享是班上人氣王", mid: "🟡 能與同儕友善玩遊戲不吵架", low: "🔴 偶爾在分組玩耍中有小摩擦" } },
      { id: "self_care", name: "🧹 衛生生活自理與打掃服務（自理）", labels: { high: "🟢 掃除極度認真負責貼心", mid: "🟡 能完成交代的打掃分工", low: "🔴 打掃工作常會恍神需要指引" } }
    ],
    "2": [
      { id: "neighborhood", name: "🗺️ 學校周邊鄰里與基本交通安全（社區）", labels: { high: "🟢 交通安全地標常識佳非常有概念", mid: "🟡 認識社區重要機構與交通號誌", low: "🔴 對社區周圍空間方向常摸不清" } },
      { id: "family", name: "❤️ 家庭生活感恩、角色與孝敬（家庭）", labels: { high: "🟢 感恩懂事體貼家庭角色本分", mid: "🟡 能配合繪製家庭生活點滴單", low: "🔴 對家庭責任感教育尚需引導" } },
      { id: "cleaning", name: "🧹 班級生活打掃與生活負責度（服務）", labels: { high: "🟢 做掃除精細努力最能負責", mid: "🟡 做好每日個人座位周遭清理", low: "🔴 掃除常慢吞吞需要催促指導" } }
    ],
    "3": [
      { id: "hometown_intro", name: "🏢 家鄉生活環境特色認識（家鄉認同）", labels: { high: "🟢 精細觀察生活社區空間", mid: "🟡 能指認課本家鄉基本特色", low: "🔴 對周遭生活環境認識較淺" } },
      { id: "hometown_map", name: "🗺️ 地形地圖、比例尺與方向圖例（地圖）", labels: { high: "🟢 地圖方向與比例概念佳", mid: "🟡 能讀懂地圖指引與圖例", low: "🔴 空間方向觀念理解較慢" } },
      { id: "hometown_culture", name: "🏯 在地習俗、古蹟與民俗傳承（文化）", labels: { high: "🟢 家鄉人文歷史探究熱情高", mid: "🟡 理解基礎生活產業與習俗", low: "🔴 對家鄉文化資產概念模糊" } },
      { id: "hometown_organization", name: "🏫 地方公共機構及公共設施使用", labels: { high: "🟢 了解機構功能且能遵守規範", mid: "🟡 認識生活周遭的常見機關", low: "🔴 機構名稱和申辦常識有些陌生" } },
      { id: "social_attitude", name: "💡 小組社會探討發言與團隊配合", labels: { high: "🟢 小組討論積極、發表觀點有見地", mid: "🟡 能配合進度交社會學習單", low: "🔴 課堂學習態度被動，缺乏討論熱情" } }
    ],
    "4": [
      { id: "hometown_nature", name: "🏞️ 家鄉地形、自然地貌與山川分布（地理）", labels: { high: "🟢 氣候地形資源統整能力佳", mid: "🟡 掌握家鄉基本山川與地貌", low: "🔴 對自然與生活空間理解不熟" } },
      { id: "hometown_industry", name: "💼 家鄉產業古今轉變與產業特產（產業）", labels: { high: "🟢 理解家鄉古今演變有深度", mid: "🟡 認識地方產業活動與故事", low: "🔴 對歷史古蹟與產業關聯模糊" } },
      { id: "hometown_traffic", name: "🚗 交通網絡聯絡、革新與便利（生活網絡）", labels: { high: "🟢 交通與區域聯絡生活網絡理解力優", mid: "🟡 了解大眾運輸與民生關係", low: "🔴 對交通建設與生活關聯模糊" } },
      { id: "local_resource", name: "💧 家鄉水源珍惜與生態環境永續（珍惜資源）", labels: { high: "🟢 環保永續觀念佳，生活處處實踐", mid: "🟡 知道水土保持與源頭防護常識", low: "🔴 對環境保護議題較不關心" } },
      { id: "social_attitude", name: "💡 社會課堂筆記、學習本按時完成", labels: { high: "🟢 上課專注勤做筆記，作業優良", mid: "🟡 按時繳交社會科練習本", low: "🔴 社會科習作常需要多次催促" } }
    ],
    "5": [
      { id: "taiwan_history", name: "📜 臺灣歷史發展、政權變遷與脈絡（歷史）", labels: { high: "🟢 臺灣歷史脈絡統整力優秀", mid: "🟡 大致了解臺灣各朝代事件", low: "🔴 臺灣史地時空概念易搞混" } },
      { id: "taiwan_geography", name: "🗺️ 臺灣地理、氣候、水文與經緯特色（地理）", labels: { high: "🟢 臺灣經緯與地形特色極熟", mid: "🟡 理解臺灣氣候與水文分布", low: "🔴 臺灣各大地形區分常指錯" } },
      { id: "democracy", name: "⚖️ 民主公民憲政發展、政府組織架構（法治）", labels: { high: "🟢 公民法律觀念十分優秀", mid: "🟡 理解日常民主生活與政府職能", low: "🔴 憲法與各級行政組織觀念弱" } },
      { id: "taiwan_culture", name: "🏯 多元族群文化融合、閩客及新住民文化", labels: { high: "🟢 文化包容度極佳，懂得欣賞多元文化", mid: "🟡 認識各族群習俗與代表性文化", low: "🔴 對於臺灣多元社群傳統較缺乏認識" } },
      { id: "social_attitude", name: "💡 民主思辨課堂發言與社會批判", labels: { high: "🟢 發言見解精闢，極具思辨力", mid: "🟡 遵守課堂民主規則，積極配合", low: "🔴 參與思辨不夠專注，發言退縮" } }
    ],
    "6": [
      { id: "economy", name: "🪙 消費理財、市場供需與勞動權益（經濟）", labels: { high: "🟢 法律規範與市場經濟觀念佳", mid: "🟡 具備基礎法治與理財概念", low: "🔴 經濟供需與抽象法規理解慢" } },
      { id: "global_view", name: "🌍 世界地理大洲特色與SDGs全球視野", labels: { high: "🟢 SDGs與永續關懷視野寬廣", mid: "🟡 認識五大洲地理與多元文化", low: "🔴 世界地理概念與氣候成因混淆" } },
      { id: "international_culture", name: "🤝 國際關懷與異國多元文化民俗（國際）", labels: { high: "🟢 國際觀敏銳且重視人道關懷", mid: "🟡 能欣賞異國文化民俗風情", low: "🔴 國際議題與時事參與感低" } },
      { id: "technology_life", name: "🌐 科技便利科技倫理與資訊安全倫理", labels: { high: "🟢 資訊公民素養極佳能明辨是非", mid: "🟡 能知道網路著作權與資安防範", low: "🔴 網路倫理常識不清、著作權模糊" } },
      { id: "social_attitude", name: "💡 國際時事評論與社會公民參與", labels: { high: "🟢 時事分析有調理，獨立觀點好", mid: "🟡 表達切合活動期待課堂平穩", low: "🔴 關心社會時事偏少、表現被動" } }
    ]
  },
  english: {
    "1": [
      { id: "phonics", name: "🔤 字母大小寫與基礎Phonics發音規則", labels: { high: "🟢 字母拼讀發音標準流利", mid: "🟡 能辨識基本字母與拼讀", low: "🔴 字母常與注音符號混淆" } },
      { id: "listening", name: "🎧 課堂招呼語與日常簡單英語指令", labels: { high: "🟢 聽力極佳能迅速做出對應肢體動作", mid: "🟡 能聽懂簡單的Hello、Stand up、Sit down", low: "🔴 聽英語時較為發愣容易遲緩" } },
      { id: "english_attitude", name: "💡 英語歌謠唱跳與課堂積極度", labels: { high: "🟢 歌謠跳舞認真又大方", mid: "🟡 乖巧完成齊唱複誦", low: "🔴 課堂活動時容易分心發呆" } }
    ],
    "2": [
      { id: "phonics", name: "🔤 字母發音、日常單字拼讀Phonics", labels: { high: "🟢 辨音能力強，拼讀直覺很好", mid: "🟡 掌握課本單字拼讀大體順暢", low: "🔴 對部分母音發音常指錯搞混" } },
      { id: "speaking", name: "💬 單字口說、問候生活句型（口說信心）", labels: { high: "🟢 口語問答自信大方音準好", mid: "🟡 大聲唸出短小單字問候句型", low: "🔴 唸英文時聲音太小、容易害羞" } },
      { id: "english_attitude", name: "💡 英語學習高度興趣與配合", labels: { high: "🟢 作業整齊聽講活潑參與", mid: "🟡 乖巧寫好習作本", low: "🔴 書寫生字時比較草率、常催促" } }
    ],
    "3": [
      { id: "phonics", name: "🔤 子音母音拼讀與基礎日常對話", labels: { high: "🟢 字母拼讀發音標準流利", mid: "🟡 能辨識基本字母與拼讀", low: "🔴 字母大小寫抄寫常有疏漏" } },
      { id: "listening", name: "🎧 課堂聽力測驗、老師指令大會師", labels: { high: "🟢 聽力敏銳且互動反應快", mid: "🟡 能聽懂日常基本的英語指令", low: "🔴 對英語聽力指令反應偏慢" } },
      { id: "vocabulary", name: "🔤 核心單字抄寫與看圖讀字量", labels: { high: "🟢 單字認讀與累積極快", mid: "🟡 能記住各課的核心生字", low: "🔴 單字常會遺忘、字母順序顛倒" } },
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
  },
  science: {
    "1": [
      { id: "observe", name: "🔍 大自然感官、樹木植物與天氣觀察", labels: { high: "🟢 觀察敏銳細緻記錄優良", mid: "🟡 能描述常見的天氣變化", low: "🔴 觀察常遺漏細節、被動" } },
      { id: "nature_explore", name: "🌱 生物生命力愛護與校園尋寶（生活生命）", labels: { high: "🟢 愛護生命充滿觀察好奇心", mid: "🟡 能配合發現校園好玩生物", low: "🔴 對自然生物探索較冷漠" } }
    ],
    "2": [
      { id: "observe", name: "🔍 天氣水氣與大自然植物葉莖根感官觀察", labels: { high: "🟢 觀察敏銳細緻記錄優良", mid: "🟡 能描述常見的氣候變化", low: "🔴 常漏掉大自然觀察細節" } },
      { id: "experimental_attitude", name: "🧪 實驗小用具安全使用、操作與收拾習慣", labels: { high: "🟢 用具拿法標準且收拾乾乾淨淨", mid: "🟡 能好好在指引下排好放大鏡", low: "🔴 畫圖或操作用具容易分心玩" } }
    ],
    "3": [
      { id: "observe", name: "🔍 天氣記錄、植物結構（葉莖根）細部觀察", labels: { high: "🟢 觀察敏銳細緻記錄優良", mid: "🟡 掌握氣候變化的基本代表符號", low: "🔴 自主性低，常漏掉觀察記錄" } },
      { id: "magnetic", name: "🧲 磁鐵吸力與神奇磁極同極相斥操作（磁力）", labels: { high: "🟢 掌握磁極特性，靈活組裝磁力車", mid: "🟡 知道磁極相吸相斥，能做小遊戲", low: "🔴 對磁鐵吸力和方向有些分不清" } },
      { id: "light_shadow", name: "🕯️ 光的折射、鏡子反射與神奇光影操作（光學）", labels: { high: "🟢 折射原理清晰，影子變化記錄好", mid: "🟡 能用鏡子做光的折射與倒影", low: "🔴 觀察光影運行方向時有些卡住" } },
      { id: "science_attitude", name: "💡 科學課堂常規、動手興趣與專注度", labels: { high: "🟢 對科學充滿好奇，主動追問大師", mid: "🟡 乖巧聽講自然常識", low: "🔴 上課常愛轉原子筆或恍神" } }
    ],
    "4": [
      { id: "experiment", name: "🧪 昆蟲生態、電路串並聯組裝操作（電路/昆蟲）", labels: { high: "🟢 電路組裝快且動手能力強", mid: "🟡 能配合組員安全進行實驗", low: "🔴 做實驗時常分心不按指示" } },
      { id: "aquatic_life", name: "🌱 水生家族、水生植物特徵與構造親測（水生）", labels: { high: "🟢 水生植物漂浮構造分析透徹", mid: "🟡 能指認沉水與浮水植物大意", low: "🔴 水生環境與適應特徵容易張冠李戴" } },
      { id: "rain_season", name: "🌧️ 雨量蒸發與簡易氣象觀測百葉箱報讀", labels: { high: "🟢 氣象報讀極快且雨量概念好", mid: "🟡 能讀懂簡易溫度與風速方向", low: "🔴 對百葉箱內氣候數據大意常看不清" } },
      { id: "science_attitude", name: "💡 實驗桌整理歸位與組員和諧分工衛生", labels: { high: "🟢 實驗桌收拾最快，團隊核心領袖", mid: "🟡 按組長分配擦拭桌椅、交還器材", low: "🔴 實驗後常不幫忙清理桌面就跑去玩" } }
    ],
    "5": [
      { id: "concepts", name: "💡 酸鹼溶解水溶液與神奇星空觀測星盤（溶解/星空）", labels: { high: "🟢 力學概念與天文觀念透徹", mid: "🟡 理解溶解常識與星座指引", low: "🔴 抽象科學觀念吸收較緩慢" } },
      { id: "motion_force", name: "⚙️ 重力摩擦力浮力與玩具車運動測試（力感）", labels: { high: "🟢 力感作答好、能利用摩擦力做控制析", mid: "🟡 掌握彈力與重力基本測量", low: "🔴 對摩擦係數或重力浮力概念常弄錯" } },
      { id: "plant_propagation", name: "🌱 植物種子發芽、根莖葉構造與繁殖（生命科學）", labels: { high: "🟢 對種子與生命繁衍機制富有熱忱", mid: "🟡 認真種植與記錄綠豆發芽變化", low: "🔴 綠豆觀察容易缺繳、生命照顧草率" } },
      { id: "science_attitude", name: "💡 科學筆記整理、專題報告細節書寫", labels: { high: "🟢 自然筆記圖文並茂，學術嚴謹", mid: "🟡 按時提交自然科實驗報告", low: "🔴 科學報告常草草書寫、敷衍了事" } }
    ],
    "6": [
      { id: "advanced", name: "⚙️ 槓桿滑輪力矩平衡與防坡抗震操作（力學）", labels: { high: "🟢 槓桿原理與力矩概念極佳", mid: "🟡 了解生態鏈與食物網關係", low: "🔴 對力學公式與生態平衡不熟" } },
      { id: "ecosystems", name: "🌳 大自然食物網、生產分解者與環境保護（永續）", labels: { high: "🟢 SDGs生態平衡觀念好，熱衷探究外來種", mid: "🟡 知道食物鏈角色分佈與大樹功能", low: "🔴 生物平衡與永續環保概念模糊" } },
      { id: "stellar_geology", name: "⛰️ 岩石礦物分類、化石與大地地震災害防治", labels: { high: "🟢 岩石辨識度高、地震常識極好", mid: "🟡 理解化石由來及基本火山防災", low: "🔴 常辨認错石英長石、地震概念不熟" } },
      { id: "science_attitude", name: "💡 大考總複習態度與動手探究堅持度", labels: { high: "🟢 面對繁複大考題與操作，熱情不減", mid: "🟡 確實複習並按進度準備考試考卷", low: "🔴 做自然複習容易敷衍、懶得思考" } }
    ]
  },
  life: {
    "1": [
      { id: "explore", name: "🔍 學校環境與新生活作息規範適應", labels: { high: "🟢 新生適應快且探求心強", mid: "🟡 配合發現校園好玩事物", low: "🔴 適應期較長且探索被動" } },
      { id: "cooperate", name: "🤝 同儕遊戲相處與分組玩具分享", labels: { high: "🟢 常帶同學玩且懂得分享", mid: "🟡 能融入小組跟同學同樂", low: "🔴 下課互動自我容易吵架" } },
      { id: "life_attitude", name: "💡 生活日常常規秩序自律性", labels: { high: "🟢 聽懂指令，自理能力極佳", mid: "🟡 基本能排好路隊安靜下課", low: "🔴 課堂好動需老師時常安撫" } }
    ],
    "2": [
      { id: "create", name: "🎨 美勞手作材料剪貼與媒材配色創作", labels: { high: "🟢 剪貼作品很有豐富色彩", mid: "🟡 作品完整能依步驟完成", low: "🔴 手作協調度稍慢有些挫折" } },
      { id: "duty", name: "🧹 班級打掃區、黑板值日負責度", labels: { high: "🟢 做掃除認真做事最負責", mid: "🟡 能依值日指令擦好黑板", low: "🔴 值日工作需要師長常督促" } },
      { id: "life_attitude", name: "💡 生活課堂用具收拾歸位與桌面整潔", labels: { high: "🟢 抽屜書架最乾淨、收拾有條不紊", mid: "🟡 配合收拾美勞屑屑保持桌面良好", low: "🔴 抽屜常亂塞垃圾、美勞後桌面不擦" } }
    ],
    "3": [
      { id: "create", name: "🎨 藝美材料多元素材創作與表達（藝美）", labels: { high: "🟢 創意豐富且造形色彩優", mid: "🟡 繪畫作品能按進度完成", low: "🔴 繪畫表現與構圖較為拘謹" } }
    ],
    "4": [
      { id: "create", name: "🎨 美感感知、對稱窗花編織手作創作（藝美）", labels: { high: "🟢 豐富構圖與色彩美感佳", mid: "🟡 順利完成課堂工藝創作", low: "🔴 創作技巧需再多加練習" } }
    ],
    "5": [
      { id: "create", name: "🎨 美術作品複合創作、多媒材拼接表達（藝美）", labels: { high: "🟢 自主美感展現力特優", mid: "🟡 符合進度完成各項美工", low: "🔴 對複合媒材掌握有待提點" } }
    ],
    "6": [
      { id: "create", name: "🎨 畢業主題美展創作、設計與自主佈展（藝美）", labels: { high: "🟢 美學與色彩搭配有生命力", mid: "🟡 作品能切合主題並完工", low: "🔴 創作積極度需要師長督促" } }
    ]
  },
  health: {
    "1": [
      { id: "habits", name: "🦷 個人生活餐後潔牙、洗手衛生自理", labels: { high: "🟢 餐後潔牙與洗手做得好", mid: "🟡 衛生習慣尚稱穩定自理", low: "🔴 個人衛生常需老師叮嚀" } }
    ],
    "2": [
      { id: "habits", name: "🦷 餐後衛生與座位垃圾隨時清理自立", labels: { high: "🟢 餐後潔牙與洗手做得好", mid: "🟡 衛生習慣尚稱穩定自理", low: "🔴 個人衛生常需老師叮嚀" } }
    ],
    "3": [
      { id: "knowledge", name: "💡 基礎六大類營養常識與環境安全（保健）", labels: { high: "🟢 營養常識極為豐富好", mid: "🟡 懂得生活保健避開危險", low: "🔴 保健觀念理解稍微緩慢" } }
    ],
    "4": [
      { id: "knowledge", name: "💡 視力保健、正確坐姿與日常防護常識", labels: { high: "🟢 視力保健做得深、坐姿挺拔", mid: "🟡 理解保健並能保護視力坐姿", low: "🔴 保健常識吸收好，唯看書眼睛太近" } }
    ],
    "5": [
      { id: "growth", name: "📈 青春期生理、心理發展學理調適（保健）", labels: { high: "🟢 身心調適概念極佳大方", mid: "🟡 理解生理發展常識保健", low: "🔴 對成長期的保健知識害羞" } }
    ],
    "6": [
      { id: "growth", name: "📈 包紮急救、意外傷害防護實作與演練（急救）", labels: { high: "🟢 衛保觀念通透生活實踐優", mid: "🟡 掌握基本急救與保健常識", low: "🔴 健康促進與演練被動" } }
    ]
  },
  pe: {
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
  },
  fineart: {
    "1": [
      { id: "creation", name: "🎨 折紙捏塑、大膽塗色手作（美工）", labels: { high: "🟢 配色與構圖極有豐富美感", mid: "🟡 作品完整符合美術期望", low: "🔴 繪畫表現與構圖較為拘謹" } }
    ],
    "2": [
      { id: "creation", name: "🎨 水彩調色、蠟筆刮畫混色手作（配色）", labels: { high: "🟢 配色與構圖極有豐富美感", mid: "🟡 作品完整符合美術期望", low: "🔴 繪畫表現與構圖較為拘謹" } }
    ],
    "3": [
      { id: "creation", name: "🎨 黏土立體造型、版畫初章手作（造型）", labels: { high: "🟢 配色與構圖極有豐富美感", mid: "🟡 作品完整符合美術期望", low: "🔴 繪畫表現與構圖較為拘謹" } }
    ],
    "4": [
      { id: "creation", name: "🎨 剪紙窗花、水彩明暗繪畫技巧（彩繪）", labels: { high: "🟢 配色與構圖極有豐富美感", mid: "🟡 作品完整符合美術期望", low: "🔴 繪畫表現與構圖較為拘謹" } }
    ],
    "5": [
      { id: "creation", name: "🎨 點透視原理、版畫水墨創作（技巧）", labels: { high: "🟢 線條流暢且美學構圖優良", mid: "🟡 能遵循方法操作水墨與印版", low: "🔴 媒材掌握不平穩，水份過度" } }
    ],
    "6": [
      { id: "creation", name: "🎨 複合創作與數位美感表達（畢業卡）", labels: { high: "🟢 配色大膽巧思多，美感耀眼", mid: "🟡 認真配合完成美術作品", low: "🔴 美術用具常忘帶、畫作凌亂" } }
    ]
  },
  music: {
    "1": [
      { id: "singing", name: "🎤 歌唱音準、拍子律動與快樂大聲齊唱", labels: { high: "🟢 音調與齊唱節奏音色佳", mid: "🟡 能大聲齊唱並掌握大致的節奏", low: "🔴 唱歌拍子常落拍，顯得害羞音量小" } }
    ],
    "2": [
      { id: "singing", name: "🎤 基礎敲擊敲三角鐵、木琴與歌唱音準", labels: { high: "🟢 音調與齊唱節奏音色佳", mid: "🟡 能大聲齊唱並掌握大致的節奏", low: "🔴 唱歌拍子常落拍，顯得害羞音量小" } }
    ],
    "3": [
      { id: "singing", name: "🎤 歌唱口音發音標準與直笛按孔基礎（音樂）", labels: { high: "🟢 音調與齊唱節奏音色佳", mid: "🟡 能大聲齊唱並掌握大致的節奏", low: "🔴 唱歌拍子常落拍，顯得害羞音量小" } }
    ],
    "4": [
      { id: "singing", name: "🎤 二部合唱、輪唱及讀譜視拍能力（音樂）", labels: { high: "🟢 聲部和諧且讀譜識節拍好", mid: "🟡 能合唱出聲並把握拍點", low: "🔴 容易唱錯音準，讀譜稍慢" } }
    ],
    "5": [
      { id: "singing", name: "🎤 直笛多聲部曲目吹奏與高音笛技巧（音樂）", labels: { high: "🟢 直笛指法熟練，旋律優美", mid: "🟡 能在指派下吹出期末笛曲", low: "🔴 直笛常常破音、漏按指孔" } }
    ],
    "6": [
      { id: "singing", name: "🎤 畢業季歌齊唱與大師交響樂曲分析欣賞（音樂）", labels: { high: "🟢 掌握音樂結構與高水準齊唱", mid: "🟡 能配合班級合唱練習好", low: "🔴 音樂常規需再多加克制" } }
    ]
  },
  local: {
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
  },
  general: {
    "1": [
      { id: "participation", name: "🙋 分組扮演、遊戲體驗積極程度（參與）", labels: { high: "🟢 分組活動最積極發言棒", mid: "🟡 聽老師指令參與各遊戲", low: "🔴 活動配合被動常置身事外" } }
    ],
    "2": [
      { id: "participation", name: "🙋 家務幫忙、同儕玩具整理自覺配合", labels: { high: "🟢 分組活動最積極發言棒", mid: "🟡 聽老師指令參與各遊戲", low: "🔴 活動配合被動常置身事外" } }
    ],
    "3": [
      { id: "participation", name: "🙋 團體活動分工與合作點子提供（團隊力）", labels: { high: "🟢 主動性強，點子多且願服務", mid: "🟡 聽從指導默默完成各單元", low: "🔴 組裝或分享心得時易分心" } }
    ],
    "4": [
      { id: "participation", name: "🙋 學校跳蚤市場與綠能生活小主人（實踐）", labels: { high: "🟢 主動性強，點子多且願服務", mid: "🟡 聽從指導默默完成各單元", low: "🔴 組裝或分享心得時易分心" } }
    ],
    "5": [
      { id: "participation", name: "🙋 班級專題探究、戶外教學小手手札撰寫", labels: { high: "🟢 方案策劃極佳，解決問題快", mid: "🟡 配合小主人活動完成小組工作", low: "🔴 行動與探究力稍微缺乏動力" } }
    ],
    "6": [
      { id: "participation", name: "🙋 生涯試探測驗、畢業紀念手冊與團隊服務", labels: { high: "🟢 自主企圖心強，極富生涯目標", mid: "🟡 穩定配合畢業專案完成成果", low: "🔴 獨立反思與報告敷衍急躁" } }
    ]
  },
  tech: {
    "1": [
      { id: "google_tools", name: "💻 滑鼠控制、拖曳與數位互動小遊戲（手眼）", labels: { high: "🟢 操作流暢，學習興趣旺盛", mid: "🟡 在配合下完成簡單拼圖互動", low: "🔴 鍵盤滑鼠手眼配合較為緩慢" } }
    ],
    "2": [
      { id: "google_tools", name: "💻 滑鼠單擊雙擊、點選與打字初體驗（基礎）", labels: { high: "🟢 操作流暢，學習興趣旺盛", mid: "🟡 在配合下完成簡單拼圖互動", low: "🔴 鍵盤滑鼠手眼配合較為緩慢" } }
    ],
    "3": [
      { id: "google_tools", name: "💻 電腦帳密輸入、Google雲端教室帳號登入", labels: { high: "🟢 登入快速操作熟練無誤", mid: "🟡 能順利在引導下登入雲端", low: "🔴 帳密輸入常漏字常忘步驟" } }
    ],
    "4": [
      { id: "google_tools", name: "💻 雲端文書處理編輯與個人密碼防衛倫理", labels: { high: "🟢 雲端打字文件格式掌握優良", mid: "🟡 熟悉密碼安全並能打短文", low: "🔴 雲端檔案儲存概念不熟，常迷路" } }
    ],
    "5": [
      { id: "doc_layout", name: "📝 簡報版面排版、重點突出與簡報美化設計", labels: { high: "🟢 簡報版面清爽重點突出", mid: "🟡 能完成基本打字與插入圖", low: "🔴 文書打字偏慢排版常錯位" } }
    ],
    "6": [
      { id: "doc_layout", name: "📝 試算表統計圖、試算表加總函數與數位卡設計", labels: { high: "🟢 Google試算表統計概念好", mid: "🟡 在指引下完成數位畢業卡", low: "🔴 打字慢且試算表儲存格概念不熟" } }
    ]
  }
};

export const FRAGMENTS: Record<string, any> = {
  general_behaviors: {
    gen_attitude: {
      high: "上課學習態度主動，專注聽講極佳",
      mid: "上課聽講秩序穩定守規，表現合格",
      low: "上課定性稍嫌不足，聽課容易分心恍神"
    },
    gen_homework: {
      high: "作業書寫工整，並能主動確實訂正",
      mid: "能按時繳交並完成每日課堂作業",
      low: "功課書寫急躁馬虎，且需要師長常催促"
    },
    gen_cooperation: {
      high: "分組合作積極，展現極佳協調力",
      mid: "能友善與同儕相處，配合小組完成指派任務",
      low: "在團隊合作中較為被動，與人相處偶有小衝突"
    },
    gen_discipline: {
      high: "常規表現良好，自律自愛且有責任感",
      mid: "能遵守班級生活公約，常規平穩",
      low: "自控力較為弱，需要老師與家長常加督促"
    }
  },
  chinese: {
    phonics: {
      high: "注音符號拼讀與聽寫熟練快速",
      mid: "能跟著老師節奏大聲拼讀注音",
      low: "注音常搞錯符號，聽寫較感吃力"
    },
    characters: {
      high: "認讀漢字量大，閱讀課文極流暢",
      mid: "能認得並理解課本常用漢字",
      low: "字彙量稍微不足，認字常會認錯"
    },
    stroke_order: {
      high: "握筆姿勢很標準，筆畫端正工整",
      mid: "能按部就班把國語生字寫完",
      low: "常少寫筆畫，握筆姿勢還需要調整"
    },
    reading_aloud: {
      high: "課文朗讀充滿感人字句，看圖發表豐富流利",
      mid: "能依序唸完指定的長度，課文大體通順",
      low: "朗讀節奏稍慢，上台發表時音量偏羞赧"
    },
    stroke_order_2: {
      high: "生字部首結構極佳，筆順寫得漂亮",
      mid: "字體大致端正工整，書寫用心",
      low: "字跡偏向潦草，寫字常漏筆畫"
    },
    phrases: {
      high: "詞彙造詞造句通順且帶有創意",
      mid: "能順利完成造詞與簡單的句子仿寫",
      low: "造詞造句文法較破碎，句子不夠完整"
    },
    ext_reading: {
      high: "愛聽故事且能準確說出故事主旨",
      mid: "能跟隨課文理解基礎故事內容",
      low: "聽長篇故事比較容易分心恍神"
    },
    radical_concept: {
      high: "部首聯想和識字廣度優秀，字義理解快",
      mid: "能找出正確的部首字根完成造詞",
      low: "對部首所代表的關念常會搞混混淆"
    },
    paragraph: {
      high: "短文造句內容通順且結構完整",
      mid: "能利用所學詞彙寫出簡單短句",
      low: "寫作造句語法較不完整、常用口語"
    },
    dictionary: {
      high: "查字典動作敏捷、部首字音辨識強",
      mid: "能跟著方法查到生字意思",
      low: "拼音部首不熟，查字典耗時較多"
    },
    reading_comprehension: {
      high: "課文情節抓取快且理解力棒",
      mid: "引導下能說出課文大致的意思",
      low: "理解文句情節大意時有些吃力"
    },
    rhetoric_intro: {
      high: "能流暢運用譬喻擬人，造句豐富有張力",
      mid: "能仿寫包含基礎譬喻句的簡單文章",
      low: "修辭概念偏弱，句子寫法較為直接單調"
    },
    narrative: {
      high: "記敘文寫得有頭有尾，修辭用得好",
      mid: "能按事件順序寫出通順的作文",
      low: "作文段落語句單調，內容需要多擴充"
    },
    idioms: {
      high: "成語用得非常精準、造句多變",
      mid: "能寫出意思通順的成語造句",
      low: "成語意思常搞混，句子描寫偏單薄"
    },
    long_reading: {
      high: "閱讀文章理解快且抓重點能力棒",
      mid: "能擺脫干擾讀完長篇故事與摘要",
      low: "閱讀長篇文章時容易感到枯燥分心"
    },
    writing_detail: {
      high: "全篇字詞使用乾淨且標點符號下得漂亮",
      mid: "能寫完作文書寫，且能修改明顯錯別字",
      low: "錯字重疊出現，常常漏加逗點與句點"
    },
    expository: {
      high: "議論文論點鮮明，說明文說明清楚",
      mid: "能寫出結構完整的說明文章",
      low: "說明文章邏輯不夠清楚，寫作稍卡關"
    },
    classical: {
      high: "文言字詞與白話對照理解極佳",
      mid: "能讀懂基礎白話注釋與典故",
      low: "文言語感較弱，翻譯理解常抓不到方向"
    },
    critical_thinking: {
      high: "思考靈敏，能針對課文提出好問題",
      mid: "引導下能回答具有深度之提問",
      low: "回答深度思考題時較被動、缺乏想法"
    },
    speed_reading: {
      high: "快速閱讀技巧純熟且整合資訊條理分明",
      mid: "能完成指引短文的快速摘要作業",
      low: "資料比對速度比較緩慢且常看錯表格"
    },
    grad_writing: {
      high: "畢業深度寫作文筆好且感情真誠",
      mid: "結構端正，能寫出對國小的感悟",
      low: "寫作段落常重複，情感表達較局限"
    },
    rhetoric: {
      high: "寫句能巧妙融入擬人與排比修辭",
      mid: "造句通順、常用生字無大礙",
      low: "句型運用單一，常有語法重疊情況"
    },
    cross_domain: {
      high: "跨領域文本統整資訊能力強",
      mid: "能整理多篇短文並做好內容重點",
      low: "資料消化慢，做長篇統整略感吃力"
    },
    project_presentation: {
      high: "專案簡報架構富有思考性，台上發表台風生動",
      mid: "能認真排好報告大意，聲音大且通順",
      low: "上台報告容易過度緊張，眼光不敢看向同學"
    },
    attitude: {
      high: "作業一絲不苟，課堂學習興致極高",
      mid: "能確實完成每日的作業練習",
      low: "寫國語作業比較馬虎，上課易恍神"
    }
  },
  math: {
    number100: {
      high: "100以內的加減算得快又精準",
      mid: "數學加減花的時間長但作答正確",
      low: "直式加減容易看錯位子算錯答案"
    },
    shapes: {
      high: "空間感棒、圖形分類與辨識很強",
      mid: "能認出三角形、圓形等基本圖形",
      low: "圖形重疊或旋轉時概念比較慢"
    },
    time_clock: {
      high: "識讀時鐘整點與半點又快又對",
      mid: "能指出時針跟分針正確位置",
      low: "對半點與一小時的進位關係易混淆"
    },
    comparison: {
      high: "分類和直接比較的大小量感很有天分",
      mid: "能完成看圖算數並在指引下排序",
      low: "比較多樣物體長度重量時容易答錯"
    },
    multiplication: {
      high: "乘法表熟背且乘除觀念十分流暢",
      mid: "能順利背完乘法並做兩步驟計算",
      low: "九九乘法表常會背錯算錯口訣"
    },
    money: {
      high: "錢幣換算與找零錢直覺強且準",
      mid: "掌握萬以內大數與兩步驟錢幣加減",
      low: "兩步驟計算容易忘記第一步答案"
    },
    measurement: {
      high: "單位量感強，毫米與分升公升概念清楚",
      mid: "測量長度與水量時作答穩定",
      low: "直尺刻度對齊與讀數常會看歪"
    },
    fraction_intro: {
      high: "等分量感直覺強，對基礎幾分之幾好",
      mid: "能在指示下切出或圈出對等的等份",
      low: "對分子大於分母的分數代表意涵理解慢"
    },
    calc_10000: {
      high: "直式乘除法算得又快又完美",
      mid: "直式多位數算得慢但答案多正確",
      low: "乘法進位或除法餘數常會算錯"
    },
    fraction_decimal: {
      high: "分數與小數等值量感觀念透徹",
      mid: "掌握分數與小數的大小關係",
      low: "對分母分子代表的意思常會混淆"
    },
    circle_time: {
      high: "圓規畫圓對稱度極佳，半徑概念好",
      mid: "能順利推算時間進位與畫圓",
      low: "圓規轉圈容易歪掉，時間換算慢"
    },
    word_problems: {
      high: "題目解析富有良好思索、解題步驟極棒",
      mid: "能完成日常生活的典型數學應用題",
      low: "看應用題算式容易抄錯或看不懂大意"
    },
    calc_mixed: {
      high: "四則混合先乘後除邏輯判斷快",
      mid: "大數直式四則計算多能順利算完",
      low: "四則運算規則常忘記先乘除後加減"
    },
    fraction_op: {
      high: "同分母分數與帶分數加減能力強",
      mid: "能通順算出同分母分數加減",
      low: "常把分子和分母同時拿去相加"
    },
    geometry_angle: {
      high: "量角器使用純熟，角度估算精準",
      mid: "了解直角與平行線之幾何特徵",
      low: "量角器度數與內外圈常會看錯"
    },
    stat_chart: {
      high: "折線圖與二維交叉圖表報讀精準快速",
      mid: "能掌握統計圖表中的最大最小數值",
      low: "對統計表數據交叉比對容易看錯行"
    },
    factors_multiples: {
      high: "因數倍數找得齊，公因數倍數快",
      mid: "能按步驟找出各單元因數倍數",
      low: "找因數時常有漏掉或數錯的情況"
    },
    hetero_fraction: {
      high: "通分觀念好，異分母分數算得快",
      mid: "能將異分母通分後算完分數加減",
      low: "異分母加減常忘記通分就直接相加"
    },
    volume_3d: {
      high: "空間概念佳，能靈活算出複合體積",
      mid: "掌握基本角柱與角錐體積算式",
      low: "體積與表面積公式常會套錯"
    },
    symmetry_time: {
      high: "線對稱繪圖高度精準，時間乘除推理好",
      mid: "能圈出正確對稱軸，做對時間算數",
      low: "對稱軸點連線常歪斜，時間進退容易多加或少算"
    },
    four_ops_mixed: {
      high: "分數小數混和四則計算極為精準",
      mid: "混和算式運算步驟穩健正確",
      low: "分數轉小數與括號混合計算常出錯"
    },
    circle_area: {
      high: "扇形與圓面積複合題目解析極強",
      mid: "能帶入圓面積與周長公式解題",
      low: "圓周長與圓面積公式經常會搞混"
    },
    ratio_percent: {
      high: "比例概念清楚，能畫對圓形百分圖",
      mid: "理解基本百分比與折線圖資訊",
      low: "比例尺概念與生活百分比應用不熟"
    },
    speed_equations: {
      high: "掌握速率三要素理路好，天平方程求解快",
      mid: "理解公里時速並利用等量公理簡化算式",
      low: "常把時速與分速混淆，等量公理左右常算錯"
    },
    attitude: {
      high: "寫數學功課細心專注，算式清爽",
      mid: "能安靜寫完每日數學課堂練習",
      low: "算數學時比較急躁，常因粗心失分"
    }
  },
  social: {
    campus_guide: {
      high: "了解校園各區域與遵守團體作息，規矩極佳",
      mid: "作息正常，能準時做好上下課交接",
      low: "對下課和上課教室位置常摸索不夠快"
    },
    peer_relation: {
      high: "同儕互動熱情大方，常主動幫助他人",
      mid: "與同學友好相處，樂意一齊分工玩耍",
      low: "在玩耍中常因為意見不合與同學吵嘴"
    },
    self_care: {
      high: "掃除格外積極細心，個人自理很好",
      mid: "能按照分配完成基本的打掃區域",
      low: "打掃被動，通常需要再三叫名字才動手"
    },
    neighborhood: {
      high: "對社區生活空間敏銳且交通號誌熟悉",
      mid: "大體認識附近的機構與安全警示牌",
      low: "對班級以外鄰里機構方向有些搞不懂"
    },
    family: {
      high: "對家庭關係與責任感懂事，孝敬尊長",
      mid: "能分享家庭的重要點滴，有家庭觀",
      low: "對家庭生活責任與付出較沒意念"
    },
    cleaning: {
      high: "值日負責，隨手將座位周圍打掃乾淨",
      mid: "能聽從指引收好班上拖把與抹布",
      low: "大掃除或值日工作時容易偷懶想跑"
    },
    hometown_intro: {
      high: "對生活周遭環境空間敏銳，了解詳細",
      mid: "認識課本所指出的基本家鄉特色",
      low: "對生活社區環境地理方位觀念薄弱"
    },
    hometown_map: {
      high: "看地圖能力極佳，方位與圖例學得好",
      mid: "能看懂基本地圖與圖例方位",
      low: "空間方位概念不熟，識讀地圖較慢"
    },
    hometown_culture: {
      high: "家鄉人文習俗歷史探求動機極強",
      mid: "了解基本的地方習俗與在地產業",
      low: "對在地人文古蹟與節慶活動概念模糊"
    },
    hometown_organization: {
      high: "對各機構公共設施運作非常清楚，行為守秩序",
      mid: "知道如何利用圖書館與醫院服務",
      low: "對地方機構能提供何種民生功能不清楚"
    },
    hometown_nature: {
      high: "自然環境山川水文分布統整力優秀",
      mid: "大體指認出家鄉的地形與氣候特徵",
      low: "對地理環境地貌概念認識不足"
    },
    hometown_industry: {
      high: "家鄉古今轉變產業演進概念清晰",
      mid: "掌握地方主要產業發展與民俗故事",
      low: "對日常產業演變及特產歷史較不熟"
    },
    hometown_traffic: {
      high: "交通與區域聯絡生活網絡理解力優",
      mid: "知道大眾交通建設對生活的便利性",
      low: "對交通建設與地方關聯理解偏少"
    },
    local_resource: {
      high: "珍惜家鄉資源，自發進行各種環保行為",
      mid: "懂得資源循環回收的重要性",
      low: "生活耗水耗電無觀念，環保意識需加強"
    },
    taiwan_history: {
      high: "臺灣歷史政權演變脈絡統整力極棒",
      mid: "知道臺灣主要朝代歷史事件",
      low: "臺灣史地變遷概念模糊容易記錯"
    },
    taiwan_geography: {
      high: "臺灣經緯地形特徵與生活極為熟悉",
      mid: "知道臺灣各大水文地理特質與氣候",
      low: "常分不清各大地形位置或水系分布"
    },
    democracy: {
      high: "民主公民法治觀念很棒，言之有物",
      mid: "理解政府組織架構與民主社會生活",
      low: "行政權司法權法律體系理解慢常混淆"
    },
    taiwan_culture: {
      high: "對族群文化發展極為尊重，能深度解說",
      mid: "能說出客家、原民或新住民民俗大意",
      low: "對臺灣本土多元族群分布有些搞不清"
    },
    economy: {
      high: "法律制度與市場供需觀念透徹清楚",
      mid: "知道基礎理財觀念與消費者法律常識",
      low: "理財觀念與經濟法規抽象詞彙理解慢"
    },
    global_view: {
      high: "SDGs永續與世界大洲地理視野寬廣",
      mid: "認識五大洲地理與多元文化",
      low: "世界地理位置氣候成因概念不熟"
    },
    international_culture: {
      high: "國際視野佳，對多元全球文化關懷多",
      mid: "能欣賞他國習俗風情，學習包容",
      low: "對國際文化與時事關心程度偏少"
    },
    technology_life: {
      high: "資訊公民素養優，深知網路資安倫理的重要性",
      mid: "知道在網路上安全發言與保護帳密",
      low: "對資訊引用著作權法規大意觀念較模糊"
    },
    social_attitude: {
      high: "討論課發言踴躍，作業筆記極為工整",
      mid: "能配合老師完成每次的社會手札",
      low: "上社會課時偶爾恍神忘記帶習作本"
    }
  },
  english: {
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
  },
  science: {
    observe: {
      high: "觀察大自然氣象與植物特徵細緻敏銳",
      mid: "能完整記錄與辨別常見植物部分結構",
      low: "觀察容易忽略小細節、不夠認真"
    },
    nature_explore: {
      high: "對小動物生命極有熱忱、細度觀察領悟高",
      mid: "能合乎進度寫好自然探索學本",
      low: "生態探索時常顯得漫不經心不專注"
    },
    experimental_attitude: {
      high: "手作操作安全，用具拿法與整理優秀",
      mid: "分組下能把用具歸位擦乾淨桌面",
      low: "實驗進行中有邊玩邊做之習慣需糾正"
    },
    magnetic: {
      high: "磁性特點學得深入，磁鐵小活動設計優秀",
      mid: "懂得磁鐵相吸相斥，能找出隱藏磁鐵",
      low: "對鐵質吸合與極性觀念常不易弄懂"
    },
    light_shadow: {
      high: "光的反射在日常運用強，影子比例對照好",
      mid: "能利用反光鏡進行定點光的反射",
      low: "光源和影子形狀的關聯常會畫錯方向"
    },
    experiment: {
      high: "動手能力極好、實驗態度認真安全",
      mid: "配合組員完成實驗步驟並記錄",
      low: "動手做實驗時常跟同儕分心玩耍"
    },
    aquatic_life: {
      high: "水生動植物特徵分析棒，富有生態素養",
      mid: "能認得浮萍與大肚魚的呼吸基本差異",
      low: "常把沉水和浮葉植物的特質記顛倒"
    },
    rain_season: {
      high: "雨量和風力常規圖例識讀透徹，數據分析棒",
      mid: "能讀懂溫度計和風向袋的方向",
      low: "看雨量表和地圖時常有些對不齊行數"
    },
    concepts: {
      high: "水溶液與星座等自然概念極清晰",
      mid: "理解基本的科學常識，能答對題目",
      low: "自然課的原理概念理解吸收比較慢"
    },
    motion_force: {
      high: "各種弹和重力公式靈活動手算，量感棒",
      mid: "能利用測力計量日常物體重量",
      low: "對引力和摩擦力的差別概念較不懂"
    },
    plant_propagation: {
      high: "動植物構造進化與繁殖規程探求主動性高",
      mid: "順利完成課堂觀察豆子生長的任務",
      low: "對植物繁衍單元感到比較乏味容易恍神"
    },
    advanced: {
      high: "槓桿力矩幾何平衡原理邏輯極佳",
      mid: "理解食物網與大自然基本平衡運作",
      low: "遇到抽象的槓桿力學原理思考容易卡住"
    },
    ecosystems: {
      high: "大自然食物鏈互依與SDGs防護熱心，觀念極佳",
      mid: "能理解生產者與分解者的生命循環大意",
      low: "對生態系永續發展和物種淘汰觀念較片面"
    },
    stellar_geology: {
      high: "地質化石分析好，防震演練安全最能帶領同學",
      mid: "知道三大岩類代表與地震應變基本流程",
      low: "對板塊地質和化石演變常識混淆記錯"
    },
    science_attitude: {
      high: "對萬物充滿好奇探索熱情，報告撰寫極棒",
      mid: "按時交自然報告，上課規矩好",
      low: "上自然課定性不足，聽課容易分心"
    }
  },
  life: {
    explore: {
      high: "新生探索心極佳，充滿好奇想了解",
      mid: "能配合引導探索校園環境生活",
      low: "對新事物探索沒熱情，適應比較慢"
    },
    cooperate: {
      high: "分組玩遊戲懂得分享玩具與照顧人",
      mid: "能與同學和諧相處一起做體驗",
      low: "與同學下課遊戲時常有摩擦吵架"
    },
    create: {
      high: "美勞作品造型極富色彩與美感創意",
      mid: "能端正做好課堂指示的美勞剪貼",
      low: "手作美勞剪貼協調度需要再加強"
    },
    duty: {
      high: "打掃除認真且極其自覺負責有愛心",
      mid: "確實完成指派的掃除工作無大礙",
      low: "打掃常常缺席或需要老師叫才動手"
    },
    life_attitude: {
      high: "生活課工具收拾得整齊俐落，桌面清理乾淨",
      mid: "下課時能隨手把椅套套好，遵守常規",
      low: "抽屜和座位常不整理，美勞用具常忘帶"
    }
  },
  health: {
    habits: {
      high: "個人潔牙餐後整理衛生自理極優",
      mid: "餐後刷牙衛生習慣大體能做好",
      low: "個人生活自理與衛生習慣常要人督促"
    },
    knowledge: {
      high: "醫學與生活保健常識極豐富完整",
      mid: "能理解日常身體防護與保健觀念",
      low: "對身體器官常規保健知識理解慢"
    },
    growth: {
      high: "青春期身心變化概念大方正向",
      mid: "懂得成長期的生理常識並維持健康",
      low: "對生理發展變遷知識較害羞了解不夠"
    }
  },
  pe: {
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
  },
  fineart: {
    creation: {
      high: "美學與色彩搭配有高度生命力與創意",
      mid: "作品端正完整，確實做好畫作",
      low: "繪畫和美勞造型較為單調，缺乏信心"
    }
  },
  music: {
    singing: {
      high: "歌聲甜美音準與拍子抓得極佳",
      mid: "能大聲齊唱並掌握大致的節奏",
      low: "唱歌拍子常落拍，顯得害羞音量小"
    }
  },
  local: {
    speaking: {
      high: "口音自然大方腔調道地流利",
      mid: "引導下能念出課文基本的語意",
      low: "口說本土語時有些退縮、音量小"
    }
  },
  general: {
    participation: {
      high: "上課發言最活躍、積極主動投入",
      mid: "聽指令配合做分組體驗活動",
      low: "綜合活動參與被動，常心不在焉"
    }
  },
  tech: {
    google_tools: {
      high: "雲端軟體登入操作極其流暢純熟",
      mid: "能在老師導引下順利完成Google登入",
      low: "打帳號密碼常出錯，需要多次提醒"
    },
    doc_layout: {
      high: "簡報設計構圖優良、打字美觀重點棒",
      mid: "能利用文書工具打字並簡單放上插圖",
      low: "打字偏慢，投影片編排與大小不一"
    }
  }
};
