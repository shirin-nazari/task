import axios from 'axios';
import React from 'react';

// use api
// async function for post
// I dont know what do you for you
// const config = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     'Content-Type': 'application/json',
//   },
// };
// (async () => {
//   const rawResponse = await fetch('https://api.tinify.com/shrink', {
//     method: 'POST',
//     headers: {
//       config,
//     },
//     body: JSON.stringify({
//       source: {
//         url: 'https://tinypng.com/images/panda-happy.png',
//         // set src as path
//         // url: src,
//       },
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
//   // const content = await rawResponse.json();

//   // console.log(content);
// })();

const postDataFunc = async () => {
  try {
    const request = await axios({
      method: 'post',
      url: '/shrink',
      data: {
        source: {
          url: 'https://tinypng.com/images/panda-happy.png',
          // set src as path
          // url: src,
        },
      },
      auth: {
        username: 'shirinnazari',
        password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
      },
      headers: {
        'Access-Control-Allow-Origin': '*',

        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
      },
    });

    return request;
  } catch (err) {
    console.error(err);
  }
};
postDataFunc();

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
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getData();
// // finish use api
