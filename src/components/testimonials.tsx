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

export function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight text-neutral-900 dark:text-neutral-50 mb-10">
        Loved by users. Built for developers.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-4 p-6 rounded-2xl border bg-neutral-50 dark:bg-neutral-900"
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-10 rounded-full object-cover"
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
