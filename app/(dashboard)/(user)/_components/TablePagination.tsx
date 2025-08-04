import React, { useMemo } from "react";
import styles from "@/styles/users.module.scss";
import { showingOptions } from "@/constants";
interface TablePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
}

function TablePagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}: TablePaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = useMemo(() => {
    let pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);    
      if (currentPage <= 4) {
        startPage = 2;
        endPage = Math.min(5, totalPages - 1); 
      }
      if (currentPage >= totalPages - 3) {
        startPage = Math.max(2, totalPages - 4); 
        endPage = totalPages - 1; 
      }
      if (startPage > 2) {
        pages.push("...");
      }
      if (startPage <= endPage) {
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
      }
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  }, [totalPages, currentPage]);
  return (
    <div className={styles.pagination}>
      <div className={styles.showing}>
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {showingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span>
          out of <strong>{totalItems}</strong>
        </span>
      </div>

      <div className={styles.pageNumbers}>
        <button
          className={styles.arrow}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt;
        </button>
        {pageNumbers.map((pg, idx) =>
          typeof pg === "string" ? (
            <button key={idx} disabled className={styles.ellipsis}>
              {pg}
            </button>
          ) : (
            <button
              key={idx}
              className={pg === currentPage ? styles.active : ""}
              onClick={() => onPageChange(pg)}
            >
              {pg}
            </button>
          )
        )}

        <button
          className={styles.arrow}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default TablePagination;
