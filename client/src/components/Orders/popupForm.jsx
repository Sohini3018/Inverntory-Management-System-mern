import React, { useState } from "react";
import { Box, Input, Button, styled } from "@mui/material";

function PopupForm({ onHandleSubmit, onCancel, onAddOrder }) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const orderItem = {
        type: "return",
        orderId: newOrder.orderId,
        customer: newOrder.customer,
        salesChannel: newOrder.salesChannel,
        destination: newOrder.destination,
        amount: newOrder.items,
        date: newOrder.date,
        details: `Customer: ${newOrder.customer}`,
        status: newOrder.status,
      };
      // Make an HTTP POST request to your backend API
      const response = await fetch("http://localhost:5000/add-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItem), // Send the new order data
      });

      if (response.ok) {
        console.log("Order added successfully!" + newOrder.orderId);
        // Store the new order in local storage
        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const updatedOrders = [...existingOrders, orderItem];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));

        onAddOrder(orderItem);
      } else {
        console.error("Error adding order:", response.status);
      }
    } catch (error) {
      console.error("Error adding order:", error);
    }

    if (onHandleSubmit) {
      onHandleSubmit(); // Call the callback for submitting the form if it's defined
    }

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
          type="number"
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
