import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  section1: {
    backgroundImage: `url(${"band.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    width: "100%",
    minHeight: "100vh",
  },
  navmenu: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "17px",
    cursor: "pointer",
  },
  section1m: {
    minHeight: "40vh",
    height: "100%",
  },
  section1mp: {
    backgroundImage: `url(${"band.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    minHeight: "100%",
    width: "100%",
  },
  section2: {
    minHeight: "100vh",
    backgroundColor: "#E5E5E5",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    width: "100%",
  },
  section2m: {
    minHeight: "70vh",
    height: "100%",
  },
  section2mp: {
    backgroundColor: "#E5E5E5",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    minHeight: "100%",

    width: "100%",
  },
  cardmedia: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  section3: {
    minHeight: "100vh",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    width: "100%",
  },
  section3m: {
    minHeight: "70vh",
    height: "100%",
  },
  section3mp: {
    backgroundColor: "#E5E5E5",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    // minHeight: "100%",
    // width: "100%",
  },
}));

export { useStyles };
