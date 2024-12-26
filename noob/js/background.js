const images = ["img_0.jpeg", "img_1.jpeg", "img_2.jpeg", "img_3.jpeg", "img_4.jpeg", "img_5.jpeg", "img_6.jpeg", "img_7.jpeg", "img_8.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `resource/${chosenImage}`;
bgImage.className = "background-image";
document.body.appendChild(bgImage);