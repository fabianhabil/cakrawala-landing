import { ThemeProvider } from "@mui/styles";
import theme from "../src/theme";
import { useStyles } from "./styling/SectionStyle";
import {
  Grid,
  Container,
  Hidden,
  Typography,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Section2 = () => {
  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden mdDown>
          <Grid container className={style.section2}>
            <Container maxWidth="xl">
              <Grid
                container
                sx={{ px: "50px", height: "100%" }}
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={4}
                  justifyContent="center"
                >
                  <Grid item md={5}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item xs={12} md={12}>
                        <Card>
                          <div
                            style={{
                              backgroundImage: `url(${"profile.png"})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                backgroundImage: `url(${"profile.png"})`,
                                minHeight: "600px",
                                background:
                                  "linear-gradient(360deg, rgba(48, 48, 48, 0.9) 0%, rgba(48, 48, 48, 0) 100%)",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  color: "white",
                                  bottom: 25,
                                  width: "100%",
                                }}
                              >
                                <Grid
                                  container
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="center"
                                  spacing={2}
                                >
                                  <Grid item>
                                    <Typography
                                      sx={{
                                        fontFamily: "Poppins",
                                        fontSize: "22px",
                                        fontWeight: "700",
                                        lineHeight: "19px",
                                        letterSpacing: "2px",
                                      }}
                                    >
                                      Geraldo Cakrawala
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      sx={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        lineHeight: "19px",
                                      }}
                                    >
                                      Audio Engineer
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={7}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      spacing={5}
                    >
                      <Grid item md={12} xs={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontWeight: "bold",
                            fontSize: "18px",
                            lineHeight: "22px",
                            letterSpacing: "2px",
                          }}
                        >
                          ABOUT US
                        </Typography>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                            fontSize: "45px",
                            lineHeight: "63px",
                          }}
                        >
                          Geraldo Cakrawala
                        </Typography>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "46px",
                            color: "#A1A1A1",
                          }}
                        >
                          Geraldo Cakrawala is a Minang song singer who has
                          issued 5 Minang singles through a well-known label in
                          West Sumatra, namely RW PRO and 1 single in
                          Indonesian. Geraldo Cakrawala also covers songs on his
                          personal YouTube channel.
                        </Typography>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <a
                          href="https://www.youtube.com/channel/UCxsqTCu4jW0EAdjFrK6TrVw/featured"
                          style={{ color: "inherit", textDecoration: "none" }}
                          target="_blank"
                        >
                          <Button
                            sx={{
                              width: "260px",
                              height: "55px",
                              backgroundColor: "#FFFFFF",
                              // backgroundColor: "black",
                              border: "2px solid #303030",
                              borderRadius: "72px",
                            }}
                          >
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              sx={{ wrap: "noWrap" }}
                            >
                              <Grid item>
                                {/* <img
                                src="./youtube.png"
                                style={{
                                  verticalAlign: "middle",
                                  width: "26px",
                                  height: "26px",
                                }}
                              /> */}
                                <YouTubeIcon
                                  sx={{
                                    verticalAlign: "middle",
                                    width: "26px",
                                    height: "26px",
                                    color: "#303030",
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{
                                    textTransform: "none",
                                    fontFamily: "Poppins",
                                    lineHeight: "24px",
                                    //   textAlign: "center",
                                    fontWeight: 600,
                                    color: "#303030",
                                    fontSize: "16px",
                                    ml: 1,
                                  }}
                                >
                                  Geraldo Cakrawala
                                </Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className={style.section2m}>
            <Grid container className={style.section2mp}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{ padding: 3, my: 1 }}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "17px",
                      letterSpacing: "2px",
                      color: "#303030",
                    }}
                  >
                    ABOUT US
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "bold",
                      fontSize: "24px",
                      lineHeight: "36px",
                      letterSpacing: "1px",
                      color: "#303030",
                    }}
                  >
                    Geraldo Cakrawala
                  </Typography>
                </Grid>
                <Grid item>
                  <Card sx={{ minWidth: "90%" }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image="./profile.png"
                      alt="green iguana"
                    />
                  </Card>
                </Grid>
                <Grid item>
                  <a
                    href="https://www.youtube.com/channel/UCxsqTCu4jW0EAdjFrK6TrVw/featured"
                    style={{ color: "inherit", textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      sx={{
                        width: "260px",
                        height: "55px",
                        backgroundColor: "#303030",
                        // backgroundColor: "black",
                        // border: "2px solid #303030",
                        borderRadius: "72px",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ wrap: "noWrap" }}
                      >
                        <Grid item>
                          {/* <img
                                src="./youtube.png"
                                style={{
                                  verticalAlign: "middle",
                                  width: "26px",
                                  height: "26px",
                                }}
                              /> */}
                          <YouTubeIcon
                            sx={{
                              verticalAlign: "middle",
                              width: "26px",
                              height: "26px",
                              color: "#FFFFFF",
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              textTransform: "none",
                              fontFamily: "Poppins",
                              lineHeight: "24px",
                              //   textAlign: "center",
                              fontWeight: 500,
                              color: "#FFFFFF",
                              fontSize: "16px",
                              ml: 1,
                            }}
                          >
                            Geraldo Cakrawala
                          </Typography>
                        </Grid>
                      </Grid>
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </ThemeProvider>
    </>
  );
};

export default Section2;
