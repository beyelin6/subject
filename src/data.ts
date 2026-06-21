import { SubjectKey, Dimension } from './types';
import { GRADE_SUBJECTS, GENERAL_DIMENSIONS, GENERAL_BEHAVIORS_FRAGMENT } from './data/shared';
import { CHINESE_DIMENSIONS, CHINESE_FRAGMENTS } from './data/chinese';
import { MATH_DIMENSIONS, MATH_FRAGMENTS } from './data/math';
import { SOCIAL_DIMENSIONS, SOCIAL_FRAGMENTS } from './data/social';
import { ENGLISH_DIMENSIONS, ENGLISH_FRAGMENTS } from './data/english';
import { SCIENCE_DIMENSIONS, SCIENCE_FRAGMENTS } from './data/science';
import { LIFE_DIMENSIONS, LIFE_FRAGMENTS } from './data/life';
import { HEALTH_DIMENSIONS, HEALTH_FRAGMENTS } from './data/health';
import { PE_DIMENSIONS, PE_FRAGMENTS } from './data/pe';
import { FINEART_DIMENSIONS, FINEART_FRAGMENTS } from './data/fineart';
import { MUSIC_DIMENSIONS, MUSIC_FRAGMENTS } from './data/music';
import { LOCAL_DIMENSIONS, LOCAL_FRAGMENTS } from './data/local';
import { GENERAL_SUBJECT_DIMENSIONS, GENERAL_SUBJECT_FRAGMENTS } from './data/general';
import { TECH_DIMENSIONS, TECH_FRAGMENTS } from './data/tech';

export { GRADE_SUBJECTS, GENERAL_DIMENSIONS };

export const SUBJECT_DIMENSIONS: Record<SubjectKey, Record<string, Dimension[]>> = {
  chinese: CHINESE_DIMENSIONS,
  math: MATH_DIMENSIONS,
  social: SOCIAL_DIMENSIONS,
  english: ENGLISH_DIMENSIONS,
  science: SCIENCE_DIMENSIONS,
  life: LIFE_DIMENSIONS,
  health: HEALTH_DIMENSIONS,
  pe: PE_DIMENSIONS,
  fineart: FINEART_DIMENSIONS,
  music: MUSIC_DIMENSIONS,
  local: LOCAL_DIMENSIONS,
  general: GENERAL_SUBJECT_DIMENSIONS,
  tech: TECH_DIMENSIONS
};

export const FRAGMENTS: Record<string, any> = {
  general_behaviors: GENERAL_BEHAVIORS_FRAGMENT,
  chinese: CHINESE_FRAGMENTS,
  math: MATH_FRAGMENTS,
  social: SOCIAL_FRAGMENTS,
  english: ENGLISH_FRAGMENTS,
  science: SCIENCE_FRAGMENTS,
  life: LIFE_FRAGMENTS,
  health: HEALTH_FRAGMENTS,
  pe: PE_FRAGMENTS,
  fineart: FINEART_FRAGMENTS,
  music: MUSIC_FRAGMENTS,
  local: LOCAL_FRAGMENTS,
  general: GENERAL_SUBJECT_FRAGMENTS,
  tech: TECH_FRAGMENTS
};

