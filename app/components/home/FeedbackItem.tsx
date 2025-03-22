import Image from 'next/image';

interface FeedbackItemProps {
  quote: string;
  avatarUrl: string;
  name: string;
  role: string;
  githubUrl?: string;
}

export function FeedbackItem({
  quote,
  avatarUrl,
  name,
  role,
  githubUrl
}: FeedbackItemProps) {
  return (
    <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
      <p className="text-base font-medium mb-6">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={avatarUrl}
          alt={`${name}'s avatar`}
          width="48"
          height="48"
          className="size-12 rounded-full"
        />
        <div className="text-left">
          {githubUrl ? (
            <a
              href={githubUrl}
              rel="noreferrer noopener"
              className="text-base font-medium hover:underline"
            >
              {name}
            </a>
          ) : (
            <span className="text-base font-medium">{name}</span>
          )}
          <p className="text-sm text-fd-muted-foreground">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
