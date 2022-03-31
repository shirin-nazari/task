import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { useDropzone } from 'react-dropzone';
import Drag from './Drag';
import { add } from '../redux/feacture/data/dataSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { styled } from '@mui/styles';
// use api
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
// finish use api

function DragDrop(props) {
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const uploader = {
    // width: 500,
    background: 'pink',
    height: '100vh',
    margin: '0px auto',
    padding: 5,
    border: '4px dashed #E4F0FF ',
    color: '#1D88FF',
  };
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const getPic = acceptedFiles.map((fuck) => console.log(fuck));
  console.log(getPic);
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'https://api.tinify.com/shrink', true);

  // xhr.send(postData);
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
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <figure>
            <ImageIcon sx={{ fontSize: '50px' }} />
          </figure>
          <Typography variant="h5" component="p">
            Drop your image here (:
          </Typography>
        </div>
        <aside>
          <h4>output :</h4>
          <ul>{files}</ul>
        </aside>
      </Paper>
    </Container>
  );
}
export default DragDrop;
