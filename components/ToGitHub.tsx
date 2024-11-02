import { Github } from 'lucide-react';
import React from 'react';

export const ToGitHub = ({ repo }: { repo: string }) => {
  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
    >
      <Github className="w-4 h-4" />
      <span>GitHub</span>
    </a>
  );
}; 