"use client";
// DropdownPortal.tsx
import { createPortal } from "react-dom";
import React from "react";

const DropdownPortal = ({ children }: { children: React.ReactNode }) => {
  if (typeof window === "undefined") return null;

  const dropdownRoot = document.getElementById("dropdown-root");
  if (!dropdownRoot) return null;

  return createPortal(children, dropdownRoot);
};

export default DropdownPortal;
