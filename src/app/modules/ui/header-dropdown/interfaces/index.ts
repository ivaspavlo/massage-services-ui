
export interface IHeaderDropdownMenu {
  title: string;
  href?: string;
  items?: IHeaderMenuItem[];
}

export interface IHeaderMenuItem {
  href: string;
  name: string;
}
