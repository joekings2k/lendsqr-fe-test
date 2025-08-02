import { userStorage } from "@/utils/userStorage";
import { mockUser } from "@/constants";

describe("userStorage", () => {
  const USER_STORAGE_KEY = "lendsqr_users";

  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks()
  });

  describe("getUsers", () => {
    it("should return an empty array if no users are stored", () => {
      expect(userStorage.getUsers()).toEqual([]);
    });

    it("should return users if they are stored", () => {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify([mockUser]));
      expect(userStorage.getUsers()).toEqual([mockUser]);
    });
  });

  describe("getUserById", () => {
    it("should return null if no users are stored", () => {
      expect(userStorage.getUserById("1")).toBeNull();
    }); 

    it("should return null if user is not found", () => {   
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify([mockUser]));
      expect(userStorage.getUserById("2")).toBeNull();
    });

    it("should return user if found", () => {               
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify([mockUser]));
      expect(userStorage.getUserById(mockUser.id)).toEqual(mockUser);
    });
  });

  describe("setUsers", () => {
    it("should set users in localStorage", () => {
      userStorage.setUsers([mockUser]);
      expect(localStorage.getItem(USER_STORAGE_KEY)).toEqual(JSON.stringify([mockUser]));
    });
  });

  describe("saveUser", () => {
    it("should add user if not found", () => {
      userStorage.saveUser(mockUser);
      expect(localStorage.getItem(USER_STORAGE_KEY)).toEqual(JSON.stringify([mockUser]));
    });

    it("should update user if found", () => { 
      userStorage.saveUser(mockUser);
      const updatedUser = { ...mockUser, name: "Jane Doe" };
      userStorage.saveUser(updatedUser);
      expect(localStorage.getItem(USER_STORAGE_KEY)).toEqual(JSON.stringify([updatedUser]));
    });
  });

})