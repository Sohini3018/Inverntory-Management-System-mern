import React from "react";
import {
  Box,
  Card,
  Typography,
  styled,
  CardContent,
  CardActions,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddIcon from "@mui/icons-material/Add";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  height: 181px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function Dashboard(props) {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f3f6f9", height: "739px" }}
    >
      <DrawerHeader />
      <Container>
        <Wrapper>
          <Card sx={{ height: "108px", width: "300px" }}>
            <CardContent>
              <CurrencyRupeeIcon />
              <AddIcon />
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Today's Sales
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ height: "108px", width: "300px" }}>
            <CardContent>
              <CurrencyRupeeIcon />
              <AddIcon />
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Today's Total Orders
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ height: "108px", width: "300px" }}>
            <CardContent>
              <CurrencyRupeeIcon />
              <AddIcon />
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Today's Revenue
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ height: "108px", width: "300px" }}>
            <CardContent>
              <CurrencyRupeeIcon />
              <AddIcon />
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Today's Customers
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Wrapper>
        <Wrapper>
          <Card sx={{ width: "60%", height: "300px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Today's Data
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ width: "30%", height: "300px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Top Selling Products
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Wrapper>
      </Container>
    </Box>
  );
}

export default Dashboard;
