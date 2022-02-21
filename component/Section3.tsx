import {
  Hidden,
  Grid,
  Container,
  Typography,
  Paper,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import theme from "../src/theme";
import { useStyles } from "./styling/SectionStyle";
import Carousel from "react-material-ui-carousel";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Marquee from "react-fast-marquee";

const fasilitas = [
  {
    name: "1",
    description: "1",
    foto: "./fasilitas1.png",
  },
  {
    name: "2",
    description: "2",
    foto: "./fasilitas2.png",
  },
  {
    name: "3",
    description: "3",
    foto: "./fasilitas1.png",
  },
  {
    name: "4",
    description: "4",
    foto: "./fasilitas2.png",
  },
];

const Section3 = () => {
  const style = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden mdDown>
          <Grid container className={style.section3}>
            <Container maxWidth="xl">
              <Grid
                container
                sx={{ px: "50px", height: "100%" }}
                alignItems="center"
                justifyContent="center"
                direction="column"
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
                    Our Facilities
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      lineHeight: "32px",
                      fontSize: "20px",
                      color: "#BBBBBB",
                    }}
                  >
                    We provide comfortable and clean facilities. Take a look to
                    our facilitiy!
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item md={12} xs={12}>
                      <Marquee
                        gradient={false}
                        speed={40}
                        style={{ marginBottom: "25px" }}
                        direction="right"
                      >
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Grid item sx={{ marginLeft: "15px" }}>
                            <img
                              src="./fasilitas1.png"
                              style={{ width: "365px", height: "450px" }}
                            />
                          </Grid>
                          <Grid item sx={{ marginLeft: "15px" }}>
                            <img
                              src="./fasilitas2.png"
                              style={{ width: "365px", height: "450px" }}
                            />
                          </Grid>
                          <Grid item sx={{ marginLeft: "15px" }}>
                            <img
                              src="./fasilitas1.png"
                              style={{ width: "365px", height: "450px" }}
                            />
                          </Grid>
                          <Grid item sx={{ marginLeft: "15px" }}>
                            <img
                              src="./profile.png"
                              style={{ width: "365px", height: "450px" }}
                            />
                          </Grid>
                          <Grid
                            item
                            sx={{
                              marginLeft: "15px",
                            }}
                          >
                            <img
                              src="./gig.jpeg"
                              style={{ width: "365px", height: "450px" }}
                            />
                          </Grid>
                          <Grid item sx={{ marginLeft: "15px" }}>
                            <img
                              src="./fasilitas2.png"
                              alt=""
                              style={{ width: "365px", height: "450px" }}
                            />
                          </Grid>
                          {/* <Grid item>
                            <Button
                              sx={{
                                color: "black",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                },
                                "&:active": {
                                  backgroundColor: "transparent",
                                },
                              }}
                            >
                              <ArrowForwardIosIcon />
                            </Button>
                          </Grid> */}
                        </Grid>
                      </Marquee>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className={style.section3m}>
            <Grid container className={style.section3mp}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                // sx={{ padding: 3 }}
                sx={{ py: 3, px: 2 }}
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
                    Our Facilities
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      lineHeight: "32px",
                      fontSize: "20px",
                      color: "#BBBBBB",
                    }}
                  >
                    We provide comfortable and clean facilities. Take a look to
                    our facilitiy!
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{ padding: 0 }}
                  >
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={3}
                      >
                        <Grid item xs={6}>
                          <img
                            src="./fasilitas1.png"
                            width={180}
                            height={180}
                          ></img>
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            src="./fasilitas1.png"
                            width={180}
                            height={180}
                          ></img>
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

export default Section3;
