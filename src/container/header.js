import Header from "components/Header/Header";
import HeaderLinks from "./headerLinks";

export default ()=>{
  return (
    <Header
      brand="Home"
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      color="transparent"
      changeColorOnScroll={{
        height: 400,
        color: "info",
      }}
    />
  );
}