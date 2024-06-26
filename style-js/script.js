var swiper = new Swiper(".firstSliderHomePage", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
});

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