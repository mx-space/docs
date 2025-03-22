"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
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
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 自动轮播功能
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // 图片预加载
  useEffect(() => {
    if (typeof window !== 'undefined') {
      images.forEach((src) => {
        const imgEl = document.createElement('img');
        imgEl.src = src;
      });
    }
  }, []);

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden rounded-lg bg-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16">
      <div className="md:flex md:items-center md:gap-8 mb-8">
      <div className="flex-shrink-0 md:w-1/3">
        <Image
        src="/logo.png"
        alt="Mix Space Logo"
        width={300}
        height={100}
        className="max-w-full h-auto max-md:mx-auto"
        priority
        />
      </div>
      <p className="text-muted-foreground md:text-xl max-md:mt-4">
        Mix Space 是一个小型个人空间站点程序。不同于传统的博客程序，采用前后端分离设计，
        适合那些喜欢写不同风格或类型的写作爱好者。
      </p>
      </div>
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
      
      <div 
        ref={containerRef}
        className="relative mt-10 md:mt-16 mb-12 overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        <div className="relative w-full overflow-visible">
          <div className="w-full mx-auto overflow-hidden rounded-xl ring-1 ring-foreground/5 shadow-xl shadow-foreground/5">
            <div className="relative aspect-video w-full bg-gradient-to-br from-secondary/20 to-secondary/10">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={imageNames[currentImage]}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    quality={90}
                    priority={currentImage === 0}
                    className="object-cover w-full"
                    onLoadingComplete={() => setIsLoaded(true)}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* 加载指示器 */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800/90">
                  <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-primary rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* 截图标题 */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white font-medium text-lg md:text-xl">
                  {imageNames[currentImage]}
                </div>
              </div>
            </div>
          </div>
          
          {/* 左右箭头导航 */}
          <button 
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-background/60 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors border border-border"
            aria-label="上一张"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-background/60 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors border border-border"
            aria-label="下一张"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* 进度条指示器 */}
          <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center gap-2">
            <div className="flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentImage(index)}
                  className="group p-2"
                  aria-label={`查看${imageNames[index]}`}
                >
                  <div className={`h-1 w-6 rounded-full transition-all duration-500 ${
                    index === currentImage 
                      ? 'bg-primary w-10' 
                      : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/50'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background/50 to-background" />
    </div>
  );
}
