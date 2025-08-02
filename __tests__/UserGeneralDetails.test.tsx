import React from "react";
import { render, screen, within } from "@testing-library/react";
// Adjust path
import { User } from "@/constants/types";
import UserGeneralDetails from "@/app/(dashboard)/(user)/[id]/_components/UserGeneralDetails";
import { mockUser } from "@/constants";

describe("UserGeneralDetails", () => {
  it("renders all sections and data correctly", () => {
    render(<UserGeneralDetails user={mockUser} />);

    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByText("Education and Employment")).toBeInTheDocument();
    expect(screen.getByText("Guarantor")).toBeInTheDocument();

     expect(screen.getByText("John Doe")).toBeInTheDocument();
  
     expect(screen.getByText(mockUser.phoneNumber)).toBeInTheDocument();


     if (mockUser.guarantor) {
       const guarantorFullNameLabels = screen.getAllByText("FULL NAME");
       expect(guarantorFullNameLabels.length).toBe(2); // One in personal info, one in guarantor
       expect(
         screen.getByText(mockUser.guarantor.fullName)
       ).toBeInTheDocument();
     }
  });

  it("handles missing optional sections gracefully", () => {
    const userWithoutOptionalFields: User = {
      ...mockUser,
      account: null,
      profile: null,
      education: null,
      socials: null,
      guarantor: null,
    };

    render(<UserGeneralDetails user={userWithoutOptionalFields} />);

    expect(screen.getByText("Education and Employment")).toBeInTheDocument();
    expect(screen.getByText("Socials")).toBeInTheDocument();
    expect(screen.getByText("Guarantor")).toBeInTheDocument();

    expect(screen.queryByText("EMPLOYMENT STATUS")).not.toBeInTheDocument();
    expect(screen.queryByText("TWITTER")).not.toBeInTheDocument();
    expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
  });
});
