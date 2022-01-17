let totalNoOfImages = 0;
let randomNumber = 0;

fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    randomNumber = Math.floor(Math.random() * data.length);
    imageMount(data);
    totalNoOfImages = data;
  });

const imageMount = (data) => {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");

    const photo = document.createElement("img");
    photo.src = `https://picsum.photos/600/600?random=${data[i].url}`;
    const wrapper = document.querySelector(".image-wrapper");
    const span = document.createElement("span");
    const main = wrapper.appendChild(div);
    main.appendChild(span);
    main.appendChild(photo);
  }

  imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
};

const imageWrapper = document.querySelector(".image-wrapper");
const previousButton = document.querySelector("#prevbtn");
const nextButton = document.querySelector("#nextbtn");

nextButton.addEventListener("click", () => {
  if (totalNoOfImages.length === randomNumber + 1) {
    randomNumber = 0;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  } else {
    imageWrapper.style.transition = "transform 0.4s ease-in-out";
    randomNumber++;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  }
});

previousButton.addEventListener("click", () => {
  if (randomNumber === 0) {
    imageWrapper.style.transition = "transform 0.4s ease-in-out";
    randomNumber = totalNoOfImages.length - 1;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  } else {
    imageWrapper.style.transition = "transform 0.4s ease-in-out";
    randomNumber--;
    imageWrapper.style.transform = "translateX(" + -500 * randomNumber + "px)";
  }
});
