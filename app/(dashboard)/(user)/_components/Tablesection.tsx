"use client";
import React, { useEffect } from "react";
import UsersTable from "./UsersTable";
import TablePagination from "./TablePagination";
import { User, UserInfo } from "@/constants/types";
import { useQuery } from "@tanstack/react-query";
import { showingOptions } from "@/constants";
import { userStorage } from "@/utils/userStorage";

function Tablesection() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(showingOptions[0].value);
  
  const {
      data: users,
      isLoading,
      isError,
    } = useQuery<User[]>({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch("/mock/users.json");
        if (!res.ok) throw new Error("Failed to fetch users");
        const fetchedUsers = await res.json();
        return fetchedUsers;
      },
      initialData:userStorage.getUsers(),
    });

     useEffect(() => {
       if (users) {
         userStorage.setUsers(users);
       }
     }, [users]);

  return (
    <div style={{overflowX:"auto"}}>
      <UsersTable data={users} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <TablePagination
        totalItems={users?.length ?? 0}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => {
      setCurrentPage(page);
        }}
        onItemsPerPageChange={(count) => {
          setItemsPerPage(count);
        }}
      />

    </div>
  )
}

export default Tablesection