type PagesConfig = {
  name: Pages;
  path: string;
  isPrivate: boolean;
};

const pages = ['sign-in', 'sign-up', 'dashboard'] as const;
type PagesTuple = typeof pages;
export type Pages = PagesTuple[number];

const pagesConfig: PagesConfig[] = [
  {
    name: 'sign-in',
    path: '/',
    isPrivate: false,
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    isPrivate: false,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    isPrivate: true,
  },
];

export default pagesConfig;
