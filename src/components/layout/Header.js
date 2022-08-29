import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h5"
              component="h5"
              fontWeight="ExtraBold"
              flex={1}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                کبریت بلاگ
              </Link>
            </Typography>
            <AssignmentIcon fontSize="large" />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
