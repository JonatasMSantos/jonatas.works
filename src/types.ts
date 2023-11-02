import { AstroComponentFactory } from 'astro/dist/runtime/server';

export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: AstroComponentFactory;
  content?: string;

  readingTime?: number;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface Item {
  title?: string;
  url?: string;
  name?: string;
  description?: string;
  subitems?: Array<Item>;
  labels?: Array<Item>;
  flatLabels?: Array<string>;
  completed?: boolean;
  color?: string;
  icon?: string;
  show?: boolean;
  idChecklists?: Array<string>;
}

export interface TrelloData {
  id?: string;
  name: string;
  cards?: TrelloData[];
  state?: string;
  color?: string;
  idChecklists?: string[];
  checkItems: TrelloData[];
  labels: TrelloData[];
}
