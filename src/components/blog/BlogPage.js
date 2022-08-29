import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../graphql/queries";
import Loader from "../../shared/Loader";
import { Container } from "@mui/system";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CommentForm from "../comment/CommentForm";
import Comments from "./../comment/Comments";

const BlogPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_POST, {
    variables: {
      slug,
    },
  });
  if (loading) return <Loader />;
  return (
    <Container maxWidth="lg">
      <Grid container padding={3}>
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="h3"
            variant="h3"
            color="primary"
            fontWeight="Bold"
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={8}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid item xs={12} mt={9} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="h5" variant="h5" fontWeight="Bold">
              {data.post.author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              fontWeight="Medium"
              color="text.secondary"
            >
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={10}>
          <div
            style={{ fontSize: 20 }}
            dangerouslySetInnerHTML={{ __html: data.post.content.html }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
