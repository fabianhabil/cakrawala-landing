import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  // Section 1
  section1: {
    backgroundImage: `url(${"band.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    width: "100%",
    minHeight: "100vh",
  },
  nav: {
    backgroundColor: "transparent",
    padding: "50px",
  },
  judulnav: {
    fontFamily: "Poppins",
    fontWeight: 800,
    fontSize: "20px",
    marginLeft: "12px",
  },
  navmenu: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "17px",
    cursor: "pointer",
  },
  isiSection1: {
    padding: "50px",
    marginTop: "5vh",
  },
  judulSection1: {
    fontFamily: "Playfair Display",
    fontWeight: 500,
    letterSpacing: "3px",
    fontSize: "52px",
  },
  descSection1: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "20px",
    letterSpacing: "2px",
    lineHeight: "46px",
  },
  judulSection1m: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "1px",
  },
  descSection1m: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "26px",
    letterSpacing: "1px",
    textAlign: "center",
    marginTop: "2vh",
  },
  button1Section1: {
    width: "200px",
    height: "55px",
    background: "linear-gradient(95.29deg, #303030 0%, #3E3E3E 100%)",
    borderRadius: "5px",
    padding: "20px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#F8F7F3",
    },
  },
  button2Section1: {
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
  },
  buttonSection1m: {
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

  // Section 2
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

  // Section 3
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
    minHeight: "100%",
    width: "100%",
  },
}));

export { useStyles };
