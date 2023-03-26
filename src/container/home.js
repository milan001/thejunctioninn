import { makeStyles } from "@material-ui/core";
import Carousel from "react-slick";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import Footer from "./footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "./header";
import Parallax from "components/Parallax/Parallax";
import React from "react";
import SectionDescription from "views/PresentationPage/Sections/SectionDescription";
import Card from "components/Card/Card.js";
import style from "./style";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import ComputerIcon from '@mui/icons-material/Computer';
import PoolIcon from '@mui/icons-material/Pool';
import WifiIcon from '@mui/icons-material/Wifi';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LightIcon from '@mui/icons-material/Light';
import RoomServiceIcon from '@mui/icons-material/RoomService';

const useStyles = makeStyles(style);

export default (props)=>{
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const classes = useStyles();
  let carouselImages = ["/images/2.jpg", "/images/3.jpg", "/images/4.jpg"]
  let roomDetails = [{
    title: ""
  }]
  let amenityDetails = [{
    icon: <FreeBreakfastIcon sx={{fontSize: "inherit"}}/>,
    title: "Free Continatel Breakfast"
  },{
    icon: <ComputerIcon sx={{fontSize: "inherit"}}/>,
    title: "Desk"
  },{
    icon: <PoolIcon sx={{fontSize: "inherit"}}/>,
    title: "Indoor Pool"
  },{
    icon: <WifiIcon sx={{fontSize: "inherit"}}/>,
    title: "Free High Speed Internet"
  },{
    icon: <ConnectedTvIcon sx={{fontSize: "inherit"}}/>,
    title: "Cable / Satellite TV"
  },{
    icon: <SmokeFreeIcon sx={{fontSize: "inherit"}}/>,
    title: "Smoke Free Property"
  },{
    icon: <LocalShippingIcon sx={{fontSize: "inherit"}}/>,
    title: "Bus & Truck Parking"
  },{
    icon: <BusinessCenterIcon sx={{fontSize: "inherit"}}/>,
    title: "Business Center"
  },{
    icon: <PetsIcon sx={{fontSize: "inherit"}}/>,
    title: "Pet Friendly Hotel*"
  },{
    icon: <CoffeeIcon sx={{fontSize: "inherit"}}/>,
    title: "Free 24 HR Coffee"
  },{
    icon: <LightIcon sx={{fontSize: "inherit"}}/>,
    title: "Interior Corridor"
  },{
    icon: <RoomServiceIcon sx={{fontSize: "inherit"}}/>,
    title: "Housekeeping"
  }]
  return (
    <div>
      <Header/>
      <div className={classes.pageHeader} style={{ backgroundImage: `url("/images/1.jpg")` }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={6} style={{height: "100vh", alignItems: "center", display: "flex"}}>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  The Junction Inn
                </h1>
                <h3>
                  Have a pleasant stay with us. Book a room now.
                </h3>
                <br/>
                <br/>
                <br/>
                <Button color="danger" size="lg">Book room now</Button>
              </div>
            </GridItem>
            <GridItem md={6} style={{alignItems: "center", display: "flex"}}>
              <Card>
                <Carousel {...settings}>
                  {
                    carouselImages.map((x)=>
                      <div>
                        <div style={{paddingBottom: "75%"}}>
                          <img style={{position: "absolute"}} src={x} className="w-100 h-100" />
                        </div>
                      </div>
                    )
                  }
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.section, classes.whiteSection)}>
        <div className={classes.container}>
          <GridContainer>
            {
              roomDetails.map(roomData=>
                <GridItem xs={6} sm={4} md={3}><div style={{height: "100px"}}></div></GridItem>
              )
            }
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.section, classes.graySection)}>
        <div className={classes.container}>
          <h1 className={classNames(classes.title, "text-center", "text-dark")}>Amenities</h1>
          <GridContainer>
          {
              amenityDetails.map(amenityData=>
                <GridItem xs={4} sm={3} md={2} className="justify-content-center d-grid my-3">
                  <span className="text-info text-center" style={{fontSize: "7rem"}}>{amenityData.icon}</span>
                  <p className="text-center m-auto font-weight-bold">{amenityData.title}</p>
                </GridItem>
              )
            }
          </GridContainer>
        </div>
      </div>
      <Footer/>
    </div>
  );
};