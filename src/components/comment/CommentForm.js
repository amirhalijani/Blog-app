import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import styled, { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });
  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("لطفا تمام فیلدها رو پر کنید", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت با موفقیت ارسال شد و منتظر تایید است", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.3) 0px 4px 12px",
        borderRadius: 4,
        py: 2,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          variant="h6"
          component="p"
          fontWeight="Bold"
          color="primary"
        >
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
      <StyleSheetManager stylisPlugins={[rtlPlugin]}>
        <TextField
          variant="outlined"
          label="نام کاربری"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        </StyleSheetManager>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          variant="outlined"
          label="ایمیل"
          sx={{
            width: "100%",
          }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          variant="outlined"
          label="متن کامنت"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          multiline
          minRows={5}
        />
      </Grid>
      <Grid xs={12} m={2}>
        {loading ? (
          <Button sx={{ py: 1 }} variant="contained" disabled>
            درحال ارسال
          </Button>
        ) : (
          <Button sx={{ py: 1 }} variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
