import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardElement from "../../shared/CardElement";
import Loader from "../../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_AUTHOR, {
    variables: {
      slug,
    },
  });
  if (loading) return <Loader />;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10} padding={3}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 200, height: 200 }}
          />
          <Typography
            fontWeight="ExtraBold"
            variant="h4"
            component="h4"
            sx={{ margin: "15px" }}
          >
            {data.author.name}
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary">
            {data.author.field}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          mt={6}
          fontWeight="Regular"
          fontSize="20px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="justify"
        >
          <div
            dangerouslySetInnerHTML={{ __html: data.author.description.html }}
            style={{ width: "65%" }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={12}>
          <Typography component="h6" variant="h6" fontWeight="Bold">
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={3} mt={2} style={{ marginBottom: "16px" }}>
            {data.author.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardElement
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
