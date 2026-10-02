import { useState, useCallback } from 'react';

export interface EnvVariable {
  key: string;
  name: string;
  defaultVal?: string;
}

export function EnvVariableConfig({
  variableNames,
  format = 'env',
}: {
  variableNames: EnvVariable[];
  format?: 'yaml' | 'env';
}) {
  const [values, setValues] = useState(variableNames.map((v) => v.defaultVal || ''));
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const lines = variableNames.map((v, i) =>
      format === 'yaml' ? `- ${v.key}=${values[i]}` : `${v.key}=${values[i]}`,
    );
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [variableNames, values, format]);

  return (
    <div className="not-prose my-4 rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-col gap-3">
        {variableNames.map((v, index) => (
          <div key={v.key} className="flex items-center gap-3">
            <span
              title={v.key}
              className="shrink-0 w-1/2 truncate rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 font-mono text-sm text-neutral-500 select-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {v.name || v.key}
            </span>
            <input
              type="text"
              className="w-1/2 rounded-lg border border-neutral-200 bg-transparent px-3 py-2 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 hover:border-neutral-400 focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:hover:border-neutral-500 dark:focus:border-neutral-300"
              placeholder="输入值..."
              value={values[index]}
              onChange={(e) => {
                const next = [...values];
                next[index] = e.target.value;
                setValues(next);
              }}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`mt-4 w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 ${
          copied
            ? 'bg-green-600 dark:bg-green-700'
            : 'bg-neutral-900 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300'
        }`}
        onClick={handleCopy}
      >
        {copied ? '已复制 ✓' : '复制配置'}
      </button>
    </div>
  );
}
