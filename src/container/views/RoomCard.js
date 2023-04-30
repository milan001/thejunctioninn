import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter";
import CardHeader from "components/Card/CardHeader";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody";

const useStyles = makeStyles(styles);

export default ({roomDetails, roomId, onClick})=>{
  const classes = useStyles();
  console.log(roomDetails);
  return (
    <Card profile>
      <CardHeader image onClick={()=>onClick(roomId)}>
        <img src={roomDetails.thumbnail}/>
        <div
          className={classes.coloredShadow}
          style={{
            backgroundImage: `url(${roomDetails.thumbnail})`,
            opacity: "1",
          }}
        />
      </CardHeader>
      <CardBody onClick={()=>onClick(roomId)}>
        <h4 className={classes.cardTitle}>{roomDetails.title}</h4>
      </CardBody>
      <CardFooter profile
        className={classes.justifyContentCenter}
      >
        <Button round color="twitter" onClick={()=>onClick(roomId)}>
          <span>See More</span>
        </Button>
      </CardFooter>
    </Card>
  )
}