import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import * as React from "react";

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
      <Link href="/">
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
      </Link>
      <Link href="/services">
        <ListItemButton
          selected={currentLink === "services" ? true : false}
          onClick={() => setCurrentLink("services")}
        >
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItemButton>
      </Link>
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
