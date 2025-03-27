import { Hero } from "@/app/components/home/Hero";
import { Feedback } from '@/app/components/home/Feedback';
import { HighlightGrid } from 'app/components/home/Highlight';
import { Powered } from '@/app/components/home/Powered';
import { Contributing } from '@/app/components/home/Contributing';

const mainBackgroundStyle = {
  background:
    'repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)',
};

const sectionBackgroundStyle = {
  background: [
    'radial-gradient(circle at bottom center, hsl(var(--secondary)), transparent 70%)',
    'linear-gradient(90deg, rgba(78, 191, 255, 0.1), transparent 30%, rgba(233, 42, 103, 0.1))',
  ].join(', '),
  borderTopStyle: 'dashed' as React.CSSProperties['borderTopStyle'],
};

const overlayBackgroundStyle = {
  background: 'linear-gradient(to bottom, transparent, rgba(var(--secondary), 0.2))',
  opacity: 0.5,
};

export default function Page(): React.ReactElement {
  return (
    <>
      <main className="container relative max-w-[1200px] px-4 lg:px-8 py-4 lg:py-16">
        <div style={mainBackgroundStyle}>
          <div className="relative mb-16">
            <Hero />
          </div>

          <div
            className="container relative overflow-hidden border-x border-t py-4 sm:py-8 mt-[-1px]"
            style={sectionBackgroundStyle}
          >
            <div className="relative z-[1]">
              <h2 className="bg-gradient-to-b from-fd-primary to-fd-foreground/40 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
                Loved by users.
                <br />
                Built for developers.
              </h2>
            </div>
            <div className="absolute inset-0 z-0" style={overlayBackgroundStyle} />
          </div>

          <Feedback />
          <HighlightGrid />
          <Powered />
          <Contributing />
        </div>
      </main>
    </>
  );
}
