import {
  Grid,
  AppBar,
  Container,
  ThemeProvider,
  Typography,
  Hidden,
  Button,
  Box,
  Paper,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styling/SectionStyle";
import theme from "../src/theme";
import { Link as Scroll } from "react-scroll";

const pages = [
  { name: "Home", link: "home", key: 1, offset: 0 },
  { name: "About Us", link: "about", key: 2, offset: 0 },
  { name: "Our Facilities", link: "facilities", key: 3, offset: 0 },
  { name: "Contact Us", link: "contact", key: 4, offset: 0 },
];

const Section1 = () => {
  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden mdDown>
          <Grid container className={style.section1}>
            <Container maxWidth="xl">
              <AppBar position="static" elevation={0} className={style.nav}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Grid container alignItems="center" sx={{ wrap: "nowrap" }}>
                      <Grid item>
                        <img
                          src="./music.png"
                          style={{
                            verticalAlign: "middle",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography className={style.judulnav}>
                          Cakrawala Music Production
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ wrap: "nowrap" }}
                      spacing={3}
                    >
                      {pages.map((page) => {
                        return (
                          <React.Fragment key={page.key}>
                            <Grid item>
                              <Scroll
                                to={page.link}
                                spy={true}
                                smooth={true}
                                offset={page.offset}
                                // activeClass="active"
                              >
                                <Typography className={style.navmenu}>
                                  {page.name}
                                </Typography>
                              </Scroll>
                            </Grid>
                          </React.Fragment>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </AppBar>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    spacing={5}
                    className={style.isiSection1}
                  >
                    <Grid item xs={12} md={12}>
                      <Typography className={style.judulSection1}>
                        Cakrawala Music Production
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography className={style.descSection1}>
                        The solution for song cover and production recording,
                        mixing, and mastering services in Bandung City.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container spacing={8} alignItems="flex-start">
                        <Grid item xs={6} md={6}>
                          <Scroll
                            to={"about"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            // activeClass="active"
                          >
                            <Button className={style.button1Section1}>
                              <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                  wrap: "noWrap",
                                }}
                              >
                                <Grid item>
                                  <Typography
                                    sx={{
                                      textTransform: "none",
                                    }}
                                  >
                                    Explore More
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <img
                                    src="./whitearrow.png"
                                    style={{
                                      verticalAlign: "middle",
                                      marginLeft: 10,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            </Button>
                          </Scroll>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <Scroll
                            to={"about"}
                            spy={true}
                            smooth={true}
                            offset={0}
                            // activeClass="active"
                          >
                            <Button className={style.button2Section1}>
                              <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                  wrap: "noWrap",
                                }}
                              >
                                <Grid item>
                                  <Typography
                                    sx={{
                                      // color: "#303030",
                                      textTransform: "none",
                                    }}
                                  >
                                    Read More
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <img
                                    src="./blackarrow.png"
                                    style={{
                                      verticalAlign: "middle",
                                      marginLeft: 10,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            </Button>
                          </Scroll>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className={style.section1m}>
            <Grid
              container
              sx={{ minHeight: "30%" }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img src="./cakrawalalogo.png" />
              </Grid>
            </Grid>
            <Grid container className={style.section1mp}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                // spacing={0}
                sx={{ padding: 3 }}
              >
                <Grid item>
                  <Typography className={style.judulSection1m}>
                    Cakrawala Music Production
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={style.descSection1m}>
                    The solution for song cover and production recording,
                    mixing, and mastering services in Bandung City.
                  </Typography>
                </Grid>
                <Grid item>
                  <Scroll
                    to={"about"}
                    spy={true}
                    smooth={true}
                    offset={0}
                    // activeClass="active"
                  >
                    <Button className={style.buttonSection1m}>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: 700,
                          fontSize: "13px",
                        }}
                      >
                        Explore More
                      </Typography>
                    </Button>
                  </Scroll>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </ThemeProvider>
    </>
  );
};

export default Section1;
