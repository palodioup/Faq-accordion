const faqArrow1 = document.getElementById("arrow");
const faqArrow2 = document.getElementById("arrow1");
const faqArrow3 = document.getElementById("arrow2");
const faqArrow4 = document.getElementById("arrow3");
const faqArrow5 = document.getElementById("arrow4");
const textAppend1 = document.getElementById("ht-id1")
const textAppend2 = document.getElementById("ht-id2")
const textAppend3 = document.getElementById("ht-id3")
const textAppend4 = document.getElementById("ht-id4")
const textAppend5 = document.getElementById("ht-id5")
const textFaq = `
  <p>Press the open through the website. If you have the app on your tablet, phone or any other device click on the icon</p>
`

faqArrow1.addEventListener("click", (e) => {
  e.preventDefault();
  textAppend1.innerHTML = textFaq
});
faqArrow2.addEventListener("click", (e) => {
  e.preventDefault();
  textAppend2.innerHTML = textFaq
});
faqArrow3.addEventListener("click", (e) => {
  e.preventDefault();
  textAppend3.innerHTML = textFaq
});
faqArrow4.addEventListener("click", (e) => {
  e.preventDefault();
  textAppend4.innerHTML = textFaq
});
faqArrow5.addEventListener("click", (e) => {
  e.preventDefault();
  textAppend5.innerHTML = textFaq
});
