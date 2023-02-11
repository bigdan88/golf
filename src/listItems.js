import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import AccessTime from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AirIcon from '@mui/icons-material/Air';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Leaderboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonth />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccessTime />
      </ListItemIcon>
      <ListItemText primary="Tee Times" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CompareArrowsIcon />
      </ListItemIcon>
      <ListItemText primary="Matches" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Players" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Sub-List" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FormatAlignJustifyIcon />
      </ListItemIcon>
      <ListItemText primary="Rules" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AirIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Admin Tools
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
