export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
};

export type Skill = {
  name: string;
  level: number;
  icon: "html" | "css" | "javascript" | "typescript" | "react" | "next" | "tailwind" | "node" | "express" | "postgres" | "mongodb" | "git" | "docker" | "figma" | "linux" | "github";
};

export type SkillCategory = {
  title: "Frontend" | "Backend" | "Ferramentas/DevOps" | "Outros";
  skills: Skill[];
};

export type Education = {
  course: string;
  institution: string;
  period: string;
  description: string;
};

export type Certificate = {
  name: string;
  institution: string;
  date: string;
  image: string;
};

export type Hobby = {
  name: string;
  description: string;
  icon: "camera" | "game" | "book" | "music" | "sport";
  accent: string;
};

export const profile = {
  name: "Seu Nome",
  role: "Desenvolvedor Full Stack",
  introduction:
    "Crio experiências digitais rápidas, acessíveis e bonitas, transformando problemas complexos em soluções simples.",
  email: "contato@seudominio.com",
  phone: "+55 (11) 99999-9999",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ] satisfies SocialLink[],
};

export const projects: Project[] = [
  {
    title: "E-commerce Moderno",
    description: "Loja completa com catálogo, filtros e experiência de checkout otimizada.",
    image: "/images/project-ecommerce.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    title: "Dashboard Analytics",
    description: "Painel administrativo com métricas em tempo real e visualizações claras.",
    image: "/images/project-dashboard.svg",
    technologies: ["React", "Chart.js", "Node.js"],
    demoUrl: "#",
    codeUrl: "https://github.com/",
  },
  {
    title: "App de Produtividade",
    description: "Organizador de tarefas colaborativo com projetos e prioridades.",
    image: "/images/project-productivity.svg",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    demoUrl: "#",
    codeUrl: "https://github.com/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95, icon: "html" },
      { name: "CSS", level: 92, icon: "css" },
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "TypeScript", level: 88, icon: "typescript" },
      { name: "React", level: 90, icon: "react" },
      { name: "Next.js", level: 86, icon: "next" },
      { name: "Tailwind CSS", level: 92, icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: "node" },
      { name: "Express", level: 82, icon: "express" },
      { name: "PostgreSQL", level: 78, icon: "postgres" },
      { name: "MongoDB", level: 74, icon: "mongodb" },
    ],
  },
  {
    title: "Ferramentas/DevOps",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "github" },
      { name: "Docker", level: 72, icon: "docker" },
      { name: "Linux", level: 80, icon: "linux" },
      { name: "Figma", level: 76, icon: "figma" },
    ],
  },
  {
    title: "Outros",
    skills: [
      { name: "Clean Code", level: 88, icon: "git" },
      { name: "Acessibilidade", level: 84, icon: "figma" },
      { name: "Metodologias Ágeis", level: 86, icon: "github" },
    ],
  },
];

export const education: Education[] = [
  {
    course: "Bacharelado em Ciência da Computação",
    institution: "Universidade / Instituto",
    period: "2022 - 2026",
    description: "Foco em engenharia de software, estruturas de dados e desenvolvimento web.",
  },
  {
    course: "Curso Técnico em Informática",
    institution: "Escola Técnica",
    period: "2019 - 2021",
    description: "Fundamentos de programação, redes, banco de dados e suporte técnico.",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Desenvolvimento Web Full Stack",
    institution: "Instituição de Tecnologia",
    date: "2025",
    image: "/images/certificate.svg",
  },
  {
    name: "Arquitetura de Microsserviços",
    institution: "Plataforma de Cursos",
    date: "2024",
    image: "/images/certificate.svg",
  },
  {
    name: "UX e Interface para a Web",
    institution: "Escola de Design",
    date: "2024",
    image: "/images/certificate.svg",
  },
];

export const hobbies: Hobby[] = [
  { name: "Fotografia", description: "Registro paisagens, pessoas e detalhes do cotidiano.", icon: "camera", accent: "from-pink-500/20 to-orange-500/20" },
  { name: "Games", description: "Exploro mundos e aprendo com design e narrativas.", icon: "game", accent: "from-violet-500/20 to-cyan-500/20" },
  { name: "Leitura", description: "Tecnologia, ficção científica e desenvolvimento pessoal.", icon: "book", accent: "from-emerald-500/20 to-lime-500/20" },
  { name: "Música", description: "Música para criar, relaxar e encontrar novas ideias.", icon: "music", accent: "from-blue-500/20 to-fuchsia-500/20" },
  { name: "Esportes", description: "Manter o corpo ativo ajuda a manter a mente equilibrada.", icon: "sport", accent: "from-amber-500/20 to-red-500/20" },
];
