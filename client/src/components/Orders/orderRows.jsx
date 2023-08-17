import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

function OrderRow({ order, onDeleteOrder }) {
  return (
    <TableRow>
      <TableCell>{order.orderId}</TableCell>
      <TableCell>{order.date}</TableCell>
      <TableCell>{order.customer}</TableCell>

      <TableCell>{order.destination}</TableCell>
      <TableCell>{order.products}</TableCell>
      <TableCell>{order.amount}</TableCell>
      <TableCell>{order.status}</TableCell>
      <TableCell>
        <Button onClick={() => onDeleteOrder(order.orderId)}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}

export default OrderRow;
