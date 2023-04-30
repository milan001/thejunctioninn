/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "./header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "./footer";
import axios from "axios";


import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomSkinMap = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "44.43353";
    let lng = "26.093928";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 14,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            { hue: "#ff0000" },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }],
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "The Junction Inn",
    });

    const contentString =
      '<div class="info-window-content"><h2>The Junction Inn</h2>' +
      "<p>A premium Kit for React, Material-UI, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div
        style={{ height: `100%`, borderRadius: "6px", overflow: "hidden" }}
        ref={mapRef}
      ></div>
    </>
  );
};

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  const [contactDetails, setContactDetails] = React.useState({});
  const [snackbarOpen, setSnackbarOpen] =  React.useState(false);
  const classes = useStyles();
  return (
    <div id="page-top">
      <Header/>
      <div className={classes.bigMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.6988933360276!2d-91.63775588451031!3d39.43093287949187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ddb100f631799b%3A0x8b9c7ea0e62166da!2sThe%20Junction%20Inn!5e0!3m2!1sen!2sin!4v1679858805174!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send us a message</h2>
            <p>
              We'll be glad to hear from you. Please write to us or connect with us over the provided contact number.
              <br />
              <br />
            </p>
            <GridContainer>
              <GridItem md={6}>
              <MailchimpSubscribe
                  url="https://gmail.us13.list-manage.com/subscribe/post?u=99ea8843efd995dc2f79cb22c&amp;id=c0fef2a8d6&amp;f_id=008de6e2f0"
                  render={({ subscribe, status, message }) => (
                    <div>
                        <CustomInput
                          labelText="Your Name"
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                            onChange: (e)=>{setContactDetails({...contactDetails, name: e.target.value})}
                          }}
                        />
                        <CustomInput
                          labelText="Email address"
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                            onChange: (e)=>{setContactDetails({...contactDetails, email: e.target.value})}
                          }}
                        />
                        <CustomInput
                          labelText="Phone"
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                            onChange: (e)=>{setContactDetails({...contactDetails, phone: e.target.value})}
                          }}
                        />
                        <CustomInput
                          labelText="Your message"
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                            onChange: (e)=>{setContactDetails({...contactDetails, message: e.target.value})}
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 6,
                          }}
                        />
                        <div className={classes.textCenter}>
                          <Button color="primary" round onClick={()=>{
                            setSnackbarOpen(true);
                            subscribe({
                              EMAIL: contactDetails.email,
                              FNAME: contactDetails.name,
                              PHONE: contactDetails.phone,
                              MSG: contactDetails.message
                          })}}>
                            Contact us
                          </Button>
                        </div>
                        {(status === "error" || status === "success") && 
                          <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={()=>{setSnackbarOpen(false)}}>
                            <Alert onClose={()=>{setSnackbarOpen(false)}} severity={status === "success" ? "success" : "error"} sx={{ width: '100%' }}>
                              {status === "success" ? "Your message is saved successfuly!" : "Failed to send message"}
                            </Alert>
                          </Snackbar>
                        }
                    </div>
                  )}
                />
              </GridItem>
              <GridItem md={6}>
                <InfoArea
                  className={classes.info}
                  title="Find us at"
                  description={
                    <p>
                      28840 Highway 19, 
                      <br/> 
                      Junction of Hwy 19 & 154, 
                      <br/>
                      Perry, MO 63462
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Give us a ring"
                  description={
                    <p>
                      The junction inn <br /> +1 573 570 2039
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Legal Information"
                  description={
                    <p>
                      Shivji hospitality, LLC <br /> Email · junctioninnperry@gmail.com
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
