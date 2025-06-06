"use client"

import { useState } from 'react'
import { useCopy } from '@/hooks/use-copy'

export const Configurator = ({ args, template, env }: { 
  args: string[], 
  template: string, 
  env: Record<string, { type: string; tip: string; default: any }>
}) => {
  const envVariables = Object.entries(env).map(([key, value]) => ({
    key,
    name: `${key} (${value.tip})`,
    defaultVal: value.default?.toString()
  }));

  const [values, setValues] = useState(envVariables.map(v => v.defaultVal || ''));
  const { copyToClipboard } = useCopy();

  const handleCopy = () => {
    // 处理环境变量
    const envString = envVariables
      .map((variable, index) => `${variable.key}=${values[index]}`)
      .join('\n');
    
    // 处理参数
    const argsString = args.join(' ');
    
    // 将模板中的变量替换为实际值
    let result = template;
    envVariables.forEach((variable, index) => {
      result = result.replace(
        new RegExp(`process.env.${variable.key}`, 'g'),
        values[index]
      );
    });

    copyToClipboard(result, '配置已复制到剪贴板');
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
      <div className="space-y-4">
        {envVariables.map((variable, index) => (
          <div key={variable.key} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-sm sm:w-1/3">{variable.name}</span>
            <input
              type={env[variable.key].type === 'password' ? 'password' : 'text'}
              className="w-full sm:flex-1 border rounded px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700"
              value={values[index]}
              onChange={(e) => {
                const newValues = [...values];
                newValues[index] = e.target.value;
                setValues(newValues);
              }}
              placeholder={variable.defaultVal}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="mt-4 w-full bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
      >
        复制配置
      </button>
    </div>
  );
};