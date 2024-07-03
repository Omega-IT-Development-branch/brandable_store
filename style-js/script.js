if (document.getElementsByClassName('.firstSliderHomePage')){
    var firstSliderHomePage = new Swiper(".firstSliderHomePage", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            880: {
                slidesPerView: 1.25,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.brandsSwiper')){
    var brandsSwiper = new Swiper(".brandsSwiper", {
        slidesPerView: 2.2,
        spaceBetween: 8,
        loop: true,
        freeMode: true,
        //grabCursor: true,
        breakpoints: {
            480: {
                slidesPerView: 4.2,
                spaceBetween: 16,
            },
            880: {
                slidesPerView: 5.2,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.topProdSwiper')){
    var topProdSwiper = new Swiper(".topProdSwiper", {
        slidesPerView: 2.2,
        spaceBetween: 8,
        loop: true,
        freeMode: true,
        //grabCursor: true,
        breakpoints: {
            480: {
                slidesPerView: 3.2,
                spaceBetween: 16,
            },
            880: {
                slidesPerView: 5.2,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.catalogTopProdSwiper')){
    var catalogTopProdSwiper = new Swiper(".catalogTopProdSwiper", {
        slidesPerView: 2.2,
        spaceBetween: 8,
        loop: true,
        freeMode: true,
        //grabCursor: true,
        breakpoints: {
            480: {
                slidesPerView: 3.2,
                spaceBetween: 16,
            },
            880: {
                slidesPerView: 5.2,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.brandazineSwiper')){
    var brandazineSwiper = new Swiper(".brandazineSwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            880: {
                slidesPerView: 1.25,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.whatsNewSwiper')){
    var whatsNewSwiper = new Swiper(".whatsNewSwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            880: {
                slidesPerView: 1.4,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.salesProdSwiper')){
    var salesProdSwiper = new Swiper(".salesProdSwiper", {
        slidesPerView: 2.2,
        spaceBetween: 8,
        loop: true,
        freeMode: true,
        breakpoints: {
            480: {
                slidesPerView: 3.2,
                spaceBetween: 16,
            },
            880: {
                slidesPerView: 5.2,
                spaceBetween: 16,
            },
        },
    });
}
if (document.getElementsByClassName('.speedStringSwiper')){
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
}
var productImgSwipers = document.getElementsByClassName("productImgSwiper");
if (productImgSwipers){
    for(var i = 0; i < productImgSwipers.length; i++){
        var swiper = new Swiper((".productImgSwiper" + (i+1)), {
            loop: true,
            pagination: {
                el: (".swiper-pagination-prod" + (i+1)),
                clickable: true,
            },
        });
    }
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
    if (newCollectionTitleSmallChangeColor){
        var y = newCollectionTitleSmallChangeColor.scrollHeight + newCollectionTitleSmallChangeColor.offsetTop - 500;
        if(window.scrollY < y ){
            newCollectionTitleSmallChangeColor.style.opacity = 0.48;
        } 
        else{
            newCollectionTitleSmallChangeColor.style.opacity = 1;
        } 
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
        if(document.documentElement.clientWidth < 880){
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
        if(document.documentElement.clientWidth < 880){
            addCursor.addEventListener("click", function (e) { 
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
        }else{
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
}


var addCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-next .main-swiper-text-box");
var removeCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-active .main-swiper-text-box");
if (addCursor){
    cursorSwiper(addCursor, removeCursor, ".firstSliderHomePage-cursor");
}
if (firstSliderHomePage){
    firstSliderHomePage.on('transitionEnd', function() {
        var addCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-next .main-swiper-text-box");
        var removeCursor = document.querySelector(".firstSliderHomePage div.swiper-slide.swiper-slide-active .main-swiper-text-box");
        cursorSwiper(addCursor, removeCursor, ".firstSliderHomePage-cursor");
    });
}

var addCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-next .brandazine-swiper-text-box");
var removeCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-active .brandazine-swiper-text-box");
if (addCursorbrandazineSwiper){    
    cursorSwiper(addCursorbrandazineSwiper, removeCursorbrandazineSwiper, ".brandazineSwiper-cursor");
}
if (brandazineSwiper){
    brandazineSwiper.on('transitionEnd', function() {
        var addCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-next .brandazine-swiper-text-box");
        var removeCursorbrandazineSwiper = document.querySelector(".brandazineSwiper div.swiper-slide.swiper-slide-active .brandazine-swiper-text-box");
        cursorSwiper(addCursorbrandazineSwiper, removeCursorbrandazineSwiper, ".brandazineSwiper-cursor");
    });
}

var addCursorwhatsNewSwiper = document.querySelector(".whatsNewSwiper div.swiper-slide.swiper-slide-next .brandazine-swiper-text-box");
var removeCursorwhatsNewSwiper = document.querySelector(".whatsNewSwiper div.swiper-slide.swiper-slide-active .brandazine-swiper-text-box");
if (addCursorwhatsNewSwiper){    
    cursorSwiper(addCursorwhatsNewSwiper, removeCursorwhatsNewSwiper, ".whatsNewSwiper-cursor");
}
if (whatsNewSwiper){
    whatsNewSwiper.on('transitionEnd', function() {
        var addCursorwhatsNewSwiper = document.querySelector(".whatsNewSwiper div.swiper-slide.swiper-slide-next .brandazine-swiper-text-box");
        var removeCursorwhatsNewSwiper = document.querySelector(".whatsNewSwiper div.swiper-slide.swiper-slide-active .brandazine-swiper-text-box");
        cursorSwiper(addCursorwhatsNewSwiper, removeCursorwhatsNewSwiper, ".whatsNewSwiper-cursor");
    });
}

var addCursorEmployee = document.getElementsByClassName("employee-item");
if(addCursorEmployee){
    if(document.documentElement.clientWidth > 880){
        for(var i = 0; i < addCursorEmployee.length; i++){
            cursorElement(addCursorEmployee[i], (".employee-item-cursor" + (i+1)));
        }
    }
}
var addCursorViewedItem = document.getElementsByClassName("viewed-item");
if(addCursorViewedItem){
    for(var i = 0; i < addCursorViewedItem.length; i++){
        cursorElement(addCursorViewedItem[i], (".viewed-item-cursor" + (i+1)));
    }
}
var addCursorBrandBox = document.getElementsByClassName("brand-box-white");
if(addCursorBrandBox){
    if(document.documentElement.clientWidth > 880){
        for(var i = 0; i < addCursorBrandBox.length; i++){
            cursorElement(addCursorBrandBox[i], (".brand-box-cursor" + (i+1)));
        }
    }
}

if(document.documentElement.clientWidth < 880){
    var clickEmployee = document.getElementsByClassName('employee-item');
    for(let a = 0; a < clickEmployee.length; a++) {
        clickEmployee[a].addEventListener("click", (event) => { 
            clickEmployee[a].firstElementChild.classList.toggle('employee-item-hover-employee-item-text');
            clickEmployee[a].firstElementChild.children[0].classList.toggle('employee-item-hover-employee-item-text-p');
            clickEmployee[a].firstElementChild.children[1].classList.toggle('employee-item-hover-cursor');
            clickEmployee[a].firstElementChild.children[2].classList.toggle('employee-item-hover-employee-item-text-p');
            clickEmployee[a].firstElementChild.children[3].classList.toggle('employee-item-hover-employee-item-text-p');
            clickEmployee[a].firstElementChild.children[3].classList.toggle('body-large');
            clickEmployee[a].firstElementChild.children[3].classList.toggle('text-uppercase');
            clickEmployee[a].firstElementChild.children[3].classList.toggle('body-special');
        }
     )}
}

var catalogChips = document.getElementsByClassName('catalog-chips');
for(let a = 0; a < catalogChips.length; a++) {
    catalogChips[a].addEventListener("click", (event) => { 
        if (document.getElementById('prod-card-page') && !catalogChips[a].classList.contains('tabs-size')){
            for(let s = 0; s < catalogChips.length; s++) {
                catalogChips[s].classList.remove('catalog-chips-checked');
            }
        }
        catalogChips[a].classList.toggle('catalog-chips-checked');
    }
)}

var catalogChipsRed = document.getElementsByClassName('catalog-chips-red');
for(let a = 0; a < catalogChipsRed.length; a++) {
    catalogChipsRed[a].addEventListener("click", (event) => { 
        catalogChipsRed[a].classList.toggle('catalog-chips-checked');
    }
)}

var catalogDisplayImg = document.getElementById('catalog-display-img');
var catalogDisplaySvg1 = document.getElementById('catalog-display-svg1');
var catalogDisplaySvg2 = document.getElementById('catalog-display-svg2');
var catalogDisplaySvg3 = document.getElementById('catalog-display-svg3');

var productsBox = document.getElementsByClassName('catalog-product-box')[0];
var loadMore = document.getElementsByClassName('load-more')[0];
var products = document.getElementsByClassName('product-item');
if(catalogDisplayImg){
    catalogDisplayImg.addEventListener("click", (event) => { 
        if(window.getComputedStyle(catalogDisplaySvg1).opacity == 1){
        productsBox.style.opacity = 0;
        loadMore.style.opacity = 0;

        setTimeout(() => {
            catalogDisplaySvg1.style.opacity = 0;
            catalogDisplaySvg2.style.opacity = 1;
            catalogDisplaySvg3.style.opacity = 0;

            catalogDisplaySvg1.style.height = '0';
            catalogDisplaySvg2.style.height = '100%';
            catalogDisplaySvg3.style.height = '0';

            for(var i = 0; i < products.length; i++){
                products[i].classList.remove('product-item-big');
            }
        }, "250");

        setTimeout(() => {
            productsBox.style.opacity = 1;
            loadMore.style.opacity = 1;
        }, "500");
    }
    else if(window.getComputedStyle(catalogDisplaySvg2).opacity == 1){
        productsBox.style.opacity = 0;
        loadMore.style.opacity = 0;

        setTimeout(() => {                
            catalogDisplaySvg1.style.opacity = 0;
            catalogDisplaySvg2.style.opacity = 0;
            catalogDisplaySvg3.style.opacity = 1;

            catalogDisplaySvg1.style.height = '0';
            catalogDisplaySvg2.style.height = '0';
            catalogDisplaySvg3.style.height = '100%';

            productsBox.classList.add('grid');
            products[0].classList.add('vertical-big-product-item');
            productsBox.classList.remove('flex');
        }, "250");

        setTimeout(() => {
            productsBox.style.opacity = 1;
            loadMore.style.opacity = 1;
        }, "500");
    }
    else if(window.getComputedStyle(catalogDisplaySvg3).opacity == 1){
        productsBox.style.opacity = 0;
        loadMore.style.opacity = 0;

        setTimeout(() => {
            catalogDisplaySvg1.style.opacity = 1;
            catalogDisplaySvg2.style.opacity = 0;
            catalogDisplaySvg3.style.opacity = 0;

            catalogDisplaySvg1.style.height = '100%';
            catalogDisplaySvg2.style.height = '0';
            catalogDisplaySvg3.style.height = '0';

            for(var i = 0; i < products.length; i++){
                productsBox.classList.remove('grid');
                products[0].classList.remove('vertical-big-product-item');
                productsBox.classList.add('flex');
                products[i].classList.add('product-item-big');
            }
        }, "250");

        setTimeout(() => {
            productsBox.style.opacity = 1;
            loadMore.style.opacity = 1;
        }, "500");
    }
})
}


function loadMoreCatalog () {
    var loadMoreEclipse = document.getElementsByClassName('load-more-eclipse');
    for(var i = 0; i < loadMoreEclipse.length; i++){
        var newopacity = window.getComputedStyle(loadMoreEclipse[i]).opacity;
        if(parseFloat(newopacity) < 1) {
            loadMoreEclipse[i].style.opacity = parseFloat(newopacity) + 0.25;
        } else {
            loadMoreEclipse[i].style.opacity = 0.25;
        }
    }
}

var chipsCircleLow = document.querySelector('.chips-circle-low');
var catalogChipsBig1 = document.getElementById('catalog-chips-none-vis1')
var catalogChipsBig2 = document.getElementById('catalog-chips-none-vis2')
if(chipsCircleLow){
    chipsCircleLow.addEventListener("click", function () { 
        if (catalogChipsBig1.style.height == '152px'){
            catalogChipsBig1.style.height = '0';
            catalogChipsBig1.style.marginTop = '0';
            catalogChipsBig1.style.marginBottom = '0';

            catalogChipsBig2.style.height = '0';
        }else{
            catalogChipsBig1.style.height = '152px';
            catalogChipsBig1.style.marginTop = '32px';
            catalogChipsBig1.style.marginBottom = '32px';

            catalogChipsBig2.style.height = '32px';
        }

        var widthOff = 0;
        var overflowChips = document.getElementsByClassName('catalog-chips-box-overflow')[0];
        
        for(var i = 0; i < overflowChips.childElementCount * 2; i++){
            if(overflowChips.childNodes[i].tagName == 'DIV'){
                widthOff = widthOff + overflowChips.childNodes[i].offsetWidth + 8;
            }
        }
        overflowChips.style.width = (widthOff / 3) + 'px';
        console.log((widthOff / 3) + 'px');
    });
}



