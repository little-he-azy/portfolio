// Research page color tokens (blue theme)
export const RE = {
  accent: "#64A8E8",
  accentLight: "#8DB9E5",
  border: "#91BCE8",
  cardBg: "#F8FBFF",
  bgLight: "#E7F1FF",
  tagBg: "#DCEEFF",
  tagText: "#4A7EB8",
  tagBorder: "#B8D4F0",
  decorateText: "#A0C4E8",
  muted: "#8a7c62",
};

export interface Publication {
  slug: string;
  year: string;
  level: string;
  title: string;
  titleZh?: string;
  authors: string;
  venue: string;
  role: string;
  period: string;
  summary: string;
  summaryZh?: string;
  tags: string[];
  paperUrl?: string;
  researchMoments: ResearchMoment[];
}

export interface ResearchMoment {
  date: string;
  title: string;
  description: string;
}

export const researchFocus = {
  title: "Continual Learning for LLMs",
  titleZh: "大语言模型的持续学习",
  description:
    "My research focuses on enabling large language models to continuously acquire new knowledge while preserving previously learned capabilities. I explore methods to mitigate catastrophic forgetting and improve knowledge transfer in lifelong learning scenarios.",
  descriptionZh:
    "我的研究聚焦于让大语言模型在保留已有能力的同时持续获取新知识，探索缓解灾难性遗忘和提升终身学习场景下知识迁移的方法。",
  keywords: ["Continual Learning", "Catastrophic Forgetting", "Knowledge Transfer", "LLM Fine-tuning"],
  areas: [
    {
      title: "Catastrophic Forgetting Mitigation",
      titleZh: "灾难性遗忘缓解",
      items: ["Regularization-based methods", "Replay mechanisms", "Parameter isolation strategies"],
    },
    {
      title: "Knowledge Transfer & Consolidation",
      titleZh: "知识迁移与巩固",
      items: ["Multi-task learning alignment", "Memory-augmented networks", "Meta-learning approaches"],
    },
    {
      title: "Evaluation & Benchmarking",
      titleZh: "评估与基准测试",
      items: ["Long-sequence evaluation protocols", "Cross-domain transfer metrics", "Efficiency-aware benchmarks"],
    },
  ],
};

export const publications: Publication[] = [
  {
    slug: "gwo",
    year: "2025",
    level: "CCF-C",
    title: "GWO: A Gradient-Weighted Optimization Approach for Continual Learning in Large Language Models",
    titleZh: "GWO：一种面向大语言模型持续学习的梯度加权优化方法",
    authors: "Azy He*, et al.",
    venue: "International Conference on Natural Language Processing (ICONIP)",
    role: "First Author",
    period: "2024.09 – 2025.03",
    summary:
      "Proposed GWO, a novel gradient-weighted optimization framework that dynamically adjusts parameter update magnitudes based on gradient importance scores. The method significantly reduces catastrophic forgetting while maintaining computational efficiency across sequential learning tasks.",
    summaryZh:
      "提出了 GWO 梯度加权优化框架，根据梯度重要性分数动态调整参数更新幅度，在序列学习任务中显著降低灾难性遗忘并保持计算效率。",
    tags: ["Continual Learning", "LLM", "Optimization", "Catastrophic Forgetting"],
    paperUrl: "#",
    researchMoments: [
      {
        date: "2024.09",
        title: "Research Initiation",
        description: "Identified the limitation of existing regularization methods in balancing plasticity and stability.",
      },
      {
        date: "2024.11",
        title: "Method Design",
        description: "Developed the gradient-weighted update mechanism and proved its convergence properties.",
      },
      {
        date: "2025.01",
        title: "Experiment Validation",
        description: "Conducted extensive experiments on LLaMA-2 and achieved 15% improvement over baseline methods.",
      },
      {
        date: "2025.03",
        title: "Paper Acceptance",
        description: "Paper accepted by ICONIP 2025 (CCF-C).",
      },
    ],
  },
];
