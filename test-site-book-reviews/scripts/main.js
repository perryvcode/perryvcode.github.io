const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/delillo-cosmopolis.jpg") {
    myImage.setAttribute("src", "images/delillo-cosmopolis2.jpg");
  } else {
    myImage.setAttribute("src", "images/delillo-cosmopolis.jpg");
  }
};
