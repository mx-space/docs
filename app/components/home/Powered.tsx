import { 
    SiVercel,
    SiNextdotjs,
    SiVuedotjs,
    SiDocker,
    SiMongodb,
    SiNestjs,
    SiAlgolia,
    SiSwift,
    SiPython,
    SiRust,
    SiNodedotjs
} from 'react-icons/si'
import { DiRedis } from "react-icons/di";
import { LuFileCode2 } from "react-icons/lu";

export function Powered() {
    const technologies = [
      {
        name: 'Vercel',
        icon: SiVercel,
        href: 'https://vercel.com',
        description: '现代化的全栈开发与部署平台',
        color: 'var(--foreground)'
      },
      {
        name: 'Docker',
        icon: SiDocker,
        href: 'https://www.docker.com',
        description: '领先的应用容器化解决方案',
        color: '#2496ED'
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        href: 'https://nodejs.org',
        description: '强大的 JavaScript 运行时环境',
        color: '#339933'
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        href: 'https://nextjs.org',
        description: '企业级 React 应用开发框架',
        color: 'var(--foreground)'
      },
      {
        name: 'Vue',
        icon: SiVuedotjs,
        href: 'https://vuejs.org',
        description: '流行的渐进式前端开发框架',
        color: '#4FC08D'
      },
      {
        name: 'NestJS',
        icon: SiNestjs,
        href: 'https://nestjs.com',
        description: '企业级 Node.js 后端开发框架',
        color: '#E0234E'
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        href: 'https://www.mongodb.com',
        description: '灵活高效的 NoSQL 数据库',
        color: '#47A248'
      },
      {
        name: 'Redis',
        icon: DiRedis,
        href: 'https://redis.io',
        description: '高性能的内存数据存储系统',
        color: '#DC382D'
      },
      {
        name: 'Algolia',
        icon: SiAlgolia,
        href: 'https://www.algolia.com',
        description: '强大的搜索服务解决方案',
        color: '#5468FF'
      },
      {
        name: 'Swift',
        icon: SiSwift,
        href: 'https://swift.org',
        description: 'Apple 生态现代编程语言',
        color: '#F05138'
      },
      {
        name: 'Python',
        icon: SiPython,
        href: 'https://www.python.org',
        description: '简洁优雅的通用编程语言',
        color: '#3776AB'
      },
      {
        name: 'Rust',
        icon: SiRust,
        href: 'https://www.rust-lang.org',
        description: '高性能系统级编程语言',
        color: 'var(--foreground)'
      }
    ];
  
    return (
      <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
        <h2 className="mb-12 text-xl font-semibold sm:text-2xl flex items-center gap-2 group">
          <LuFileCode2 className="size-5 transition-transform duration-300 ease-in-out group-hover:scale-125" /> Development By
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

