import React from "react";


const Collapsible = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>

        </ListItemIcon>
        <ListItemText primary={module.displayName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit> */}

      {/* {module.displayName} */}

        {/* {module.children?.map((child) => {
          return (
            <List key={child.key} component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} href={child.route}>
                <ListItemText inset primary={child.displayName} />
              </ListItemButton>
            </List>
          )
        })} */}
      {/* </Collapse> */}
    </>
  );
};

export default Collapsible;
