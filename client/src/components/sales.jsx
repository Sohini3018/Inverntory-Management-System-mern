import React, { useState, useEffect } from "react";
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
function Sales(props) {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/sales-stats");
        const data = await response.json();
        setSalesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
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
              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                width={126}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {salesData.totalRevenue}
                </Typography>
              </Box>

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
              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                width={126}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {salesData.orderCount}
                </Typography>
              </Box>
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
              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                width={126}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {salesData.salesReturn}
                </Typography>
              </Box>
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
              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                width={126}
                alignItems={"center"}
              >
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {salesData.customerCount}
                </Typography>
              </Box>
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

export default Sales;
