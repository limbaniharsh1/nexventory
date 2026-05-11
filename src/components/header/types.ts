export interface NestedSubItem {
  title: string;
  path: string;
}

export interface SubItem {
  title: string;
  path: string;
  parentId: string;
  nestedSubItems?: NestedSubItem[];
}

export interface HeaderItem {
  id: string;
  title: string;
  path?: string;
  subItems?: SubItem[];
}
