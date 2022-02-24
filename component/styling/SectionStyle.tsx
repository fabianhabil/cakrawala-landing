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
    background: "linear-gradient(95.29deg, #303030 100%, #3E3E3E 100%)",
    backgroundColor: "#454545",
    borderRadius: "5px",
    padding: "20px",
    color: "#FFFFFF",
    "&:hover": {
      background: "#454545",
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
      backgroundColor: "#373737",
      color: "#FFFFFF",
    },
  },
  buttonSection1m: {
    marginTop: "2vh",
    color: "black",
    textTransform: "none",
    backgroundColor: "white",
    width: "161px",
    height: "52px",
    "&:active": {
      backgroundColor: "#ffffff",
    },
    "&:hover": {
      background: "#454545",
      color: "white",
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

  // Section 4
  section4: {
    minHeight: "100vh",
    backgroundColor: "#E5E5E5",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    width: "100%",
  },
  harga: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "26px",
    lineHeight: "46px",
  },
  namaPaket: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "36px",
  },
  namaPaketm: {
    color: "#202020",
    fontWeight: 600,
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "36px",
  },
  isiPaketm: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "33px",
  },
  isiPaket: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "15px",
    // lineHeight: "22.5px",
    color: "#848199",
  },
  buttonPaket: {
    backgroundColor: "rgba(244, 150, 209, 0.2)",
    borderRadius: "24px",
    // width: "80%",
    width: "100%",
    // width: "120px",
    // width: "25vh",
    height: "50px",
    color: "#F496D1",
    "&:hover": {
      backgroundColor: "#F496D1",
      color: "white",
    },
    "&:active": {
      backgroundColor: "#F496D1",
    },
  },
  hurufButtonPaket: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "22.5px",
    textTransform: "none",
  },
  section4m: {
    minHeight: "100vh",
    height: "100%",
    // width: "100%",
  },
  section4mp: {
    backgroundColor: "#E5E5E5",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    minHeight: "100%",
    width: "100%",
  },

  // Section 5
  section5: {
    minHeight: "90vh",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "black",
    width: "100%",
    height: "100%",
  },
  section5m: {
    minHeight: "70vh",
    height: "100%",
  },
  section5mp: {
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
