import React, { useState, useEffect, useMemo } from 'react';
import { 
  Wand2, Trash2, Plus, Check, Copy, RefreshCw, 
  GraduationCap, Handshake, CheckSquare, AlertCircle, 
  Sparkles, Save, HeartPulse, Dribbble, Laptop, BookOpen, 
  Calculator, Globe, Languages, FlaskConical, Palette, Music, 
  MessageSquare, Puzzle, HelpCircle, FileDown, FileUp, Info, Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { SubjectKey, SubjectInfo, Dimension, CheckedDimension, Student, CustomDimension, ArchetypeOrStyle } from './types';
import { GRADE_SUBJECTS, GENERAL_DIMENSIONS, SUBJECT_DIMENSIONS, FRAGMENTS } from './data';
import StudentManager from './components/StudentManager';

// Dynamic Lucide-based Icon Renderer for Subjects
const SubjectIcon = ({ icon, className = "w-4 h-4" }: { icon: string, className?: string }) => {
  switch (icon) {
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Calculator': return <Calculator className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Languages': return <Languages className={className} />;
    case 'FlaskConical': return <FlaskConical className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Music': return <Music className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Dribbble': return <Dribbble className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'MessageSquare': return <MessageSquare className={className} />;
    case 'Puzzle': return <Puzzle className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function App() {
  // Roster & active student states
  const [students, setStudents] = useState<Student[]>([]);
  const [activeStudent, setActiveStudent] = useState<Student | null>(null);

  // Core configuration states
  const [studentName, setStudentName] = useState('小明');
  const [pronoun, setPronoun] = useState<'he' | 'she' | 'none'>('he');
  const [currentGrade, setCurrentGrade] = useState('3');
  const [currentSubject, setCurrentSubject] = useState<SubjectKey>('chinese');
  
  // Custom indicator dimensions
  const [customDimensions, setCustomDimensions] = useState<Record<string, CustomDimension[]>>({});
  
  // Checked dimension options: Record of subjectKey -> CheckedDimension[]
  const [checkedDimensions, setCheckedDimensions] = useState<Record<string, CheckedDimension[]>>({});

  // Generators layout or settings states
  const [generatorMode, setGeneratorMode] = useState<'archetypes' | 'styles'>('archetypes');
  const [isConciseMode, setIsConciseMode] = useState(true);
  const [variationSeeds, setVariationSeeds] = useState<Record<string, number>>({});
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [editedTexts, setEditedTexts] = useState<Record<string, string>>({});

  // Custom dimension inputs
  const [newCustomTitle, setNewCustomTitle] = useState('');
  const [customH, setCustomH] = useState('');
  const [customM, setCustomM] = useState('');
  const [customL, setCustomL] = useState('');
  const [showAdvanceCustom, setShowAdvanceCustom] = useState(false);
  
  // Toast notifications state
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Initialize seed variations
  useEffect(() => {
    const savedSeeds = localStorage.getItem('school_variation_seeds_v3');
    let parsed: Record<string, number> = {};
    if (savedSeeds) {
      try { parsed = JSON.parse(savedSeeds); } catch(e) { parsed = {}; }
    }
    const allKeys = ['excel', 'diligent', 'improved', 'careless', 'passive', 'struggling', 'slowButGood', 'activeDistracted', 'cooperative', 'impatient',
                     'inspiring', 'gentle', 'growth', 'academic', 'potential', 'collaboration', 'advice', 'steadfast', 'energetic', 'classic'];
    allKeys.forEach(k => {
      if (parsed[k] === undefined) {
        parsed[k] = Math.floor(Math.random() * 3);
      }
    });
    setVariationSeeds(parsed);
    localStorage.setItem('school_variation_seeds_v3', JSON.stringify(parsed));
  }, []);

  // Load custom dimensions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('school_custom_dimensions_v3');
    if (saved) {
      try { setCustomDimensions(JSON.parse(saved)); } catch (e) { console.error(e); }
    }
  }, []);

  // Load active state from localStorage or update when active pupil changes
  useEffect(() => {
    if (activeStudent) {
      setStudentName(activeStudent.name);
      setPronoun(activeStudent.pronoun);
      setCurrentGrade(activeStudent.grade);
      
      // Load student's saved indicators if they exist
      if (activeStudent.checkedDimensions) {
        setCheckedDimensions(activeStudent.checkedDimensions);
      }
    }
  }, [activeStudent]);

  // Toast notifier helper
  const triggerToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  // Sync active student info back to class roster
  const syncStudentToRoster = (updatedFields: Partial<Student>) => {
    if (!activeStudent) return;
    const updatedStudent = { ...activeStudent, ...updatedFields };
    setActiveStudent(updatedStudent);

    const nextStudents = students.map(s => s.id === activeStudent.id ? updatedStudent : s);
    setStudents(nextStudents);
    localStorage.setItem('school_students_roster_v3', JSON.stringify(nextStudents));
  };

  // Quick preset loader (boy, girl, general terms)
  const applyPresetName = (name: string, pType: 'he' | 'she' | 'none') => {
    setStudentName(name);
    setPronoun(pType);
    setEditedTexts({}); // reset manual edits on name changes
    if (activeStudent) {
      syncStudentToRoster({ name, pronoun: pType });
    }
    triggerToast(`已套用快捷預設：${name} (${pType === 'he' ? '男生' : pType === 'she' ? '女生' : '通用稱謂'})`, 'info');
  };

  // Handle grade change and clear or verify subject constraints
  const handleGradeChange = (grade: string) => {
    setCurrentGrade(grade);
    setEditedTexts({});
    
    // Check if the current subject exists in the new grade's subjects; if not, reset to 'chinese'
    const newGradeSubjects = GRADE_SUBJECTS[grade] || GRADE_SUBJECTS['3'];
    if (newGradeSubjects[currentSubject] === undefined) {
      setCurrentSubject('chinese');
    }

    if (activeStudent) {
      syncStudentToRoster({ grade });
    }
    triggerToast(`年級學科區段已切換至：${grade}年級 (自動調整必修領域)`, 'info');
  };

  // Toggle active scoring dimension
  const handleToggleDimension = (dimId: string, isChecked: boolean) => {
    const activeChecked = checkedDimensions[currentSubject] || [];
    let nextChecked = [...activeChecked];
    if (isChecked) {
      if (!nextChecked.some(item => item.id === dimId)) {
        nextChecked.push({ id: dimId, level: 'high' });
      }
    } else {
      nextChecked = nextChecked.filter(item => item.id !== dimId);
    }

    const updatedMap = { ...checkedDimensions, [currentSubject]: nextChecked };
    setCheckedDimensions(updatedMap);
    setEditedTexts({}); // invalidate manual edits for clean re-compile

    if (activeStudent) {
      syncStudentToRoster({ checkedDimensions: updatedMap });
    }
  };

  // Change score polarity (High / Mid / Low)
  const handleChangeDimensionLevel = (dimId: string, level: 'high' | 'mid' | 'low') => {
    const activeChecked = checkedDimensions[currentSubject] || [];
    const nextChecked = activeChecked.map(item => 
      item.id === dimId ? { ...item, level } : item
    );

    const updatedMap = { ...checkedDimensions, [currentSubject]: nextChecked };
    setCheckedDimensions(updatedMap);
    setEditedTexts({}); // re-trigger compile

    if (activeStudent) {
      syncStudentToRoster({ checkedDimensions: updatedMap });
    }
  };

  // Create a custom rating dimension for the current subject
  const handleAddCustomDimension = (e: React.FormEvent) => {
    e.preventDefault();
    const title = newCustomTitle.trim();
    if (!title) {
      triggerToast('請輸入有意義的自訂評估指標名稱！', 'error');
      return;
    }

    const id = 'custom_' + Date.now();
    const cleanH = customH.trim() || title + "表現相當優異";
    const cleanM = customM.trim() || title + "表現符合基本常規";
    const cleanL = customL.trim() || title + "仍有進步提升的餘地";

    const newDim: CustomDimension = {
      id,
      name: `🎨 ${title}`,
      labels: {
        high: "🟢 " + cleanH,
        mid: "🟡 " + cleanM,
        low: "🔴 " + cleanL
      },
      customPhrases: {
        high: cleanH,
        mid: cleanM,
        low: cleanL
      }
    };

    const nextCustom = { ...customDimensions };
    if (!nextCustom[currentSubject]) {
      nextCustom[currentSubject] = [];
    }
    nextCustom[currentSubject].push(newDim);
    setCustomDimensions(nextCustom);
    localStorage.setItem('school_custom_dimensions_v3', JSON.stringify(nextCustom));

    // Auto check newly created dimension
    const activeChecked = checkedDimensions[currentSubject] || [];
    const updatedMap = {
      ...checkedDimensions,
      [currentSubject]: [...activeChecked, { id, level: 'high' }]
    };
    setCheckedDimensions(updatedMap);
    setEditedTexts({});

    if (activeStudent) {
      syncStudentToRoster({ checkedDimensions: updatedMap });
    }

    // Reset fields
    setNewCustomTitle('');
    setCustomH('');
    setCustomM('');
    setCustomL('');
    setShowAdvanceCustom(false);
    triggerToast(`自訂向度「${title}」已新增並自動勾選！`);
  };

  // Remove a custom dimension
  const handleDeleteCustomDimension = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('您確定要刪除這項自訂表現向度嗎？')) return;

    const nextCustom = { ...customDimensions };
    if (nextCustom[currentSubject]) {
      nextCustom[currentSubject] = nextCustom[currentSubject].filter(d => d.id !== id);
      setCustomDimensions(nextCustom);
      localStorage.setItem('school_custom_dimensions_v3', JSON.stringify(nextCustom));
    }

    // Uncheck if it was checked
    const activeChecked = checkedDimensions[currentSubject] || [];
    const updatedMap = {
      ...checkedDimensions,
      [currentSubject]: activeChecked.filter(item => item.id !== id)
    };
    setCheckedDimensions(updatedMap);
    setEditedTexts({});

    if (activeStudent) {
      syncStudentToRoster({ checkedDimensions: updatedMap });
    }
    triggerToast('已成功移除自訂向度。', 'info');
  };

  // Trigger shuffling for variation triggers
  const handleShuffleTemplates = () => {
    const nextSeeds = { ...variationSeeds };
    Object.keys(nextSeeds).forEach(k => {
      const cur = nextSeeds[k] || 0;
      let rand = Math.floor(Math.random() * 3);
      while (rand === cur) {
        rand = Math.floor(Math.random() * 3);
      }
      nextSeeds[k] = rand;
    });
    setVariationSeeds(nextSeeds);
    localStorage.setItem('school_variation_seeds_v3', JSON.stringify(nextSeeds));
    setEditedTexts({});
    triggerToast('已隨機抽換各典型與風格的內建修辭與句型！', 'success');
  };

  // Copy text to clipboard using direct browser fallback
  const handleCopyToClipboard = (key: string, text: string) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    try {
      const ok = document.execCommand('copy');
      if (ok) {
        setCopiedStates(prev => ({ ...prev, [key]: true }));
        triggerToast('評語複製成功！可以直接在成績單貼上。', 'success');
        setTimeout(() => {
          setCopiedStates(prev => ({ ...prev, [key]: false }));
        }, 1500);

        // Auto mark student as completed if a roster sheet is active
        if (activeStudent && !activeStudent.completed) {
          syncStudentToRoster({ completed: true });
        }
      }
    } catch(e) {
      triggerToast('複製失敗，請手動觸摸全選後複製。', 'error');
    }
    document.body.removeChild(dummy);
  };

  // Retrieve dimension content descriptors
  const getDimensionObj = (id: string): Dimension | null => {
    if (id.startsWith('gen_')) {
      return GENERAL_DIMENSIONS.find(d => d.id === id) || null;
    }
    const specSubject = SUBJECT_DIMENSIONS[currentSubject] || {};
    const gradeSpecific = specSubject[currentGrade] || specSubject["3"] || [];
    let found = gradeSpecific.find(d => d.id === id);
    if (found) return found;

    const customList = customDimensions[currentSubject] || [];
    return customList.find(d => d.id === id) || null;
  };

  const hashStringToNumber = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  const spinText = (text: string, seed: number): string => {
    let result = text;

    // 1. Resolve brace syntax if any, e.g., {{A|B|C}}
    const braceRegex = /\{\{([^}]+)\}\}/g;
    let match;
    while ((match = braceRegex.exec(result)) !== null) {
      const options = match[1].split('|');
      const chosen = options[seed % options.length];
      result = result.replace(match[0], chosen);
    }

    // 2. Perform safe, contextual synonym replacement
    const synonymPools = [
      { pattern: /極佳/g, replacements: ["優秀且卓越", "表現甚為突出", "至為亮眼", "深得肯定"] },
      { pattern: /表現良好/g, replacements: ["表現可圈可點", "成效優異進取", "展現出色本質", "表現平穩出眾"] },
      { pattern: /表現優異/g, replacements: ["成果斐然肯定", "表現深獲期待", "表現極富水準", "堪為同學表率"] },
      { pattern: /學習態度主動/g, replacements: ["學習積極充滿熱忱", "能展現高度主動性", "求知態度十分真切"] },
      { pattern: /專注聽講/g, replacements: ["聽講神情專注", "能維持高度專精", "上課目光專心致志"] },
      { pattern: /確實執行/g, replacements: ["貫徹執行", "認真體現", "踏實完成"] },
      { pattern: /確實/g, replacements: ["穩健", "扎實", "落實"] },
      { pattern: /動作(敏捷|快速)/g, replacements: ["手法俐落", "動作極具效率", "反應敏捷快速"] },
      { pattern: /成效理想/g, replacements: ["成果卓著", "效益顯著", "成果符合期望"] },
      { pattern: /主動/g, replacements: ["自動自發", "自主不怠", "積極熱切"] },
      { pattern: /愛讀書|愛聽故事/g, replacements: ["極具閱讀雅興", "對閱讀抱有高度興趣"] },
      { pattern: /思維/g, replacements: ["思路", "理解切入點"] },
      { pattern: /非常|十分|極度|格外/g, replacements: ["相當", "甚為", "與眾不同地", "頗具"] },
      
      { pattern: /大致上能/g, replacements: ["基本上可", "大體符合要求並已能", "日常多能穩定完成"] },
      { pattern: /秩序穩定/g, replacements: ["課堂常規安靜規矩", "遵守紀律", "上課常態良好"] },
      { pattern: /表現符合常態/g, replacements: ["表現合乎基礎規範", "跟上日常學習節奏"] },
      { pattern: /配合/g, replacements: ["體現", "參與配合", "契合"] },
      { pattern: /大體/g, replacements: ["大致上", "基本"] },
      
      { pattern: /待加強/g, replacements: ["仍待多加精進", "有待持續琢磨", "尚有不小提升空間"] },
      { pattern: /有進步空間/g, replacements: ["仍需時間與耐心來補強", "尚有可期待之卓越潛能", "尚需加倍勤勉精進"] },
      { pattern: /容易分心/g, replacements: ["偶爾思緒游走", "專注耐力偏弱", "上課時常走神"] },
      { pattern: /毛躁/g, replacements: ["定性稍嫌不足", "急躁不夠沉穩"] },
      { pattern: /馬虎/g, replacements: ["欠缺細緻審慎", "偶爾會有些微紕漏"] },
      { pattern: /較為被動/g, replacements: ["主動意識略顯薄弱", "常需師長在旁積極勉勵"] }
    ];

    synonymPools.forEach((pool, index) => {
      const matches = result.match(pool.pattern);
      if (matches) {
        matches.forEach((_, matchIdx) => {
          const chosen = pool.replacements[(seed + index + matchIdx) % pool.replacements.length];
          result = result.replace(pool.pattern, chosen);
        });
      }
    });

    return result;
  };

  const getFragmentText = (id: string, level: 'high' | 'mid' | 'low'): string => {
    const dim = getDimensionObj(id);
    if (!dim) return "";

    // If custom, check if we have predefined customPhrases
    if (id.startsWith('custom_')) {
      const custDim = dim as CustomDimension;
      if (custDim.customPhrases && custDim.customPhrases[level]) {
        return custDim.customPhrases[level]!;
      }
      return `${dim.name.replace(/^🎨\s*/, '')}表現良好`;
    }

    let text = "";

    // If general attribute
    if (id.startsWith('gen_')) {
      const behaviors = FRAGMENTS.general_behaviors;
      if (behaviors && behaviors[id]) {
        const val = behaviors[id][level];
        if (Array.isArray(val)) {
          const studentSeed = activeStudent ? hashStringToNumber(activeStudent.id + id) : 0;
          const globalSeed = Object.values(variationSeeds).reduce((acc: number, v: any) => acc + (Number(v) || 0), 0) as number;
          text = val[(studentSeed + globalSeed) % val.length];
        } else {
          text = val || "";
        }
      }
    } else {
      // Subject pre-defined
      const subjectData = FRAGMENTS[currentSubject] || {};
      if (subjectData[id]) {
        const val = subjectData[id][level];
        if (Array.isArray(val)) {
          const studentSeed = activeStudent ? hashStringToNumber(activeStudent.id + id) : 0;
          const globalSeed = Object.values(variationSeeds).reduce((acc: number, v: any) => acc + (Number(v) || 0), 0) as number;
          text = val[(studentSeed + globalSeed) % val.length];
        } else {
          text = val || "";
        }
      }
    }

    if (!text) {
      text = `${dim.name}符合標準`;
    }

    // Now spin the text to introduce dynamic variety!
    const studentSeed = activeStudent ? hashStringToNumber(activeStudent.id + id + level) : 0;
    const globalSeed = Object.values(variationSeeds).reduce((acc: number, v: any) => acc + (Number(v) || 0), 0) as number;
    const finalSeed = studentSeed + globalSeed;

    return spinText(text, finalSeed);
  };

  const smartJoin = (arr: string[]): string => {
    if (arr.length === 0) return '';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) {
      return isConciseMode ? `${arr[0]}且${arr[1]}` : `${arr[0]}，且${arr[1]}`;
    }
    return isConciseMode 
      ? arr.join('、')
      : arr.slice(0, -1).join('、') + '，並' + arr[arr.length - 1];
  };

  const compressTaiwanesePhrases = (text: string): string => {
    let cur = text;
    
    // High-frequency long phrases from Subject evaluation data
    cur = cur
      // Chinese Long Phrases
      .replace(/注音符號拼讀與聽寫熟練快速/g, "注音拼讀與聽寫熟練自如")
      .replace(/認讀漢字量大，閱讀課文極流暢/g, "識字量大且課文閱讀極流暢")
      .replace(/生字部首結構極佳，筆順寫得漂亮/g, "生字結構佳且筆順端正")
      .replace(/詞彙造詞造句通順且帶有創意/g, "造詞句通順且富含創意")
      .replace(/愛聽故事且能準確說出故事主旨/g, "喜愛傾聽故事且理解主旨強")
      .replace(/課文朗讀充滿感人字句，看圖發表豐富流利/g, "朗讀有感情且發表豐富流暢")
      .replace(/部首聯想和識字廣度優秀，字義理解快/g, "部首聯想佳且字義理解快")
      .replace(/短文造句內容通順且結構完整/g, "短文造句通順結構完整")
      .replace(/查字典動作敏捷、部首字音辨識強/g, "查字典熟練且辨音能力佳")
      .replace(/課文情節抓取快且理解力棒/g, "能迅速理解課文大意")
      .replace(/能流暢運用譬喻擬人，造句豐富有張力/g, "妙用修辭修飾且句式生動")
      .replace(/記敘文寫得有頭有尾，修辭用得好/g, "記敘文布局完整，修辭優美")
      .replace(/成語用得非常精準、造句多變/g, "成語運用精確，句型多變")
      .replace(/閱讀文章理解快且抓重點能力棒/g, "閱讀理解敏捷且善抓重點")
      .replace(/全篇字詞使用乾淨且標點符號下得漂亮/g, "字體整潔，標點運用合度")
      .replace(/議論文論點鮮明，說明文說明清楚/g, "議論論點清晰，說明條理分明")
      .replace(/文言字詞與白話對照理解極佳/g, "文文對照理解與譯讀能力極佳")
      .replace(/思考靈敏，能針對課文提出好問題/g, "思考靈巧且能針對課文提問")
      .replace(/快速閱讀技巧純熟且整合資訊條理分明/g, "閱讀速度快且資訊整合條理佳")
      .replace(/畢業深度寫作文筆好且感情真誠/g, "畢業抒寫真誠，情感真摯")
      .replace(/寫句能巧妙融入擬人與排比修辭/g, "造句能妙用擬人及排比修辭")
      .replace(/跨領域文本統整資訊能力強/g, "跨領域文本資訊整合力強")
      
      // Math Long Phrases
      .replace(/熟練掌握三位數與四位數的大數加減直式計算/g, "大數四則運算熟練")
      .replace(/熟練九九乘法並能運用在乘除直式運算中/g, "乘除直式與九九乘法熟練")
      .replace(/位值概念極清，能精準解決多步驟的大數加減估算/g, "位值觀念清且能多步估算")
      .replace(/能敏銳理解大位數的多步驟加減乘除混合運算/g, "多步四則混合運算速度快")
      .replace(/熟練分數的基本概念，能精準比大小與簡單加減/g, "分數概念熟且能比大小加減")
      .replace(/小數與分數概念非常清晰，熟練轉換與進階計算/g, "小數分數概念熟且能轉換")
      .replace(/因數與倍數概念極佳，能迅速找出公因數與公倍數/g, "因倍數熟且能迅速找公因數")
      .replace(/熟練分數的乘除運算，並能靈活解開複雜的應用題/g, "分數乘除與應用題解題流暢")
      .replace(/分數與小數的四則混合運算能力極佳，解答精準無誤/g, "分小四則混合計算精準")
      .replace(/能熟練進行小數與分數的多步驟乘除與混合運算/g, "分小乘除與多步混合運算熟")
      .replace(/幾何點線面的特徵認讀快速，且空間感極強/g, "空間感佳，認識點線面特徵")
      .replace(/能熟練使用圓規作圖，且對圓周與圓心幾何理解深/g, "掌握圓規作圖與圓幾何概念")
      .replace(/熟練掌握公噸、公頃及平方公里等大單位的換算與理解/g, "掌握公噸公頃等大單位換算")
      .replace(/熟練計算圓周率與圓面積，幾何圖形切割組合能力好/g, "熟練計算圓周率與圓面積")
      .replace(/熟練多步驟長度、重量與容量的加減換算/g, "長度重量容量單位換算熟練")
      .replace(/熟練繪製與判讀二維折線圖、複雜長條圖與表格/g, "折線長條圖及表格判讀熟練")
      .replace(/熟練求出長方形與正方形的面積公式與對稱圖形/g, "熟練方型面積與對稱圖形")
      .replace(/能熟練求出各種立體圖形的表面積與體積公式/g, "掌握立體圖形表面積與體積")
      .replace(/能熟練求出扇形面積、複合圖形面積與圓心角/g, "熟練求扇形、複合面積及圓心角")
      .replace(/面對同儕意見衝突時容易情緒化或選擇逃避，在團隊中承擔責任的積極度尚有進步空間/g, "面對衝突易情緒化或逃避，團隊積極度待加強")
      
      // Health Long Phrases
      .replace(/能正確落實潔牙、正確洗手與視力保健等生活好習慣，並能隨時注意自我坐姿與良好體態的維持/g, "能落實潔牙、洗手與視力保健，維持好體態")
      .replace(/潔牙與視力保健等日常衛生習慣較常需要師長提醒，對於維持優良坐姿的自律性需再加強/g, "日常習慣需提醒，且坐姿維持自律待加強")
      .replace(/能清楚辨識六大類食物，具備天天五蔬果與多喝白開水的良好飲食觀念，在日常生活中能做到不挑食/g, "能辨識六大類食物且不偏食，具均衡飲食觀")
      .replace(/偏食現象較明顯，對零食或含糖飲料的抗拒能力較弱，需多引導其建立均衡飲食的防護觀/g, "偏食且易吃含糖零食，待引導均衡飲食觀")
      .replace(/具備良好的身體自主權概念（身體紅綠燈），能警覺校園與居家的安全死角/g, "具備身體自主權與紅綠燈概念，警覺安全死角");

    return cur;
  };

  const sanitizePunctuation = (text: string): string => {
    return text
      .substring(0) // Safe copy
      .replace(/，，/g, "，")
      .replace(/。。/g, "。")
      .replace(/、、/g, "、")
      .replace(/, /g, "，")
      .replace(/！。/g, "！")
      .trim();
  };

  const adaptToGradeVocabulary = (text: string, grade: string): string => {
    let cur = text;
    if (grade === '3' || grade === '4') {
      cur = cur
        .replace(/資質優秀/g, "表現優秀")
        .replace(/治學/g, "學習")
        .replace(/領悟力/g, "理解力")
        .replace(/同儕/g, "同學");
    }
    return cur;
  };

  const compiledGroups = useMemo(() => {
    const positives: string[] = [];
    const neutrals: string[] = [];
    const negatives: string[] = [];

    const activeList = (checkedDimensions[currentSubject] as any) || [];

    // Checked standard dimensions
    const activeChecked = activeList.filter((item: any) => !item.id.startsWith('custom_'));

    activeChecked.slice(0, 4).forEach((item: any) => {
      const fragment = getFragmentText(item.id, item.level);
      if (!fragment) return;
      if (item.level === 'high') {
        positives.push(fragment);
      } else if (item.level === 'mid') {
        neutrals.push(fragment);
      } else {
        negatives.push(fragment);
      }
    });

    // Custom dimensions
    const activeCustom = activeList.filter((item: any) => item.id.startsWith('custom_'));

    activeCustom.forEach((item: any) => {
      const fragment = getFragmentText(item.id, item.level);
      if (!fragment) return;
      if (item.level === 'high') {
        positives.push(fragment);
      } else if (item.level === 'mid') {
        neutrals.push(fragment);
      } else {
        negatives.push(fragment);
      }
    });

    return { positives, neutrals, negatives };
  }, [checkedDimensions, currentSubject, currentGrade, customDimensions]);

  // Dynamic roster template helpers to support standard class sizes (creates 3 defaults if empty)
  useEffect(() => {
    const saved = localStorage.getItem('school_students_roster_v3');
    if (!saved || saved === '[]') {
      const defaults: Student[] = [
        { id: 'student_1', name: '林小明', pronoun: 'he', grade: '3', completed: false, checkedDimensions: {} },
        { id: 'student_2', name: '陳小美', pronoun: 'she', grade: '3', completed: false, checkedDimensions: {} },
        { id: 'student_3', name: '張大同', pronoun: 'he', grade: '3', completed: false, checkedDimensions: {} }
      ];
      setStudents(defaults);
      localStorage.setItem('school_students_roster_v3', JSON.stringify(defaults));
      setActiveStudent(defaults[0]);
    }
  }, []);

  // 10 Archetypes Compile Definitions
  const ARCHETYPES: Record<string, ArchetypeOrStyle> = {
    excel: {
      name: "卓越優秀 👑",
      desc: "學科表現頂尖，積極主動且表現卓越",
      theme: "bg-emerald-50 border-emerald-200 text-emerald-800",
      badge: "bg-emerald-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['excel'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `在${sub}表現極佳，平常${smartJoin(allParts)}。若能修正${smartJoin(neg)}的情形，各項成效定能臻於完美，加油！`,
            `學${sub}具有極佳天賦與熱情，平日${smartJoin(allParts)}。稍微留意${smartJoin(neg)}之處，表現將更無懈可擊。`,
            `於${sub}展現優秀底子，日常${smartJoin(allParts)}。課堂上若能克制並改進${smartJoin(neg)}，必能更加閃耀。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `在${sub}表現極為卓越！平時${smartJoin(allParts)}，學習成果十分亮眼，足堪為全班同學學習的好榜樣。`,
            `學${sub}很有心得與想法。不僅${smartJoin(allParts)}，展現了極高的自我要求，表現讓人非常讚賞。`,
            `於${sub}領域展現卓越的學習成效，日常${smartJoin(allParts)}，是個資質優秀且懂事聽話的好孩子。`
          ][seed % 3];
        }
        return [
          `雖然目前在${sub}發揮不夠平穩，常有${smartJoin(neg)}等情況。盼能展現鬥志打好根基，加油。`,
          `在${sub}的基礎未臻穩固，目前在${smartJoin(neg)}上稍吃力。調整好心態，相信其具有潛力。`,
          `本階段學習遭遇一些考驗，課堂常有${smartJoin(neg)}等狀況。讓我們一起加強訓練，打好底子。`
        ][seed % 3];
      }
    },
    diligent: {
      name: "認真穩重 📖",
      desc: "態度踏實、規矩穩定，表現穩步前行",
      theme: "bg-blue-50 border-blue-200 text-blue-800",
      badge: "bg-blue-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['diligent'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `學習${sub}態度認真穩健，平日${smartJoin(allParts)}。雖然目前在${smartJoin(neg)}上有些吃力，相信能靠著毅力克服！`,
            `做事非常沉穩踏實，平時${smartJoin(allParts)}。課堂若能克服${smartJoin(neg)}的困擾，表現定能大有突破。`,
            `常規表現極佳，課堂能做到${smartJoin(allParts)}。在${smartJoin(neg)}上進度雖然偏慢，但按部就班累積，非常可靠。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `學習${sub}態度誠懇端正，平時${smartJoin(allParts)}，是個踏實且讓人放心的好孩子。`,
            `做事安分守己。不僅${smartJoin(allParts)}，課堂作業與練習也是一絲不苟，默默努力的態度很值得肯定。`,
            `行事沉著穩重，課堂上常能${smartJoin(allParts)}，各項學習成果紮實可靠。請繼續維持下去喔！`
          ][seed % 3];
        }
        return [
          `在${sub}常規良好。雖然目前在${smartJoin(neg)}上感到比較吃力，但他不怕慢的精神依舊值得掌聲。`,
          `學科觀念吸收較為遲緩，日常中常有${smartJoin(neg)}等情況。不怕起步晚，默默耕耘的背影最美，加油。`,
          `做事安靜守本分，目前在${smartJoin(neg)}上面臨考驗。跟著老師腳步慢慢克服困難，期待其成長。`
        ][seed % 3];
      }
    },
    improved: {
      name: "進步神速 📈",
      desc: "近期學習進步很多，展現滿滿的潛力",
      theme: "bg-teal-50 border-teal-200 text-teal-800",
      badge: "bg-teal-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['improved'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `最近在${sub}展現驚人的成長！已能確實做到${smartJoin(allParts)}。原本在${smartJoin(neg)}上的瓶頸也大幅改善，請繼續加油！`,
            `這學期在${sub}課堂展現極大進步。日常不僅${smartJoin(allParts)}更穩定，連原本弱項的${smartJoin(neg)}也有好轉，表現可圈可點。`,
            `近期求知慾旺盛，日常能做到${smartJoin(allParts)}。雖然以前常有${smartJoin(neg)}，但近期大幅改善，值得表揚。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `這學期進步幅度讓人驚艷！平時不只${smartJoin(allParts)}，學習信心也與日俱增，請維持這股熱情努力！`,
            `展現了強大的自我突破精神。日常在${smartJoin(allParts)}上精益求精，學習態度也有明顯好轉，表現非常棒。`,
            `對學習重拾了信心與求勝心。日常在${smartJoin(allParts)}上表現出色，期末成果實屬難得，值得肯定。`
          ][seed % 3];
        }
        return [
          `目前在打底階段雖遇到一些挫折，但在細微處已有改進。雖然在${smartJoin(neg)}上仍需多加強，但態度已好轉。`,
          `克服了不少原本的瓶頸。雖現下在${smartJoin(neg)}上常感力不從心，但看其定性已慢慢轉好，值得肯定。`,
          `在學科學習上經歷了適應期，目前在${smartJoin(neg)}上仍需要多加油，相信自我調整力，繼續前行。`
        ][seed % 3];
      }
    },
    careless: {
      name: "聰明粗心 ⚡",
      desc: "頭腦反應很快，但作答時常常粗心大意",
      theme: "bg-amber-50 border-amber-200 text-amber-800",
      badge: "bg-amber-500 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['careless'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `反應非常靈巧，課堂能完成${smartJoin(allParts)}。惟處理作業時容易有${smartJoin(neg)}的粗心現象，求快實在可惜。`,
            `對${sub}感應敏銳，平時${smartJoin(allParts)}。可惜在寫答案時常有${smartJoin(neg)}等疏漏，放慢腳步才能發揮真正實力。`,
            `頭腦聰慧，${smartJoin(allParts)}都做得很好。唯獨日常因急躁而顯得${smartJoin(neg)}，期盼多加定心與複查。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `理解力與反應好！上課時能${smartJoin(allParts)}，日常作答也表現得得心應手，成果十分優秀。`,
            `思維轉得極快，上課回答問題時${smartJoin(allParts)}都展現極亮眼的表現，是個很聰明伶俐的孩子。`,
            `頭腦靈巧。平日能確實做好${smartJoin(allParts)}，表現符合期望，期望能持之以恆，繼續保持優秀。`
          ][seed % 3];
        }
        return [
          `反應快但定心不足，日常作業常有${smartJoin(neg)}。只要肯放慢腳步並多加檢查，定能取得好成績。`,
          `心思常處於好動活潑狀態。目前在${smartJoin(neg)}上常出粗心錯誤，希望能多培養自制力，突破自我。`,
          `思維靈敏但磨練不足，在${smartJoin(neg)}上常因急躁粗心而疏漏。沉下心，才能發揮你的真正才華。`
        ][seed % 3];
      }
    },
    passive: {
      name: "安靜被動 🕊️",
      desc: "課堂守常規，但上課比較沉默、建議多發表",
      theme: "bg-indigo-50 border-indigo-200 text-indigo-800",
      badge: "bg-indigo-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['passive'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `上課安穩守秩序，能做好${smartJoin(allParts)}。惟回答問題時常有${smartJoin(neg)}的現象，盼能更勇敢、大方發表。`,
            `遵守秩序且聽話，能做到${smartJoin(allParts)}。然而在課堂大聲回答或${smartJoin(neg)}時，則顯得有些羞怯。`,
            `安穩聽講，平日確實做好${smartJoin(allParts)}。若在遇到不懂的${smartJoin(neg)}時能主動發問，就更好了。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `常規表現良好。平日作業${smartJoin(allParts)}都做得很好，若在課堂上表現能再積極大方點，就完美了。`,
            `有優良的紀律。日常能做好${smartJoin(allParts)}。盼能多展現自我並積極大聲發表，表現會更加迷人。`,
            `表現中規中矩。平日上課${smartJoin(allParts)}，能默默做好自己份內的學習任務，值得師長予以肯定。`
          ][seed % 3];
        }
        return [
          `主動學習性需要再加強。目前在${smartJoin(neg)}上，常因羞怯被動而打折扣，請勇敢開口發表吧。`,
          `在課堂中過於安靜。日常常有${smartJoin(neg)}，主要是不好意思請教，其實他很聰明的，加油。`,
          `課堂缺乏互動。目前在${smartJoin(neg)}上有些挫折退縮，期許新學期能拿出勇氣大膽去嘗試。`
        ][seed % 3];
      }
    },
    struggling: {
      name: "基礎待提攜 🩹",
      desc: "核心觀念尚未熟悉，需要多加輔導練習",
      theme: "bg-rose-50 border-rose-200 text-rose-800",
      badge: "bg-rose-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['struggling'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `在${sub}上面臨不小考驗。雖然日常能做好${smartJoin(allParts)}，課本中仍常有${smartJoin(neg)}等困難，需多輔導。`,
            `吸收較慢。在學科的${smartJoin(neg)}落後較多，所幸日常聽講與作業在${smartJoin(allParts)}下尚能跟進。`,
            `核心學習成果未穩。雖能${smartJoin(allParts)}，外加${smartJoin(neg)}時感到吃力，宜課後加以補強。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `在${sub}表現尚稱穩定。平時能做到${smartJoin(allParts)}，各項基礎考評皆能合乎學科的基本要求。`,
            `學科基本觀念打得平穩。平日聽講與作業在${smartJoin(allParts)}上皆有認真做到，盼能繼續維持下去。`,
            `表現按部就班。日常各項任務皆能按時完成${smartJoin(allParts)}，維持穩定、健康的學習步調，很棒。`
          ][seed % 3];
        }
        return [
          `在${sub}遇到了比較大的挑戰，日常常有${smartJoin(neg)}，課後輔導待家長與老師共同督促補強。`,
          `學習成效落後，目前呈現${smartJoin(neg)}等狀況，宜重頭奠定最基本且簡單的課堂概念、多加練習。`,
          `基本功力不足，常規也存在${smartJoin(neg)}等狀況。盼親師配合建立基本作息，陪伴其踏穩腳步。`
        ][seed % 3];
      }
    },
    slowButGood: {
      name: "勤能補拙 🐢",
      desc: "理解比較慢，但學習意志非常堅韌認真",
      theme: "bg-purple-50 border-purple-200 text-purple-800",
      badge: "bg-purple-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['slowButGood'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `工作吸收較為緩慢，常有${smartJoin(neg)}等情形。所幸求知慾強，能認真做到${smartJoin(allParts)}，補足落後。`,
            `雖然在${smartJoin(neg)}上學得較為辛苦吃力，但憑著${smartJoin(allParts)}默默克服了瓶頸，毅力很感人。`,
            `核心觀念理解雖緩，日常也有${smartJoin(neg)}等弱項。好在平時態度在${smartJoin(allParts)}上極佳。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `展現了非常合群、誠懇的求知態度。日常不只做到${smartJoin(allParts)}，各項功課成果也極踏實。`,
            `慢功出細活。雖然學得不快，但靠著${smartJoin(allParts)}默默積累，基礎打得極其可靠紮實，值得表揚。`,
            `有滴水穿石的堅毅精神。課堂中能確實落實${smartJoin(allParts)}，踏實作風非常有前途，加油。`
          ][seed % 3];
        }
        return [
          `雖然日常在${smartJoin(neg)}上面臨很大挑戰、學得辛苦，但他從不言棄的態度堪為全班表率。`,
          `在學科理解上面臨考驗，日常也存在${smartJoin(neg)}的困局，但他默默不抱怨，踏實走完每步。`,
          `觀念理解得較為抽象，平時常有${smartJoin(neg)}等困境。不怕起步晚，只要肯花時間，定會發光。`
        ][seed % 3];
      }
    },
    activeDistracted: {
      name: "活潑易分心 🧩",
      desc: "頭腦很靈活，但課堂上容易恍神、愛講話",
      theme: "bg-orange-50 border-orange-200 text-orange-800",
      badge: "bg-orange-500 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['activeDistracted'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `反應靈敏，上課回答問題時${smartJoin(allParts)}。但玩心重，在${smartJoin(neg)}上顯得有些草率。`,
            `頭腦靈活，聽講時${smartJoin(allParts)}反應快。惟自我克制力待加強，常有${smartJoin(neg)}等毛躁現象。`,
            `上課有朝氣且點子多，能做到${smartJoin(allParts)}。若能調整愛講話、${smartJoin(neg)}的分心缺點就更完美。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `課堂極具元氣！不僅聽講時${smartJoin(allParts)}，表現相當專注用心，帶動了全班主動好學的風氣。`,
            `對科目很有參與感。日常在${smartJoin(allParts)}上皆做得極好，在合作任務中更能帶領大家做好工作。`,
            `學習生動活潑。不僅日常確實做好${smartJoin(allParts)}，頭腦聰慧，各項表現都十分令人激賞。`
          ][seed % 3];
        }
        return [
          `上課玩心過重，目前常有${smartJoin(neg)}等分心現象。希望新一學期能好好收心並專注課堂，加油。`,
          `腦筋反應很好但定性需要多鍛鍊。目前在${smartJoin(neg)}上面臨瓶頸，盼能學會自我克制、專心。`,
          `在教室心思較為浮躁。日常學習常有${smartJoin(neg)}等表現，期許能克制下急躁，展現他的聰慧才華。`
        ][seed % 3];
      }
    },
    cooperative: {
      name: "熱心合作 🤝",
      desc: "擅長小組分工，團隊活動時非常有責任感",
      theme: "bg-cyan-50 border-cyan-200 text-cyan-800",
      badge: "bg-cyan-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['cooperative'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `分組中扮演極棒的協調者，日常能${smartJoin(allParts)}。惟有時${smartJoin(neg)}，需要再多自控。`,
            `討論熱心積極，在${smartJoin(allParts)}上都表現良好。然而個人表現常有${smartJoin(neg)}的疏漏。`,
            `小組合作態度極佳，能做到${smartJoin(allParts)}。惟獨立作業時常有${smartJoin(neg)}的毛病，需獨立加強。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `班級領導力好！不僅平常確實做到${smartJoin(allParts)}，同學互動也是熱心無私，深得班級人氣。`,
            `在小組探究中是個非常出色的協調者。不只${smartJoin(allParts)}，更能大方配合組員完成各項小組分工。`,
            `極富同理心。不只聽講作業做到${smartJoin(allParts)}，分組互動時更能體貼、帶動組員，深得肯定。`
          ][seed % 3];
        }
        return [
          `日常獨立能力待多建立，目前在${smartJoin(neg)}上皆表現得比較被動，盼新學期能更懂事。`,
          `日常中常有${smartJoin(neg)}，甚至在討論中與同儕產生爭執，希望能多學習合群。`,
          `情緒稍顯急躁且缺乏合作耐心。常有${smartJoin(neg)}等現象，期許未來能學習溫和體貼的待人處事。`
        ][seed % 3];
      }
    },
    impatient: {
      name: "耐挫待磨練 ⚠️",
      desc: "不夠有抗挫力，遇到比較繁雜的功課容易放棄",
      theme: "bg-rose-100 border-rose-300 text-rose-900",
      badge: "bg-rose-700 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['impatient'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `思路快，日常能做好${smartJoin(allParts)}。惟抗挫力偏低，一遇到繁複的${smartJoin(neg)}就容易放棄。`,
            `頭腦敏捷，在${smartJoin(allParts)}上皆有不錯表現。惟一遇到複雜且不熟的${smartJoin(neg)}時，容易急躁。`,
            `學習底子好，日常也能做到${smartJoin(allParts)}。唯面對解題挫折耐心不夠，遇到${smartJoin(neg)}容易草草了事。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `思路轉得快，各項任務皆能按部就班做好${smartJoin(allParts)}，各項成果極佳，請繼續保持下去。`,
            `對學科掌握度優。日常不只${smartJoin(allParts)}，定性也有了明顯進步，期勉新一學期更上層樓。`,
            `思路靈活。不只做到${smartJoin(allParts)}，近期更克服了浮躁性並專心落實聽講，表現大幅精進。`
          ][seed % 3];
        }
        return [
          `學習面臨倦怠。日常常有${smartJoin(neg)}等逃避現象，一碰到困難題目就心浮氣躁，耐性需多加磨練。`,
          `抗挫力偏低，目前在${smartJoin(neg)}上皆顯得比較吃力與被動，希望在新的學期，穩下心，突破關卡。`,
          `作答耐心仍待引導，日常容易有${smartJoin(neg)}等情況。盼能拋開焦慮，大膽請教，一定能解決。`
        ][seed % 3];
      }
    }
  };

  const STYLES: Record<string, ArchetypeOrStyle> = {
    inspiring: {
      name: "👑 卓越期許型",
      desc: "溫暖正向，肯定優點並提出未來期望",
      theme: "bg-emerald-50 border-emerald-200 text-emerald-800",
      badge: "bg-emerald-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['inspiring'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `在${sub}表現出色，平常${smartJoin(allParts)}。惟有時${smartJoin(neg)}。盼多發揮優點，相信定能更上層樓，加油！`,
            `學習${sub}得心應手，平時${smartJoin(allParts)}。若能改善${smartJoin(neg)}，定能更加卓越。`,
            `上課表現佳，平時能${smartJoin(allParts)}。若在${smartJoin(neg)}上微調步伐，期許未來展現更棒的實力。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `在${sub}表現棒極了！不僅${smartJoin(allParts)}，學習態度積極，可以當大家學習的好榜樣！`,
            `${sub}學得很有心得。平日${smartJoin(allParts)}，追求進步且自我要求高，請繼續保持下去。`,
            `學習${sub}成效極佳。不但${smartJoin(allParts)}，表現更是令人激賞，是非常優秀懂事的好孩子。`
          ][seed % 3];
        }
        return [
          `在${sub}遇到一些關卡，日常${smartJoin(neg)}。盼能調整節奏並落實每日小練習，老師對你有信心。`,
          `學習${sub}較吃力，常有${smartJoin(neg)}等狀況。別著急，只要每天進步一點點，定能迎頭趕上。`,
          `在${sub}上面臨一些挑戰，日常${smartJoin(neg)}。盼能打起精神並積極發問，突破瓶頸。`
        ][seed % 3];
      }
    },
    gentle: {
      name: "📖 溫和陪伴型",
      desc: "語調和藹可親，適合建立信心的孩子",
      theme: "bg-blue-50 border-blue-200 text-blue-800",
      badge: "bg-blue-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['gentle'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `學習${sub}很踏實，能做到${smartJoin(allParts)}。雖偶爾${smartJoin(neg)}，老師會陪著你一起努力。`,
            `上${sub}認真，平常${smartJoin(allParts)}。若能慢慢修正${smartJoin(neg)}，進步會更顯著喔。`,
            `學${sub}態度溫和，能${smartJoin(allParts)}。若在${smartJoin(neg)}上多花點心思就更好了。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `學習${sub}態度端正。平時${smartJoin(allParts)}，穩步前行是個讓師長放心的好孩子。`,
            `上課總是用心，不僅${smartJoin(allParts)}，能做好本分非常不容易，表現值得肯定。`,
            `在${sub}表現平穩。平時能${smartJoin(allParts)}，整體成果令人欣慰，請繼續維持。`
          ][seed % 3];
        }
        return [
          `${sub}學習有些吃力，目前在${smartJoin(neg)}上較辛苦。沒關係，我們一步步練起，加油！`,
          `在${sub}遇到些困難，常${smartJoin(neg)}。不要急，老師會一直陪伴著你克服困難。`,
          `學${sub}遇到小挫敗，主要是${smartJoin(neg)}較吃力。放鬆心情，只要肯努力一定能做好。`
        ][seed % 3];
      }
    },
    growth: {
      name: "📈 目標成長型",
      desc: "著重在學習過程的成長進步",
      theme: "bg-teal-50 border-teal-200 text-teal-800",
      badge: "bg-teal-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['growth'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `本學期在${sub}進步很多！已做到${smartJoin(allParts)}。若能克服${smartJoin(neg)}，實力定能更加突出。`,
            `最近在${sub}有很大突破。雖在${smartJoin(neg)}還需努力，但能做到${smartJoin(allParts)}，很棒！`,
            `看到你在${sub}上的成長。除了${smartJoin(allParts)}之外，若能改善${smartJoin(neg)}，表現會更亮眼。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `這學期在${sub}的成長大家有目共睹！不僅${smartJoin(allParts)}，表現越來越出色，前途可期。`,
            `近期突破很大。不只${smartJoin(allParts)}，學習信心也提升不少，請維持這股熱情繼續加油。`,
            `在${sub}展現驚人進步。平時${smartJoin(allParts)}，表現得可圈可點，實在令人讚賞！`
          ][seed % 3];
        }
        return [
          `學${sub}正處在打底階段。雖目前在${smartJoin(neg)}上有些瓶頸，只要堅持每日練習，必定會有突破的。`,
          `經歷了一段適應期，目前在${smartJoin(neg)}上面臨考驗。只要相信自己並持之以恆，會看到成果。`,
          `學習路上正在累積能量，別被${smartJoin(neg)}的挫折打敗。打起精神，我們一起前行。`
        ][seed % 3];
      }
    },
    academic: {
      name: "🎯 精準學術型",
      desc: "口語直接，平實描述學科學習現狀",
      theme: "bg-slate-50 border-slate-200 text-slate-800",
      badge: "bg-slate-700 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['academic'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `於${sub}領域掌握度良好，已能${smartJoin(allParts)}。惟日常中常有${smartJoin(neg)}等弱項，仍有改進空間。`,
            `學科表現略有起伏。雖能做到${smartJoin(allParts)}，但日常仍存在${smartJoin(neg)}，建議課後多加複習。`,
            `對${sub}理解中等。雖能${smartJoin(allParts)}，但在日常的${smartJoin(neg)}上，基礎需再多加強。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `於${sub}領域底子扎實。平日聽講與練習皆能做到${smartJoin(allParts)}，學習成效非常符合期望。`,
            `學科掌握程度極佳。作答確實且${smartJoin(allParts)}，在班上維持優異的學科水準，表現出色。`,
            `學習成效十分穩定。平時不論${smartJoin(allParts)}皆能精準落實，各項考評皆合乎預期成果。`
          ][seed % 3];
        }
        return [
          `對${sub}吸收成效較為落後。主要在課後${smartJoin(neg)}上理解尚顯不足，課後宜落實加強。`,
          `本學期學習成果未臻理想，在${smartJoin(neg)}上有明顯弱項。宜重頭奠定最基礎的概念。`,
          `學科基本觀念尚未建立完全。日常中常有${smartJoin(neg)}等表現，急需親師加強引導與督促。`
        ][seed % 3];
      }
    },
    potential: {
      name: "🌟 潛能開發型",
      desc: "發掘孩子內在實力，並指引關鍵突破點",
      theme: "bg-violet-50 border-violet-200 text-violet-800",
      badge: "bg-violet-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['potential'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `在${sub}很有潛力，能${smartJoin(allParts)}。若能下決心克服${smartJoin(neg)}，未來定能大放異彩。`,
            `對${sub}有很棒的領悟力，平常${smartJoin(allParts)}。可惜因${smartJoin(neg)}影響成果，沉住氣一定會更好。`,
            `腦筋動得快，平時能${smartJoin(allParts)}。惟常在${smartJoin(neg)}上有些馬虎，十分可惜，要加油。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `在${sub}極具發展潛能！不僅${smartJoin(allParts)}，多接觸延伸知識，未來表現一定不可限量。`,
            `吸收速度快。平日${smartJoin(allParts)}都展現極高才華，是個聰明且具有發展力的優秀孩子。`,
            `極具學科直覺力。日常不只${smartJoin(allParts)}，各項表現都游刃有餘，成果十分突出。`
          ][seed % 3];
        }
        return [
          `目前學習學得有些被動。雖然在${smartJoin(neg)}遇到挫敗，但只要肯勇敢嘗試，你絕對具有潛力！`,
          `在${sub}上缺乏些主動性，常${smartJoin(neg)}。別退縮，踏實前行，你的實力絕不僅止於此。`,
          `遇到挫折容易退縮放棄，${smartJoin(neg)}等問題宜積極克服。動起手來，你能做得很好！`
        ][seed % 3];
      }
    },
    collaboration: {
      name: "🤝 親師攜手型",
      desc: "語調親切，給予具體的課後輔導建議",
      theme: "bg-amber-50 border-amber-200 text-amber-800",
      badge: "bg-amber-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['collaboration'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `在校能做到${smartJoin(allParts)}。惟於${smartJoin(neg)}上常感吃力，需親師共同輔導協助加強複習。`,
            `學習態度良好，在課堂中${smartJoin(allParts)}。惟日常練習常有${smartJoin(neg)}，需家長平日多協助督促。`,
            `對${sub}有一定理解，平時能${smartJoin(allParts)}。惟有時因${smartJoin(neg)}影響成果，親師配合必能改善。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `在校學習成果卓越。不只${smartJoin(allParts)}。感謝家長平時的課後陪伴與引導，讓孩子學得很有成就。`,
            `本學期表現極為優良。平日常能做到${smartJoin(allParts)}，家庭與學校良好互動相得益彰，值得讚許。`,
            `學習成效優秀。日常能落實${smartJoin(allParts)}，親師密切配合，是孩子穩健進步的最大基石。`
          ][seed % 3];
        }
        return [
          `目前遭遇較大瓶頸，日常常有${smartJoin(neg)}等狀況。建議親師互相配合，訂定課後每日複習計畫。`,
          `學習表現較為落後，不僅${smartJoin(neg)}，急需親師加強引導與關心，共同為孩子建立信心。`,
          `日常中較多${smartJoin(neg)}的現象，建議親師從最基礎的題目著手，每天抽空陪伴練習以打好根基。`
        ][seed % 3];
      }
    },
    advice: {
      name: "💡 學習策略型",
      desc: "提供好懂實用的讀書方法建議",
      theme: "bg-indigo-50 border-indigo-200 text-indigo-800",
      badge: "bg-indigo-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['advice'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `對${sub}掌握度好，能${smartJoin(allParts)}。但之所以在${smartJoin(neg)}上受限，建議落實訂正錯題本。`,
            `能做到${smartJoin(allParts)}。惟日常常有${smartJoin(neg)}的情形，建議作答後大聲讀一遍會更好。`,
            `學習底子不錯，平日能${smartJoin(allParts)}。然而${smartJoin(neg)}是目前弱項，建議化繁為簡、分段複習。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `掌握了極佳的學習訣竅。課堂中能落實${smartJoin(allParts)}，高效率的方法與態度非常值得大家學習。`,
            `能將學到的觀念融會貫通。平日精準落實${smartJoin(allParts)}，可見平時學習方法極為合適。`,
            `學得有條理。不僅能做到${smartJoin(allParts)}，更能配合各項單元延伸練習，成效非常理想。`
          ][seed % 3];
        }
        return [
          `學習習慣與方法需要微調。針對${smartJoin(neg)}，建議將範圍切成小份量，每天少量多次複習。`,
          `目前學習感到有些力不從心，主要因為${smartJoin(neg)}。建議先拋開焦慮，每天重複讀熟最基礎觀念。`,
          `讀書方法仍未掌握。在${smartJoin(neg)}上常遇到困難，多開口向同學或老師請教，微調步伐。`
        ][seed % 3];
      }
    },
    steadfast: {
      name: "🐢 腳踏實地型",
      desc: "著重在孩子認真不放棄的意志品質",
      theme: "bg-rose-50 border-rose-200 text-rose-800",
      badge: "bg-rose-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['steadfast'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `學${sub}不怕起步慢。雖${smartJoin(neg)}較落後，但好在平常${smartJoin(allParts)}。滴水穿石，前途可期。`,
            `雖然日常在${smartJoin(neg)}遇到些小障礙，但能靠著${smartJoin(allParts)}踏實完成，學習精神令人佩服。`,
            `學習雖卡關，面對${smartJoin(neg)}有些吃力，但好在平常能${smartJoin(allParts)}。這份毅力很值得表揚。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `學習態度十分誠懇、有耐心。不管課堂上${smartJoin(allParts)}，始終踏實認真，基本功打得非常扎實。`,
            `態度真誠無比。平日確實做好${smartJoin(allParts)}，不浮躁且默默做好本分，實屬難能可貴。`,
            `能按部就班、誠實對待學業。平日裡不只${smartJoin(allParts)}，踏實勤懇的作風是取得進步的最好本錢。`
          ][seed % 3];
        }
        return [
          `雖然面對在${smartJoin(neg)}上的瓶頸，但他展現出了不氣餒的好脾氣與恆心，這也是最大的優勢。`,
          `在${sub}上面臨不少考驗，常${smartJoin(neg)}。但他從不抱怨，默默試著完成任務，毅力值得讚許。`,
          `遭遇不少挫折，常有${smartJoin(neg)}等手足無措情形。相信其能靠著踏實的特點慢慢前行，明天會更好。`
        ][seed % 3];
      }
    },
    energetic: {
      name: "🔥 充滿活力型",
      desc: "高能量、極富動態朝氣的評語",
      theme: "bg-orange-50 border-orange-200 text-orange-800",
      badge: "bg-orange-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['energetic'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `對${sub}充滿熱情，日常能${smartJoin(allParts)}。唯有時容易${smartJoin(neg)}，需要多克制心思。`,
            `在課堂反應敏銳且快，${smartJoin(allParts)}。惟有時又在${smartJoin(neg)}上比較毛躁，盼多加定性。`,
            `極有活力，在課堂討論中${smartJoin(allParts)}。惟日常常有${smartJoin(neg)}的急躁狀況，沉住氣會更棒。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `課堂上總是元氣滿滿！不僅能做好${smartJoin(allParts)}，主動好學的精神也很棒，是班上的活力先鋒。`,
            `對科目充滿學習熱忱。不只${smartJoin(allParts)}，活潑好動且不失求知慾，把上課的學習氛圍都帶動起來了。`,
            `課堂上極具活力！不僅${smartJoin(allParts)}，上課專心且各項任務都全力以赴，表現深得師長讚賞。`
          ][seed % 3];
        }
        return [
          `目前學習缺乏些動力，常${smartJoin(neg)}。拿出你平時的活力，跟著老師的腳步一起克服困難。`,
          `在學習上面臨考驗，目前常${smartJoin(neg)}。別氣餒，跨出這一步就是另一片晴空，打起精神來！`,
          `最近有些無精打采，常有${smartJoin(neg)}等表現。希望新的學期能重拾活力，勇敢迎向挑戰。`
        ][seed % 3];
      }
    },
    classic: {
      name: "🕊 killers 簡潔中肯型",
      desc: "平實客觀、符合傳統成績單的常規格式",
      theme: "bg-cyan-50 border-cyan-200 text-cyan-800",
      badge: "bg-cyan-600 text-white",
      compile: (pos, neu, neg, sub) => {
        const seed = variationSeeds['classic'] || 0;
        const allParts = [...pos, ...neu];
        if (allParts.length && neg.length) {
          return [
            `本學期在${sub}領域表現尚可。雖能${smartJoin(allParts)}，但在${smartJoin(neg)}上仍有進步空間。`,
            `各項考核各有起伏。平時能做到${smartJoin(allParts)}，惟日常課業常有${smartJoin(neg)}等不足，盼能改善。`,
            `在學科理解上略有起落。能${smartJoin(allParts)}，惟日常作業的${smartJoin(neg)}上則仍需多加預留心力。`
          ][seed % 3];
        }
        if (allParts.length && !neg.length) {
          return [
            `本學期各項表現優良。課堂中${smartJoin(allParts)}，課後學習成效理想，表現值得嘉許。`,
            `學習成效十分顯著。不僅聽講時${smartJoin(allParts)}，展現了極佳的自我要求與自律學習態度。`,
            `學科表現完全符合期望。平時上課${smartJoin(allParts)}，各項學習任務皆能順利圓滿完成。`
          ][seed % 3];
        }
        return [
          `本學期學習成果待補強。日常中常有${smartJoin(neg)}表現，宜利用課後反覆精進。`,
          `學科考核未臻理想。常有${smartJoin(neg)}等狀況，需多花費時間並配合老師，重打基礎。`,
          `學習態度稍顯被動，目前在${smartJoin(neg)}上皆未合乎預期，盼下學期能端正態度，迎頭趕上。`
        ][seed % 3];
      }
    }
  };

  // Compile active cards based on active templates and fields
  const activeDataset = generatorMode === 'archetypes' ? ARCHETYPES : STYLES;
  const activeSubjectObj = GRADE_SUBJECTS[currentGrade]?.[currentSubject] || GRADE_SUBJECTS['3']['chinese'];
  const subjectLabel = activeSubjectObj.name.replace(/^[^\s]+\s/, '');

  const generatedCommentsMap = useMemo(() => {
    const rawChecked = checkedDimensions[currentSubject] || [];
    if (rawChecked.length === 0) return {};

    const nameToUse = studentName.trim() || '該生';
    const pronounCode = pronoun;
    const pronounStr = pronounCode === 'he' ? '他' : (pronounCode === 'she' ? '她' : '該生');

    const result: Record<string, string> = {};

    Object.keys(activeDataset).forEach(key => {
      const templateObj = activeDataset[key];
      let assembled = templateObj.compile(
        compiledGroups.positives,
        compiledGroups.neutrals,
        compiledGroups.negatives,
        subjectLabel
      );

      // Pronoun adaptations
      assembled = assembled.replace(/該生/g, nameToUse);
      if (nameToUse !== "該生") {
        assembled = assembled.replace(/他/g, pronounStr).replace(/她/g, pronounStr);
        if (assembled.startsWith(pronounStr)) {
          assembled = nameToUse + assembled.substring(pronounStr.length);
        }
      }

      assembled = adaptToGradeVocabulary(assembled, currentGrade);
      assembled = sanitizePunctuation(assembled);

      if (isConciseMode) {
        assembled = compressTaiwanesePhrases(assembled);
        assembled = sanitizePunctuation(assembled);
      }

      result[key] = assembled;
    });

    return result;
  }, [compiledGroups, studentName, pronoun, currentGrade, currentSubject, activeDataset, subjectLabel, isConciseMode]);

  // Handle template selection when active student changes
  const handleSelectStudent = (student: Student) => {
    setActiveStudent(student);
    setEditedTexts({});
    triggerToast(`移至學生：${student.name}`, 'info');
  };

  // Active Subject dimensions
  const subjectSpecList = SUBJECT_DIMENSIONS[currentSubject]?.[currentGrade] || SUBJECT_DIMENSIONS[currentSubject]?.[ "3" ] || [];
  const subjectCustomList = customDimensions[currentSubject] || [];
  const activeSubjectCheckedList = checkedDimensions[currentSubject] || [];

  return (
    <div className="min-h-screen text-slate-800 flex flex-col bg-slate-50/50">
      
      {/* Dynamic Toast Portal */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className={`fixed bottom-6 right-6 px-4.5 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 z-50 pointer-events-auto border ${
              toast.type === 'success' 
                ? 'bg-slate-900 border-emerald-500/20 text-white' 
                : toast.type === 'error'
                  ? 'bg-red-900 border-red-500/20 text-white'
                  : 'bg-slate-900 border-sky-500/20 text-white'
            }`}
          >
            <Info className={`w-4 h-4 ${toast.type === 'success' ? 'text-emerald-400' : 'text-amber-400'}`} />
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <Wand2 className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                國小分科評語智慧型生成器
                <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-bold">精準 70-90 字黃金版</span>
              </h1>
              <p className="text-[11px] text-slate-500">自訂正反向度描述 + 隨機語意合成，支援直接修改框內文字後一鍵複製！</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5">
            <div className="text-[11px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-500" />
              符合國小成績單評語字數限制
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Parameters & Dimensions Checklist (5 cols) */}
        <section className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Class Student Roster Manager (Integrated at the top of parameters workflow) */}
          <StudentManager 
            activeStudent={activeStudent}
            onSelectStudent={handleSelectStudent}
            students={students}
            setStudents={setStudents}
            currentGrade={currentGrade}
            onGradeChange={handleGradeChange}
          />

          {/* Student & Subject Config */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-100 font-extrabold">
              <Users className="w-4 h-4 text-sky-600" />
              1. 學生與科目設定
            </h3>
            
            {/* Quick Student Presets Panel */}
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase">⚡ 快速名單設定</span>
                <button 
                  onClick={() => applyPresetName('該生', 'none')} 
                  className="text-[10px] text-slate-400 hover:text-rose-600 font-bold flex items-center gap-0.5 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>清空</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <button 
                  type="button"
                  onClick={() => applyPresetName('小明', 'he')} 
                  className="py-1.5 px-2 text-[10px] bg-white border border-slate-200 hover:border-sky-500 hover:text-sky-600 rounded-lg font-bold flex items-center justify-center gap-1 shadow-2xs transition-all"
                >
                  👦 男生 (小明)
                </button>
                <button 
                  type="button"
                  onClick={() => applyPresetName('小美', 'she')} 
                  className="py-1.5 px-2 text-[10px] bg-white border border-slate-200 hover:border-pink-500 hover:text-pink-600 rounded-lg font-bold flex items-center justify-center gap-1 shadow-2xs transition-all"
                >
                  👧 女生 (小美)
                </button>
                <button 
                  type="button"
                  onClick={() => applyPresetName('該生', 'none')} 
                  className="py-1.5 px-2 text-[10px] bg-white border border-slate-200 hover:border-slate-500 hover:text-slate-800 rounded-lg font-bold flex items-center justify-center gap-1 shadow-2xs transition-all"
                >
                  👤 通用 (該生)
                </button>
              </div>
            </div>

            {/* Student Details Inputs */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">學生姓名</label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => {
                    const nextVal = e.target.value;
                    setStudentName(nextVal);
                    if (activeStudent) syncStudentToRoster({ name: nextVal });
                    setEditedTexts({});
                  }}
                  className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-3 py-2.5 font-semibold outline-none transition-all" 
                  placeholder="例如：林小明"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">稱調與代稱</label>
                <select 
                  value={pronoun}
                  onChange={(e) => {
                    const val = e.target.value as any;
                    setPronoun(val);
                    if (activeStudent) syncStudentToRoster({ pronoun: val });
                    setEditedTexts({});
                  }}
                  className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-3 py-2.5 font-semibold outline-none transition-all cursor-pointer"
                >
                  <option value="he">他</option>
                  <option value="she">她</option>
                  <option value="none">該生</option>
                </select>
              </div>
            </div>

            {/* Grade Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">年級選擇（依年級切換專屬學科指標）</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
                {['1', '2', '3', '4', '5', '6'].map((gNum) => (
                  <button 
                    key={gNum}
                    type="button"
                    onClick={() => handleGradeChange(gNum)}
                    className={`py-2 rounded-lg font-bold text-center transition-all ${
                      currentGrade === gNum
                        ? 'bg-sky-600 text-white shadow-xs font-black' 
                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                    }`}
                  >
                    {gNum} 年級
                  </button>
                ))}
              </div>
            </div>

            {/* Subject Grid Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">國小學科領域</label>
              <div className="grid grid-cols-3 gap-1.5 max-h-[220px] overflow-y-auto pr-1">
                {(() => {
                  const SUBJECT_ORDER: SubjectKey[] = [
                    'chinese', 'math', 'english',
                    'science', 'social', 'fineart',
                    'music', 'health', 'pe',
                    'general', 'tech', 'life', 'local'
                  ];
                  const currentGradeSubjects = GRADE_SUBJECTS[currentGrade] || GRADE_SUBJECTS['3'];
                  
                  return SUBJECT_ORDER
                    .filter(key => currentGradeSubjects[key] !== undefined)
                    .map(key => {
                      const sub = currentGradeSubjects[key];
                      const isActive = key === currentSubject;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setCurrentSubject(key);
                            setEditedTexts({});
                          }}
                          className={`p-2 py-3 rounded-xl border text-xs font-bold text-center flex items-center justify-center transition-all min-h-[44px] ${
                            isActive 
                              ? 'bg-sky-600 border-sky-600 text-white shadow-xs font-extrabold scale-102' 
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{sub.name.replace(/^[^\s]+\s/, '')}</span>
                        </button>
                      );
                    });
                })()}
              </div>
            </div>
          </div>

          {/* Focus Dimensions Selection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4 flex flex-col">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-sky-600" />
                2. 挑選並評估各表現向度
              </h3>
              <span className="text-[10px] text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded font-bold">可選 3~4 個</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-normal">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 inline mr-1" />
              請勾選向度，並點選對應的表現程度（良好 / 尚可 / 待加強）。
            </p>

            {/* Checklist items dynamic mapping */}
            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-1">
              
              {/* Category 1: Subject specific Core Indicators */}
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider border-l-4 border-sky-500 pl-2">
                📚 {subjectLabel} 領域表現指標
              </div>

              {subjectSpecList.map(dim => {
                const checkedObj = activeSubjectCheckedList.find(item => item.id === dim.id);
                const isChecked = !!checkedObj;
                const activeLevel = checkedObj ? checkedObj.level : 'high';

                return (
                  <div 
                    key={dim.id}
                    className={`p-3 rounded-2xl border transition-all flex flex-col gap-2.5 ${
                      isChecked 
                        ? 'bg-sky-50/40 border-sky-300 shadow-2xs' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <label className="flex items-center gap-2.5 cursor-pointer flex-grow select-none">
                        <input 
                          type="checkbox" 
                          checked={isChecked}
                          onChange={(e) => handleToggleDimension(dim.id, e.target.checked)}
                          className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4 transition-all"
                        />
                        <span className={`text-xs font-bold leading-tight ${isChecked ? 'text-slate-900' : 'text-slate-600'}`}>
                          {dim.name}
                        </span>
                      </label>
                    </div>

                    {isChecked && (
                      <div className="grid grid-cols-3 gap-1 px-1 py-1 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] font-bold">
                        {(['high', 'mid', 'low'] as const).map(lvl => {
                          const isLvlActive = activeLevel === lvl;
                          const labelText = dim.labels[lvl];
                          return (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleChangeDimensionLevel(dim.id, lvl)}
                              className={`py-1.5 rounded-full text-center transition-all truncate px-2 flex items-center justify-center text-[9px] ${
                                isLvlActive 
                                  ? lvl === 'high' 
                                    ? 'bg-emerald-600 text-white shadow-xs' 
                                    : lvl === 'mid' 
                                      ? 'bg-amber-500 text-white shadow-xs' 
                                      : 'bg-rose-500 text-white shadow-xs'
                                  : 'text-slate-500 hover:bg-slate-200'
                              }`}
                            >
                              {labelText}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Category 2: Custom Indicators */}
              {subjectCustomList.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider border-l-4 border-amber-500 pl-2">
                    🎨 自訂指標向度
                  </div>
                  {subjectCustomList.map(dim => {
                    const checkedObj = activeSubjectCheckedList.find(item => item.id === dim.id);
                    const isChecked = !!checkedObj;
                    const activeLevel = checkedObj ? checkedObj.level : 'high';

                    return (
                      <div 
                        key={dim.id}
                        className={`p-3 rounded-2xl border transition-all flex flex-col gap-2.5 relative ${
                          isChecked 
                            ? 'bg-sky-50/40 border-sky-300 shadow-2xs' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <label className="flex items-center gap-2.5 cursor-pointer flex-grow select-none">
                            <input 
                              type="checkbox" 
                              checked={isChecked}
                              onChange={(e) => handleToggleDimension(dim.id, e.target.checked)}
                              className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4 transition-all"
                            />
                            <span className={`text-xs font-bold leading-tight ${isChecked ? 'text-slate-900' : 'text-slate-600'}`}>
                              {dim.name}
                            </span>
                          </label>
                          <button 
                            type="button"
                            onClick={(e) => handleDeleteCustomDimension(dim.id, e)} 
                            className="text-slate-400 hover:text-red-500 p-1 rounded transition-colors ml-2"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {isChecked && (
                          <div className="grid grid-cols-3 gap-1 px-1 py-1 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] font-bold">
                            {(['high', 'mid', 'low'] as const).map(lvl => {
                              const isLvlActive = activeLevel === lvl;
                              const labelText = dim.labels[lvl];
                              return (
                                <button
                                  key={lvl}
                                  type="button"
                                  onClick={() => handleChangeDimensionLevel(dim.id, lvl)}
                                  className={`py-1.5 rounded-full text-center transition-all truncate px-2 flex items-center justify-center text-[9px] ${
                                    isLvlActive 
                                      ? lvl === 'high' 
                                        ? 'bg-emerald-600 text-white shadow-xs' 
                                        : lvl === 'mid' 
                                          ? 'bg-amber-500 text-white shadow-xs' 
                                          : 'bg-rose-500 text-white shadow-xs'
                                      : 'text-slate-500 hover:bg-slate-200'
                                  }`}
                                >
                                  {labelText}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Category 3: Universal Behavior Indicators */}
              <div className="text-xs font-black text-slate-400 uppercase tracking-wider border-l-4 border-emerald-500 pl-2 pt-2">
                🧩 班級常規與學習態度指標
              </div>

              {GENERAL_DIMENSIONS.map(dim => {
                const checkedObj = activeSubjectCheckedList.find(item => item.id === dim.id);
                const isChecked = !!checkedObj;
                const activeLevel = checkedObj ? checkedObj.level : 'high';

                return (
                  <div 
                    key={dim.id}
                    className={`p-3 rounded-2xl border transition-all flex flex-col gap-2.5 ${
                      isChecked 
                        ? 'bg-sky-50/40 border-sky-300 shadow-2xs' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <label className="flex items-center gap-2.5 cursor-pointer flex-grow select-none">
                        <input 
                          type="checkbox" 
                          checked={isChecked}
                          onChange={(e) => handleToggleDimension(dim.id, e.target.checked)}
                          className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4 transition-all"
                        />
                        <span className={`text-xs font-bold leading-tight ${isChecked ? 'text-slate-900' : 'text-slate-600'}`}>
                          {dim.name}
                        </span>
                      </label>
                    </div>

                    {isChecked && (
                      <div className="grid grid-cols-3 gap-1 px-1 py-1 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] font-bold">
                        {(['high', 'mid', 'low'] as const).map(lvl => {
                          const isLvlActive = activeLevel === lvl;
                          const labelText = dim.labels[lvl];
                          return (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleChangeDimensionLevel(dim.id, lvl)}
                              className={`py-1.5 rounded-full text-center transition-all truncate px-2 flex items-center justify-center text-[9px] ${
                                isLvlActive 
                                  ? lvl === 'high' 
                                    ? 'bg-emerald-600 text-white shadow-xs' 
                                    : lvl === 'mid' 
                                      ? 'bg-amber-500 text-white shadow-xs' 
                                      : 'bg-rose-500 text-white shadow-xs'
                                  : 'text-slate-500 hover:bg-slate-200'
                              }`}
                            >
                              {labelText}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Custom Dimension Creator */}
            <div className="border-t border-slate-100 pt-3.5 space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">➕ 自行輸入個別表現指標</label>
                <button 
                  type="button"
                  onClick={() => setShowAdvanceCustom(!showAdvanceCustom)}
                  className="text-[10px] text-sky-600 hover:text-sky-700 font-bold flex items-center gap-0.5"
                >
                  進階評語設定 {showAdvanceCustom ? '▲' : '▼'}
                </button>
              </div>

              <form onSubmit={handleAddCustomDimension} className="space-y-2">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={newCustomTitle}
                    onChange={(e) => setNewCustomTitle(e.target.value)}
                    placeholder="例：🧹 每日掃除工作 或 🗣️ 課堂發言不舉手"
                    className="flex-grow text-xs bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-3 py-2 font-semibold outline-none"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm shrink-0"
                  >
                    <Plus className="w-3.5 h-3.5" /> 新增
                  </button>
                </div>

                {showAdvanceCustom && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2 animate-fade-in text-[11px]">
                    <span className="text-[10px] text-slate-500 font-bold block">
                      💡 進階設定：您可以分別寫入三個程度的對應句型（不填寫則由系統智能造句）
                    </span>
                    <div>
                      <label className="block text-[9.5px] font-bold text-slate-500 mb-0.5">🟢 良好 (例：掃除工作極端認真)</label>
                      <input 
                        type="text" 
                        value={customH}
                        onChange={(e) => setCustomH(e.target.value)}
                        className="w-full text-[11px] bg-white border border-slate-200 rounded-lg px-2 py-1 outline-none focus:border-sky-500" 
                        placeholder="自動造句..."
                      />
                    </div>
                    <div>
                      <label className="block text-[9.5px] font-bold text-slate-500 mb-0.5">🟡 尚可 (例：能遵守大體掃除常規工作)</label>
                      <input 
                        type="text" 
                        value={customM}
                        onChange={(e) => setCustomM(e.target.value)}
                        className="w-full text-[11px] bg-white border border-slate-200 rounded-lg px-2 py-1 outline-none focus:border-sky-500" 
                        placeholder="自動造句..."
                      />
                    </div>
                    <div>
                      <label className="block text-[9.5px] font-bold text-slate-500 mb-0.5">🔴 待加強 (例：掃除常逃跑需師長提醒)</label>
                      <input 
                        type="text" 
                        value={customL}
                        onChange={(e) => setCustomL(e.target.value)}
                        className="w-full text-[11px] bg-white border border-slate-200 rounded-lg px-2 py-1 outline-none focus:border-sky-500" 
                        placeholder="自動造句..."
                      />
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Right Column: Generated Comments Displays */}
        <section className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 flex flex-col h-[calc(100vh-130px)] min-h-[600px]">
            
            {/* Control Panel Title & Shuffle */}
            <div className="flex flex-col gap-3 border-b border-slate-100 pb-3 mb-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                  <Wand2 className="w-4 h-4 text-sky-600 shrink-0" />
                  3. 智慧段落評語生成面板
                </span>
                
                <button 
                  onClick={handleShuffleTemplates}
                  className="py-1.5 px-3 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-xl text-[11px] font-bold flex items-center gap-1.5 shadow-2xs transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                  重新隨機生成
                </button>
              </div>

              {/* Mode Toggler: Archetypes vs Styles */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl border border-slate-200/60 text-xs font-bold text-center">
                <button 
                  onClick={() => {
                    setGeneratorMode('archetypes');
                    setEditedTexts({});
                  }}
                  className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    generatorMode === 'archetypes' 
                      ? 'bg-sky-600 text-white shadow-xs font-black' 
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  🎓 學生典型剖析 (10大典型)
                </button>
                <button 
                  onClick={() => {
                    setGeneratorMode('styles');
                    setEditedTexts({});
                  }}
                  className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    generatorMode === 'styles' 
                      ? 'bg-sky-600 text-white shadow-xs font-black' 
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                  }`}
                >
                  <Handshake className="w-4 h-4" />
                  🤝 親師引導風格 (10大引導)
                </button>
              </div>

              {/* Dynamic Length Controls Panel */}
              <div className="flex items-center justify-between bg-sky-50/70 border border-sky-100 p-2.5 rounded-xl text-xs mt-1 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div>
                    <p className="font-extrabold text-sky-950 flex items-center gap-1">
                      ✨ 智慧評語縮減（70-90 字黃金長度控管）
                    </p>
                    <p className="text-[10px] text-sky-700 italic">勾選 2 個以上向度時，自動精煉學術詞彙，消除贅字成效顯著</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsConciseMode(!isConciseMode);
                    setEditedTexts({});
                  }}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isConciseMode ? 'bg-sky-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                      isConciseMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Generated results cards render list */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-1">
              {activeSubjectCheckedList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <CheckSquare className="w-10 h-10 mb-3 text-slate-300 animate-bounce" />
                  <p className="text-xs font-bold">請先在左側欄位，勾選「評估向度」並評定程度</p>
                  <p className="text-[10px] text-slate-400 mt-1.5 max-w-sm">
                    當您勾選向度（如：數學直式計算、課堂專注態度）後，系統將自動合成 10 款完美控制在 70~90 字的教育格式評語。
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.keys(activeDataset).map((key, index) => {
                    const styleConfig = activeDataset[key];
                    const generatedBase = generatedCommentsMap[key] || "";
                    const activeVal = editedTexts[key] !== undefined ? editedTexts[key] : generatedBase;
                    const textLen = activeVal.length;

                    // Compute text styling based on constraints
                    const isOptimalCount = textLen >= 70 && textLen <= 90;
                    const isExcessCount = textLen > 90;

                    return (
                      <div 
                        key={key} 
                        className={`p-4 rounded-2xl border ${styleConfig.theme} transition-all flex flex-col gap-2.5 shadow-2xs hover:shadow-sm`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                              風格模型 {index + 1}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${styleConfig.badge}`}>
                                {styleConfig.name}
                              </span>
                              <span className="text-[10px] text-slate-500 font-medium">
                                {styleConfig.desc}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className={`text-[10px] font-bold ${
                              isOptimalCount 
                                ? 'text-emerald-600 font-black' 
                                : isExcessCount 
                                  ? 'text-rose-500 font-black animate-pulse' 
                                  : 'text-slate-400'
                            }`}>
                              {textLen}/90 字
                              {isOptimalCount && ' (黃金字數 ✨)'}
                              {isExcessCount && ' (字數稍長 ⚠️)'}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Textarea allows direct teacher modifications */}
                        <textarea
                          value={activeVal}
                          onChange={(e) => {
                            setEditedTexts(prev => ({ ...prev, [key]: e.target.value }));
                          }}
                          rows={3}
                          className="w-full bg-white/80 focus:bg-white border border-slate-200/50 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl p-3 text-xs text-slate-700 leading-relaxed font-semibold resize-y shadow-inner outline-none transition-all"
                          placeholder="合成評語載入中..."
                        />

                        {/* Copy button */}
                        <button
                          type="button"
                          onClick={() => handleCopyToClipboard(key, activeVal)}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                            copiedStates[key]
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-black'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          {copiedStates[key] ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                              評語已複製到剪貼簿！
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 shrink-0" />
                              一鍵複製本風格評語
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* Active roster progress marker footer */}
            {activeStudent && (
              <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-bold shrink-0 mt-3 bg-transparent leading-none">
                <span className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${activeStudent.completed ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                  當前編輯成員：{activeStudent.name} (學籍註記：{activeStudent.completed ? '已完成分科' : '進行中'})
                </span>
                <button 
                  onClick={() => syncStudentToRoster({ completed: !activeStudent.completed })}
                  className="text-sky-600 hover:text-sky-700 active:scale-95"
                >
                  切換為「{activeStudent.completed ? '未完成' : '已完成'}」狀態
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
