// Adjust path if different
import { User } from "@/constants/types";
import { getUserFullName } from "@/helper";

describe("getUserFullName", () => {
  it("returns full name when both firstName and lastName are present", () => {
    const user: User = {
      id: "1",
      profile: {
        firstName: "John",
        lastName: "Doe",
      },
    } as User;

    expect(getUserFullName(user)).toBe("John Doe");
  });

  it("returns 'undefined undefined' if firstName and lastName are missing", () => {
    const user: User = {
      id: "2",
      profile: {} as any,
    } as User;

    expect(getUserFullName(user)).toBe("undefined undefined");
  });

  it("returns 'undefined undefined' if profile is missing", () => {
    const user: User = {
      id: "3",
    } as User;

    expect(getUserFullName(user)).toBe("undefined undefined");
  });

  it("returns correct name if only firstName is present", () => {
    const user: User = {
      id: "4",
      profile: {
        firstName: "Jane",
      } as any,
    } as User;

    expect(getUserFullName(user)).toBe("Jane undefined");
  });
});
