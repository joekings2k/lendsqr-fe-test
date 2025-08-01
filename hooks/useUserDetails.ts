import { useQuery } from "@tanstack/react-query";
import { User } from "@/constants/types";
import { userStorage } from "@/utils/userStorage";

export const useUserDetails = (id: string) => {
  return useQuery<User | null>({
    queryKey: ["user", id],
    queryFn: async () => {
      // First try to get from localStorage
      const cachedUser = userStorage.getUserById(id);
      if (cachedUser) {
        return cachedUser;
      }

      // If not in cache, fetch from API/mock data
      try {
        const res = await fetch(`/mock/users.json`);
        if (res.ok) {
          const user = await res.json();
          userStorage.saveUser(user);
          return user;
        }
      } catch (error) {
        console.warn("Failed to fetch user from API:", error);
      }

      return null;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};