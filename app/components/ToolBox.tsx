'use client'

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { OramaChatBox } from '@orama/react-components';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/app/components/ui/button';

export default function ToolBox() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {showChat && (
        <OramaChatBox
          index={{
            endpoint: 'https://cloud.orama.run/v1/indexes/mxspace-no50lj',
            api_key: 'HHIpRwosmxFfAs7l2gsJv5m5A3ew2PRB'
          }}
          sourceBaseUrl="https://mx-space.js.org"
          sourcesMap={{
            title: 'title',
            description: 'description',
            path: 'url'
          }}
          suggestions={[
            '如何部署 Mix Space?',
            '如何更新 Mix Space?',
            '如何配置主题?'
          ]}
          className="mb-2 w-[350px] !rounded-xl overflow-hidden"
        />
      )}

      <button
        onClick={() => setShowChat(!showChat)}
        className={cn(
          buttonVariants({ size: 'lg' }),
          'rounded-full shadow-lg p-4'
        )}
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  );
} 