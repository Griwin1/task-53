import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const elements= document.getElementsByClassName("product")
  
  for (const e of elements) {
    let price = e.querySelector(".price").innerHTML
    e.setAttribute("data-price",price)
  }
});
