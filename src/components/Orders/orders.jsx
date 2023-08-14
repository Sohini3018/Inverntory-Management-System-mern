import React from "react";
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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Select from "react-dropdown-select";
import OrderRow from "./orderRows";

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

const Options = styled(Box)`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const CalendarBox = styled(Box)`
  border: 1.5px solid #bdb9b9;
  border-radius: 1.5px;
  width: 49px;
`;

function Orders() {
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

  const orders = [
    {
      orderId: "123",
      date: "2023-08-15",
      customer: "John Doe",
      salesChannel: "Online",
      destination: "USA",
      items: "3",
      status: "Processing",
    },
    {
      orderId: "124",
      date: "2023-08-16",
      customer: "Jane Smith",
      salesChannel: "In-store",
      destination: "Canada",
      items: "5",
      status: "Shipped",
    },
    {
      orderId: "125",
      date: "2023-08-15",
      customer: "Tithi Deb",
      salesChannel: "In-store",
      destination: "India",
      items: "10",
      status: "Delivered",
    },
    // ... Add more orders here
  ];
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Wrapper>
        <Typography fontSize={25}>Orders</Typography>
        <Buttons>
          <OrderButton variant="outlined">Export To Excel</OrderButton>
          <OrderButton variant="outlined">Import Orders</OrderButton>
          <OrderButton variant="contained">
            <AddIcon />
            New Orders
          </OrderButton>
        </Buttons>
      </Wrapper>
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

        <Options>
          <CalendarBox>
            <CalendarMonthIcon
              style={{ position: "relative", top: "7px", left: "10px" }}
            />
          </CalendarBox>

          <Select
            options={options}
            placeholder="Sales"
            style={{ width: "130px", height: "40px" }}
            onChange={(values) => this.setValues(values)}
          />
          <Select
            options={options}
            placeholder="Status"
            style={{ width: "130px", height: "40px" }}
            onChange={(values) => this.setValues(values)}
          />
          <Select
            options={options}
            placeholder="Filter"
            style={{ width: "130px", height: "40px" }}
            onChange={(values) => this.setValues(values)}
          />
        </Options>
      </Wrapper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Sales Channel</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderRow key={order.orderId} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Orders;
