"use client";
import {
  ActivateIcon,
  BlacklistIcon,
  FilterIcon,
  VerticalDotsIcons,
  ViewIcon,
} from "@/assets/svgs";
import { User, UserInfo } from "@/constants/types";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/users.module.scss";
import DropdownPortal from "@/components/portal/DropdownPortal";
import { tableHeaders } from "@/constants";
import Filtercomponent from "./Filtercomponet";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

interface TableProps {
  data?: Partial<User>[];
  currentPage: number;
  itemsPerPage: number;
}

function UsersTable({ data = [], currentPage, itemsPerPage }: TableProps) {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const iconRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      return;
    }

    const icon = iconRefs.current[index];
    if (icon) {
      const rect = icon.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setOpenIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const dropdown = dropdownRef.current;
      const clickedInsideDropdown = dropdown?.contains(event.target as Node);
      const clickedOnIcon = iconRefs.current[openIndex ?? -1]?.contains(
        event.target as Node
      );

      if (!clickedInsideDropdown && !clickedOnIcon) {
        setOpenIndex(null);
      }
    };

    if (openIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex]);

  return (

    <>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {tableHeaders.map((header, idx) => (
                <th key={idx}>
                  <div
                    className={styles.tableHead}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFilterOpen(!isFilterOpen);
                    }}
                  >
                    <p>{header}</p>
                    <FilterIcon width={16} height={16} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              ?.slice(startIndex, endIndex)
              .map((user: Partial<User>, idx: number) => (
                <tr key={idx}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <span
                      className={`${styles.status} ${
                        styles[user?.status?.toLowerCase() ?? ""]
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button
                      ref={(ref) => {
                        iconRefs.current[idx] = ref;
                      }}
                      className={styles.moreBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggle(idx);
                      }}
                    >
                      <VerticalDotsIcons width={20} height={20} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {openIndex !== null && (
        <DropdownPortal>
          <div
            ref={dropdownRef}
            className={styles.dropdownMenu}
            style={{
              position: "absolute",
              top: dropdownPosition.top - 30,
              left: dropdownPosition.left -100,
              zIndex: 999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.dropdownItem}
              onClick={() =>
                router.push(`/${data?.slice(startIndex, endIndex)[openIndex]?.id}`)
              }
            >
              <ViewIcon width={16} height={16} />
              <p>View Details</p>
            </button>
            <button className={styles.dropdownItem}>
              <BlacklistIcon width={16} height={16} />
              <p>Blacklist User</p>
            </button>
            <button className={styles.dropdownItem}>
              <ActivateIcon width={16} height={16} />
              <p>Activate User</p>
            </button>
          </div>
        </DropdownPortal>
      )}

      {isFilterOpen && (
        <DropdownPortal>
          <div
            className={styles.filterDropdown}
            onClick={(e) => e.stopPropagation()}
          >
            <Filtercomponent />
          </div>
        </DropdownPortal>
      )}
    </>
  );
}

export default UsersTable;
