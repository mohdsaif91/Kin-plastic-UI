import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { getEmail } from "../../Redux/Thunks/AdminEmail";

const emailColumn = [
  {
    id: "emailDate",
    label: "Inquery Date",
    align: "center",
    minWidth: 30,
    format: (value) => value,
  },
  {
    id: "senderName",
    label: "Sender Name",
    align: "center",
    minWidth: 30,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "message",
    label: "Message",
    align: "center",
    width: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 90,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "Phone",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
export default function Inquery() {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);

  const dispatch = useDispatch();
  const emailData = useSelector((state) => state.AdminEmail);

  useEffect(() => {
    if (!emailData.inqueryEmail) {
      dispatch(getEmail());
    }
    if (emailData.inqueryEmail) {
      setTableData(emailData.inqueryEmail);
    }
    // eslint-disable-next-line
  }, [emailData]);

  const getDateAndTime = (dateTime) => {
    return (
      <div>{`${moment(dateTime).format("DD/MM/YYYY")} ${moment(dateTime).format(
        "hh:mm A"
      )}`}</div>
    );
  };

  return (
    <Paper className={`${classes.root} admin-home`}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="">
              {emailColumn.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => {
              return (
                <TableRow
                  className={`${index % 2 === 0 && "cell-color"}`}
                  hover
                  tabIndex={-1}
                  key={row.code}
                >
                  {emailColumn.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "emailDate"
                          ? getDateAndTime(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
