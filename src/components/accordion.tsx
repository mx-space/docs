import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * fumadocs `Accordions` / `Accordion` 的 Astro 兼容层。
 *
 * 为什么不能直接用 fumadocs 的 Radix 版本：`Accordion` 内部渲染的是 Radix `Item`，
 * 它必须位于 `Accordions` 提供的 Root Context 之内；但 Astro 渲染框架组件时会**先把 children
 * 渲染成 HTML 字符串**再包进 `<astro-slot>`（@astrojs/react/dist/server.js:50-80），
 * 于是每个子 `<Accordion>` 都在一个独立的 React root 里被渲染，拿不到父级 Context，
 * 构建期直接抛 `Error: AccordionItem must be used within Accordion`。
 *
 * 这里改用原生 `<details>/<summary>`：功能等价（展开/收起、锚点定位），**零 JS**，
 * 不再依赖父级 Context，因此既能在 Astro 的 slot 里正确服务端渲染，也不需要水合。
 * 代价（已知并接受）：① 同一组内可同时展开多项（Radix 版 `type="single"` 一次只开一项）；
 * ② 没有展开动画；③ 没有 Radix 版的 “复制锚点链接” 按钮。
 * 视觉类名逐条对照 `fumadocs-ui/dist/components/ui/accordion.js:7-39` 与
 * `dist/components/accordion.js:25-47`，保证边框/分隔线/内边距一致。
 */

export function Accordions({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card', className)}
      {...props}
    >
      {children}
    </div>
  );
}

type AccordionProps = Omit<ComponentPropsWithoutRef<'details'>, 'title'> & {
  title: ReactNode;
  /** 与 Radix 版本保持同名，仅落到 data 属性上供锚点使用 */
  value?: string;
  defaultOpen?: boolean;
};

export function Accordion({ title, value, id, className, children, defaultOpen, ...props }: AccordionProps) {
  return (
    <details
      id={id}
      open={defaultOpen}
      data-accordion-value={value ?? (typeof title === 'string' ? title : undefined)}
      className={cn('group/acc scroll-m-24', className)}
      {...props}
    >
      <summary className="not-prose flex cursor-pointer list-none flex-row items-center text-fd-card-foreground font-medium has-focus-visible:bg-fd-accent [&::-webkit-details-marker]:hidden">
        <span className="flex flex-1 items-center gap-2 px-3 py-2.5 text-start">
          <ChevronRight className="size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-open/acc:rotate-90" />
          {title}
        </span>
      </summary>
      <div className="px-4 pb-2 text-[0.9375rem] prose-no-margin">{children}</div>
    </details>
  );
}
