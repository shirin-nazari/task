import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { add, post } from '../redux/feacture/data/dataSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const postData = axios({
  method: 'post',
  url: 'https://api.tinify.com/shrink',
  data: {
    source: {
      url: 'https://tinypng.com/images/panda-happy.png',
    },
  },
  auth: {
    username: 'shirinnazari',
    password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
  },
  headers: { 'Content-Type': 'application/json' },
});
// async function get(){}
const getData = async () => {
  try {
    const response = await axios({
      method: 'get',
      auth: {
        username: 'shirinnazari',
        password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
      },
      url: 'https://api.tinify.com/output/3nxvq1vz1tpgwaa0rnm6yjqfyzutegyr',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
export default function Upload() {
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container
      sx={{
        disply: 'flex',
        justifyContent: 'center',
        backgroundColor: '#E9F3FE',
        textAlign: 'center',
        padding: 20,
      }}
    >
      <Paper
        sx={{
          width: 500,
          margin: '0px auto',
          padding: 5,
          border: '4px dashed #E4F0FF ',
          color: '#1D88FF',
        }}
        component="section"
      >
        <form>
          <figure>
            <ImageIcon sx={{ fontSize: '50px' }} />
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
            sx={upload === false ? { display: 'none' } : { display: 'block' }}
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
