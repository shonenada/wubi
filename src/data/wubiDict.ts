// A small subset of Wubi 86 dictionary for demonstration
// Format: Character -> Code (Standard/Shortest efficient code)

export const wubiDict: Record<string, string> = {
  // Level 1 (一级简码)
  '一': 'g', '地': 'f', '在': 'd', '要': 's', '工': 'a',
  '上': 'h', '是': 'j', '中': 'k', '国': 'l', '同': 'm',
  '的': 't', '口': 'r', '有': 'e', '人': 'w', '我': 'q',
  '主': 'y', '产': 'u', '不': 'i', '为': 'o', '这': 'p',
  '民': 'n', '了': 'b', '发': 'v', '以': 'c', '经': 'x',

  // Some common Level 2
  '化': 'wx', '作': 'wth', '大': 'dd', '天': 'gd',
  '理': 'gy', '和': 't', '平': 'gu', '生': 'tg',
  '活': 'it', '学': 'ip', '习': 'n', '五': 'gg', '笔': 'tt',
  '输': 'lg', '入': 'ty', '法': 'if', '练': 'xg', '好': 'vb',
  '多': 'qq', '少': 'it', '难': 'cw', '易': 'j', '快': 'nn',
  '慢': 'nj', '高': 'ym', '低': 'qa', '前': 'ue', '后': 'rg',
  '左': 'da', '右': 'dk', '下': 'gh',
  
  // Full codes or 3/4 codes for some chars
  '键': 'qvfp', '盘': 'tucl', '字': 'pbbf', '根': 'svey',
  '表': 'geu', '助': 'egl', '帮': 'dtbh', '你': 'wq',
  '他': 'wb', '她': 'vb', '它': 'pb', '们': 'w', 
};

// Helper to check if input matches code
export function checkWubi(char: string, input: string): boolean {
  const code = wubiDict[char];
  if (!code) return false;
  // Allow prefix match if we were doing a real IME, but here we probably want exact match
  // Or maybe valid prefix?
  // For practice, usually we want the user to type the full code or the efficient code.
  return code === input;
}

export function getWubiCode(char: string): string | undefined {
  return wubiDict[char];
}

export function getRandomCharacters(count: number = 10): string[] {
  const chars = Object.keys(wubiDict);
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result.push(chars[randomIndex]);
  }
  return result;
}
