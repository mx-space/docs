export interface FeedbackData {
  quote: string;
  avatarUrl: string;
  name: string;
  role: string;
  githubUrl?: string;
}

export const feedbackItems: FeedbackData[] = [
  {
    quote: "Mix Space，是一个小型的个人空间程序。继承了传统的博客，有着不同于博客的丰富的内容。适合那些喜欢写不同风格或类型的写作爱好者。",
    avatarUrl: "https://avatars.githubusercontent.com/u/41265413",
    name: "Innei",
    role: "Mix Space 程序开发者",
    githubUrl: "https://github.com/Innei"
  },
  {
    quote: "Mix Space 的文档非常详细，总有新的内容和功能在开发中。我自己也在用 Mix Space，博文加手记的记录个人空间体验非常不错。它改变了我的写作方式。",
    avatarUrl: "https://avatars.githubusercontent.com/u/96452465",
    name: "Mikuの鬆",
    role: "Mix Space 文档贡献者",
    githubUrl: "https://github.com/PaloMiku"
  },
  {
    quote: "Mix Space 是个小众但不简单博客系统，设计了文稿、手记、思考三个不同型的写作方式，在此基础上还写了很多有意思的特性。",
    avatarUrl: "https://avatars.githubusercontent.com/u/108316419",
    name: "WuHang2003",
    role: "Mix Space 开源社区成员",
    githubUrl: "https://github.com/wuhang2003"
  },
  {
    quote: "用了一年多的 Mix Space，最让我觉得舒服的一点是别人如果要和我换友链，可以自助提交，我只需要点个通过就可以了，也借此交到了很多的朋友，光这一点我觉得就很不错了",
    avatarUrl: "https://avatars.githubusercontent.com/u/62463715",
    name: "MisakaAkio",
    role: "Mix Space 用户",
    githubUrl: "https://github.com/NiuBoss123"
  }
];
