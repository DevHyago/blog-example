export interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  excerpt: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Introdução ao Next.js 16",
    content:
      "Next.js 16 traz muitas novidades, incluindo melhorias no App Router e suporte aprimorado para TypeScript. Neste artigo, exploramos as principais mudanças e como elas podem beneficiar seu projeto.",
    category: "Tecnologia",
    date: "2024-03-01",
    slug: "introducao-nextjs-16",
    excerpt:
      "Descubra as novidades do Next.js 16 e como elas impactam o desenvolvimento web.",
  },
  {
    id: 2,
    title: "Tendências em Desenvolvimento Web para 2024",
    content:
      "O ano de 2024 traz inovações como IA integrada, WebAssembly avançado e frameworks mais eficientes. Veja o que esperar no futuro do desenvolvimento web.",
    category: "Tecnologia",
    date: "2024-02-15",
    slug: "tendencias-desenvolvimento-web-2024",
    excerpt:
      "Explore as principais tendências que estão moldando o futuro do desenvolvimento web.",
  },
  {
    id: 3,
    title: "Como Criar um Blog com Next.js",
    content:
      "Aprenda passo a passo como construir um blog moderno usando Next.js, TypeScript e Tailwind CSS. Inclui dicas de SEO e otimização de performance.",
    category: "Tutorial",
    date: "2024-01-20",
    slug: "como-criar-blog-nextjs",
    excerpt:
      "Guia completo para criar seu próprio blog usando as melhores práticas do Next.js.",
  },
  {
    id: 4,
    title: "Benefícios do TypeScript em Projetos React",
    content:
      "TypeScript oferece segurança de tipos e melhor experiência de desenvolvimento. Neste artigo, discutimos os benefícios e como integrar TypeScript em projetos React.",
    category: "Programação",
    date: "2024-01-10",
    slug: "beneficios-typescript-react",
    excerpt:
      "Entenda por que TypeScript é essencial para projetos React escaláveis.",
  },
  {
    id: 5,
    title: "O Futuro da Inteligência Artificial",
    content:
      "A IA está revolucionando diversos setores. Explore como a inteligência artificial está impactando o desenvolvimento de software e o que esperar nos próximos anos.",
    category: "IA",
    date: "2024-02-28",
    slug: "futuro-inteligencia-artificial",
    excerpt:
      "Uma visão sobre como a IA está transformando o mundo da tecnologia.",
  },
  {
    id: 6,
    title: "Dicas para Otimizar Performance em React",
    content:
      "Performance é crucial em aplicações React. Aprenda técnicas como memoização, lazy loading e otimização de re-renders para melhorar a experiência do usuário.",
    category: "Programação",
    date: "2024-03-05",
    slug: "dicas-otimizar-performance-react",
    excerpt:
      "Melhore a performance de suas aplicações React com essas dicas práticas.",
  },
];

export const categories = Array.from(
  new Set(newsData.map((item) => item.category)),
);
