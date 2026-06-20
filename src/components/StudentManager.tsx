import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, Trash2, Search, CheckCircle2, UserCheck, 
  Sparkles, FileSpreadsheet, Upload, Download, RefreshCw 
} from 'lucide-react';
import { Student } from '../types';

interface StudentManagerProps {
  activeStudent: Student | null;
  onSelectStudent: (student: Student) => void;
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  currentGrade: string;
  onGradeChange: (grade: string) => void;
}

export default function StudentManager({
  activeStudent,
  onSelectStudent,
  students,
  setStudents,
  currentGrade,
  onGradeChange
}: StudentManagerProps) {
  const [search, setSearch] = useState('');
  const [fastNames, setFastNames] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [newSingleName, setNewSingleName] = useState('');
  const [newSingleGender, setNewSingleGender] = useState<'he' | 'she' | 'none'>('he');

  // Load students from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('school_students_roster_v3');
    if (saved) {
      try {
        setStudents(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading student roster", e);
      }
    }
  }, [setStudents]);

  // Persist roster
  const saveRoster = (newRoster: Student[]) => {
    setStudents(newRoster);
    localStorage.setItem('school_students_roster_v3', JSON.stringify(newRoster));
  };

  const handleAddSingle = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newSingleName.trim();
    if (!name) return;

    const newStudent: Student = {
      id: 'student_' + Date.now(),
      name,
      pronoun: newSingleGender,
      grade: currentGrade,
      completed: false,
      checkedDimensions: {}
    };

    const updated = [...students, newStudent];
    saveRoster(updated);
    onSelectStudent(newStudent);
    setNewSingleName('');
  };

  const handleImportBatch = () => {
    const raw = fastNames.trim();
    if (!raw) return;

    // Split on commas, whitespace, or newlines
    const names = raw
      .split(/[\n,，\s、]+/)
      .map(n => n.trim())
      .filter(n => n.length > 0);

    const newStudents: Student[] = names.map((name, idx) => ({
      id: `student_${Date.now()}_${idx}`,
      name,
      pronoun: 'he', // default to he
      grade: currentGrade,
      completed: false,
      checkedDimensions: {}
    }));

    const updated = [...students, ...newStudents];
    saveRoster(updated);
    setFastNames('');
    setShowImport(false);

    if (newStudents.length > 0) {
      onSelectStudent(newStudents[0]);
    }
  };

  const handleDeleteStudent = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('確定要從點名名冊中移除該學生嗎？')) return;
    const updated = students.filter(s => s.id !== id);
    saveRoster(updated);
    if (activeStudent && activeStudent.id === id) {
      if (updated.length > 0) {
        onSelectStudent(updated[0]);
      } else {
        // Find default/empty placeholder state handled by App
      }
    }
  };

  const toggleCompleted = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = students.map(s => {
      if (s.id === id) {
        return { ...s, completed: !s.completed };
      }
      return s;
    });
    saveRoster(updated);
    // If updating active student, let parent state update
    if (activeStudent && activeStudent.id === id) {
      const found = updated.find(s => s.id === id);
      if (found) onSelectStudent(found);
    }
  };

  const handleClearRoster = () => {
    if (!confirm('警告：這將會清空整班的名冊與所有暫存評定，是否確定清空？')) return;
    saveRoster([]);
  };

  // Filter roster
  const filtered = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = students.filter(s => s.completed).length;
  const progressPercent = students.length > 0 ? Math.round((completedCount / students.length) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Users className="w-4 h-4 text-sky-600 shrink-0" />
          班級學生名冊管理
        </h3>
        <span className="text-[10px] text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded font-bold">
          {completedCount} / {students.length} 人已完成 ({progressPercent}%)
        </span>
      </div>

      {/* Progress Bar */}
      {students.length > 0 && (
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      {/* Add Single / Batch Toggle Panel */}
      <div className="flex gap-2">
        <button 
          onClick={() => setShowImport(!showImport)}
          className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
            showImport 
              ? 'bg-slate-100 border-slate-300 text-slate-700' 
              : 'bg-indigo-50 border-indigo-100 text-indigo-700 hover:bg-indigo-100'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          {showImport ? '切換單人新增' : '⚡ 批量匯入名單'}
        </button>
        {students.length > 0 && (
          <button 
            onClick={handleClearRoster}
            className="py-2 px-3 border border-red-100 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition-all flex items-center justify-center"
            title="清空整班名冊"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {showImport ? (
        <div className="bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl space-y-3 animation-fade-in">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1 leading-snug">
              請輸入學生姓名（多個名字可用逗號、頓號、空格或換行隔開）：
            </label>
            <textarea
              value={fastNames}
              onChange={(e) => setFastNames(e.target.value)}
              placeholder="例如：林小明, 陳芳芳, 張大同, 李美美"
              rows={3}
              className="w-full text-xs bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg p-2.5 font-medium outline-none"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button 
              onClick={() => setShowImport(false)}
              className="px-2.5 py-1.5 text-slate-500 hover:text-slate-800 text-[11px] font-bold"
            >
              取消
            </button>
            <button 
              onClick={handleImportBatch}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold rounded-lg flex items-center gap-1 shadow-xs"
            >
              <Sparkles className="w-3 h-3" />
              確認批量匯入
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleAddSingle} className="flex gap-1.5 items-end">
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-slate-500 mb-1">新增學生成員</label>
            <input
              type="text"
              value={newSingleName}
              onChange={(e) => setNewSingleName(e.target.value)}
              placeholder="個別學生成員姓名..."
              className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-2.5 py-2 font-medium outline-none"
            />
          </div>
          <div className="w-20">
            <label className="block text-[10px] font-bold text-slate-500 mb-1">代稱</label>
            <select
              value={newSingleGender}
              onChange={(e) => setNewSingleGender(e.target.value as any)}
              className="w-full text-xs bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-2 py-2 font-medium outline-none cursor-pointer"
            >
              <option value="he">他</option>
              <option value="she">她</option>
              <option value="none">該生</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm shrink-0 h-[34px]"
          >
            <UserPlus className="w-3.5 h-3.5" />
            新增
          </button>
        </form>
      )}

      {/* Search Bar / List scroll */}
      {students.length > 0 && (
        <div className="space-y-2 pt-1">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜尋學生名冊..."
              className="w-full text-xs pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl outline-none"
            />
          </div>

          <div className="max-h-[170px] overflow-y-auto border border-slate-100 rounded-xl divide-y divide-slate-100 pr-1">
            {filtered.map((student) => {
              const isActive = activeStudent && activeStudent.id === student.id;
              return (
                <div
                  key={student.id}
                  onClick={() => onSelectStudent(student)}
                  className={`p-2 flex items-center justify-between text-xs cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-sky-50/70 border-l-4 border-sky-600 pl-1.5' 
                      : 'hover:bg-slate-50 pl-2'
                  }`}
                >
                  <div className="flex items-center gap-2 max-w-[70%]">
                    <button 
                      onClick={(e) => toggleCompleted(student.id, e)}
                      className={`shrink-0 rounded transition-colors ${
                        student.completed ? 'text-emerald-500' : 'text-slate-300 hover:text-slate-400'
                      }`}
                      title={student.completed ? "標記未完成" : "標記為已寫完"}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${student.completed ? 'fill-emerald-50' : ''}`} />
                    </button>
                    <span className={`font-bold truncate ${student.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {student.name}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-slate-100 text-slate-500 rounded font-bold">
                      {student.pronoun === 'he' ? '👦' : student.pronoun === 'she' ? '👧' : '👤'}
                    </span>
                    {student.grade !== currentGrade && (
                      <span className="text-[8px] px-1 bg-amber-50 text-amber-600 border border-amber-100 rounded" title="此學生登記年級不同">
                        {student.grade}年
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                        <UserCheck className="w-2.5 h-2.5" />
                        編輯中
                      </span>
                    )}
                    <button
                      onClick={(e) => handleDeleteStudent(student.id, e)}
                      className="text-slate-300 hover:text-red-500 p-1 rounded hover:bg-slate-100 transition-colors"
                      title="刪除"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="py-6 text-center text-slate-400 text-[11px] font-medium">
                沒有找到符合的受評學生
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
