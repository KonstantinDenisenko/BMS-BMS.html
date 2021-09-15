// (function () {
//     var navMobBtn = document.querySelector(".nav-mob");
//     var backgroundMain = document.getElementById("opacity-main");
//     var mobSideMenu = document.querySelector(".mob-side-menu");
//     var mobMenuHiddenBtn = document.querySelector(".mob-menu-close");
//     var sideMenuLiBtn = document.getElementById("sideMenuLi");
//     var insideMenu = document.querySelector(".inside-menu");
//     var startPage = document.querySelector("body"); //body
//
//     navMobBtn.addEventListener("click", function () {
//         navMob();
//     });
//
//     backgroundMain.addEventListener("click", function () {
//         mobMenuHidden();
//         close();
//     });
//
//     mobMenuHiddenBtn.addEventListener("click", function () {
//         mobMenuHidden();
//     });
//
//     sideMenuLiBtn.addEventListener("click", function () {
//         sideMenuLi();
//     });
//
//     function navMob() {
//         backgroundMain.classList.add("opacity-main");
//         mobSideMenu.style.right = 0;
//         startPage.style = "overflow: hidden"
//     }
//
//     function mobMenuHidden() {
//         backgroundMain.classList.remove("opacity-main");
//         mobSideMenu.style.right = -340 + "px";
//         insideMenu.style.height = 0;
//         startPage.style = "overflow: auto"
//     }
//
//     function sideMenuLi() {
//         if (insideMenu.style.height === "0px") {
//             insideMenu.style.height = 275 + "px";
//         }else {
//             insideMenu.style.height = 0;
//         };
//     }
//
//     var galleryMini = document.querySelector(".myworks-photo");
//     var galleryBtns = galleryMini.querySelectorAll(".myworks-figure");
//
//     var galleryPreview = document.querySelector(".gallery-full-size");
//     var imgs = galleryPreview.querySelectorAll(".preview");
//     var wrapImg = document.querySelector(".wrap-gallery");
//
//     var btnNext = document.querySelector(".btn-next");
//     var btnBack = document.querySelector(".btn-back");
//     var btnClose = document.querySelector(".btn-close");
//     var currentImg;
//
//     for(var a = 0; a < galleryBtns.length; a++){
//         (function (a) {
//             galleryBtns[a].addEventListener("click", function () {
//                 backgroundMain.classList.add("opacity-main");
//                 showImg(a);
//                 galleryPreview.classList.add("active");
//                 imgs[a].classList.add("active");
//                 currentImg = a;
//             });
//         })(a);
//     };
//
//     btnNext.addEventListener("click", function () {
//         currentImg++;
//         if(currentImg === imgs.length){
//             currentImg = 0;
//         }
//         showImg(currentImg);
//     });
//
//     btnBack.addEventListener("click", function () {
//         currentImg--;
//         if(currentImg < 0){
//             currentImg = imgs.length - 1;
//         }
//         showImg(currentImg);
//     });
//
//     btnClose.addEventListener("click", function () {
//         close();
//     });
//
//     function showImg(img) {
//         if(imgs[img].width > imgs[img].height){
//             wrapImg.style.width = 640 + "px";
//             wrapImg.style.height = 480 + "px";
//         }else{
//             wrapImg.style.width = 480 + "px";
//             wrapImg.style.height = 640 + "px";
//         }
//         for(var a = 0; a <imgs.length; a++){
//             imgs[a].classList.remove("active");
//         };
//         imgs[img].classList.add("active");
//     };
//
//     function close() {
//         backgroundMain.classList.remove("opacity-main");
//         galleryPreview.classList.remove("active");
//         for(var a = 0; a <imgs.length; a++){
//             imgs[a].classList.remove("active");
//         };
//     }
//
//
// })();

(function () {
    var sideMenu = document.querySelector(".sideMenu");
    var mobSideMenu = document.querySelector(".mobSideMenu");
    var mobSideMenuLi = document.querySelector(".mobSideMenuLi");
    var space = document.querySelector("html");

    sideMenu.addEventListener("click", function () {
        setNavMob();
    });

    function setNavMob() {
        mobSideMenu.style.right = 0 + "px";
        mobSideMenu.style.top = 0 + "px";
        sideMenu.style.display = "none";
    }

    for(var a = 0; a < mobSideMenuLi.querySelectorAll("li").length; a++){
        (function (a) {
            mobSideMenuLi.querySelectorAll("li")[a].addEventListener("click", function () {
                unSetNavMob();
            });
        })(a);
    };

    function unSetNavMob() {
        mobSideMenu.style.right = -1600 + "px";
        mobSideMenu.style.top = -1570 + "px";
        sideMenu.style.display = "block";
    }
})();

