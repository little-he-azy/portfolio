/**
 * Skills module data
 * Centralized data structure for all skill categories and sub-pages.
 * Add new items by extending the arrays below.
 */

// ─── Skills Module Green Color System ───

export const SK = {
  accent: "#8FB18B",
  accentHover: "#7A9E76",
  border: "#c8d9c4",
  borderHover: "#a5c9a0",
  tagBg: "#f0f7ee",
  tagBorder: "#d4e4d0",
  tagText: "#5a7a55",
  cardBg: "#fffdf5",
  cardBgHover: "#f5faf4",
  decorateLine: "#c8d9c4",
  decorateText: "#8a9e85",
  arrow: "#7a8f76",
} as const;

// ─── Main Page: 4 Skill Categories ───

export interface SkillCategory {
  id: string;
  number: string;
  verb: string;
  title: string;
  titleZh: string;
  description: string;
  keywords: string[];
  href: string;
  doodle: "brain" | "chip" | "code" | "palette";
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-product",
    number: "01",
    verb: "THINK",
    title: "AI PRODUCT",
    titleZh: "AI 产品",
    description: "How I think about AI products.",
    keywords: ["需求", "设计", "评测", "迭代"],
    href: "/skills/ai-product",
    doodle: "brain",
  },
  {
    id: "ai-technology",
    number: "02",
    verb: "UNDERSTAND",
    title: "AI TECHNOLOGY",
    titleZh: "AI 技术",
    description: "How I understand AI systems.",
    keywords: ["LLM", "VLM", "Agent", "RAG"],
    href: "/skills/ai-technology",
    doodle: "chip",
  },
  {
    id: "data-development",
    number: "03",
    verb: "BUILD",
    title: "DATA & DEVELOPMENT",
    titleZh: "数据与开发",
    description: "Building with data and code.",
    keywords: ["Python", "Data", "API", "Engineering"],
    href: "/skills/data-development",
    doodle: "code",
  },
  {
    id: "creative-tools",
    number: "04",
    verb: "CREATE",
    title: "CREATIVE & TOOLS",
    titleZh: "创意与工具",
    description: "Tools I use to create and communicate.",
    keywords: ["AI Tools", "Design", "Video", "Photography"],
    href: "/skills/creative-tools",
    doodle: "palette",
  },
];

// ─── AI Product Page ───

export interface ProcessStep {
  step: string;
  title: string;
  titleZh: string;
  items: string[];
  thinking: string;
}

export const aiProductProcess: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    titleZh: "需求分析",
    items: ["场景理解", "竞品分析"],
    thinking: "Find the real problem behind the request.",
  },
  {
    step: "02",
    title: "DESIGN",
    titleZh: "功能设计",
    items: ["Workflow", "Agent 流程"],
    thinking: "Turn needs into clear product logic.",
  },
  {
    step: "03",
    title: "EVALUATE",
    titleZh: "模型评测",
    items: ["产品测试", "指标设计"],
    thinking: "Measure what actually works.",
  },
  {
    step: "04",
    title: "ITERATE",
    titleZh: "问题定位",
    items: ["效果优化", "场景落地"],
    thinking: "Improve through feedback and evidence.",
  },
];

export interface ToolkitItem {
  name: string;
  nameZh: string;
  keywords: string[];
}

export const aiProductToolkit: ToolkitItem[] = [
  { name: "Requirement Analysis", nameZh: "需求分析", keywords: ["User", "Scenario", "Pain Point", "Constraint"] },
  { name: "Product Design", nameZh: "产品设计", keywords: ["Function", "Interaction", "Priority", "Experience"] },
  { name: "AI Workflow", nameZh: "AI 工作流", keywords: ["Input", "Model", "Tool", "Memory", "Output"] },
  { name: "Model Evaluation", nameZh: "模型评测", keywords: ["Metric", "Test Case", "Failure", "Iteration"] },
  { name: "Competitive Analysis", nameZh: "竞品分析", keywords: ["Positioning", "Feature", "Experience", "Gap"] },
  { name: "Data Analysis", nameZh: "数据分析", keywords: ["Behavior", "Metric", "Insight", "Decision"] },
];

export interface NoteItem {
  title: string;
  description: string;
  type: string;
  date?: string;
  link?: string;
  tags?: string[];
  status: "coming-soon" | "published";
}

export const aiProductNotes: NoteItem[] = [
  {
    title: "PRD & Requirement Docs",
    description: "产品需求与功能设计",
    type: "文档",
    status: "coming-soon",
    tags: ["PRD", "需求文档"],
  },
  {
    title: "Evaluation & Test Plans",
    description: "AI 模型评测与测试方案",
    type: "文档",
    status: "coming-soon",
    tags: ["评测", "测试"],
  },
  {
    title: "Product Research",
    description: "竞品与产品研究",
    type: "研究",
    status: "coming-soon",
    tags: ["竞品分析", "研究"],
  },
];

// ─── AI Technology Page ───

export interface KnowledgeModule {
  number: string;
  title: string;
  items: string[];
}

export const aiKnowledgeMap: KnowledgeModule[] = [
  {
    number: "01",
    title: "LLM",
    items: [
      "Prompt Engineering",
      "Context Engineering",
      "Structured Output",
      "Function Calling",
      "Model Evaluation",
    ],
  },
  {
    number: "02",
    title: "VLM & Multimodal",
    items: [
      "Image Understanding",
      "Video Understanding",
      "Temporal Understanding",
      "Multimodal Reasoning",
    ],
  },
  {
    number: "03",
    title: "Agent",
    items: ["Tool Use", "Workflow", "Memory", "Multi-Agent", "Human-in-the-loop"],
  },
  {
    number: "04",
    title: "RAG & Memory",
    items: ["Chunking", "Embedding", "Retrieval", "Reranking", "Long / Short-term Memory"],
  },
];

export interface LearningLabItem {
  title: string;
  description: string;
  points: string[];
  notesLink?: string;
  githubLink?: string;
  status: "active" | "coming-soon";
}

export const learningLabItems: LearningLabItem[] = [
  {
    title: "LangGraph",
    description: "Agent orchestration",
    points: [
      "StateGraph",
      "Subgraph",
      "Memory",
      "Human-in-the-loop",
      "Time Travel",
      "Multi-Agent",
    ],
    status: "active",
  },
  {
    title: "GitNexus / CodeGraph",
    description: "Repository understanding",
    points: [
      "Tree-sitter",
      "Code Graph",
      "Repository Understanding",
      "Cross-file Relations",
      "Community Detection",
    ],
    status: "coming-soon",
  },
  {
    title: "DeepWiki",
    description: "RAG-based wiki generation",
    points: ["RAG", "Repository QA", "Wiki Generation", "Code Understanding"],
    status: "coming-soon",
  },
];

export interface ExploringItem {
  name: string;
  subtitle: string;
  status: "Exploring" | "Learning" | "Reading" | "Building Notes";
}

export const currentlyExploring: ExploringItem[] = [
  {
    name: "VLA",
    subtitle: "Vision · Language · Action",
    status: "Exploring",
  },
  {
    name: "MCP",
    subtitle: "Tools · Context · Agent",
    status: "Learning",
  },
  {
    name: "Agent Memory",
    subtitle: "Long-term · Short-term · Retrieval",
    status: "Reading",
  },
  {
    name: "GraphRAG",
    subtitle: "Graph · Retrieval · Reasoning",
    status: "Building Notes",
  },
];

// ─── Data & Development Page ───

export type TechIconName =
  | "python"
  | "pandas"
  | "numpy"
  | "sql"
  | "fastapi"
  | "redis"
  | "git"
  | "github"
  | "docker"
  | "vscode"
  | "conda"
  | "chatgpt"
  | "claude"
  | "figma"
  | "photoshop"
  | "illustrator"
  | "capcut";

export interface TechItem {
  name: string;
  icon?: TechIconName;
}

export const programmingItems: TechItem[] = [
  { name: "Python", icon: "python" },
  { name: "SQL", icon: "sql" },
];

export const dataItems: TechItem[] = [
  { name: "Pandas", icon: "pandas" },
  { name: "NumPy", icon: "numpy" },
  { name: "Data Analysis" },
];

export const backendItems: TechItem[] = [
  { name: "FastAPI", icon: "fastapi" },
  { name: "REST API" },
  { name: "SSE" },
  { name: "Async / Await" },
  { name: "Redis", icon: "redis" },
];

export const workflowItems: TechItem[] = [
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "Conda", icon: "conda" },
  { name: "VS Code", icon: "vscode" },
];

export const devNotes: NoteItem[] = [
  {
    title: "FastAPI Notes",
    description: "FastAPI 开发与接口设计",
    type: "笔记",
    status: "coming-soon",
    tags: ["FastAPI", "Backend"],
  },
  {
    title: "Redis Notes",
    description: "缓存、Session 与任务状态管理",
    type: "笔记",
    status: "coming-soon",
    tags: ["Redis", "Cache"],
  },
  {
    title: "API Design Notes",
    description: "RESTful API 与接口规范",
    type: "笔记",
    status: "coming-soon",
    tags: ["API", "Design"],
  },
  {
    title: "Backend Architecture",
    description: "轻量 AI 应用后端架构",
    type: "笔记",
    status: "coming-soon",
    tags: ["架构", "Backend"],
  },
];

// ─── Creative & Tools Page ───

export interface ToolGroup {
  title: string;
  titleZh: string;
  items: { name: string; icon?: TechIconName }[];
}

export const creativeToolGroups: ToolGroup[] = [
  {
    title: "AI Tools",
    titleZh: "AI 工具",
    items: [
      { name: "ChatGPT", icon: "chatgpt" },
      { name: "Claude", icon: "claude" },
    ],
  },
  {
    title: "Design",
    titleZh: "设计",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Illustrator", icon: "illustrator" },
    ],
  },
  {
    title: "Video & Content",
    titleZh: "视频与内容",
    items: [
      { name: "剪映 / CapCut", icon: "capcut" },
      { name: "Seedance" },
    ],
  },
];

export const visualSkills = [
  "Photography",
  "Video Editing",
  "Visual Storytelling",
  "Content Presentation",
];

export interface CreationItem {
  title: string;
  description: string;
  type: string;
  tools?: string[];
  date?: string;
  link?: string;
  status: "coming-soon" | "published";
}

export const selectedCreations: CreationItem[] = [
  {
    title: "Visual",
    description: "视觉设计与摄影作品",
    type: "visual",
    status: "coming-soon",
  },
  {
    title: "Video",
    description: "视频剪辑与内容创作",
    type: "video",
    status: "coming-soon",
  },
  {
    title: "AI Creation",
    description: "AI 生成内容与实验",
    type: "ai",
    status: "coming-soon",
  },
];
