import { Heart, LucideIcon, MousePointerClick, Code2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/app/components/ui/button';

import ContributorCounter from '@/app/components/contributor-count';
import Img from './img.png';
import { 
  RocketIcon,
  TimerIcon,
  LayoutIcon,
  KeyboardIcon,
  PencilLine,
  CirclePlay,
  Github,
  PersonStandingIcon 
} from 'lucide-react';
import { ReactNode } from 'react';
import { 
  SiVercel,
  SiNextdotjs,
  SiVuedotjs,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiNestjs,
  SiAlgolia,
  SiSwift
} from 'react-icons/si'  // si 代表 Simple Icons

// 添加特性数据数组
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

function Powered(): React.ReactElement {
  const technologies = [
    {
      name: 'Vercel',
      icon: SiVercel,
      href: 'https://vercel.com',
      description: '为现代 Web 提供最佳托管平台',
      color: '#000000'
    },
    {
      name: 'Docker',
      icon: SiDocker,
      href: 'https://www.docker.com',
      description: '领先的容器化平台',
      color: '#2496ED'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      href: 'https://nextjs.org',
      description: 'React 框架，为生产环境而生',
      color: '#000000'
    },
    {
      name: 'Vue',
      icon: SiVuedotjs,
      href: 'https://vuejs.org',
      description: '渐进式 JavaScript 框架',
      color: '#4FC08D'
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
      href: 'https://nestjs.com',
      description: '用于构建高效可扩展的服务器端应用程序',
      color: '#E0234E'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      href: 'https://www.mongodb.com',
      description: '现代化的 NoSQL 数据库',
      color: '#47A248'
    },
    {
      name: 'Redis',
      icon: SiRedis,
      href: 'https://redis.io',
      description: '高性能的内存数据存储',
      color: '#DC382D'
    },
    {
      name: 'Algolia',
      icon: SiAlgolia,
      href: 'https://www.algolia.com',
      description: '高性能的全文搜索引擎',
      color: '#5468FF'
    },
    {
      name: 'Swift',
      icon: SiSwift,
      href: 'https://swift.org',
      description: 'Apple 生态系统的现代编程语言',
      color: '#F05138'
    }
  ];

  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <h2 className="mb-12 text-xl font-semibold sm:text-2xl flex items-center gap-2 group">
        <Code2 className="size-5 transition-transform duration-300 ease-in-out group-hover:scale-125" /> Development By
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {technologies.map((tech) => (
          <a 
            key={tech.name}
            href={tech.href}
            className="group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ease-in-out hover:border-primary hover:bg-secondary/40 hover:scale-105 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background transition-all duration-300 ease-in-out group-hover:border-primary group-hover:scale-110">
              <tech.icon size={24} className="transition-transform duration-300 ease-in-out group-hover:scale-125" style={{ color: tech.color }} />
            </div>
            <div className="text-left transition-all duration-300 ease-in-out group-hover:translate-x-1">
              <div className="font-medium">{tech.name}</div>
              <div className="text-sm text-muted-foreground">{tech.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// 在文件顶部添加 metadata 导出
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

function Hero(): React.ReactElement {
  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden border-x border-t rounded-t-2xl bg-fd-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden">
      <h1 className="mb-8 text-4xl font-medium">
        Mix Space
        <br />
        An Alternative Personal Space.
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Mix Space 是一个小型个人空间站点程序。不同于传统的博客程序，采用前后端分离设计，
        适合那些喜欢写不同风格或类型的写作爱好者。
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/core"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          <CirclePlay className="size-4 mr-2" /> 开始使用
        </Link>
        <a
          href="https://github.com/mx-space"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'rounded-full bg-fd-background flex items-center',
            }),
          )}
        >
          <Github className="size-4 mr-2" /> Github
        </a>
      </div>
      <Image
        src={Img}
        alt="preview"
        className="mb-[-100px] mt-8 min-w-[800px] select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 md:mb-[-170px] md:min-w-[1100px]"
        priority
      />
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse at top, transparent 60%, hsla(250,90%,90%,0.2))',
            'linear-gradient(to bottom, transparent 30%, hsl(var(--primary) / 0.2))',
            'linear-gradient(to bottom, hsl(var(--background)) 40%, transparent)',
            'repeating-linear-gradient(45deg, transparent,transparent 60px, hsl(var(--primary)) 61px, transparent 62px)',
          ].join(', '),
        }}
      />
    </div>
  );
}

function Feedback(): React.ReactElement {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 pb-16 pt-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "Mix Space，是一个小型的个人空间程序。继承了传统的博客，有着不同于博客的丰富的内容。适合那些喜欢写不同风格或类型的写作爱好者。"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/41265413"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/Innei"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                Innei
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space 程序开发者
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "Mix Space 的文档非常详细，总有新的内容和功能在开发中。我自己也在用 Mix Space，博文加手记的记录个人空间体验非常不错。它改变了我的写作方式。"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/96452465"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/PaloMiku"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                Mikuの鬆
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space ���档贡献者
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "Mix Space 是个小众但不简单博客系统，设计了文稿、手记、思考三个不同型的写作方式，在此基础上还写了很多有意思的特性。"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/108316419"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/wuhang2003"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                WuHang2003
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space 开源社区成员
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "用了一年多的 Mix Space，最让我觉得舒服的一点是别人如果要和我换友链，可以自助提交，我只需要点个通过就可以了，也借此交到了很多的朋友，光这一点我觉得就很不错了"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/62463715"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/NiuBoss123"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                MisakaAkio
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space 用户
              </p>
            </div>
          </div>
        </div>
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

function Contributing(): React.ReactElement {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <Heart className="mb-4 text-primary animate-pulse" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
        由像你一样充满热情的开发者共同创造
      </h2>
      <p className="mb-8 text-muted-foreground">
        Some of our best contributors.
      </p>
      <Link
        href="https://github.com/mx-space"
        className={cn(buttonVariants({ 
          variant: 'outline',
          className: 'mb-8 group transition-all duration-300 hover:scale-105'
        }))}
      >
        <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-105" /> 加入开源社区
      </Link>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        <ContributorCounter 
          repoOwner="mx-space" 
          repoName="docs-v2-legacy"
          displayCount={20}
          className="w-full"
        />
      </div>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12 group">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:text-primary" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}