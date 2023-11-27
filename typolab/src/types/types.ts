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
  alias?: string;
}

// pairPage
export interface FontNameNVar {
  name: string;
  variants: string[];
}
export interface FontNameVarSet {
  name: string;
  variants: string;
}
export interface InferredFont {
  fontName: string;
  fontVar: string;
  fontScore: number;
}
export interface FontInfoFromDB {
  // _id: new ObjectId('654cc9bc7c666d554bc7b076'),
  family: string;
  displayName: string;
  coverage: object;
  fonts: object;
  axes: string[];
  description: string;
  license: string;
  designers: { name: string; bio: string; imageUrl: string }[];
  fontUses: string;
  category: string;
  stroke: string;
  classifications: string[];
  lastModified: string;
  size: number;
  isNoto: boolean;
  colorCapabilities: string[];
  primaryScript: string;
  primaryLanguage: string;
  article: string;
  variants: string[];
  subsets: string[];
  files: Object;
  kind: string;
  menu: string;
  linked: string[];
  sampleText: Object;
}

// FontCard
export interface FontInfo {
  family: string;
  category: string;
  kind: string;
  menu: string;
  link: string;
}
