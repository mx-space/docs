import Link from 'next/link';
import Image from 'next/image';
import Img from './img.png';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/app/components/ui/button';
import { LuCirclePlay } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export function Hero() {
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
            <LuCirclePlay className="size-4 mr-2" /> 开始使用
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
            <FaGithub className="size-4 mr-2" /> Github
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