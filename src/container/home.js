import { Box, Dialog, Divider, List, ListItem, ListSubheader, makeStyles, Modal } from "@material-ui/core";
import Carousel from "react-slick";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import Footer from "./footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "./header";
import React from "react";
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
import RoomCard from "./views/RoomCard";
import { Close } from "@material-ui/icons";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import { scrollToId } from "./common";

const useStyles = makeStyles(style);


export default (props)=>{
  React.useEffect(() => {
    scrollToId()
  });
  const [selectedRoom, selectRoom] = React.useState(null);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: "80vh",
    maxWidth: "100vw",
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflowY: "auto"
  };
  const classes = useStyles();
  let carouselImages = ["/images/2.jpg", "/images/3.jpg", "/images/4.jpg"]
  let roomCarouselImages = [
    "./images/rooms/king.jpeg", "./images/rooms/two_queen_suite.jpeg", 
    "./images/rooms/two_queen.jpeg", "./images/rooms/king_handicap.jpeg", 
    "./images/rooms/two_queen_beds.jpeg", "./images/rooms/two_queen_beds_2.jpeg",
    "./images/rooms/two_queen_beds_3.jpeg", "./images/rooms/washroom.jpeg", 
    "./images/rooms/two_queen_mirror.jpeg", "./images/rooms/outerior.jpeg", "./images/rooms/outerior_4.jpeg"
  ]
  let roomDetails = [{
      title: "King Room",
      thumbnail: "./images/rooms/king.jpeg",
      beds: "1 King size",
      person: "upto 2",
      amenities: ["Cable channels", "Flat-screen TV", "Free weekday newspaper", "Premium TV channels"],
      action: ""
    }, {
      title: "King Handicap Room",
      thumbnail: "./images/rooms/king_handicap.jpeg",
      beds: "1 King size",
      person: "upto 2",
      amenities: ["Cable channels", "Flat-screen TV", "Free weekday newspaper", "Premium TV channels"],
      action: ""
    }, {
      title: "Two Queen Room",
      thumbnail: "./images/rooms/two_queen.jpeg",
      beds: "2 Queen size",
      person: "upto 4",
      amenities: ["Cable channels", "Flat-screen TV", "Free weekday newspaper", "Premium TV channels"],
      action: ""
    }, {
      title: "Two Queen Suite",
      thumbnail: "./images/rooms/two_queen_suite.jpeg",
      beds: "1 Queen size",
      person: "upto 4",
      amenities: ["Cable channels", "Flat-screen TV", "Free weekday newspaper", "Premium TV channels"],
      action: ""
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
    <div id="page-top">
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
                <Carousel {...carouselSettings}>
                  {
                    carouselImages.map((x)=>
                    <div>
                      <div style={{paddingBottom: "75%", background: `center / contain no-repeat url("${x}"), black`}}>
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
      <div id="rooms" className={classNames(classes.section, classes.whiteSection)}>
        <h1 className={classNames(classes.title, "text-center", "text-dark")}>Rooms</h1>
        <div className={classes.container}>
          <GridContainer>
            {
              roomDetails.map((roomData, roomId)=>
                <GridItem xs={12} sm={6} md={4}><RoomCard roomDetails={roomData} roomId={roomId} onClick={selectRoom}/></GridItem>
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
      <div id="about" className={classNames(classes.section, classes.whiteSection)}>
        <div className={classes.container}>
          <h1 className={classNames(classes.title, "text-center", "text-dark")}>About us</h1>
          <GridContainer>
            <GridItem md={1}/>
            <GridItem md={10}>
              The Junction Inn is a 38 room motel that sets adjacent to The Junction Restaurant & Lounge. 
              Each room is very spacious and offers telephone service, cable tv, and daily maid service all 
              at a VERY reasonable price. Weekly rates available for seven consecutive days. Fishermen! 
              We also have electrical hook ups, a deep freezer, and fish cleaning station!
            </GridItem>
            <GridItem md={1}/>
          </GridContainer>
        </div>
      </div>
      <div className={classNames(classes.section, classes.whiteSection)}>
        <div class="elfsight-app-d14a6a06-562d-49a8-b625-287c0b98569c"></div>
      </div>
      {
        roomDetails[selectedRoom] && 
        (
          <Modal open={roomDetails[selectedRoom]} onClose={() => selectRoom(null)}>
            <Box sx={modalStyle} className={classes.container}>
              <GridContainer>
                <GridItem xs={12} className="my-3">
                  <h1 className={classNames(classes.title, "text-center", "text-info")}>{roomDetails[selectedRoom].title}</h1>
                </GridItem>
                {/* <GridItem md={1}/> */}
                <GridItem md={4}>
                  <div className="m-3">
                    <Card>
                      <CardBody>
                        <List component="div"
                          subheader={
                            <ListSubheader className="p-1 bg-white"><h3>Room Details</h3></ListSubheader>
                          }
                        >
                          <ListItem className="p-1">
                            Beds: &nbsp; <span className="text-info">{roomDetails[selectedRoom].beds}</span>
                          </ListItem>
                          <ListItem className="p-1">
                            Person:  &nbsp; <span className="text-info">{roomDetails[selectedRoom].person}</span>
                          </ListItem>
                          <ListItem className="p-1">
                            Amenities:
                          </ListItem>
                          <ListItem className="pt-0">
                            <List component="div" disablePadding>
                              {roomDetails[selectedRoom].amenities.map(a=>(
                                <ListItem className="py-0 pl-3 pr-0">{a}</ListItem>
                              ))}
                            </List>
                          </ListItem>
                        </List>
                      </CardBody>
                      <Divider variant="middle" style={{ height: 3 }}/>
                      <CardFooter>
                        <div className="text-center w-100">
                          <Button round color="twitter" className="px-5">
                            <span className="p-1">Book Now</span>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </GridItem>
                <GridItem md={8}>
                  <Carousel {...carouselSettings}>
                    {
                      roomCarouselImages.map((x)=>
                        <div>
                          <div style={{paddingBottom: "50%", background: `center / contain no-repeat url("${x}"), black`}}>
                          </div>
                        </div>
                      )
                    }
                  </Carousel>
                  <div className="my-5">
                    The Junction Inn is a 38 room motel that sets adjacent to The Junction Restaurant & Lounge. 
                    Each room is very spacious and offers telephone service, cable tv, and daily maid service all 
                    at a VERY reasonable price. Weekly rates available for seven consecutive days. Fishermen! 
                    We also have electrical hook ups, a deep freezer, and fish cleaning station!
                  </div>
                </GridItem>
                {/* <GridItem md={1}/> */}
              </GridContainer>
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => selectRoom(null)}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button>
            </Box>
          </Modal>
        )
      }
      <Footer/>
    </div>
  );
};