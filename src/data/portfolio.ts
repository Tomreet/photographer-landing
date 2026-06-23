export interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: 'portfolio/01.jpg', title: 'Утренний свет', category: 'Портрет' },
  { id: 2, src: 'portfolio/02.jpg', title: 'Геометрия города', category: 'Архитектура' },
  { id: 3, src: 'portfolio/03.jpg', title: 'Танец теней', category: 'Художественная' },
  { id: 4, src: 'portfolio/04.jpg', title: 'Взгляд', category: 'Портрет' },
  { id: 5, src: 'portfolio/05.jpg', title: 'Шёпот волн', category: 'Пейзаж' },
];