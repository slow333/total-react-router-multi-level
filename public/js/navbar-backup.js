const requestUrl = "/pages/navbar.html";
const footerUrl = "/pages/footer.html";

let req = new XMLHttpRequest();

req.open("GET", requestUrl);
req.responseType = "text";
req.send();

req.onload = function () { // async event handler
   let text = req.response;
   document.querySelector("#menuNavBar").outerHTML = text;
   setCurrentPageNav();
}

let footerReq = new XMLHttpRequest();

footerReq.open("GET", footerUrl);
footerReq.responseType = "text";
footerReq.send();
footerReq.onload = function () {
   let text = footerReq.response;
   document.querySelector("footer").outerHTML = text;
}

function setCurrentPageNav() {
   const mainBtns = document.querySelectorAll(".subnavbtn");
   const subContent = document.querySelectorAll(".subnav-content");
   const subContentA = document.querySelectorAll(".subnav-content a");
   const article = document.querySelector("article");

   mainBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
         let target = e.target;
         let eNextSibling = target.nextSibling.nextSibling;
         if (eNextSibling.style.display === "flex") {
            eNextSibling.style.display = "none";
         }
         subContentA.forEach(sub => {
            sub.style.display = "flex";
         })

         subContent.forEach(suba => {
            // if (window.location.href === suba.href) {
               suba.style.display = "flex";
               suba.style.justifyContent = "start";
               suba.style.zIndex = 20;
         });
      })
   });
   mainBtns.forEach(mainA => {
      if (window.location.pathname.split('/')[2]
           === mainA.href.split('/')[4]) {
         mainA.style.backgroundColor = "red";
         article.style.marginTop = '60px';
      }
   });
}

