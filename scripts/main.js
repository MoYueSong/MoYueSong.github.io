let clicknum = 1;

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (clicknum <= 3) {
    alert(miao(clicknum));
    clicknum = clicknum + 1;
    if (mySrc === "images/cat2.jpg") {
      myImage.setAttribute("src", "images/cat.jpg");
    }
  } else {
    if (mySrc === "images/cat.jpg") {
      myImage.setAttribute("src", "images/cat2.jpg");
    }
    alert("别戳了，烦死了！！！");
    clicknum = 1;
  }
};

function miao(num) {
  let m = "";
  for (let i = 0; i < num; i++) {
    m = m + "喵";
  }
  return m;
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
