import { Contributing } from "@/app/components/home/Contributing"
import { Hero } from "@/app/components/home/Hero"
import { Powered } from "@/app/components/home/Powered"
import { Feedback } from '@/app/components/home/Feedback';
import { 
  RocketIcon,
  TimerIcon,
  LayoutIcon,
  KeyboardIcon,
  PencilLine,
  MousePointerClick,
  PersonStandingIcon 
} from 'lucide-react';
import { Highlight } from 'app/components/home/Highlight';

export const metadata = {
  title: "Mix Space - An Alternative Personal Space",
  description: "Mix Space 是一个小型个人空间站点程序，采用前后端分离设计。"
}

export default function Page(): React.ReactElement {
  return (
    <>
      <div
        className="absolute inset-x-0 top-[200px] h-[250px] max-md:hidden"
        style={{
          background:
            'repeating-linear-gradient(to right, hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 50px)',
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 lg:py-16">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)',
          }}
        >
          <div className="relative">
            <Hero />
          </div>

          <div
            className="container relative overflow-hidden border-x border-t py-4 sm:py-8 mt-[-1px]"
            style={{
              background: [
                'radial-gradient(circle at bottom center, hsl(var(--secondary)), transparent 70%)',
                'linear-gradient(90deg, rgba(78, 191, 255, 0.1), transparent 30%, rgba(233, 42, 103, 0.1))',
              ].join(', '),
              borderTopStyle: 'dashed',
            }}
          >
            <div className="relative z-[1]">
              <h2 className="bg-gradient-to-b from-fd-primary to-fd-foreground/40 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
                Loved by users.
                <br />
                Built for developers.
              </h2>
            </div>
            <div
              className="absolute inset-0 z-0"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(var(--secondary), 0.2))',
                opacity: 0.5,
              }}
            />
          </div>

          <Feedback />
          <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
            <h2 className="mb-12 text-xl font-semibold sm:text-2xl flex items-center gap-2">
              <MousePointerClick className="size-5" /> Highlight Features
            </h2>
            <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3 w-full">
              {highlights.map((item, index) => (
                <Highlight 
                  key={index} 
                  icon={item.icon} 
                  heading={item.heading}
                >
                  {item.description}
                </Highlight>
              ))}
            </div>
          </div>
          <Powered />
          <Contributing />
        </div>
      </main>
    </>
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
