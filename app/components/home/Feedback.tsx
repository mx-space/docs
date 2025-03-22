import Image from 'next/image';
import { FeedbackItem } from './FeedbackItem';
import { feedbackItems } from './feedbackData';

export function Feedback() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 pb-16 pt-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {feedbackItems.map((item, index) => (
          <FeedbackItem
            key={index}
            quote={item.quote}
            avatarUrl={item.avatarUrl}
            name={item.name}
            role={item.role}
            githubUrl={item.githubUrl}
          />
        ))}
      </div>
      
      <div 
        className="absolute inset-0 z-[-1] opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at center, hsl(var(--secondary)), transparent 70%)'
        }}
      />
    </div>
  );
}
