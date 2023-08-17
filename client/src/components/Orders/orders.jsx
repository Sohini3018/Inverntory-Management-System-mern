import { React, useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  styled,
  alpha,
  InputBase,
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import OrderRow from "./orderRows";
import PopupForm from "./popupForm";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  height: "44px",
  border: "0.5px solid gray",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Buttons = styled(Box)`
  width: 600px;
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled(Box)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.05px solid #dacdcd;
  align-items: center;
`;
const OrderButton = styled(Button)`
  text-transform: none;
  height: 50px;
  width: 188px;
`;

function Orders() {
  const [orders, setOrders] = useState([]);
  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Load orders from local storage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleDelete = async (orderId) => {
    try {
      // Make an HTTP DELETE request to your backend API to delete the order
      const response = await fetch(
        `http://localhost:5000/delete-order/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Order deleted successfully!" + orderId);
        // Remove the order from the state
        const updatedOrders = orders.filter(
          (order) => order.orderId !== orderId
        );
        setOrders(updatedOrders);

        // Remove the order from local storage
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
      } else {
        console.error("Error deleting order:", response.status);
      }
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Wrapper>
        <Typography fontSize={25}>Orders</Typography>
        <Buttons>
          <OrderButton variant="outlined">Export To Excel</OrderButton>
          <OrderButton variant="outlined">Import Orders</OrderButton>
          <OrderButton
            variant="contained"
            onClick={() => {
              setIsFormOpen(!isFormOpen);
            }}
          >
            <AddIcon />
            New Orders
          </OrderButton>
        </Buttons>
      </Wrapper>

      {isFormOpen && (
        <Wrapper>
          <PopupForm
            onCancel={() => {
              setIsFormOpen(!isFormOpen);
            }}
            onAddOrder={addOrder}
          />
        </Wrapper>
      )}

      <Wrapper>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Order "
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Wrapper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>

              <TableCell>Destination</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderRow
                key={order.orderId}
                order={order}
                onDeleteOrder={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Orders;
