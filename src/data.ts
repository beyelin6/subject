import { SubjectKey, Dimension } from './types';
import { GRADE_SUBJECTS, GENERAL_DIMENSIONS, GENERAL_BEHAVIORS_FRAGMENT } from './data/shared';
import { CHINESE_DIMENSIONS, CHINESE_FRAGMENTS } from './data/chinese';
import { MATH_DIMENSIONS, MATH_FRAGMENTS } from './data/math';
import { SOCIAL_DIMENSIONS, SOCIAL_FRAGMENTS } from './data/social';
import { ENGLISH_DIMENSIONS, ENGLISH_FRAGMENTS } from './data/english';
import { SCIENCE_DIMENSIONS, SCIENCE_FRAGMENTS } from './data/science';
import { OTHERS_DIMENSIONS, OTHERS_FRAGMENTS } from './data/others';

export { GRADE_SUBJECTS, GENERAL_DIMENSIONS };

export const SUBJECT_DIMENSIONS: Record<SubjectKey, Record<string, Dimension[]>> = {
  chinese: CHINESE_DIMENSIONS,
  math: MATH_DIMENSIONS,
  social: SOCIAL_DIMENSIONS,
  english: ENGLISH_DIMENSIONS,
  science: SCIENCE_DIMENSIONS,
  life: OTHERS_DIMENSIONS.life,
  health: OTHERS_DIMENSIONS.health,
  pe: OTHERS_DIMENSIONS.pe,
  fineart: OTHERS_DIMENSIONS.fineart,
  music: OTHERS_DIMENSIONS.music,
  local: OTHERS_DIMENSIONS.local,
  general: OTHERS_DIMENSIONS.general,
  tech: OTHERS_DIMENSIONS.tech
};

export const FRAGMENTS: Record<string, any> = {
  general_behaviors: GENERAL_BEHAVIORS_FRAGMENT,
  chinese: CHINESE_FRAGMENTS,
  math: MATH_FRAGMENTS,
  social: SOCIAL_FRAGMENTS,
  english: ENGLISH_FRAGMENTS,
  science: SCIENCE_FRAGMENTS,
  life: OTHERS_FRAGMENTS.life,
  health: OTHERS_FRAGMENTS.health,
  pe: OTHERS_FRAGMENTS.pe,
  fineart: OTHERS_FRAGMENTS.fineart,
  music: OTHERS_FRAGMENTS.music,
  local: OTHERS_FRAGMENTS.local,
  general: OTHERS_FRAGMENTS.general,
  tech: OTHERS_FRAGMENTS.tech
};
