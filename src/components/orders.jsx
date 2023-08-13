import React from "react";
import {
  Box,
  Button,
  Typography,
  styled,
  alpha,
  InputBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Select from "react-dropdown-select";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
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
  display: flex;
  justify-content: space-between;
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
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Wrapper>
        <Typography fontSize={20}>Orders</Typography>
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
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Options>
          <CalendarMonthIcon />
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
    </Box>
  );
}

export default Orders;
