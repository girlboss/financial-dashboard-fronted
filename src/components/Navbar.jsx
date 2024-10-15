import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {
  AppBarProps,
  Right,
  Left,
  NameFieldProps,
  LogFieldProps,
  ImgWrapper
} from '../styles/Navbar';
import { MenuItem } from '@mui/material';
import logo from '/assets/logo.png';

const NavBar = () => {
  return (
    <AppBar {...AppBarProps}>
      <Left>
        <ImgWrapper src={logo} alt="logo" />
      </Left>
      <Right>
        <MenuItem {...NameFieldProps}>UserName</MenuItem>
        <MenuItem {...LogFieldProps}>Logout</MenuItem>
      </Right>
    </AppBar>
  )
}
export default NavBar;