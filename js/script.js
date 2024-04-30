// let btn = document.getElementsByClassName('btn');
// var scrollY; 
// window.onscroll = function(){
//     if(scrollY >= 400)
//         btn.style.display = 'block';
//     else
//         btn.style.display = 'none';
// }
// btn.onclick = function(){
//     scroll(0,0)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn-homepage").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn-homepage").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Get all elements with class 'commentform-mercedes'
var forms = document.getElementsByClassName('commentform-mercedes');
// Loop through each form and attach event listener
for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from actually submitting
        submit();
    });
}

function submit() {
    alert("Thank you for submitting your opinion");
}








function sttr (){
let str = document.getElementById('start-bmw');
let we = document.querySelector('.welcome-bmw');
str.onclick = function(){
    we.classList.add('hide');
    document.getElementById('ground').style.display = 'block';
    document.querySelector('.home-bmw').style.backgroundImage ='none';
   document.querySelector('.home-bmw').style.backgroundColor='rgb(160 , 61, 18 )';
}
}
function gget(){
let get = document.getElementById('bttn');
let pa = document.querySelector('#page');
get.onclick = function() {
    pa.style.display = 'none';
    document.getElementById('total').style.display = 'block';
    document.querySelector('.check').style.backgroundImage = 'none';
}}

function the(){
  alert("Here You See Images About The Car");
}


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scrollToTopBtn-homepage").style.display = "block";
//   } else {
//     document.getElementById("scrollToTopBtn-homepage").style.display = "none";
//   }
// }

// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// // Get all elements with class 'commentform-mercedes'
// var forms = document.getElementsByClassName('commentform-mercedes');
// // Loop through each form and attach event listener
// for (var i = 0; i < forms.length; i++) {
//     forms[i].addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from actually submitting
//         submit();
//     });
// }

// function submit() {
//     alert("Thank you for submitting your opinion");
// }
