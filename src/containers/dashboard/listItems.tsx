import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

interface MainListProps {
  currentLink: string;
  setCurrentLink: React.Dispatch<React.SetStateAction<string>>;
}

export const MainListItems = ({
  currentLink,
  setCurrentLink,
}: MainListProps) => {
  return (
    <React.Fragment>
      <ListItemButton
        autoFocus
        selected={currentLink === "dashboard" ? true : false}
        onClick={() => setCurrentLink("dashboard")}
      >
        <ListItemIcon>
          <DonutLargeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        selected={currentLink === "services" ? true : false}
        onClick={() => setCurrentLink("services")}
      >
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Court Schedule" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FamilyRestroomIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="Staff" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);
