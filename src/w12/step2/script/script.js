console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);

elemBody.style.backgroundColor = "oklch(0.8, 0.05, 0)";

let aCard = document.querySelector(".card");
console.log(aCard);

//html엘리먼트.addEventListner('이벤트종류' , function () {할 일 });
aCard.addEventListener("click", function () {
  console.log("클릭!");
  console.log(aCard.classList);
  aCard.classList.toggle("card--state-clicked");
});
// document.querySelectorAll(".card");
