/* eslint-disable */
export const scrollToId = () => {
  // document.body.classList.add("section-page");

  var href = window.location.href;
  if (href.lastIndexOf("#") > 0) {
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
  } else {
    var hrefId = "page-top";
  }
  console.log("scrolling to id:"+hrefId);
  document.getElementById(hrefId).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}