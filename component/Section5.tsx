import { useStyles } from "./styling/SectionStyle";
import theme from "../src/theme";
import { ThemeProvider } from "@mui/styles";
import { Hidden, Grid, Container } from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Section5 = () => {
  const style = useStyles();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(form);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden mdDown>
          <Grid container>
            <Grid
              item
              xs={false}
              sm={5}
              md={false}
              sx={{
                backgroundImage: `url(${"footer.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid item sm={9} md={7}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{
                  top: "50%",
                  bottom: "50%",
                  minHeight: "95vh",
                  padding: 3,
                  ml: 2,
                }}
                spacing={5}
              >
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "42px",
                      lineHeight: "63px",
                    }}
                  >
                    Make An Appointment
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "24px",
                        }}
                      >
                        Full Name
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        sx={{ minWidth: "50%" }}
                        onChange={(e: any) => {
                          setForm({ ...form, name: e.target.value });
                        }}
                        placeholder="John Doe"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "24px",
                        }}
                      >
                        Email Adress
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        sx={{ minWidth: "50%" }}
                        onChange={(e: any) => {
                          setForm({ ...form, email: e.target.value });
                        }}
                        placeholder="Johndoe@gmail.com"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "24px",
                        }}
                      >
                        Message
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        sx={{ minWidth: "50%" }}
                        onChange={(e: any) => {
                          setForm({ ...form, message: e.target.value });
                        }}
                        placeholder="I want to book a place on Monday..."
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <a
                    href={`https://api.whatsapp.com/send?phone=62818178545&text=Halo%20saya%20${form.name},%0A${form.message}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      sx={{
                        width: "160px",
                        height: "55px",
                        padding: 3,
                        backgroundColor: "#303030",
                        borderRadius: "72px",
                        "&:hover": {
                          backgroundColor: "#303030",
                        },
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
                          <img
                            src="./send.png"
                            style={{ verticalAlign: "middle" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              textTransform: "none",
                              fontFamily: "Poppins",
                              lineHeight: "24px",
                              //   textAlign: "center",
                              fontWeight: "bold",
                              color: "#FFFFFF",
                              fontSize: "16px",
                              ml: 1,
                            }}
                          >
                            Submit
                          </Typography>
                        </Grid>
                      </Grid>
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: "9vh", backgroundColor: "#303030" }}
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <img
                            src="./location.png"
                            style={{ verticalAlign: "middle" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: 600,
                              fontSize: "16px",
                              lineHeight: "32px",
                              color: "#EBEBEB",
                              verticalAlign: "middle",
                            }}
                          >
                            Perumahan Buah Batu Regensi, Kota Bandung
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <img
                            src="./mail.png"
                            style={{ verticalAlign: "middle" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: 600,
                              fontSize: "16px",
                              lineHeight: "32px",
                              color: "#EBEBEB",
                              verticalAlign: "middle",
                            }}
                          >
                            cakrawalamusicproduction@gmail.com
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <img
                            src="./phone.png"
                            style={{ verticalAlign: "middle" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: 600,
                              fontSize: "16px",
                              lineHeight: "32px",
                              color: "#EBEBEB",
                              verticalAlign: "middle",
                            }}
                          >
                            +62 877-1759-4959
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className={style.section5m}>
            <Grid container className={style.section5mp}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                // alignItems="center"
                spacing={5}
                sx={{ padding: 3 }}
              >
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
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
                        Make An Appointment
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "21px",
                        }}
                      >
                        Full Name
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        sx={{ minWidth: "100%" }}
                        onChange={(e: any) => {
                          setForm({ ...form, name: e.target.value });
                        }}
                        placeholder="John Doe"
                      />
                    </Grid>
                  </Grid>
                </Grid>{" "}
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "21px",
                        }}
                      >
                        Email Adress
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        sx={{ minWidth: "100%" }}
                        onChange={(e: any) => {
                          setForm({ ...form, email: e.target.value });
                        }}
                        placeholder="Johndoe@gmail.com"
                      />
                    </Grid>
                  </Grid>
                </Grid>{" "}
                <Grid item>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "21px",
                        }}
                      >
                        Message
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        sx={{ minWidth: "100%" }}
                        onChange={(e: any) => {
                          setForm({ ...form, message: e.target.value });
                        }}
                        placeholder="I want to book a place on monday."
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <a
                    href={`https://api.whatsapp.com/send?phone=62818178545&text=Halo%20saya%20${form.name},%0A${form.message}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                    target="_blank"
                  >
                    <Button
                      sx={{
                        width: "160px",
                        height: "55px",
                        padding: 3,
                        backgroundColor: "#303030",
                        borderRadius: "72px",
                        "&:hover": {
                          backgroundColor: "#303030",
                        },
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
                          <img
                            src="./send.png"
                            style={{ verticalAlign: "middle" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              textTransform: "none",
                              fontFamily: "Poppins",
                              lineHeight: "24px",
                              //   textAlign: "center",
                              fontWeight: "bold",
                              color: "#FFFFFF",
                              fontSize: "16px",
                              ml: 1,
                            }}
                          >
                            Submit
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

export default Section5;
