import bcrypt from 'bcryptjs';

/**
 * 对密码进行哈希加密
 * @param password 明文密码
 * @returns 哈希后的密码字符串
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

/**
 * 比较密码是否匹配
 * @param password 明文密码
 * @param hash 哈希密码
 * @returns 是否匹配
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
