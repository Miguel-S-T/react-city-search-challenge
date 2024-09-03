import React from "react";
import "./Footer.css";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <AppBar
        position='static'
        className='footer-box'
      >
        <Container maxWidth='md'>
          <Toolbar style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              align='center'
              variant='body2'
              className='footer-text'
            >
              <strong>Made By Miguel TM @ {currentYear}</strong>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
