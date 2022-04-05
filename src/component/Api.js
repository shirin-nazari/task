import axios from 'axios';
import React from 'react';

// use api
// async function for post
// I dont know what do you for you
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  },
};
export const postDataFunc = async () => {
  try {
    const request = await axios({
      method: 'post',
      url: 'https://api.tinify.com/shrink',
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
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        config,
      },
    });

    return request;
  } catch (err) {
    console.error(err);
  }
};
postDataFunc();

export const getData = async () => {
  try {
    const response = await axios({
      method: 'get',
      auth: {
        username: 'shirinnazari',
        password: 'ZTMjKPwYnnbPxzRLxVh7fDqjgKxdZLGb',
      },
      url: 'https://api.tinify.com/output/3nxvq1vz1tpgwaa0rnm6yjqfyzutegyr',
      // url: `https://api.tinify.com/output/${postDataFunc(Request.output.url)}`,
      headers: {
        // 'Content-Type': 'application/json',
        config,
      },
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
getData();
// finish use api
