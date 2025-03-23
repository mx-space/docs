"use client";

import { FaGithub } from "react-icons/fa";
import { Card, Cards } from 'fumadocs-ui/components/card';

export function ToGitHub({ repo }: { repo: string }) {
  return (
    <Cards className="gap-6">
      <Card
        className="m-2 break-words"
        style={{ maxWidth: '100%' }}
        href={`https://github.com/${repo}`}
        title={`${repo} - GitHub`}
        icon={<FaGithub />}
        external
      />
    </Cards>
  );
}
