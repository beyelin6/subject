import { SubjectKey, SubjectInfo, Dimension } from '../types';

export const GRADE_SUBJECTS: Record<string, Partial<Record<SubjectKey, SubjectInfo>>> = {
  "1": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    life: { name: '🌱 生活領域', icon: 'Sparkles' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' },
    english: { name: '🔤 英語文', icon: 'Languages' }
  },
  "2": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    life: { name: '🌱 生活領域', icon: 'Sparkles' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' },
    english: { name: '🔤 英語文', icon: 'Languages' }
  },
  "3": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 藝術與美感', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  },
  "4": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 藝術與美感', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  },
  "5": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 藝術與美感', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  },
  "6": {
    chinese: { name: '📚 國語文', icon: 'BookOpen' },
    math: { name: '🧮 數學', icon: 'Calculator' },
    english: { name: '🔤 英語文', icon: 'Languages' },
    science: { name: '🔬 自然科學', icon: 'FlaskConical' },
    social: { name: '🌍 社會', icon: 'Globe' },
    fineart: { name: '🎨 藝術與美感', icon: 'Palette' },
    music: { name: '🎵 音樂', icon: 'Music' },
    health: { name: '🍎 健康', icon: 'HeartPulse' },
    pe: { name: '🏃 體育', icon: 'Dribbble' },
    general: { name: '🧩 綜合活動', icon: 'Puzzle' },
    tech: { name: '💻 資訊與科技', icon: 'Laptop' },
    local: { name: '🗣️ 本土語文', icon: 'MessageSquare' }
  }
};

export const GENERAL_DIMENSIONS: Dimension[] = [
  { id: "gen_attitude", name: "💡 課堂學習與專注態度", labels: { high: "🟢 課堂聽講主動專注", mid: "🟡 上課規矩平穩守紀", low: "🔴 課堂聽講較易分心" } },
  { id: "gen_homework", name: "📖 作業繳交與訂正習慣", labels: { high: "🟢 作業工整且主動訂正", mid: "🟡 按時完成每日功課", low: "🔴 功課書寫急躁馬虎" } },
  { id: "gen_cooperation", name: "🤝 同儕相處與分組合作", labels: { high: "🟢 團隊合作協調力優", mid: "🟡 配合分組友善相處", low: "🔴 團體分工配合被動" } },
  { id: "gen_discipline", name: "📜 生活常規與自律負責", labels: { high: "🟢 自律負責有責任感", mid: "🟡 能遵守班級常規", low: "🔴 自控力弱常需提點" } }
];

export const GENERAL_BEHAVIORS_FRAGMENT = {
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
};
