// import { Container, Paper, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import ImageIcon from '@mui/icons-material/Image';
// import { useDropzone } from 'react-dropzone';
// import { add } from '../redux/feacture/data/dataSlice';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';

// // use api
// // async function for post
// // I dont know what do you for you
// const config = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     'Content-Type': 'application/json',
//   },
// };
// const postDataFunc = async () => {
//   try {
//     const request = await axios({
//       method: 'post',
//       url: 'https://api.tinify.com/shrink',
//       data: {
//         source: {
//           url: 'https://tinypng.com/images/panda-happy.png',
//           // set src as path
//           // url: src,
//         },
//       },
//       auth: {
//         username: 'shirinnazari',
//         password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
//       },
//       headers: {
//         // 'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Origin': '*',
//         config,
//       },
//     });

//     return request;
//   } catch (err) {
//     console.error(err);
//   }
// };
// postDataFunc();

// // const postData = axios({
// //   method: 'post',
// //   url: 'https://api.tinify.com/shrink',
// //   data: {
// //     source: {
// //       // url: 'https://tinypng.com/images/panda-happy.png',
// //       url: src,
// //     },
// //   },
// //   auth: {
// //     username: 'shirinnazari',
// //     password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
// //   },
// //   headers: { 'Content-Type': 'application/json' },

// // async function get(){}
// const getData = async () => {
//   try {
//     const response = await axios({
//       method: 'get',
//       auth: {
//         username: 'shirinnazari',
//         password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
//       },
//       url: 'https://api.tinify.com/output/3nxvq1vz1tpgwaa0rnm6yjqfyzutegyr',
//       // url: `https://api.tinify.com/output/${postDataFunc(Request.output.url)}`,
//       headers: {
//         // 'Content-Type': 'application/json',
//         config,
//       },
//     });
//     console.log(response);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getData();
// // finish use api

// function DragDrop(props) {
//   const [upload, setUpload] = useState(false);
//   const dispatch = useDispatch();
//   const handleForm = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const [file, setFile] = useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };

//   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

//   const files = acceptedFiles.map((file) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));
//   const getPic = acceptedFiles.map((file) => file.path);
//   // postDataFunc(getPic);
//   console.log(getPic);
//   // var xhr = new XMLHttpRequest();
//   // xhr.open('POST', 'https://api.tinify.com/shrink', true);

//   // xhr.send(postData);
//   return (
//     <Container
//       sx={{
//         disply: 'flex',
//         justifyContent: 'center',
//         backgroundColor: '#E9F3FE',
//         textAlign: 'center',
//         padding: 20,
//       }}
//     >
//       <Paper
//         sx={{
//           width: 500,
//           margin: '0px auto',
//           padding: 5,
//           border: '4px dashed #E4F0FF ',
//           color: '#1D88FF',
//         }}
//         component="section"
//       >
//         <form onSubmit={handleForm}>
//           <div {...getRootProps({ className: 'dropzone' })}>
//             <input {...getInputProps(dispatch(add(getPic)))} />
//             <figure>
//               <ImageIcon sx={{ fontSize: '50px' }} />
//             </figure>
//             <Typography variant="h5" component="p">
//               Drop your image here (:
//             </Typography>
//           </div>
//           <aside>
//             <h4>output :</h4>
//             <ul>{files}</ul>
//           </aside>
//         </form>
//       </Paper>
//     </Container>
//   );
// }
// export default DragDrop;
