export interface RadicalZone {
  key: string;
  name: string; // e.g., "Wang Pang"
  description: string; // e.g., "王旁青头戋（兼）五一"
  radicals: string[]; // Characters/Symbols representing the radicals
}

export const radicalZones: RadicalZone[] = [
  // Region 1: Horizontal (G, F, D, S, A)
  { key: 'G', name: '11', description: '王旁青头戋（兼）五一', radicals: ['王', '', '戋', '五', '一'] },
  { key: 'F', name: '12', description: '土士二干十寸雨', radicals: ['土', '士', '二', '干', '十', '寸', '雨'] },
  { key: 'D', name: '13', description: '大犬三（羊）古石厂', radicals: ['大', '犬', '三', '古', '石', '厂', ''] },
  { key: 'S', name: '14', description: '木丁西', radicals: ['木', '丁', '西'] },
  { key: 'A', name: '15', description: '工戈草头右框七', radicals: ['工', '戈', '艹', '', '七'] },

  // Region 2: Vertical (H, J, K, L, M)
  { key: 'H', name: '21', description: '目具上止卜虎皮', radicals: ['目', '上', '止', '卜', '', '皮'] },
  { key: 'J', name: '22', description: '日早两竖与虫依', radicals: ['日', '早', '刂', '虫'] },
  { key: 'K', name: '23', description: '口与川，字根稀', radicals: ['口', '川'] },
  { key: 'L', name: '24', description: '田甲方框四车力', radicals: ['田', '甲', '囗', '四', '车', '力'] },
  { key: 'M', name: '25', description: '山由贝，下框几', radicals: ['山', '由', '贝', '冂', '几'] },

  // Region 3: Left-Falling (T, R, E, W, Q)
  { key: 'T', name: '31', description: '禾竹一撇双人立，反文条头共三一', radicals: ['禾', '', '丿', '彳', '夂'] },
  { key: 'R', name: '32', description: '白手看头三二斤', radicals: ['白', '手', '', '斤'] },
  { key: 'E', name: '33', description: '月彡（衫）乃用家衣底', radicals: ['月', '彡', '乃', '用', '豕', '衣'] },
  { key: 'W', name: '34', description: '人和八，三四里', radicals: ['人', '八'] },
  { key: 'Q', name: '35', description: '金勺缺点无尾鱼，犬旁留叉儿夕氏，氏无七（妻）', radicals: ['金', '', '儿', '夕', '氏'] },

  // Region 4: Dot (Y, U, I, O, P)
  { key: 'Y', name: '41', description: '言文方广在四一，高头一捺谁人去', radicals: ['言', '文', '方', '广', '亠', '乀'] },
  { key: 'U', name: '42', description: '立辛两点六门疒', radicals: ['立', '辛', '冫', '六', '门', '疒'] },
  { key: 'I', name: '43', description: '水旁兴头小倒立', radicals: ['水', '氵', '小', ''] },
  { key: 'O', name: '44', description: '火业头，四点米', radicals: ['火', '业', '灬', '米'] },
  { key: 'P', name: '45', description: '之字军盖道建底，摘礻（示）衤（衣）', radicals: ['之', '冖', '廴', '礻', '衤'] },

  // Region 5: Right-Falling (N, B, V, C, X)
  { key: 'N', name: '51', description: '已半巳满不出己，左框折尸心和羽', radicals: ['已', '巳', '己', '匚', '尸', '心', '羽'] },
  { key: 'B', name: '52', description: '子耳了也框向上', radicals: ['子', '耳', '了', '也', '凵'] },
  { key: 'V', name: '53', description: '女刀九臼山朝西', radicals: ['女', '刀', '九', '臼', '彐'] },
  { key: 'C', name: '54', description: '又巴马，丢矢矣', radicals: ['又', '巴', '马', '矢'] },
  { key: 'X', name: '55', description: '慈母无心弓和匕，幼无力', radicals: ['幺', '弓', '匕'] },
];
