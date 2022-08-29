import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

const Authors = () => {
  const { loading, data } = useQuery(GET_AUTHORS);
  if (loading) return <Loader />;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography
                fontWeight="Bold"
                variant="p"
                component="p"
                color="text.secondary"
              >
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
