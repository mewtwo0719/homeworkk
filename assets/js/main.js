
//code for profile card expansion
const profile_card_btn_expand1 = document.getElementById("profile_card_btn_expand_1");
const profile_card_btn_collapse1 = document.getElementById("profile_card_btn_collapse_1");
const profile_card_expanded1 = document.getElementById("profile_card_expanded_1");

const profile_card_btn_expand2 = document.getElementById("profile_card_btn_expand_2");
const profile_card_btn_collapse2 = document.getElementById("profile_card_btn_collapse_2");
const profile_card_expanded2 = document.getElementById("profile_card_expanded_2");

const profile_card_btn_expand3 = document.getElementById("profile_card_btn_expand_3");
const profile_card_btn_collapse3 = document.getElementById("profile_card_btn_collapse_3");
const profile_card_expanded3 = document.getElementById("profile_card_expanded_3");


profile_card_btn_expand1.addEventListener("click", ()=>{
    profile_card_btn_expand1.classList.add("active-arr");
    if(profile_card_expanded1.classList.contains("off")){
        profile_card_expanded1.classList.remove("off");
        profile_card_expanded1.classList.add("active");
    }
});

profile_card_btn_expand2.addEventListener("click", ()=>{
    profile_card_btn_expand2.classList.add("active-arr");
    if(profile_card_expanded2.classList.contains("off")){
        profile_card_expanded2.classList.remove("off");
        profile_card_expanded2.classList.add("active");
    }
}); 

profile_card_btn_expand3.addEventListener("click", ()=>{
    profile_card_btn_expand3.classList.add("active-arr");
    if(profile_card_expanded3.classList.contains("off")){
        profile_card_expanded3.classList.remove("off");
        profile_card_expanded3.classList.add("active");
    }
}); 

profile_card_btn_collapse1.addEventListener("click", ()=>{
    profile_card_btn_expand1.classList.remove("active-arr");
    if(profile_card_expanded1.classList.contains("active")){
        profile_card_expanded1.classList.remove("active");
        profile_card_expanded1.classList.add("off");
    }
});

profile_card_btn_collapse2.addEventListener("click", ()=>{
    profile_card_btn_expand2.classList.remove("active-arr");
    if(profile_card_expanded2.classList.contains("active")){
        profile_card_expanded2.classList.remove("active");
        profile_card_expanded2.classList.add("off");
    }
}); 

profile_card_btn_collapse3.addEventListener("click", ()=>{
    profile_card_btn_expand3.classList.remove("active-arr");
    if(profile_card_expanded3.classList.contains("active")){
        profile_card_expanded3.classList.remove("active");
        profile_card_expanded3.classList.add("off");
    }
}); 

//code for slideshow

var slideIndex = 1;

showSlide(slideIndex);

function nextSlide(n) {
  showSlide(slideIndex += n);
}

function setSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var x = document.getElementsByClassName("slide");

  var dots = document.getElementsByClassName("slideshow-btn-slide");
  console.log(x, slideIndex)
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-btn-slide-active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slideshow-btn-slide-active";
}

//code for optimizing sizes of elements 
