import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { add, post } from "../redux/feacture/data/dataSlice";
import { useDispatch } from "react-redux";
export default function Upload() {
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container
      sx={{
        disply: "flex",
        justifyContent: "center",
        backgroundColor: "#E9F3FE",
        textAlign: "center",
        padding: 20,
      }}
    >
      <Paper
        sx={{
          width: 500,
          margin: "0px auto",
          padding: 5,
          border: "4px dashed #E4F0FF ",
          color: "#1D88FF",
        }}
        component="section"
      >
        <form>
          <figure>
            <ImageIcon sx={{ fontSize: "50px" }} />
          </figure>
          <Typography variant="h5" component="p">
            Drop your image here (:
          </Typography>
          <input
            type="file"
            multiple
            onChange={(e) => {
              setUpload(true);
              console.log(e.target.value);
              dispatch(post(e.target.value));
              dispatch(add(e.target.files[0].name));
              console.log(e.target.files[0].name);
            }}
          />
          <Box
            sx={upload === false ? { display: "none" } : { display: "block" }}
          >
            <Typography>uploading</Typography>
            <Typography>Done!</Typography>
            <Typography>Error</Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
