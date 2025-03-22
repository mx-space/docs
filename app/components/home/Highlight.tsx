"use client";

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { 
  RocketIcon,
  TimerIcon,
  LayoutIcon,
  KeyboardIcon,
  PencilLine,
  MousePointerClick,
  PersonStandingIcon
} from 'lucide-react';

export function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}) {
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

export function HighlightGrid() {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <h2 className="mb-12 text-xl font-semibold sm:text-2xl flex items-center gap-2">
        <MousePointerClick className="size-5" /> Highlight Features
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 border-r sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 w-full">
          {highlights.map((item, index) => (
            <div key={index} className="transition-all duration-500 ease-in-out">
              <Highlight
                icon={item.icon}
                heading={item.heading}
              >
                {item.description}
              </Highlight>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const highlights = [
  {
    icon: RocketIcon,
    heading: "基于 Next.js",
    description: "内置代码分割和图片优化，服务器端渲染（SSR）支持，性能强劲，速度快，SEO 友好。"
  },
  {
    icon: TimerIcon,
    heading: "前端轻量快速",
    description: "其前端主题 Shiro 在 LightHouse 中表现优秀，Performance 和 Best practice 指数均大于 90%。"
  },
  {
    icon: LayoutIcon,
    heading: "UI 现代化",
    description: "前端后端用户界面设计现代化，简洁而不简单，让你的体验更加流畅。"
  },
  {
    icon: PencilLine,
    heading: "Markdown 语法支持",
    description: "Mix Space 原生支持 Markdown 语法，也支持自定义 Markdown 内语法，您可以使用自定义语法来丰富您的内容。"
  },
  {
    icon: KeyboardIcon,
    heading: "后台云函数配置",
    description: "无限扩展、无限可能，通过 Core 内置的云函数配置功能实现歌单解析，追番列表等功能，还有更多。"
  },
  {
    icon: PersonStandingIcon,
    heading: "动态化配置前端",
    description: "你可以在后台设置前端的配置，比如网站名称，网站描述，网站图标，以及一些其他配置。"
  }
];
