import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_COMMENTS = gql`
  query getComment($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export { GET_BLOGS, GET_AUTHORS, GET_AUTHOR, GET_POST, GET_COMMENTS };
