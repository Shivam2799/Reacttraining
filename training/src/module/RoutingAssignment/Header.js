import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
  } from "@material-ui/core";
  import React from "react";
  import { Link as RouterLink } from "react-router-dom";
  import {useHistory} from "react-router-dom";
  const headersData = [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];
  
                       
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "58px",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
      header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
      },
  }));
                       
  export default function Header() {
    let history = useHistory();
    const { header, logo } = useStyles();
                       
    const displayDesktop = () => {
      return (
        
        <Toolbar>
          {femmecubatorLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
                       
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        Femmecubator
      </Typography>
    );
                       
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          
          <Button
          onClick={() => {
            history.push("./Detail");
          }}
            {...{
              key: label,
              color: "inherit",
              
              
            }}
          >
            {label}
          </Button>
        );
      });
    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }