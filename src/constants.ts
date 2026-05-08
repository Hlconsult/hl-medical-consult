
import { ServiceItem, TeamMember, ContactInfo, ArticleItem } from './types';

interface Content {
  companyName: string;
  companyNameSecondary: string;
  nav: {
    brand: string;
    home: string;
    services: string;
    articles: string;
    team: string;
    contact: string;
  };
  home: {
    heroSubtitle: string;
    ctaServices: string;
    ctaContact: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    rateCardTitle: string;
    items: ServiceItem[];
  };
  articlesPage: {
    title: string;
    subtitle: string;
    backLabel: string;
    readArticle: string;
    originalArticle: string;
    repostedFrom: string;
    notFoundTitle: string;
    notFoundText: string;
    articles: ArticleItem[];
  };
  teamPage: {
    title: string;
    subtitle: string;
    founderLabel: string;
    connectLinkedin: string;
    members: TeamMember[];
  };
  contactPage: {
    title: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
    connectLinkedin: string;
    info: ContactInfo;
  };
  footer: {
    rights: string;
  };
}

const SERVICES_EN: ServiceItem[] = [
  {
    title: "Global Registration of Medical Devices",
    description: "Comprehensive regulatory affairs services for market access globally.",
    details: [
      "NMPA (China)",
      "FDA (USA)",
      "CE (EU)",
      "Hong Kong",
      "Japan",
      "Southeast Asia"
    ]
  },
  {
    title: "Translation Service",
    description: "Registration document translation  On-site audit translation",
    // details: ["Main Languages: Chinese, English, Japanese", "Translator: Haley"],
    // details: ["Main Languages: Chinese, English, Japanese"],
    details: ["Chinese <> other languages"]
    // pricing: [
    //   { pair: "Mandarin-English / English-Mandarin", rate: "140 CNY / 1000 Words" },
    //   { pair: "Mandarin-Japanese / Japanese-Mandarin", rate: "200 CNY / 1000 Words" }
    // ]
  },
  {
    title: "Investor Recommendation",
    description: "Strategic investor recommendation for medical device and pharmaceutical clients.",
    details: ["Investors in China", "Global investors"]
  },
  {
    title: "Custom-made Service",
    description: "Custom-made service based on your business needs. Our expertise & connection in medical device & pharma industry will help you in many ways.",
    details: ["CUSTOM"]
  }
];

const SERVICES_CN: ServiceItem[] = [
  {
    title: "全球医疗器械注册",
    description: "全方位的法规事务服务，助力进入全球市场。",
    details: [
      "NMPA (中国)",
      "FDA (美国)",
      "CE (欧盟)",
      "香港",
      "日本",
      "东南亚"
    ]
  },
  {
    title: "翻译服务",
    description: "注册资料翻译 现场审核口译",
    // details: ["主要语言：中文、英文、日文", "译者：Haley"],
    // details: ["主要语言：中文、英文、日文"],
    details: ["中文 <> 其他语言"]
    // pricing: [
    //   { pair: "中英互译", rate: "140元 / 1000字" },
    //   { pair: "中日互译", rate: "200元 / 1000字" }
    // ]
  },
  {
    title: "投融资咨询",
    description: "为医疗器械和制药行业的客户提供战略投资者推荐服务。",
    details: ["中国投资者", "全球投资者"]
  },
  {
    title: "定制服务",
    description: "我们根据您的业务需求提供定制服务。我们在医疗器械和制药行业的专业知识和人脉资源将为您提供多方面的帮助。",
    details: ["定制"]
  }
];

const TEAM_EN: TeamMember[] = [
  {
    name: "Haley Li",
    role: "Founder",
    location: "Guangzhou, China",
    bio: "Medical device CRO & Notified Body sales & Translator (Mandarin, English & Japanese).",
    isFounder: true,
    linkedin: "https://www.linkedin.com/in/hui-l-a9bb25104/"
  },
  {
    name: "Jun",
    role: "NMPA Medical Device Registration Manager",
    location: "Beijing, China",
    bio: "Expert in NMPA registration since 2008. Past experience includes GE, Edwards Lifesciences, ZEISS, and ZOLL Medical."
  },
  {
    name: "Klem",
    role: "Medical Device CE, FDA & QMS Manager",
    location: "Guangzhou, China",
    bio: "Specialist in NMPA, ISO 13485, MDSAP since 2012. Extensive experience with Chinese manufacturers & CROs."
  },
  {
    name: "Cindy",
    role: "Senior Registration Manager (NMPA, CE & FDA)",
    location: "Munich, Germany",
    bio: "Industry veteran since 2002. Past experience includes Cochlear, Bausch & Lomb, joimax, and Galderma."
  },
//   {
//     name: "Christina",
//     role: "Medical Device (Including IVD) & Drug Registration Manager",
//     location: "Hong Kong, Australia & Taiwan",
//     bio: "Specializing in medical device & drug registration for Hong Kong, Taiwan & Australia since 2004. Past experiences include Takeda, Boston Scientific, Elekta, Kodak, Lambda, Lumenis, ICU Medical, Centogene, etc."
//   },
  {
    name: "Shawn",
    role: "Head of U.S. Subsidiary",
    location: "High Point, NC, USA",
    bio: "Seasoned business development and clinical project management expert with 15+ years in pharma and medical devices, specializing in U.S., EU, and LATAM medical product registration, clinical trial, and commercialization. Experienced in leading cross-border clinical trials (U.S./EU), serving as U.S. Agent for FDA registrations, and identifying strategic distributors to support market entry. Strong cross-cultural expertise from working in both the U.S. and China."
  },
];

const TEAM_CN: TeamMember[] = [
  {
    name: "Haley Li",
    role: "创始人",
    location: "中国广州",
    bio: "医疗器械CRO和公告机构销售及翻译（中英日）。",
    isFounder: true,
    linkedin: "https://www.linkedin.com/in/hui-l-a9bb25104/"
  },
  {
    name: "Jun",
    role: "NMPA医疗器械注册经理",
    location: "中国北京",
    bio: "自2008年起专注于NMPA注册。曾就职于GE、Edwards Lifesciences、ZEISS和ZOLL Medical。"
  },
  {
    name: "Klem",
    role: "医疗器械CE、FDA及体系经理",
    location: "中国广州",
    bio: "自2012年起专注于NMPA、ISO 13485、MDSAP。拥有丰富的中国制造商和CRO经验。"
  },
  {
    name: "Cindy",
    role: "高级注册经理 (NMPA, CE & FDA)",
    location: "德国慕尼黑",
    bio: "自2002年起的行业资深专家。曾就职于Cochlear、Bausch & Lomb、joimax和Galderma。"
  },
//   {
//     name: "Christina",
//     role: "医疗器械（包括体外诊断产品）和药品注册经理",
//     location: "香港、澳大利亚和台湾",
//     bio: "自2004年起专注于香港、台湾和澳大利亚的医疗器械及药品注册。曾服务的客户包括武田制药、波士顿科学、Elekta、柯达、Lambda、Lumenis、ICU Medical、Centogene等公司。"
//   },
  {
    name: "Shawn",
    role: "美国子公司负责人",
    location: "美国北卡罗来纳州海波因特",
    bio: "拥有超过15年制药和医疗器械行业经验的资深业务拓展和临床项目管理专家，专长于美国、欧盟和拉丁美洲的医疗产品注册、临床试验和商业化。在领导跨境临床试验（美国/欧盟）、担任FDA注册的美国代理以及寻找战略分销商以支持市场准入方面经验丰富。曾在美国和中国工作，具备丰富的跨文化经验。"
  },
];

const CONTACT_INFO: ContactInfo = {
  email: "haleyhuilee@outlook.com",
  phone: "+86 18620070626",
  linkedin: "https://www.linkedin.com/in/hui-l-a9bb25104/"
};

const ARTICLES_EN: ArticleItem[] = [
  {
    slug: "three-medical-device-review-guidelines",
    title: "Three Medical Device Registration Review Guidelines Released",
    summary: "Reposted article: CMDE released draft review guidelines for three medical device categories, further clarifying scope and review focus areas.",
    date: "2026-05-06",
    category: "Regulatory Update",
    readTime: "5 min read",
    sourceName: "器械可用性",
    originalUrl: "https://mp.weixin.qq.com/s/Rco4gvJEykoZOVwivN_xJA?scene=1",
    content: [
      { type: "section", text: "01" },
      { type: "heading", text: "Registration Review Focus Areas" },
      { type: "paragraph", text: "The review framework for these three device categories is essentially the same, covering six major parts: regulatory information, overview materials, non-clinical materials, clinical evaluation materials, instructions for use and label samples, and quality management system documents." },
      { type: "heading", text: "Regulatory Information" },
      { type: "paragraph", text: "For meniscus suture systems and orthodontic anchorage screws, applicants need to clearly explain:" },
      { type: "bullet", text: "Product name" },
      { type: "bullet", text: "Classification code" },
      { type: "bullet", text: "Registration unit division" },
      { type: "paragraph", text: "Artificial cervical intervertebral disc prostheses require one additional layer of detail: model specifications, structure, and composition must also be described." },
      { type: "heading", text: "Overview Materials" },
      { type: "paragraph", text: "For all three device categories, applicants should clearly explain:" },
      { type: "bullet", text: "Product description" },
      { type: "bullet", text: "Model specifications" },
      { type: "bullet", text: "Packaging information" },
      { type: "bullet", text: "Reference and comparison with similar and/or previous-generation products" },
      { type: "bullet", text: "Scope of application and contraindications" },
      { type: "bullet", text: "Marketing history of the submitted product" },
      { type: "paragraph", text: "Meniscus suture systems and orthodontic anchorage screws also specifically emphasize operating principles and development history. Meniscus suture systems additionally include instruments used together with the product." },
      { type: "paragraph", text: "The logic is straightforward: it is not enough to describe the product itself. Applicants also need to explain how the product is used." },
      { type: "heading", text: "Non-clinical Materials" },
      { type: "paragraph", text: "This section becomes more technical. All three device categories require:" },
      { type: "bullet", text: "Product risk management materials" },
      { type: "bullet", text: "Essential principles checklist for medical device safety and performance" },
      { type: "bullet", text: "Product technical requirements" },
      { type: "bullet", text: "Product testing" },
      { type: "bullet", text: "Research materials" },
      { type: "paragraph", text: "In general, this part is used to demonstrate device safety." },
      { type: "heading", text: "Clinical Evaluation Materials" },
      { type: "paragraph", text: "This is where the three device categories differ the most. Meniscus suture systems and orthodontic anchorage screws are relatively conventional: substantial equivalence comparison and clinical trials." },
      { type: "paragraph", text: "Artificial cervical intervertebral disc prostheses are different. The requirements are more detailed, including:" },
      { type: "bullet", text: "Clinical trial design type" },
      { type: "bullet", text: "Inclusion and exclusion criteria" },
      { type: "bullet", text: "Subject withdrawal criteria and handling of withdrawn subjects" },
      { type: "bullet", text: "Clinical trial duration and visit windows" },
      { type: "bullet", text: "Clinical trial endpoints and evaluation criteria" },
      { type: "bullet", text: "Selection of control products" },
      { type: "bullet", text: "Sample size estimation" },
      { type: "bullet", text: "Demographic and baseline characteristics" },
      { type: "bullet", text: "Statistical analysis methods" },
      { type: "paragraph", text: "In other words, the question is no longer simply whether a clinical trial is needed. The framework for how to conduct the clinical trial has already been laid out." },
      { type: "heading", text: "The Other Two Major Sections" },
      { type: "paragraph", text: "Instructions for use and label samples: all three guidelines clarify the role of the Provisions on the Administration of Medical Device Instructions and Labels and standards such as YY/T 0466.1. Quality management system documents should be prepared with reference to the announcement on medical device registration submission requirements and approval document formats." },
      { type: "section", text: "02" },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "The three newly released medical device guidelines share the same broad framework, while the artificial cervical intervertebral disc prosthesis has more specific requirements in the clinical evaluation section. The consultation notice also includes a feedback form, giving relevant companies and professionals a channel to participate in improving the guidelines and supporting smoother review work for these devices." }
    ]
  }
];

const ARTICLES_CN: ArticleItem[] = [
  {
    slug: "three-medical-device-review-guidelines",
    title: "三大医疗器械注册审评指导原则出炉",
    summary: "转载文章：器审中心就三类医疗器械注册审评指导原则征求意见，适用范围和审查要点进一步明确。",
    date: "2026-05-06",
    category: "法规动态",
    readTime: "约5分钟",
    sourceName: "器械可用性",
    originalUrl: "https://mp.weixin.qq.com/s/Rco4gvJEykoZOVwivN_xJA?scene=1",
    content: [
      { type: "section", text: "01" },
      { type: "heading", text: "注册审查要点" },
      { type: "paragraph", text: "这三类器械的审查框架其实是一样的，都为六大块：监管信息、综述资料、非临床资料、临床评价资料、产品说明书和标签样稿与质量管理体系文件。" },
      { type: "heading", text: "监管信息" },
      { type: "paragraph", text: "半月板缝合系统、正畸支抗钉都要说清楚：" },
      { type: "bullet", text: "产品名称" },
      { type: "bullet", text: "分类编码" },
      { type: "bullet", text: "注册单元划分" },
      { type: "paragraph", text: "而人工颈椎间盘假体多了一层，还要求详述型号规格与结构组成。" },
      { type: "heading", text: "综述资料" },
      { type: "paragraph", text: "三款器械都要求你把这些讲清楚：" },
      { type: "bullet", text: "产品描述" },
      { type: "bullet", text: "型号规格" },
      { type: "bullet", text: "包装说明" },
      { type: "bullet", text: "与同类和/或前代产品的参考和比较" },
      { type: "bullet", text: "适用范围和禁忌证" },
      { type: "bullet", text: "申报产品上市历史" },
      { type: "paragraph", text: "半月板缝合系统和正畸支抗钉还专门强调了“操作原理”与\"研发历程\"，其中半月板缝合系统还多了配合使用器械这一项。" },
      { type: "paragraph", text: "其实道理很直白：不仅要说产品本身，还要说它是怎么被用起来的。" },
      { type: "heading", text: "非临床资料" },
      { type: "paragraph", text: "到了这部分，就开始有点“硬核”了。三款器械都要求提供：" },
      { type: "bullet", text: "产品风险管理资料" },
      { type: "bullet", text: "医疗器械安全和性能基本原则清单" },
      { type: "bullet", text: "产品技术要求" },
      { type: "bullet", text: "产品检验" },
      { type: "bullet", text: "研究资料" },
      { type: "paragraph", text: "总得来说，这部分资料就是让我们证明器械安全。" },
      { type: "heading", text: "临床评价资料" },
      { type: "paragraph", text: "这三类器械，在这部分上差距最大。半月板缝合系统和正畸支抗钉相对“常规”：走同品种对比，做临床试验。" },
      { type: "paragraph", text: "而人工颈椎间盘假体则完全不同，要求更细，包括：" },
      { type: "bullet", text: "临床试验设计类型" },
      { type: "bullet", text: "入选、排除标准" },
      { type: "bullet", text: "受试者退出标准及退出受试者的处理" },
      { type: "bullet", text: "临床试验持续时间与窗口期" },
      { type: "bullet", text: "临床试验评价指标及判定标准" },
      { type: "bullet", text: "对照产品的选择" },
      { type: "bullet", text: "样本量的估算" },
      { type: "bullet", text: "人口统计学和基线特征" },
      { type: "bullet", text: "统计分析方法" },
      { type: "paragraph", text: "可以说，已经不是“做不做临床”的问题，而是临床怎么做，给你写好了框架。" },
      { type: "heading", text: "另两大板块" },
      { type: "paragraph", text: "产品说明书和标签样稿：三款器械指导原则均明确了《医疗器械说明书和标签管理规定》和YY/T 0466.1等标准的指导作用。质量管理体系文件撰写均需要参考《关于公布医疗器械注册申报资料要求和批准证明文件格式的公告》。" },
      { type: "section", text: "02" },
      { type: "heading", text: "结论" },
      { type: "paragraph", text: "本次发布的三项医疗器械指导原则大框架一致，其中人工颈椎间盘假体在临床评价部分要求更为具体。本次征求意见通知同时附带意见反馈表，为相关企业和从业者提供了参与完善指导原则的渠道，也推动相关器械审查工作的顺利进行。" }
    ]
  }
];

export const TRANSLATIONS: { en: Content; cn: Content } = {
  en: {
    companyName: "HL Medical Consulting Co., Ltd.",
    companyNameSecondary: "Guangzhou HL Medical Consulting Co., Ltd.",
    nav: {
      brand: "HL Medical",
      home: "Home",
      services: "Services",
      articles: "Articles",
      team: "Team",
      contact: "Contact"
    },
    home: {
      heroSubtitle: "Professional Regulatory Affairs",
      ctaServices: "Our Services",
      ctaContact: "Contact Us"
    },
    servicesPage: {
      title: "Our Expertise",
      subtitle: "Professional consulting bridging the gap between your medical device and China market.",
      rateCardTitle: "Rate Card",
      items: SERVICES_EN
    },
    articlesPage: {
      title: "Articles",
      subtitle: "Practical notes on medical device registration, localization, and audit support.",
      backLabel: "Back to Articles",
      readArticle: "Read Article",
      originalArticle: "Read Original WeChat Article",
      repostedFrom: "Reposted from",
      notFoundTitle: "Article not found",
      notFoundText: "The article you are looking for may have been moved or removed.",
      articles: ARTICLES_EN
    },
    teamPage: {
      title: "The Team",
      subtitle: "A global network of experts in medical device registration, QMS, and sales.",
      founderLabel: "Founder",
      connectLinkedin: "Connect on LinkedIn",
      members: TEAM_EN
    },
    contactPage: {
      title: "Get in Touch",
      emailLabel: "Email",
      phoneLabel: "WeChat / WhatsApp / Phone",
      socialLabel: "Social",
      connectLinkedin: "Connect on LinkedIn",
      info: CONTACT_INFO
    },
    footer: {
      rights: "All Rights Reserved."
    }
  },
  cn: {
    companyName: "广州赫莱医药咨询有限公司",
    companyNameSecondary: "HL Medical Consulting Co., Ltd.",
    nav: {
      brand: "赫莱医药",
      home: "首页",
      services: "服务",
      articles: "文章",
      team: "团队",
      contact: "联系我们"
    },
    home: {
      heroSubtitle: "专业法规事务服务",
      ctaServices: "我们的服务",
      ctaContact: "联系我们"
    },
    servicesPage: {
      title: "我们的专长",
      subtitle: "连接医疗创新与全球市场的专业咨询服务。",
      rateCardTitle: "价格表",
      items: SERVICES_CN
    },
    articlesPage: {
      title: "文章",
      subtitle: "关于医疗器械注册、本地化和审核支持的实务内容。",
      backLabel: "返回文章列表",
      readArticle: "阅读全文",
      originalArticle: "查看公众号原文",
      repostedFrom: "转载来源",
      notFoundTitle: "文章未找到",
      notFoundText: "您访问的文章可能已移动或删除。",
      articles: ARTICLES_CN
    },
    teamPage: {
      title: "团队介绍",
      subtitle: "医疗器械注册、体系和销售领域的全球专家网络。",
      founderLabel: "创始人",
      connectLinkedin: "LinkedIn主页",
      members: TEAM_CN
    },
    contactPage: {
      title: "联系我们",
      emailLabel: "邮箱",
      phoneLabel: "微信 / WhatsApp / 电话",
      socialLabel: "社交媒体",
      connectLinkedin: "LinkedIn主页",
      info: CONTACT_INFO
    },
    footer: {
      rights: "版权所有"
    }
  }
};
