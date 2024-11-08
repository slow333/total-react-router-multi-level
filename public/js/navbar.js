const requestUrl = "/pages/navbar.html";
const footerUrl = "/pages/footer.html";

menuRequest();
footerRequest();

function setCurrentPageNav() {
   const btns = document.querySelectorAll(".subnavbtn");
   const mainAs = document.querySelectorAll(".navbar .mainnav");
   const subAs = document.querySelectorAll(".subnav-content a");
   const article = document.querySelector("article");

   btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
         let url = e.target["nextSibling"].nextSibling.firstElementChild;
         window.location.replace(url['href']);
      });
   });

   subAs.forEach(suba => {
      if (window.location.href === suba.href) {
         suba.style.backgroundColor = "darkred";
         suba.parentNode["style"].display = "flex";
         suba.parentNode.parentNode["style"].backgroundColor = "orangered";
         article.style.marginTop = '92px';
      }
   })

   mainAs.forEach(mainA => {
      if (window.location.href === mainA.href) {
         mainA.style.backgroundColor = "red";
      }
   });
}

function menuRequest() {
   let menuReq = new XMLHttpRequest();

   menuReq.open("GET", requestUrl);
   menuReq.responseType = "text";
   menuReq.send();

   menuReq.onload = function () { // async event handler
      let text = menuReq.response;
      document.querySelector("#menuNavBar").outerHTML = text;
      setCurrentPageNav();
   }
}
function footerRequest() {
   let footerReq = new XMLHttpRequest();

   footerReq.open("GET", footerUrl);
   footerReq.responseType = "text";
   footerReq.send();
   footerReq.onload = function () {
      let text = footerReq.response;
      document.querySelector("footer").outerHTML = text;
   }
}