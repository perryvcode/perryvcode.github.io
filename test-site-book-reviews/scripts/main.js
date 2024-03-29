const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/delillo-cosmopolis.jpg") {
    myImage.setAttribute("src", "images/delillo-cosmopolis2.jpg");
  } else {
    myImage.setAttribute("src", "images/delillo-cosmopolis.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to Perry's book ReVs, ${myName}`;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Perry's book ReVs, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };    
