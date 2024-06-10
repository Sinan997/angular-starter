export interface NavRoute {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: ChildNavRoute[];
}

export interface ChildNavRoute {
  routeLink: string;
  label: string;
  expanded?: boolean;
  items?: ChildNavRoute[];
}
