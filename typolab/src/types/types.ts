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
