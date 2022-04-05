// import AppBar from '@mui/material/AppBar';
// import React, { useState } from 'react';
// import profileUser from '../assets/Profile-PNG-File.png';
// // icon navbar
// import SettingsIcon from '@mui/icons-material/Settings';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import HomeIcon from '@mui/icons-material/Home';
// // element
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import TextField from '@mui/material/TextField';

// import Search from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';

// // array for drawer
// const menuDrawer = ['افزودن سایت ها', 'پیشخوان', 'سایت ها'];

// // add style styled
// const BoxUser = styled(Box)(() => {
//   return {
//     display: 'flex',
//     paddingLeft: 15,
//   };
// });
// const IconsLeft = styled(Box)(() => {
//   return {
//     paddingTop: 9,
//   };
// });
// const Appbar = styled(AppBar)(() => {
//   return {
//     background: '#FFFFFF',
//     color: 'black',
//   };
// });
// const ToolBar = styled(Toolbar)(() => {
//   return {
//     display: 'flex',
//     justifyContent: 'space-between',
//   };
// });

// const SearchBox = styled(TextField)(() => {
//   return {
//     borderRadius: 50,
//     width: 300,
//   };
// });
// export default function Navbar() {
//   const [menu, setMenu] = useState(false);

//   return (
//     <Appbar>
//       <ToolBar>
//         <Box sx={{ display: 'flex' }}>
//           <IconsLeft>
//             <IconButton href="#">
//               <SettingsIcon />
//             </IconButton>
//             <IconButton href="#">
//               <NotificationsNoneIcon />
//             </IconButton>

//             <IconButton href="#">
//               <MailOutlineIcon />
//             </IconButton>
//           </IconsLeft>
//           <BoxUser>
//             <Box sx={{ height: '50px' }}>
//               <Avatar
//                 src={profileUser}
//                 alt="profile-user"
//                 sx={{ width: 50, height: 50 }}
//               />
//             </Box>
//             <Box>
//               <Typography variant="h6" component="h5">
//                 Alireza Sandoghizadeh mashhadi
//               </Typography>
//               <Typography variant="p" component="p">
//                 designer
//               </Typography>
//             </Box>
//           </BoxUser>
//         </Box>
//         <Box>
//           <SearchBox variant="filled" label="Search" s>
//             <Search />
//           </SearchBox>
//         </Box>
//         <Box sx={{ display: 'flex', flexWrap: 'warp', padding: 4 }}>
//           <Typography>tracker</Typography>
//           <MenuIcon
//             onClick={() => {
//               if (menu === false) {
//                 setMenu(!false);
//               } else {
//                 setMenu(false);
//               }
//             }}
//           />
//         </Box>
//         {menu && (
//           <Drawer
//             sx={{
//               width: 300,
//               flexShrink: 0,
//               '& .MuiDrawer-paper': {
//                 width: 350,
//                 boxSizing: 'border-box',
//               },
//             }}
//             variant="permanent"
//             anchor="right"
//           >
//             <List>
//               {menuDrawer.map((item, index) => (
//                 <ListItem button key={item}>
//                   <HomeIcon />
//                   <ListItemText primary={item} />
//                 </ListItem>
//               ))}
//             </List>
//           </Drawer>
//         )}
//       </ToolBar>
//     </Appbar>
//   );
// }
