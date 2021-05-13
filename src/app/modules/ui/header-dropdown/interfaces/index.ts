
export interface IHeaderDropdownMenu {
  name: string;
  href?: string;
  icon?: string;
  items?: IHeaderMenuItem[];
}

export interface IHeaderMenuItem {
  href: string;
  name: string;
  icon?: string;
}
