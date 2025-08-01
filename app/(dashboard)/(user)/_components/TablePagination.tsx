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
   const range = 2;

   if (totalPages <= 7) {
     for (let i = 1; i <= totalPages; i++) {
       pages.push(i);
     }
   } else {
     if (currentPage <= range + 2) {
       for (let i = 1; i <= 5; i++) pages.push(i);
       pages.push("...", totalPages);
     } else if (currentPage >= totalPages - (range + 1)) {

       pages.push(1, "...");
       for (let i = totalPages - 2; i <= totalPages; i++) {
         pages.push(i);
       }
     } else {
       // Middle pages
       pages.push(1, "...");
       for (let i = currentPage - range; i <= currentPage + range; i++) {
         pages.push(i);
       }
       pages.push("...", totalPages);
     }
   }

   return [...new Set(pages)];
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
              key={pg}
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
