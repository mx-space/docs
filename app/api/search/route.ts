import { sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';
 
export const dynamic = 'force-static';
 
const updateSearchIndexes = async (): Promise<void> => {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;
  const indexId = 'k2hnq39jnt7u8l41bfv0ezhd'; 
 
  if (!apiKey) {
    console.log('未找到 Orama 私钥，跳过索引更新');
    return;
  }
 
  try {
    const content = await fs.readFile('.next/server/app/static.json.body');
    const records = JSON.parse(content.toString());
 
    const manager = new CloudManager({ api_key: apiKey });
 
    await sync(manager, {
      index: indexId, 
      documents: records,
    });
 
    console.log(`搜索索引更新完成：${records.length} 条记录`);
  } catch (error) {
    console.error('更新搜索索引时发生错误：', error);
  }
}
 
void updateSearchIndexes();
 
export async function GET(request: Request) {
  // ... GET处理逻辑 ...
}

export async function POST(request: Request) {
  // ... POST处理逻辑 ...
}