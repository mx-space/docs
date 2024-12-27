import Image from 'next/image';


export function Feedback() {
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
                Mix Space 文档贡献者
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
