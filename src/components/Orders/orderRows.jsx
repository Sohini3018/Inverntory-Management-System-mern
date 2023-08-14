import React from "react";
import { TableRow, TableCell } from "@mui/material";

function OrderRow({ order }) {
  return (
    <TableRow>
      <TableCell>{order.orderId}</TableCell>
      <TableCell>{order.date}</TableCell>
      <TableCell>{order.customer}</TableCell>
      <TableCell>{order.salesChannel}</TableCell>
      <TableCell>{order.destination}</TableCell>
      <TableCell>{order.items}</TableCell>
      <TableCell>{order.status}</TableCell>
    </TableRow>
  );
}

export default OrderRow;
