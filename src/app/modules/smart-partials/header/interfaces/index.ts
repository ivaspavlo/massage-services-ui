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

export interface IDiscount {
  name: string;
  href: string;
}

export interface IService {
  id: string;
  name: string;
  href: string;
}
