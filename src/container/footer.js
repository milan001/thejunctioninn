import { Button, List, ListItem, makeStyles } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import style from "./style";

const useStyles = makeStyles(style);

export default ()=>{
  const classes = useStyles();
  return (
    <Footer
    theme="white"
    content={
      <div>
        <div className={classes.left}>
          <a
            href="/"
            className={classes.footerBrand}
          >
            The Junction Inn
          </a>
        </div>
        <div className={classes.pullCenter}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                target="_blank"
                className={classes.block}
              >
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                target="_blank"
                className={classes.block}
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/rooms" 
                target="_blank"
                className={classes.block}>
                Rooms
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact"
                target="_blank"
                className={classes.block}
              >
                Contact us
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.rightLinks}>
          <ul>
            <li>
              <Button
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                color="twitter"
                justIcon
                simple
              >
                <i className="fab fa-twitter" />
              </Button>
            </li>
            <li>
              <Button
                href="https://dribbble.com/creativetim?ref=creativetim"
                target="_blank"
                color="dribbble"
                justIcon
                simple
              >
                <i className="fab fa-dribbble" />
              </Button>
            </li>
            <li>
              <Button
                href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                color="instagram"
                justIcon
                simple
              >
                <i className="fab fa-instagram" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    }
  />
  );
}