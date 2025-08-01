import { User } from "@/constants/types";

export const getUserFullName = (user: User) => {
  return `${user.profile?.firstName} ${user.profile?.lastName}`;
};
