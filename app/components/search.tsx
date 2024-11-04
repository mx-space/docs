'use client';

import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';

const client = new OramaClient({
  endpoint: 'https://cloud.orama.run/v1/indexes/mxspace-no50lj',
  api_key: 'HHIpRwosmxFfAs7l2gsJv5m5A3ew2PRB',
});

export default function CustomSearchDialog(props: SharedProps) {
  return (
    <SearchDialog 
      {...props} 
      client={client}
      showOrama
      renderResult={(result) => (
        <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <div className="font-medium text-lg mb-1">{result.title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{result.description}</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            {result.section && (
              <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {result.section}
              </span>
            )}
          </div>
        </div>
      )}
      footer={
        <div className="flex items-center justify-end gap-1 text-sm text-gray-500">
          <span>搜索由</span>
          <a 
            href="https://oramasearch.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-fd-primary transition-colors"
          >
            Orama
          </a>
          <span>提供支持</span>
        </div>
      }
    />
  );
}