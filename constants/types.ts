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
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
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

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  profile: UserProfile;
  account: AccountDetails;
  education: EducationDetails;
  socials: SocialLinks;
  guarantor: Guarantor;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  gender: "Male" | "Female";
  avatar: string;
  bvn: string;
  address: string;
  currency: "₦" | string;
}

export interface AccountDetails {
  balance: string;
  accountNumber: string;
  bankName: string;
}

export interface EducationDetails {
  level: "B.Sc" | "M.Sc" | "HND" | "SSCE" | "Ph.D" | string;
  employmentStatus: "Employed" | "Unemployed" | "Self-Employed" | string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: [string, string];
  loanRepayment: string;
}

export interface SocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phoneNumber: string;
  gender: "Male" | "Female";
  address: string;
}