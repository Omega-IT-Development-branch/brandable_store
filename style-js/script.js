var firstSliderHomePage = new Swiper(".firstSliderHomePage", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 1.25,
            spaceBetween: 16,
        },
    },
});
var brandsSwiper = new Swiper(".brandsSwiper", {
    slidesPerView: 5.2,
    spaceBetween: 16,
    loop: true,
    freeMode: true,
    //grabCursor: true,
});
var topProdSwiper = new Swiper(".topProdSwiper", {
    slidesPerView: 5.2,
    spaceBetween: 16,
    loop: true,
    freeMode: true,
    //grabCursor: true,
});
var brandazineSwiper = new Swiper(".brandazineSwiper", {
    slidesPerView: 1.25,
    spaceBetween: 16,
    loop: true,
});
var salesProdSwiper = new Swiper(".salesProdSwiper", {
    slidesPerView: 5.2,
    spaceBetween: 16,
    loop: true,
    freeMode: true,
    //grabCursor: true,
});
var speedStringSwiper = new Swiper('.speedStringSwiper', {  
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed:20000,
    loop: true,
    allowTouchMove: false,
    //allowTouchMove: false, // можно ещё отключить свайп
    autoplay: {
      delay: 0,
    }
  });


var productImgSwipers = document.getElementsByClassName("productImgSwiper");
console.log(productImgSwipers)
for(var i = 0; i < productImgSwipers.length; i++){
    var swiper = new Swiper((".productImgSwiper" + (i+1)), {
        loop: true,
        pagination: {
            el: (".swiper-pagination-prod" + (i+1)),
            clickable: true,
        },
    });
}


var aboutHomeItemOne = document.getElementById("about-home-item-one");
var aboutHomeItemTwo = document.getElementById("about-home-item-two");
var aboutHomeItemThree = document.getElementById("about-home-item-three");
function aboutHomeItemOneHover() {
    if(aboutHomeItemOne && aboutHomeItemTwo && aboutHomeItemThree){
        aboutHomeItemOne.style.setProperty('width', 'calc(40% - 16px - 48px)');
        aboutHomeItemTwo.style.setProperty('width', 'calc(30% - 16px - 48px');
        aboutHomeItemThree.style.setProperty('width', 'calc(30% - 16px - 48px)');
    }
}
function aboutHomeItemTwoHover() {
    if(aboutHomeItemOne && aboutHomeItemTwo && aboutHomeItemThree){
        aboutHomeItemOne.style.setProperty('width', 'calc(30% - 16px - 48px)');
        aboutHomeItemTwo.style.setProperty('width', 'calc(40% - 16px - 48px');
        aboutHomeItemThree.style.setProperty('width', 'calc(30% - 16px - 48px)');
    }
}
function aboutHomeItemThreeHover() {
    if(aboutHomeItemOne && aboutHomeItemTwo && aboutHomeItemThree){
        aboutHomeItemOne.style.setProperty('width', 'calc(30% - 16px - 48px)');
        aboutHomeItemTwo.style.setProperty('width', 'calc(30% - 16px - 48px');
        aboutHomeItemThree.style.setProperty('width', 'calc(40% - 16px - 48px)');
    }
}
function aboutHomeItemNotHover() {
    if(aboutHomeItemOne && aboutHomeItemTwo && aboutHomeItemThree){
        aboutHomeItemOne.style.setProperty('width', 'calc(33% - 16px - 48px)');
        aboutHomeItemTwo.style.setProperty('width', 'calc(33% - 16px - 48px');
        aboutHomeItemThree.style.setProperty('width', 'calc(33% - 16px - 48px)');
    }
}

window.onscroll = function(e){
    var newCollectionTitleSmallChangeColor = document.getElementById("newCollectionTitleSmallChangeColor");
    var y = newCollectionTitleSmallChangeColor.scrollHeight + newCollectionTitleSmallChangeColor.offsetTop - 500;
    if(window.scrollY < y ){
        newCollectionTitleSmallChangeColor.style.opacity = 0.48;
    } 
    else{
        newCollectionTitleSmallChangeColor.style.opacity = 1;
    } 
}

var brandBoxs = document.getElementsByClassName('brand-box');
var brandCursor = document.getElementsByClassName('brand-box-cursor');

if(brandBoxs){
    for(var i = 0; i < brandBoxs.length; i++){
        brandBoxs[i].style.height = getComputedStyle(brandBoxs[0]).width;
        if (brandCursor[i]){
            brandCursor[i].style.width = getComputedStyle(brandBoxs[i]).width;
            brandCursor[i].style.height = getComputedStyle(brandBoxs[i]).width;
        }
    }
}

function cursorSwiper(addCursor, removeCursor, queryClass) {
    var cursor = document.querySelector(queryClass);
    if(addCursor){
        if(document.documentElement.clientWidth < 767){
            removeCursor.addEventListener("click", function (e) { 
                let x = e.pageX;
                let y = e.pageY;
                cursor.style.left = x - (cursor.offsetWidth / 2) + "px";
                cursor.style.top = y - (cursor.offsetWidth / 2)  + "px";
                cursor.style.opacity = '1';
                removeCursor.style.cursor = 'none';
            });
            removeCursor.addEventListener("mouseleave", function (e) { 
                cursor.style.opacity = '0';
                removeCursor.style.cursor = 'default';
            });
        }
        else{
            cursor.style.opacity = '0';
            removeCursor.style.cursor = 'default';
            addCursor.addEventListener("mousemove", function (e) { 
                let x = e.pageX;
                let y = e.pageY;
                cursor.style.left = x - (cursor.offsetWidth / 2) + "px";
                cursor.style.top = y - (cursor.offsetWidth / 2)  + "px";
                cursor.style.opacity = '1';
                addCursor.style.cursor = 'none';
            });
            addCursor.addEventListener("mouseleave", function (e) { 
                cursor.style.opacity = '0';
                addCursor.style.cursor = 'default';
            });
            removeCursor.addEventListener("mousemove", function (e) { 
                cursor.style.opacity = '0';
                removeCursor.style.cursor = 'default';
            });
        }
    }
}
function cursorElement(addCursor, queryClass) {
    var cursor = document.querySelector(queryClass);
    if(addCursor){
        addCursor.addEventListener("mousemove", function (e) { 
            let x = e.pageX;
            let y = e.pageY;
            cursor.style.left = x - (cursor.offsetWidth / 2) + "px";
            cursor.style.top = y - (cursor.offsetWidth / 2)  + "px";
            cursor.style.opacity = '1';
            addCursor.style.cursor = 'none';
        });
        addCursor.addEventListener("mouseleave", function (e) { 
            cursor.style.opacity = '0';
            addCursor.style.cursor = 'default';
        });
    }
}

window.onload = function() {
    var addCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-next .main-swiper-text-box");
    var removeCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-active .main-swiper-text-box");
    cursorSwiper(addCursor, removeCursor, ".firstSliderHomePage-cursor");

    var addCursorEmployee = document.getElementsByClassName("employee-item");
    for(var i = 0; i < addCursorEmployee.length; i++){
        cursorElement(addCursorEmployee[i], (".employee-item-cursor" + (i+1)));
    }

    var addCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-next .brandazine-swiper-text-box");
    var removeCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-active .brandazine-swiper-text-box");
    cursorSwiper(addCursorbrandazineSwiper, removeCursorbrandazineSwiper, ".brandazineSwiper-cursor");

    var addCursorViewedItem = document.getElementsByClassName("viewed-item");
    for(var i = 0; i < addCursorViewedItem.length; i++){
        cursorElement(addCursorViewedItem[i], (".viewed-item-cursor" + (i+1)));
    }

    var addCursorBrandBox = document.getElementsByClassName("brand-box-white");
    for(var i = 0; i < addCursorBrandBox.length; i++){
        cursorElement(addCursorBrandBox[i], (".brand-box-cursor" + (i+1)));
    }
}

firstSliderHomePage.on('transitionEnd', function() {
    var addCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-next .main-swiper-text-box");
    var removeCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-active .main-swiper-text-box");
    cursorSwiper(addCursor, removeCursor, ".firstSliderHomePage-cursor");
});
brandazineSwiper.on('transitionEnd', function() {
    var addCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-next .brandazine-swiper-text-box");
    var removeCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-active .brandazine-swiper-text-box");
    cursorSwiper(addCursorbrandazineSwiper, removeCursorbrandazineSwiper, ".brandazineSwiper-cursor");
});

