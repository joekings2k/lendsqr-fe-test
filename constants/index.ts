import {
  AuditIcon,
  Breifcase,
  DecisionModelsIcon,
  FeesIcon,
  FeesPricingIcon,
  GuarantorsIcon,
  KarmaIcon,
  LoanRequestsIcon,
  LoansIcon,
  PreferencesIcon,
  ReportsIcon,
  SavingsIcon,
  ServicesAccountIcon,
  ServicesIcon,
  SettlementIcon,
  TransactionIcon,
  UserIcon,
  WhitelistIcon,
} from "@/assets/svgs";
import { SidebarItems, UserInfo } from "./types";

export const sidebarItems: SidebarItems = [
  {
    group: "customers",
    groupLabel: "CUSTOMERS",
    items: [
      {
        label: "users",
        href: "/users",
        icon: UserIcon,
      },
      {
        label: "guarantors",
        href: "/guarantors",
        icon: GuarantorsIcon,
      },
      {
        label: "loans",
        href: "/loans",
        icon: LoansIcon,
      },
      {
        label: "decision models",
        href: "/decision-models",
        icon: DecisionModelsIcon,
      },
      {
        label: "savings",
        href: "/savings",
        icon: SavingsIcon,
      },
      {
        label: "loan requests",
        href: "/loan-requests",
        icon: LoanRequestsIcon,
      },
      {
        label: "whitelist",
        href: "/whitelist",
        icon: WhitelistIcon,
      },
      {
        label: "karma",
        href: "/karma",
        icon: KarmaIcon,
      },
    ],
  },
  {
    group: "businesses",
    groupLabel: "BUSINESSES",
    items: [
      {
        label: "Organization",
        href: "/organization",
        icon: Breifcase,
      },
      {
        label: "Loan Products",
        href: "/loans",
        icon: LoanRequestsIcon,
      },
      {
        label: "Savings Products",
        href: "/savings-products",
        icon: SavingsIcon,
      },
      {
        label: "Fees and Charges",
        href: "/fees",
        icon: FeesIcon,
      },
      {
        label: "Transactions",
        href: "/transactions",
        icon: TransactionIcon,
      },
      {
        label: "Services",
        href: "/services",
        icon: ServicesIcon,
      },
      {
        label: "Service Account",
        href: "/service-account",
        icon: ServicesAccountIcon,
      },
      {
        label: "Settlements",
        href: "/settlements",
        icon: SettlementIcon,
      },
      {
        label: "Reports",
        href: "/reports",
        icon: ReportsIcon,
      },
    ],
  },
  {
    group: "settings",
    groupLabel: "SETTINGS",
    items: [
      {
        label: "Preferences",
        href: "/preferences",
        icon: PreferencesIcon,
      },
      {
        label: "Fees and Pricing",
        href: "/fees-pricing",
        icon: FeesPricingIcon,
      },
      {
        label: "Audit Logs",
        href: "/audit-logs",
        icon: AuditIcon,
      },
    ],
  },
];

export const users: UserInfo[] = [
  {
    organization: "Lendsqr",
    username: "johndoe",
    email: "john@example.com",
    phone: "08012345678",
    dateJoined: "May 15, 2023",
    status: "Active",
  },
  {
    organization: "Irorun",
    username: "janedoe",
    email: "jane@example.com",
    phone: "08098765432",
    dateJoined: "Jun 01, 2023",
    status: "Pending",
  },
  {
    organization: "Lendsqr",
    username: "johndoe",
    email: "john@example.com",
    phone: "08012345678",
    dateJoined: "May 15, 2023",
    status: "Active",
  },
  {
    organization: "Irorun",
    username: "janedoe",
    email: "jane@example.com",
    phone: "08098765432",
    dateJoined: "Jun 01, 2023",
    status: "Pending",
  },
  {
    organization: "Lendsqr",
    username: "johndoe",
    email: "john@example.com",
    phone: "08012345678",
    dateJoined: "May 15, 2023",
    status: "Active",
  },
  {
    organization: "Irorun",
    username: "janedoe",
    email: "jane@example.com",
    phone: "08098765432",
    dateJoined: "Jun 01, 2023",
    status: "Pending",
  },
  // Add more
];

export const tableHeaders: string[] = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];
