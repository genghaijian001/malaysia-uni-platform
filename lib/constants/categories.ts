export const FIELD_CATEGORIES = [
  { value: '工程与技术', label: '工程与技术', icon: '⚙️', color: 'blue' },
  { value: '商科与管理', label: '商科与管理', icon: '💼', color: 'green' },
  { value: '计算机与IT', label: '计算机与IT', icon: '💻', color: 'purple' },
  { value: '医学与健康', label: '医学与健康', icon: '🏥', color: 'red' },
  { value: '理学与数学', label: '理学与数学', icon: '🔬', color: 'cyan' },
  { value: '法律', label: '法律', icon: '⚖️', color: 'yellow' },
  { value: '建筑与设计', label: '建筑与设计', icon: '🏗️', color: 'orange' },
  { value: '教育', label: '教育', icon: '📚', color: 'teal' },
  { value: '艺术与传媒', label: '艺术与传媒', icon: '🎨', color: 'pink' },
  { value: '农业与食品', label: '农业与食品', icon: '🌱', color: 'lime' },
  { value: '人文与社科', label: '人文与社科', icon: '🌍', color: 'indigo' },
  { value: '酒店与旅游', label: '酒店与旅游', icon: '🏨', color: 'amber' },
] as const;

export const DEGREE_LEVELS = [
  { value: 'bachelor', label: '本科', short: '本' },
  { value: 'master', label: '硕士', short: '硕' },
  { value: 'phd', label: '博士', short: '博' },
] as const;

export const TUITION_RANGES = [
  { label: '5万以下 MYR/年', max: 50000 },
  { label: '5-10万 MYR/年', min: 50000, max: 100000 },
  { label: '10-20万 MYR/年', min: 100000, max: 200000 },
  { label: '20万以上 MYR/年', min: 200000 },
] as const;
