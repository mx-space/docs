import { sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';
import * as path from 'path';
import * as dotenv from 'dotenv';

// 加载 .env 文件
dotenv.config();

export async function updateSearchIndexes() {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;
  const indexId = 'k2hnq39jnt7u8l41bfv0ezhd'; // 你的索引 ID
 
  if (!apiKey) {
    console.log('未找到 Orama 私钥, 跳过索引更新');
    return;
  }
 
  try {
    // 使用绝对路径
    const staticJsonPath = path.join(process.cwd(), '.next/server/app/static.json.body');
    
    try {
      await fs.access(staticJsonPath);
    } catch {
      console.error('static.json.body 文件不存在，请先运行 next build');
      process.exit(1);
    }

    const content = await fs.readFile(staticJsonPath);
    const records = JSON.parse(content.toString());
 
    const manager = new CloudManager({ api_key: apiKey });
 
    await sync(manager, {
      index: indexId,
      documents: records,
    });
 
    console.log(`搜索索引更新完成: ${records.length} 条记录`);
  } catch (error) {
    console.error('更新搜索索引时发生错误:', error);
    process.exit(1);
  }
}
 
void updateSearchIndexes(); 