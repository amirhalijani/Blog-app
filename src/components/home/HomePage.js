import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Blogs from "../blog/Blogs";
import Authors from "../author/Authors";

const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} md={3} mt={10}>
            <Typography variant="h6" component="h6" fontWeight="Bold" mb={5}>
              مقاله نویس های کبریت
            </Typography>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9} mt={10}>
            <Typography variant="h6" component="h6" fontWeight="Bold" mb={5}>
              مقاله های کبریت
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
