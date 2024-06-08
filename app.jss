const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1611916621570-XAGC0O90QVBJH8EZRJ8E/Nike+Air+Force+One+History+of+AF1.jpg",
      },
      {
        code: "darkblue",
        img: "https://images.squarespace-cdn.com/content/v1/58ee0b551e5b6c8ff18b94ad/1611916621570-XAGC0O90QVBJH8EZRJ8E/Nike+Air+Force+One+History+of+AF1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://m.media-amazon.com/images/I/61JEvj1nj5L.jpg",
      },
      {
        code: "green",
        img: "https://m.media-amazon.com/images/I/61JEvj1nj5L.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://m.media-amazon.com/images/I/710uHFKgvOL.jpg",
      },
      {
        code: "green",
        img: "https://m.media-amazon.com/images/I/710uHFKgvOL.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 174,
    colors: [
      {
        code: "black",
        img: "https://m.media-amazon.com/images/I/51nlENQuDeL.jpg",
      },
      // {
      //   code: "lightgray",
      //   img: "https://m.media-amazon.com/images/I/51nlENQuDeL.jpg",

      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 199,
    colors: [
      {
        code: "gray",
        img: "https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Photo.png",
      },
      {
        code: "black",
        img: "https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Photo.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});