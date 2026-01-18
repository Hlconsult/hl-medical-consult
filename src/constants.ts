
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
    description: "Comprehensive regulatory affairs services for market access in key global jurisdictions.",
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
    details: ["Languages: Chinese, English, Japanese", "Translator: Haley"],
    pricing: [
      { pair: "Mandarin-English / English-Mandarin", rate: "140 CNY / 1000 Words" },
      { pair: "Mandarin-Japanese / Japanese-Mandarin", rate: "200 CNY / 1000 Words" }
    ]
  },
  {
    title: "Investor Recommendation",
    description: "Strategic consulting focused on the medical device and pharmaceutical industry connection.",
    details: ["Focused on Medical Device Industry", "Pharmaceutical Industry"]
  }
];

const SERVICES_CN: ServiceItem[] = [
  {
    title: "全球医疗器械注册",
    description: "全方位的法规事务服务，助力进入全球主要市场。",
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
    details: ["语言：中文、英文、日文", "译者：Haley"],
    pricing: [
      { pair: "中英互译", rate: "140元 / 1000字" },
      { pair: "中日互译", rate: "200元 / 1000字" }
    ]
  },
  {
    title: "投融资咨询",
    description: "专注于医疗器械和制药行业的战略咨询。",
    details: ["专注于医疗器械行业", "制药行业"]
  }
];

const TEAM_EN: TeamMember[] = [
  {
    name: "Haley Li",
    role: "Founder",
    location: "Guangzhou, China",
    bio: "Experienced CRO & Notified Body sales & professional translator (Mandarin, English & Japanese).",
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
    name: "Changbin",
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
    name: "Weihao",
    role: "IVD NMPA & CE Registration & QMS Specialist",
    location: "Guangzhou, China",
    bio: "Focus on IVD, NMPA, ISO 13485, and MDSAP. Past experience with MGI Tech and Wondfo."
  }
];

const TEAM_CN: TeamMember[] = [
  {
    name: "Haley Li",
    role: "创始人",
    location: "中国广州",
    bio: "资深CRO和公告机构销售及专业翻译（中英日）。",
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
    name: "Changbin",
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
    name: "Weihao",
    role: "IVD NMPA & CE 注册及体系专家",
    location: "中国广州",
    bio: "专注于IVD、NMPA、ISO 13485和MDSAP。曾就职于华大智造（MGI Tech）和万孚生物（Wondfo）。"
  }
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
      subtitle: "Professional consulting bridging the gap between medical innovation and global markets.",
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
