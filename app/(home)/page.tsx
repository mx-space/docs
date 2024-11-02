import { Heart, LucideIcon } from 'lucide-react';
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
          <Feedback />
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
          <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
            <Highlight icon={RocketIcon} heading="基于Next.js">
              内置代码分割和图片优化，服务器端渲染（SSR）支持，性能强劲，速度快，SEO 友好。
            </Highlight>
            <Highlight icon={TimerIcon} heading="前端轻量快速">
              其前端主题 Shiro 在 LightHouse 中表现优秀，Performance 和 Best practice 指数均大于 90%。
            </Highlight>
            <Highlight icon={LayoutIcon} heading="UI 现代化">
              前端后端用户界面设计现代化，简洁而不简单，让你的体验更加流畅。
            </Highlight>
            <Highlight icon={PencilLine} heading="Markdown 语法支持">
              Mix Space 原生支持Markdown语法，也支持自定义 Markdown 内语法，您可以使用自定义语法来丰富您的内容。
            </Highlight>
            <Highlight icon={KeyboardIcon} heading="后台云函数配置">
              无限扩展、无限可能，通过Core内置的云函数配置功能实现歌单解析，追番列表等功能，还有更多。
            </Highlight>
            <Highlight icon={PersonStandingIcon} heading="动态化配置前端">
              你可以在后台设置前端的配置，比如网站名称，网站描述，网站图标，以及一些其他配置。
            </Highlight>
          </div>
          <Contributing />
        </div>
      </main>
    </>
  );
}

function Hero(): React.ReactElement {
  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden border-x border-t bg-fd-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden">
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
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 pb-8 pt-8 md:pb-8">
      <div className="rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg">
        <p className="text-sm font-medium">
          {`"Mix Space，是一个小型的个人空间程序。继承了传统的博客，有着不同于博客的丰富的内容。适合那些喜欢写不同风格或类型的写作爱好者。"`}
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/41265413"
              alt="avatar"
              width="32"
              height="32"
              className="size-8 rounded-full"
            />
            <div>
              <a
                href="https://github.com/Innei"
                rel="noreferrer noopener"
                className="text-sm font-medium"
              >
                Innei
              </a>
              <p className="text-xs text-fd-muted-foreground">
                Mix Space 的开发者
              </p>
            </div>
          </div>
          <Link
            href="https://innei.in"
            className={cn(
              buttonVariants({ variant: 'outline', className: 'sm:ml-auto w-full sm:w-auto justify-center' }),
            )}
          >
            他的个人空间
          </Link>
        </div>
      </div>
      <div className="mt-8 rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg">
        <p className="text-sm font-medium">
          {`"Mix Space 的文档非常详细，总有新的内容和功能在开发中。我自己也在用Mix Space，体验非常不错。"`}
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/96452465"
              alt="avatar"
              width="32"
              height="32"
              className="size-8 rounded-full"
            />
            <div>
              <a
                href="https://github.com/PaloMiku"
                rel="noreferrer noopener"
                className="text-sm font-medium"
              >
                Mikuの鬆
              </a>
              <p className="text-xs text-fd-muted-foreground">
                Mix Space 文档贡献者
              </p>
            </div>
          </div>
          <Link
            href="/docs/core"
            className={cn(
              buttonVariants({ variant: 'outline', className: 'sm:ml-auto w-full sm:w-auto justify-center' }),
            )}
          >
            查看文档
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <div className="rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg flex-1">
          <p className="text-sm font-medium">
            {`"Mix Space 是个小众但不简单的博客系统，设计了文稿、手记、思考三个不同类型的写作方式，在此基础上还写了很多有意思的特性。"`}
          </p>
          <div className="mt-4 flex flex-row items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/108316419"
              alt="avatar"
              width="32"
              height="32"
              className="size-8 rounded-full"
            />
            <div>
              <a
                href="https://github.com/wuhang2003"
                rel="noreferrer noopener"
                className="text-sm font-medium"
              >
                WuHang2003
              </a>
              <p className="text-xs text-fd-muted-foreground">
                Mix Space Team 成员
              </p>
            </div>
            {/* <Link
              href="https://docs.mx-space.com"
              className={cn(
                buttonVariants({ variant: 'outline', className: 'ml-auto' }),
              )}
            >
              查看文档
            </Link> */}
          </div>
        </div>
        <div className="rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg flex-1">
          <p className="text-sm font-medium">
            {`"用了一年多的 Mix Space，最让我觉得舒服的一点是别人如果要和我换友链，可以自助提交，我只需要点个通过就可以了，也借此交到了很多的朋友，光这一点我觉得就很不错了"`}
          </p>
          <div className="mt-4 flex flex-row items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/62463715"
              alt="avatar"
              width="32"
              height="32"
              className="size-8 rounded-full"
            />
            <div>
              <a
                href="https://github.com/NiuBoss123"
                rel="noreferrer noopener"
                className="text-sm font-medium"
              >
                MisakaAkio
              </a>
              <p className="text-xs text-fd-muted-foreground">
                Mix Space 用户
              </p>
            </div>
            {/* <Link
              href="https://docs.mx-space.com"
              className={cn(
                buttonVariants({ variant: 'outline', className: 'ml-auto' }),
              )}
            >
              查看文档
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Contributing(): React.ReactElement {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <Heart className="mb-4" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
        MixSpace 由你创造
      </h2>
      <p className="mb-4 text-fd-muted-foreground">
       MixSpace 由 100% 的热情和开源社区提供动力
      </p>
      <div className="mb-8 flex flex-row items-center gap-2">
        <Link
          href="https://github.com/mx-space"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          加入开源社区
        </Link>
      </div>
      <ContributorCounter repoOwner="mx-space" repoName="docs-v2-legacy" />
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
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}