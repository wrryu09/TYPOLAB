// mainPage
export interface SortCriteria {
  Trending: "trending";
  Popular: "popularity";
  Newest: "date";
  Name: "alpha";
}

export interface FontInfoType {
  items?: [
    {
      family: string;
      variants: string[];
      subsets: string[];
      version: string;
      lastModified: string;
      files: {};
      category: string;
      kind: string;
      menu: string;
    }
  ];
}
export interface FontPageType {
  family: string;
  displayName?: null;
  coverage: {};
  fonts: {};
  axes: {}[];
  stats: {
    requests: {};
    country_breakdown: {};
    integrations_count: number;
  };
  description: string;
  license: string;
  designers: {
    name: string;
    bio: string;
    imageUrl: string;
  }[];
  fontUses: null;
  category: string;
  stroke: string;
  classifications: [string][];
  lastModified: string;
  size: number;
  updateNotes?: [];
  isNoto: boolean;
  colorCapabilities?: [];
  primaryScript: string;
  primaryLanguage: string;
  article?: null;
  languages: [string][];
  minisiteUrl?: string;
}

// searchPage
export type FontSetArr = { family: string; weight: string; size: number }[];
export interface FontSet {
  family: string;
  weight: string;
  size: number;
}
