"use client";

import { useState } from 'react';
import copy from 'copy-to-clipboard';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入 Font Awesome

export function EnvVariableConfig({ variableNames, format }: { variableNames: { key: string; name: string;defaultVal?: string }[]; format?: "yaml" | "env" }) {
  const [values, setValues] = useState(variableNames.map((name) => name.defaultVal || ''));

  const handleCopy = () => {
    if (format === 'yaml') {
      const yamlContent = variableNames.map((name, index) => `- ${name.key}=${values[index]}`).join('\n');
      copy(yamlContent);
    } else {
      const envContent = variableNames.map((name, index) => `${name.key}=${values[index]}`).join('\n');
      copy(envContent);
    }
    iziToast.success({
      title: '复制成功',
      message: '请继续下一步操作',
      position: 'topRight',
      backgroundColor: '#4CAF50', // 背景颜色
      color: '#FFFFFF', // 字体颜色
      timeout: 3000, // 自动关闭时间
      icon: 'fas fa-check', // 图标
      iconColor: '#FFFFFF' // 图标颜色
    });
  };

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div className="p-4 mt-2 rounded-lg border dark:bg-gray-900 dark:border-gray-800">
      {variableNames.map((name, index) => (
        <div key={`${name.key}`} className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            className="border rounded-lg px-2 py-2 w-1/2 bg-transparent focus:outline-none focus:border-black hover:border-white-400 transition duration-300 font-[400] font-sans text-sm cursor-not-allowed dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800"
            value={name.name || name.key}
            data-tip={name.key}
            onMouseOver={(e: any) => {
              e.target.style.color = 'transparent';
              setTimeout(() => {
                e.target.style.color = 'inherit';
                e.target.value = e.target.dataset.tip;
              }, 300);
            }}
            onMouseLeave={(e: any) => {
              e.target.style.color = 'transparent';
              setTimeout(() => {
                e.target.style.color = 'inherit';
                e.target.value = name.name || name.key;
              }, 300);
            }}
            disabled
          />
          <input
            type="text"
            className="border rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:border-black hover:border-gray-400 transition duration-300 font-[400] font-sans text-sm dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800" 
            style={{ outline: "none", boxShadow: "none" }}
            placeholder={`Enter value...`}
            value={values[index]}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className="flex items-center justify-between mb-4">
        <h2 className="sr-only">环境变量配置</h2>
        <button
          type="button"
          className="border bg-black w-full text-white px-4 py-2 rounded-lg text-sm transform transition-all duration-300 focus:outline-none hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800"
          onClick={handleCopy}
        >
          复制
        </button>
      </div>
    </div>
  );
}
