'use client';

import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';
import { cn } from '@/utils/cn';

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
      footer={
        <div className="flex items-center justify-end gap-1">
          <span>Search powered by</span>
          <a 
            href="https://oramasearch.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-fd-primary transition-colors"
          >
            Orama
          </a>
        </div>
      }
    />
  );
}