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
              <AppBar
                sx={{ backgroundColor: "transparent", padding: "50px" }}
                position="static"
                elevation={0}
              >
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
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontWeight: 800,
                            fontSize: "20px",
                            ml: "12px",
                          }}
                        >
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
              <Grid
                container
                sx={
                  {
                    // p: "50px",
                    // marginTop: "auto",
                    // alignItems: "center",
                    // minWidth: "100%",
                    // marginy: "auto",
                  }
                }
                spacing={5}
                // direction="row"
                // justifyContent="center"
                // alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    spacing={5}
                    sx={{ p: "50px", mt: "5vh" }}
                  >
                    <Grid item xs={12} md={12}>
                      <Typography
                        sx={{
                          fontFamily: "Playfair Display",
                          fontWeight: 500,
                          letterSpacing: "3px",
                          fontSize: "52px",
                        }}
                      >
                        Cakrawala Music Production
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontSize: "20px",
                          letterSpacing: "2px",
                          lineHeight: "46px",
                        }}
                      >
                        The solution for song cover and production recording,
                        mixing, and mastering services in Bandung City.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container spacing={8} alignItems="flex-start">
                        <Grid item xs={6} md={6}>
                          <Button
                            sx={{
                              width: "200px",
                              height: "55px",
                              background:
                                "linear-gradient(95.29deg, #303030 0%, #3E3E3E 100%)",
                              borderRadius: "5px",
                              padding: "20px",
                              color: "#FFFFFF",
                              "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "#F8F7F3",
                              },
                            }}
                          >
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
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <Button
                            sx={{
                              width: "200px",
                              height: "55px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                              padding: "20px",
                              color: "#303030",
                              "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "#000080",
                              },
                            }}
                          >
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
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "1px",
                    }}
                  >
                    Cakrawala Music Production
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "26px",
                      letterSpacing: "1px",
                      textAlign: "center",
                      marginTop: "2vh",
                    }}
                  >
                    The solution for song cover and production recording,
                    mixing, and mastering services in Bandung City.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      marginTop: "2vh",
                      textTransform: "none",
                      backgroundColor: "white",
                      width: "161px",
                      height: "52px",
                      "&:active": {
                        backgroundColor: "#ffffff",
                      },
                      "&:hover": {
                        backgroundColor: "#ffffff",
                      },
                      borderRadius: "30px",
                    }}
                  >
                    <Typography
                      sx={{ color: "black", fontWeight: 700, fontSize: "13px" }}
                    >
                      Explore More
                    </Typography>
                  </Button>
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
