import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}){
  return (
    <div className="border-l border-t border-b px-6 py-12 group text-left">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
      <Icon {...{ className: "size-4 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:text-primary" }} />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}
