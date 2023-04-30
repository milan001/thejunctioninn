import {
  container,
  title,
  main,
  whiteColor,
  blackColor,
  grayColor,
  mainRaised,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";
import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";

const presentationStyle = {
  ...footerStyle,
  ...modalStyle,
  main: {
    ...main,
    /*overflow: "hidden"*/
  },
  section: {
    padding: "70px 0",
  },
  whiteSection: {
    backgroundColor: whiteColor,
  },
  graySection: {
    backgroundColor: grayColor[23],
  },
  section: {
    padding: "70px 0",
  },
  mainRaised,
  parallax: {
    height: "90vh",
    overflow: "hidden",
  },
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    color: whiteColor,
  },
  description: {
    color: grayColor[2],
  },
  brand: {
    color: whiteColor,
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)",
  },
  pageHeader: {
    position: "relative",
    minHeight: "100vh",
    maxHeight: "1600px",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    // WebkitBoxAlign: "center",
    // MsFlexAlign: "center",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
};

export default presentationStyle;
