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
          <Grid container className={style.section5}>
            {/* <Container maxWidth="xl"> */}
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
                // alignItems="center"
                sx={{
                  top: "50%",
                  bottom: "50%",
                  minHeight: "100vh",
                  padding: 3,
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
                  <Grid
                    container
                    direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                    spacing={2}
                  >
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
                  <Grid
                    container
                    direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                    spacing={2}
                  >
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
                          setForm({ ...form, name: e.target.value });
                        }}
                        placeholder="Johndoe@gmail.com"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                    spacing={2}
                  >
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
                          setForm({ ...form, name: e.target.value });
                        }}
                        placeholder="I want to book a place on Monday..."
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "10vh", backgroundColor: "#303030" }}
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>asd</Grid>
                <Grid item>asd</Grid>
                <Grid item>asd</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </ThemeProvider>
    </>
  );
};

export default Section5;
