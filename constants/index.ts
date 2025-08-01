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
import { SidebarItems, UserDetailSection, UserInfo } from "./types";

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

export const userDetails: UserDetailSection[] = [
  {
    section: "Personal Information",
    data: [
      { label: "FULL NAME", value: "Grace Effiom" },
      { label: "PHONE NUMBER", value: "07060780922" },
      { label: "EMAIL ADDRESS", value: "grace@gmail.com" },
      { label: "BVN", value: "07060780922" },
      { label: "GENDER", value: "Female" },
      { label: "MARITAL STATUS", value: "Single" },
      { label: "CHILDREN", value: "None" },
      { label: "TYPE OF RESIDENCE", value: "Parent's Apartment" },
    ],
  },
  {
    section: "Education and Employment",
    data: [
      { label: "LEVEL OF EDUCATION", value: "B.Sc" },
      { label: "EMPLOYMENT STATUS", value: "Employed" },
      { label: "SECTOR OF EMPLOYMENT", value: "FinTech" },
      { label: "DURATION OF EMPLOYMENT", value: "2 years" },
      { label: "OFFICE EMAIL", value: "grace@lendsqr.com" },
      { label: "MONTHLY INCOME", value: "N200,000.00 - N400,000.00" },
      { label: "LOAN REPAYMENT", value: "40,000" },
    ],
  },
  {
    section: "Socials",
    data: [
      { label: "TWITTER", value: "@grace_effiom" },
      { label: "FACEBOOK", value: "Grace Effiom" },
      { label: "INSTAGRAM", value: "@grace_effiom" },
    ],
  },
  {
    section: "Guarantor",
    data: [
      { label: "FULL NAME", value: "Debby Ogana" },
      { label: "PHONE NUMBER", value: "07060780922" },
      { label: "EMAIL ADDRESS", value: "debby@gmail.com" },
      { label: "RELATIONSHIP", value: "Sister" },
    ],
  },
];
