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
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 611px;
`;

function Dashboard(props) {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/dashboard-stats");
        const data = await response.json();
        setDashboardData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          <Card sx={props.cardWidth}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Revenue
              </Typography>
              <Wrapper width={100} alignItems={"center"}>
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {dashboardData.totalRevenue}
                </Typography>
              </Wrapper>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={props.cardWidth}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Sales Return
              </Typography>
              <Wrapper width={100} alignItems={"center"}>
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {dashboardData.salesReturn}
                </Typography>
              </Wrapper>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={props.cardWidth}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Purchase
              </Typography>
              <Wrapper width={100} alignItems={"center"}>
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {dashboardData.totalPurchase}
                </Typography>
              </Wrapper>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={props.cardWidth}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Income
              </Typography>
              <Wrapper width={100} alignItems={"center"}>
                <CurrencyRupeeIcon />
                <AddIcon />
                <Typography sx={{ fontSize: 25 }} color="text.primary">
                  {dashboardData.totalIncome}
                </Typography>
              </Wrapper>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Wrapper>
        <Wrapper>
          <Card sx={{ width: "60%", height: "200px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Bargraph
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ width: "30%", height: "200px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Pie Chart
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Wrapper>
        <Wrapper>
          <Card sx={{ width: "60%", height: "200px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Stock Alert
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card sx={{ width: "30%", height: "200px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
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
