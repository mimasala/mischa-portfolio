import styled from "@emotion/styled";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { CollapseObject } from "./CollapseService";

interface props {
  content: CollapseObject;
}

const Collapsible = ({ content }: props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {content.children?.map((child) => {
          return (
            <List key={child.key} component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} href={child.route}>
                <ListItemIcon>{child.icon}</ListItemIcon>
                <ListItemText primary={child.displayName} />
              </ListItemButton>
            </List>
          )
        })}
      </Collapse>
    </>
  );
};

export default Collapsible;
