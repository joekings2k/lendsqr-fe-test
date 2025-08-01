interface SidebarItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface SidebarGroup {
  group: string;
  groupLabel: string;
  items: SidebarItem[];
}

export type SidebarItems = SidebarGroup[];

export interface UserInfo {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

export interface UserDetailItem {
  label: string;
  value: string;
}

export interface UserDetailSection {
  section: string;
  data: UserDetailItem[];
}