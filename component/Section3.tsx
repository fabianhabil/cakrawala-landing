import { Hidden, Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import theme from "../src/theme";
import { useStyles } from "./styling/SectionStyle";

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
              ></Grid>
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
                spacing={0}
                sx={{ padding: 3 }}
              >
                <Grid item>kotnol 3</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </ThemeProvider>
    </>
  );
};

export default Section3;
