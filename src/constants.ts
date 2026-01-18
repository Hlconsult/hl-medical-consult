
import { ServiceItem, TeamMember, ContactInfo } from './types';

interface Content {
  companyName: string;
  companyNameSecondary: string;
  nav: {
    brand: string;
    home: string;
    services: string;
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
      "CE (Europe)",
      "Hong Kong",
      "Taiwan",
      "Australia",
      "Japan"
    ]
  },
  {
    title: "Translation Service",
    description: "Specialized medical and technical translation by experienced professionals.",
    // details: ["Main Languages: Chinese, English, Japanese", "Translator: Haley"],
    details: ["Main Languages: Chinese, English, Japanese"],
    pricing: [
      { pair: "Mandarin-English / English-Mandarin", rate: "140 CNY / 1000 Words" },
      { pair: "Mandarin-Japanese / Japanese-Mandarin", rate: "200 CNY / 1000 Words" }
    ]
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
      "CE (欧洲)",
      "香港",
      "台湾",
      "澳大利亚",
      "日本"
    ]
  },
  {
    title: "翻译服务",
    description: "由经验丰富的专业人士提供的专业医疗和技术翻译。",
    // details: ["主要语言：中文、英文、日文", "译者：Haley"],
    details: ["主要语言：中文、英文、日文"],
    pricing: [
      { pair: "中英互译", rate: "140元 / 1000字" },
      { pair: "中日互译", rate: "200元 / 1000字" }
    ]
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
  {
    name: "Christina",
    role: "Regional Registration Specialist",
    location: "Hong Kong, Australia & Taiwan",
    bio: "Specializing in medical device & drug registration for Hong Kong, Taiwan & Australia since 2004. Past experience with Takeda & CROs."
  },
  {
    name: "James",
    role: "Head of U.S. Subsidiary",
    location: "Indianapolis, IN, USA",
    bio: "Leading U.S.-related businesses including U.S. & Europe clinical trials, FDA registration (U.S. Agent), and distributor recommendations. Expert in business development and clinical trial project management in pharma & medical devices since 2009. Work experience in both China and the U.S., with past roles at Roche, IQVIA, Covance, and a Chinese pharmaceutical company."
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
  {
    name: "Christina",
    role: "区域注册专家",
    location: "香港、澳大利亚和台湾",
    bio: "自2004年起专注于香港、台湾和澳大利亚的医疗器械及药品注册。曾就职于Takeda和CRO。"
  },
  {
    name: "James",
    role: "美国子公司负责人",
    location: "美国印第安纳波利斯",
    bio: "负责美国相关业务，包括美国及欧洲的临床试验、FDA 注册（美国代理）、经销商推荐等。自 2009 年起深耕医药与医疗器械领域的商务拓展及临床试验项目管理。拥有中美两地工作经验，曾任职于罗氏（Roche）、IQVIA、Covance 及一家中国制药公司。"
  },
];

const CONTACT_INFO: ContactInfo = {
  email: "Huili@hlconsult.cn",
  phone: "+86 18620070626",
  linkedin: "https://www.linkedin.com/in/hui-l-a9bb25104/"
};

export const TRANSLATIONS: { en: Content; cn: Content } = {
  en: {
    companyName: "HL Medical Consulting Co., Ltd.",
    companyNameSecondary: "Guangzhou HL Medical Consulting Co., Ltd.",
    nav: {
      brand: "HL Medical",
      home: "Home",
      services: "Services",
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
