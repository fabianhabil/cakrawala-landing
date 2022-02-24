import {
  Hidden,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import theme from "../src/theme";
import { useStyles } from "./styling/SectionStyle";
import React from "react";
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
                sx={{ px: "50px", height: "100%", my: 3 }}
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
                              src="./fasilitas3.jpg"
                              style={{
                                width: "365px",
                                height: "450px",
                                borderRadius: "8px",
                              }}
                            />
                          </Grid>
                          <Grid item sx={{ marginLeft: "15px" }}>
                            <img
                              src="./fasilitas4.jpg"
                              style={{
                                width: "365px",
                                height: "450px",
                                borderRadius: "8px",
                              }}
                            />
                          </Grid>
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
                sx={{ padding: 3, my: 1 }}
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
                        alignItems: "center",
                        textAlign: "center",
                        flexGrow: 1,
                        justifyContent: "center",
                        fontSize: "20px",
                        color: "#BBBBBB",
                      }}
                    >
                      We provide comfortable and clean facilities. Take a look
                      to our facility!
                    </Typography>
                  </Grid>
                </Grid>
                <Marquee
                  gradient={false}
                  speed={40}
                  style={{ marginTop: "25px" }}
                  direction="right"
                >
                  <Grid item>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                      spacing={3}
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
                          src="./fasilitas3.jpg"
                          style={{
                            width: "365px",
                            height: "450px",
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>
                      <Grid item sx={{ marginLeft: "15px" }}>
                        <img
                          src="./fasilitas4.jpg"
                          style={{
                            width: "365px",
                            height: "450px",
                            borderRadius: "8px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Marquee>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </ThemeProvider>
    </>
  );
};

export default Section3;
