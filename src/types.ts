export type SubjectKey = 
  | 'chinese' 
  | 'math' 
  | 'social' 
  | 'english' 
  | 'science' 
  | 'life' 
  | 'health' 
  | 'pe' 
  | 'fineart' 
  | 'music' 
  | 'local' 
  | 'general' 
  | 'tech';

export interface SubjectInfo {
  name: string;
  icon: string;
}

export interface Dimension {
  id: string;
  name: string;
  labels: {
    high: string;
    mid: string;
    low: string;
  };
}

export interface CheckedDimension {
  id: string;
  level: 'high' | 'mid' | 'low';
}

export interface CustomDimension {
  id: string;
  name: string;
  labels: {
    high: string;
    mid: string;
    low: string;
  };
  customPhrases?: {
    high: string | null;
    mid: string | null;
    low: string | null;
  };
}

export interface Student {
  id: string;
  name: string;
  pronoun: 'he' | 'she' | 'none';
  grade: string;
  completed?: boolean;
  checkedDimensions?: Record<string, CheckedDimension[]>; // key is subjectKey
}

export interface ArchetypeOrStyle {
  name: string;
  desc: string;
  theme: string;
  badge: string;
  compile: (positives: string[], neutrals: string[], negatives: string[], subName: string) => string;
}
