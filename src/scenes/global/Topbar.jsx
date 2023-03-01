import { Box, IconButton, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { Button } from '@mui/material';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';




const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { register, handleSubmit } = useForm();

  const handleSignup = async ({ username, password, email }) => {
    try {
      // Call your signup API here
      const signupResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
  
      // Add the user to your "Players" data model here
      const playerData = { username, email, ...signupResponse };
      // const addPlayerResponse = await api.addPlayer(playerData);
  
      // console.log(addPlayerResponse);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS and LoginButton*/}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <Button color="inherit" onClick={handleSignup}>
            Signup
        </Button>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
