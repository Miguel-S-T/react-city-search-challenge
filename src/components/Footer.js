import React from "react";
import "./Footer.css";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <AppBar position='static' className='footer-box'>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography align='left' variant='body2' className='footer-text'>
              <strong>Eduwo Task @ {currentYear}</strong>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
