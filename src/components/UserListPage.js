import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersList, deleteUser } from "../services/Services";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsersList().then((data) => {
      setUsers(data);
    });
  }, []);

  const navigateToCreatePage = () => {
    navigate("/user/create");
  };

  const navigateToEditPage = (id) => {
    navigate(`/user/${id}`);
  };

  const deleteUserById = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const StyledTable = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <>
      <Button variant="contained" sx={{margin: '2% 5% 2% 45%'}} onClick={navigateToCreatePage}>Create new user</Button>

      <TableContainer
        sx={{ minWidth: 650, maxWidth: 1500, marginLeft: "5.5%" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650, maxWidth: 1500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTable align="center">Id</StyledTable>
              <StyledTable align="center">Name</StyledTable>
              <StyledTable align="center">Surname</StyledTable>
              <StyledTable align="center">Phone</StyledTable>
              <StyledTable align="center"></StyledTable>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row" align="center">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.surname}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => {navigateToEditPage(user.id)}}>edit</Button>
                  <Button color="error" onClick={() => {deleteUserById(user.id)}}>delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
