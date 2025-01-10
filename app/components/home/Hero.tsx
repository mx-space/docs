"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const images = [  
  '/assets/images/preview/shiro.png', 
  '/assets/images/preview/kami.png',
  '/assets/images/preview/console.png'
];
const imageNames = ['Shiro主题','Kami主题','控制台'];
import { cn } from 'utils/cn';
import { buttonVariants } from 'app/components/ui/button';
import { LuCirclePlay } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0); 
  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden rounded-lg bg-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16">
      <h1 className="mb-8 text-4xl font-medium">
        Mix Space
        <br />
        An Alternative Personal Space.
      </h1>
      <p className="mb-8 text-muted-foreground md:max-w-[80%] md:text-xl">
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
              className: 'rounded-full bg-background flex items-center',
            }),
          )}
        >
          <FaGithub className="size-4 mr-2" /> Github
        </a>
      </div>
      <div className="relative mt-8">
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                index === currentImage
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {imageNames[index]}
            </button>
          ))}
        </div>
        <Image
          src={images[currentImage]}
          alt="preview"
          width={1200}
          height={675}
          className="w-full max-w-[1200px] select-none duration-1000 animate-in fade-in slide-in-from-bottom-12"
          priority
        />
      </div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background/50 to-background" />
    </div>
  );
}
