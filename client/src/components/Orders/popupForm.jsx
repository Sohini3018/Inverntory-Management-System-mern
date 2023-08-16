import React, { useState } from "react";
import { Box, Input, Button, styled } from "@mui/material";

function PopupForm({ onSubmit, onCancel, onAddOrder }) {
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    date: "",
    customer: "",
    salesChannel: "",
    destination: "",
    items: "",
    status: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddOrder(newOrder); // Call the callback to add the new order
    onCancel(); // Close the form after submitting
  };

  const CancelButton = styled(Button)`
    margin: 2px 665px;
  `;

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="orderId"
          value={newOrder.orderId}
          placeholder="Order ID"
          onChange={handleInputChange}
        />
        <Input
          type="date"
          name="date"
          value={newOrder.date}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="customer"
          value={newOrder.customer}
          placeholder="Customer Name"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="salesChannel"
          value={newOrder.salesChannel}
          placeholder="Sales Channel"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="destination"
          value={newOrder.destination}
          placeholder="Destination"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="items"
          value={newOrder.items}
          placeholder="Number of Items"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="status"
          value={newOrder.status}
          placeholder="Order Status"
          onChange={handleInputChange}
        />

        <Button type="submit" variant="contained">
          Add Order
        </Button>
      </form>
      <CancelButton onClick={onCancel} variant="outlined">
        Cancel
      </CancelButton>
    </Box>
  );
}

export default PopupForm;
