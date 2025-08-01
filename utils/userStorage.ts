import { User } from "@/constants/types";

const USER_STORAGE_KEY = "lendsqr_users";

export const userStorage = {
  getUsers(): User[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  getUserById(id: string): User | null {
    const users = this.getUsers();
    return users.find(user => user.id === id) || null;
  },

  setUsers(users: User[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
  },

  saveUser(user: User): void {
    const users = this.getUsers();
    const existingIndex = users.findIndex(u => u.id === user.id);
    
    if (existingIndex >= 0) {
      users[existingIndex] = user;
    } else {
      users.push(user);
    }
    
    this.setUsers(users);
  }
};