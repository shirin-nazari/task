import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { FileUploader } from 'react-drag-drop-files';
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
const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop() {
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();

  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'https://api.tinify.com/shrink', true);

  // xhr.send(postData);
  const handleForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const FileUpload = styled(FileUploader)(() => {
    return {
      // width: 500,
      background: 'pink',
      height: '100vh',
      // margin: '0px auto',
      // padding: 5,
      // border: '4px dashed #E4F0FF ',
      // color: '#1D88FF',
    };
  });
  const uploader = {
    // width: 500,
    background: 'pink',
    height: '100vh',
    margin: '0px auto',
    padding: 5,
    border: '4px dashed #E4F0FF ',
    color: '#1D88FF',
  };
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
        {/* <form
          onDrag={handleForm}
          onDragStart={handleForm}
          onDragEnd={handleForm}
          onDragOver={handleForm}
          onDragEnter={handleForm}
          onDragLeave={handleForm}
          onDrop={handleForm}
        > */}
        {/* <figure>
            <ImageIcon sx={{ fontSize: '50px' }} />
          </figure>
          <Typography variant="h5" component="p">
            Drop your image here (:
          </Typography> */}
        <FileUploader
          handleChange={handleChange}
          style={uploader}
          name="file"
          hoverTitle="Drop here (:"
          types={fileTypes}
          onDrop={(e) => {
            setUpload(true);

            // dispatch(post(e.target.value));
            dispatch(add(e.name));
            console.log(e);
          }}
        />

        {/* /* <input
            type="file"
            name="files[]"
            data-multiple-caption="{count} files selected"
            multiple
            onDrop={(e) => {
              setUpload(true);
              console.log(e.target.value);
              // dispatch(post(e.target.value));
              droppedFiles = e.originalEvent.dataTransfer.files;
              dispatch(add(e.target.files[0].name));
              console.log(e.target.files[0].name);
            }}
          /> */}
        {/* <Box
            sx={upload === false ? { display: 'none' } : { display: 'block' }}
          >
            <Typography>uploading</Typography>
            <Typography>Done!</Typography>
            <Typography>Error</Typography>
          </Box> */}
        {/* </form> */}
      </Paper>
    </Container>
  );
}
export default DragDrop;
