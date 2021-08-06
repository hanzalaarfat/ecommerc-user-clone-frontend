import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

import "./style.css";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideMenu({ anchor }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keyleft" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="menuSide"></div>
      <List>
        <div style={{ fontWeight: "bold", marginLeft: "1rem" }}>Trending</div>
        {["Best Sellers", "New Releases", "Movers and Shakers"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        <div style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          Digital Content and Devices
        </div>
        {[
          "Echo & Alexa",
          "Fire Tv",
          "Kindle E-Readers",
          "Audible Audiobooks",
          "Amazon Prime Video",
          "Amazon Prime Music",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          Shop By Department
        </div>
        {[
          "Mobiles,Computers",
          "Tv,Appliances,Electronics",
          "Men`s Fashion",
          "Women`s Fashion",
          "Sell All",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          Programs & Features
        </div>
        {[
          "Gifts,Cards",
          "Flight Tickets",
          "#FoundItOnAmazon",
          "Amazon Outlet",
          "Sell All",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ fontWeight: "bold", marginLeft: "1rem" }}>
          Help & Settings
        </div>
        {["Your Account", "Customer Service", "Sign In"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="all">
            <Button
              style={{ color: "white" }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon /> All
            </Button>
          </div>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
