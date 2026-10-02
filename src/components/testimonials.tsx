const testimonials = [
  {
    quote:
      'Mix Space，是一个小型的个人空间程序。继承了传统的博客，有着不同于博客的丰富的内容。适合那些喜欢写不同风格或类型的写作爱好者。',
    avatar: 'https://avatars.githubusercontent.com/u/41265413',
    name: 'Innei',
    role: 'Mix Space 程序开发者',
  },
  {
    quote:
      'Mix Space 的文档非常详细，总有新的内容和功能在开发中。我自己也在用 Mix Space，博文加手记的记录个人空间体验非常不错。它改变了我的写作方式。',
    avatar: 'https://avatars.githubusercontent.com/u/96452465',
    name: 'Mikuの鬆',
    role: 'Mix Space 文档贡献者',
  },
  {
    quote:
      'Mix Space 是个小众但不简单的博客系统，设计了文稿、手记、思考三个不同型的写作方式，在此基础上还写了很多有意思的特性。',
    avatar: 'https://avatars.githubusercontent.com/u/108316419',
    name: 'WuHang2003',
    role: 'Mix Space 开源社区成员',
  },
  {
    quote:
      '用了一年多的 Mix Space，最让我觉得舒服的一点是别人如果要和我换友链，可以自助提交，我只需要点个通过就可以了，也借此交到了很多的朋友，光这一点我觉得就很不错了',
    avatar: 'https://avatars.githubusercontent.com/u/62463715',
    name: 'MisakaAkio',
    role: 'Mix Space 用户',
  },
];

/**
 * 用户证言：单排 CSS 跑马灯（两端渐隐、悬停暂停），
 * 每条证言渲染两份以实现无缝循环；超出视口的副本用 aria-hidden 去重。
 */
export function Testimonials() {
  return (
    <section className="w-full pb-14 md:pb-20" data-reveal>
      <header className="max-w-2xl mx-auto px-6 text-center mb-8 md:mb-10">
        <p className="text-sm font-medium text-teal-600 dark:text-teal-400 tracking-wide">
          社区
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-balance text-neutral-900 dark:text-neutral-50">
          他们正在用 Mix Space 记录与分享
        </h2>
      </header>

      <div className="mx-marquee-mask overflow-hidden">
        <MarqueeRow items={testimonials} />
      </div>
    </section>
  );
}

function MarqueeRow({ items }: { items: typeof testimonials }) {
  // 渲染三份、位移 -1/3：保证在超宽视口下循环无缝（内容宽度需 ≥ 视口宽度）
  const tripled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-4 pr-4 animate-marquee">
        {tripled.map((item, i) => (
          <figure
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex w-[320px] md:w-[400px] shrink-0 flex-col gap-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5"
          >
            <blockquote className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-2">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-9 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {item.role}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
