import { ThemeProvider } from "@mui/styles";
import theme from "../src/theme";
import { useStyles } from "./styling/SectionStyle";
import {
  Grid,
  Container,
  Hidden,
  Typography,
  Button,
  ListItem,
  List,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";
import { Link as Scroll } from "react-scroll";

const menu1 = [
  "Vocal Recording",
  "Pitch Correction",
  "Mixing & Mastering (your music)",
  "Standard Video for Youtube",
];

const menu2 = [
  "Vocal Recording & Piano / Guitar Recording",
  "Pitch Correction",
  "Mixing & Mastering",
  "Standard Video for Youtube",
];

const menu2m = [
  "Vocal Recording",
  "Piano / Guitar Recording",
  "Pitch Correction",
  "Mixing & Mastering",
  "Standard Video for Youtube",
];

const menu3 = [
  "Basic Piano Arrangement",
  "Vocal Recording",
  "Pitch Correction",
  "Mixing & Mastering",
];

const menu4 = [
  "Band Arrangement",
  "Vocal Recording",
  "Pitch Correction",
  "Mixing and Mastering",
];

const Section4 = () => {
  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden mdDown>
          <Grid container className={style.section4}>
            <Container maxWidth="xl">
              <Grid
                container
                sx={{ height: "100%" }}
                alignItems="center"
                direction="column"
                justifyContent="center"
                spacing={3}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "32px",
                      lineHeight: "48px",
                    }}
                  >
                    Recording Packages
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "32px",
                      color: "#BBBBBB",
                    }}
                  >
                    We always serve you with affordable price and satisfying
                    services
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="stretch"
                    justifyContent="center"
                    sx={{
                      backgroundColor: "white",
                      minHeight: "60vh",
                      borderRadius: "26px",
                      minWidth: "80vh",
                      padding: 3,
                    }}
                  >
                    <Grid item>
                      <Grid container>
                        <Grid item md={3}>
                          <Card
                            sx={{
                              // minWidth: 500,
                              // minWidth: "100%",
                              // maxWidth: "100%",
                              // minHeight: 500,
                              width: "100%",
                              height: "650px",
                              // maxHeight: 800,
                              backgroundRadius: 0,
                              padding: 2,
                            }}
                            elevation={0}
                          >
                            <CardContent
                              sx={{
                                // minWidth: "100%",
                                // maxWidth: "100%",
                                // minHeight: "95%",
                                // maxHeight: "95%",
                                // backgroundColor: "red",
                                height: "450px",
                              }}
                            >
                              <Typography className={style.harga}>
                                IDR 299.000
                              </Typography>
                              <Typography className={style.namaPaket}>
                                Basic Soloist
                              </Typography>
                              {menu1.map((menu, index) => {
                                return (
                                  <React.Fragment key={index + 5}>
                                    <List disablePadding sx={{ p: 0 }}>
                                      <ListItem sx={{ p: 0, py: "12px" }}>
                                        <img
                                          src="./check.png"
                                          style={{
                                            verticalAlign: "middle",
                                            marginRight: 10,
                                          }}
                                        />
                                        <Typography className={style.isiPaket}>
                                          {menu}
                                        </Typography>
                                      </ListItem>
                                    </List>
                                  </React.Fragment>
                                );
                              })}
                            </CardContent>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                            >
                              <Button
                                className={style.buttonPaket}
                                sx={{ marginTop: "4vh" }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Card>
                        </Grid>
                        <Grid item md={3}>
                          <Card
                            sx={{
                              // minWidth: 500,
                              // minWidth: "100%",
                              // maxWidth: "100%",
                              // minHeight: 500,
                              width: "100%",
                              height: "650px",
                              // maxHeight: 800,
                              backgroundRadius: 0,
                              padding: 2,
                            }}
                            elevation={0}
                          >
                            <CardContent
                              sx={{
                                // minWidth: "100%",
                                // maxWidth: "100%",
                                // minHeight: "95%",
                                // maxHeight: "95%",
                                // backgroundColor: "red",
                                height: "450px",
                              }}
                            >
                              <Typography className={style.harga}>
                                IDR 399.000
                              </Typography>
                              <Typography className={style.namaPaket}>
                                Basic Musician
                              </Typography>
                              {menu2.map((menu, index) => {
                                return (
                                  <React.Fragment key={index + 5}>
                                    <List disablePadding sx={{ p: 0 }}>
                                      <ListItem sx={{ p: 0, py: "12px" }}>
                                        <img
                                          src="./check.png"
                                          style={{
                                            verticalAlign: "middle",
                                            marginRight: 10,
                                          }}
                                        />
                                        <Typography className={style.isiPaket}>
                                          {menu}
                                        </Typography>
                                      </ListItem>
                                    </List>
                                  </React.Fragment>
                                );
                              })}
                            </CardContent>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                            >
                              <Button
                                className={style.buttonPaket}
                                sx={{ marginTop: "4vh" }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Card>
                        </Grid>
                        <Grid item md={3}>
                          <Card
                            sx={{
                              // minWidth: 500,
                              // minWidth: "100%",
                              // maxWidth: "100%",
                              // minHeight: 500,
                              width: "100%",
                              height: "650px",
                              // maxHeight: 800,
                              backgroundRadius: 0,
                              padding: 2,
                            }}
                            elevation={0}
                          >
                            <CardContent
                              sx={{
                                // minWidth: "100%",
                                // maxWidth: "100%",
                                // minHeight: "95%",
                                // maxHeight: "95%",
                                // backgroundColor: "red",
                                height: "450px",
                              }}
                            >
                              <Typography className={style.harga}>
                                Full Slot
                              </Typography>
                              <Typography className={style.namaPaket}>
                                Silver Soloist
                              </Typography>
                              {menu3.map((menu, index) => {
                                return (
                                  <React.Fragment key={index + 5}>
                                    <List disablePadding sx={{ p: 0 }}>
                                      <ListItem sx={{ p: 0, py: "12px" }}>
                                        <img
                                          src="./check.png"
                                          style={{
                                            verticalAlign: "middle",
                                            marginRight: 10,
                                          }}
                                        />
                                        <Typography className={style.isiPaket}>
                                          {menu}
                                        </Typography>
                                      </ListItem>
                                    </List>
                                  </React.Fragment>
                                );
                              })}
                            </CardContent>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                            >
                              <Button
                                className={style.buttonPaket}
                                sx={{ marginTop: "4vh" }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Card>
                        </Grid>
                        <Grid item md={3}>
                          <Card
                            sx={{
                              // minWidth: 500,
                              // minWidth: "100%",
                              // maxWidth: "100%",
                              // minHeight: 500,
                              width: "100%",
                              height: "650px",
                              // maxHeight: 800,
                              backgroundRadius: 0,
                              padding: 2,
                            }}
                            elevation={0}
                          >
                            <CardContent
                              sx={{
                                // minWidth: "100%",
                                // maxWidth: "100%",
                                // minHeight: "95%",
                                // maxHeight: "95%",
                                // backgroundColor: "red",
                                height: "450px",
                              }}
                            >
                              <Typography className={style.harga}>
                                Full Slot
                              </Typography>
                              <Typography className={style.namaPaket}>
                                Premium Soloist
                              </Typography>
                              {menu4.map((menu, index) => {
                                return (
                                  <React.Fragment key={index + 5}>
                                    <List disablePadding sx={{ p: 0 }}>
                                      <ListItem sx={{ p: 0, py: "12px" }}>
                                        <img
                                          src="./check.png"
                                          style={{
                                            verticalAlign: "middle",
                                            marginRight: 10,
                                          }}
                                        />
                                        <Typography className={style.isiPaket}>
                                          {menu}
                                        </Typography>
                                      </ListItem>
                                    </List>
                                  </React.Fragment>
                                );
                              })}
                            </CardContent>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                            >
                              <Button
                                className={style.buttonPaket}
                                sx={{ marginTop: "4vh" }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Card>
                        </Grid>
                        {/* <Grid item md={3} xs={3} sx={{}}>
                          <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            spacing={2}
                          >
                            <Grid item>
                              <Typography className={style.harga}>
                                IDR 299.000
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography className={style.namaPaket}>
                                Basic Soloist
                              </Typography>
                            </Grid>
                            {menu1.map((menu, index) => {
                              return (
                                <React.Fragment key={index + 5}>
                                  <List disablePadding>
                                    <ListItem>
                                      <img
                                        src="./check.png"
                                        style={{
                                          verticalAlign: "middle",
                                          marginRight: 10,
                                        }}
                                      />
                                      <Typography className={style.isiPaket}>
                                        {menu}
                                      </Typography>
                                    </ListItem>
                                  </List>
                                </React.Fragment>
                              );
                            })}
                            <Grid item>
                              <Grid container>
                                <Grid item md={12} xs={12}>
                                  <Scroll
                                    to={"contact"}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                  >
                                    <Button
                                      className={style.buttonPaket}
                                      sx={{ marginTop: "4vh" }}
                                    >
                                      <Typography
                                        className={style.hurufButtonPaket}
                                      >
                                        Choose Plan
                                      </Typography>
                                    </Button>
                                  </Scroll>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className={style.section4m}>
            <Grid container className={style.section4mp}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ padding: 3 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "36px",
                      }}
                    >
                      Recording Packages
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      minWidth: "41vh",
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor: "#FEF5F5",
                        padding: 3,
                        borderRadius: "12px",
                        minWidth: "41vh",
                      }}
                    >
                      <Grid item>
                        <Typography className={style.namaPaketm}>
                          Basic Soloist
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={style.isiPaketm}>
                          IDR 299.000
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        {menu1.map((menu, index) => {
                          return (
                            <React.Fragment key={index + 5}>
                              <Grid
                                container
                                direction="row"
                                // justifyContent="center"
                                alignItems="center"
                                sx={{ wrap: "noWrap", mb: 1 }}
                              >
                                <Grid item xs={1}>
                                  <img
                                    src="./check.png"
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </Grid>
                                <Grid item xs={11}>
                                  <Typography
                                    className={style.isiPaket}
                                    sx={{ marginLeft: 2 }}
                                  >
                                    {menu}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        })}
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                              // activeClass="active"
                            >
                              <Button
                                sx={{
                                  backgroundColor: "rgba(244, 150, 209, 0.2)",
                                  borderRadius: "24px",
                                  color: "#F496D1",
                                  "&:hover": {
                                    backgroundColor: "#F496D1",
                                    color: "white",
                                  },
                                  "&:active": {
                                    backgroundColor: "#F496D1",
                                  },
                                  height: "50px",
                                  width: "200px",
                                }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      minWidth: "41vh",
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor: "#FEF5F5",
                        padding: 3,
                        borderRadius: "12px",
                        minWidth: "41vh",
                      }}
                    >
                      <Grid item>
                        <Typography className={style.namaPaketm}>
                          Basic Musician
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={style.isiPaketm}>
                          IDR 399.000
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        {menu2m.map((menu, index) => {
                          return (
                            <React.Fragment key={index + 5}>
                              <Grid
                                container
                                direction="row"
                                // justifyContent="center"
                                alignItems="center"
                                sx={{ wrap: "noWrap", mb: 1 }}
                              >
                                <Grid item xs={1}>
                                  <img
                                    src="./check.png"
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </Grid>
                                <Grid item xs={11}>
                                  <Typography
                                    className={style.isiPaket}
                                    sx={{ marginLeft: 2 }}
                                  >
                                    {menu}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        })}
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                              // activeClass="active"
                            >
                              <Button
                                sx={{
                                  backgroundColor: "rgba(244, 150, 209, 0.2)",
                                  borderRadius: "24px",
                                  color: "#F496D1",
                                  "&:hover": {
                                    backgroundColor: "#F496D1",
                                    color: "white",
                                  },
                                  "&:active": {
                                    backgroundColor: "#F496D1",
                                  },
                                  height: "50px",
                                  width: "200px",
                                }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ minWidth: "41vh" }}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor: "#FEF5F5",
                        padding: 3,
                        borderRadius: "12px",
                        minWidth: "41vh",
                      }}
                    >
                      <Grid item>
                        <Typography className={style.namaPaketm}>
                          Silver Soloist
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={style.isiPaketm}>
                          Full Slot
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        {menu3.map((menu, index) => {
                          return (
                            <React.Fragment key={index + 5}>
                              <Grid
                                container
                                direction="row"
                                // justifyContent="center"
                                alignItems="center"
                                sx={{ wrap: "noWrap", mb: 1 }}
                              >
                                <Grid item xs={1}>
                                  <img
                                    src="./check.png"
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </Grid>
                                <Grid item xs={11}>
                                  <Typography
                                    className={style.isiPaket}
                                    sx={{ marginLeft: 2 }}
                                  >
                                    {menu}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        })}
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                              // activeClass="active"
                            >
                              <Button
                                sx={{
                                  backgroundColor: "rgba(244, 150, 209, 0.2)",
                                  borderRadius: "24px",
                                  color: "#F496D1",
                                  "&:hover": {
                                    backgroundColor: "#F496D1",
                                    color: "white",
                                  },
                                  "&:active": {
                                    backgroundColor: "#F496D1",
                                  },
                                  height: "50px",
                                  width: "200px",
                                }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ minWidth: "41vh" }}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor: "#FEF5F5",
                        padding: 3,
                        borderRadius: "12px",
                        minWidth: "41vh",
                      }}
                    >
                      <Grid item>
                        <Typography className={style.namaPaketm}>
                          Premium Soloist
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={style.isiPaketm}>
                          Full Slot
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        {menu4.map((menu, index) => {
                          return (
                            <React.Fragment key={index + 5}>
                              <Grid
                                container
                                direction="row"
                                // justifyContent="center"
                                alignItems="center"
                                sx={{ wrap: "noWrap", mb: 1 }}
                              >
                                <Grid item xs={1}>
                                  <img
                                    src="./check.png"
                                    style={{ verticalAlign: "middle" }}
                                  />
                                </Grid>
                                <Grid item xs={11}>
                                  <Typography
                                    className={style.isiPaket}
                                    sx={{ marginLeft: 2 }}
                                  >
                                    {menu}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        })}
                      </Grid>
                      <Grid item sx={{ mt: 2 }}>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Scroll
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={0}
                              // activeClass="active"
                            >
                              <Button
                                sx={{
                                  backgroundColor: "rgba(244, 150, 209, 0.2)",
                                  borderRadius: "24px",
                                  color: "#F496D1",
                                  "&:hover": {
                                    backgroundColor: "#F496D1",
                                    color: "white",
                                  },
                                  "&:active": {
                                    backgroundColor: "#F496D1",
                                  },
                                  height: "50px",
                                  width: "200px",
                                }}
                              >
                                <Typography className={style.hurufButtonPaket}>
                                  Choose Plan
                                </Typography>
                              </Button>
                            </Scroll>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </ThemeProvider>
    </>
  );
};

export default Section4;
