window.onbeforeunload = function(){
    window.scrollTo(0, 0);
}


// NAV HAMBURGER \\
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const vector2 = document.querySelector('.div1vector2');

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // vector2.classList.toggle("active");
});


// INTERSECTION OBSERVER \\
let div1 = document.querySelector('.div1');
let navnav = document.querySelector('.nav');
let mainpart1 = document.querySelector('.main__part1');
let mainpart2 = document.querySelector('.main__part2');
let contacts = document.querySelector('.contacts');
let div2top = document.querySelector('.top');
let bottomdivimg = document.querySelector('.bottom__divimg');
let bottomdiv2 = document.querySelector('.bottom__div2');
let build1 = document.querySelector('.build1');
let div42 = document.querySelector('.div42');
let part1 = document.querySelector('.part1');
let div77 = document.querySelector('.div77');
let rights = document.querySelector('.rights');
const observer = new IntersectionObserver(function (entries){
    entries.forEach(function (entry){
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);               // Pojave se samo prvi put
    });
}, {
    threshold: 0.5,                                                               // default: 0 , recommended: 0.5
    // rootmargin: "100px",                                                       // Ucitava slike 100px pre nego dodjemo do njih
});

//observer.observe(navnav);
observer.observe(mainpart1);
observer.observe(mainpart2);
observer.observe(contacts);
observer.observe(div2top);
observer.observe(bottomdivimg);
observer.observe(bottomdiv2);
observer.observe(build1);
observer.observe(div42);
observer.observe(part1);
observer.observe(div77);
observer.observe(rights);


// ANIMACIJE \\
window.onscroll = function(){ 
    let sectionForAnimation = document.querySelector('.div4');
    let divHeader = document.querySelector('.div41');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;                  // Koliko pixela od slika do vrha browsera
    let screenPosition = window.innerHeight / 1.3; 

    // console.log('Section position: ' + sectionPosition);
    // console.log('Screen position: ' + screenPosition);

    if(sectionPosition < screenPosition){
        divHeader.style.opacity = '1';
        divHeader.classList.add('animate__animated');
        divHeader.classList.add('animate__jackInTheBox');
    }
};


// SLIDER DIV 5 \\
let rightBtn1 = document.querySelectorAll('.part4__arrowright');
let leftBtn1 = document.querySelectorAll('.part4__arrowleft');
let sections1 = document.querySelectorAll('.part4__divgroup');
let imgNumber1 = 0;                                                                  // img position (Prva slika koja se prikazuje)

function displayNone(){                                                              // function displayNone(elements){ 
    sections1.forEach(function(section1){                                             // elements.forEach(function(imgg){
        section1.style.display = 'none';                     
    });                                                                                                     
};

rightBtn1.forEach(function (rBtn){
    rBtn.addEventListener('click', function(){
        displayNone();                                                                   // displayNone(pictures);
        imgNumber1++;
    
        if(imgNumber1 === sections1.length){
            imgNumber1 = 0;
        }
    
        sections1[imgNumber1].style.display = 'flex';
    });
});


leftBtn1.forEach(function (lBtn){
    lBtn.addEventListener('click', function(){
        displayNone();                                                                   // displayNone(pictures);
        imgNumber1--;
    
        if(imgNumber1 === -1){
            imgNumber1 = sections1.length -1;                                         
        }
    
        sections1[imgNumber1].style.display = 'flex';
    });
});


// SLIDER DIV 4 \\
let rightBtn2 = document.querySelectorAll('.div43__arrowleft');
let leftBtn2 = document.querySelectorAll('.div43__arrowright');
let sections2 = document.querySelectorAll('.div43__divimg');
let imgNumber2 = 0;                                                                  // img position (Prva slika koja se prikazuje)

function displayNone2(){                                                              // function displayNone(elements){ 
    sections2.forEach(function(section2){                                            // elements.forEach(function(imgg){
        section2.style.display = 'none';                     
    });                                                                                                     
};

rightBtn2.forEach(function (rBtn2){
    rBtn2.addEventListener('click', function(){
        displayNone2();                                                                   // displayNone(pictures);
        imgNumber2++;
    
        if(imgNumber2 === sections2.length){
            imgNumber2 = 0;
        }
    
        sections2[imgNumber2].style.display = 'flex';
    });
});


leftBtn2.forEach(function (lBtn2){
    lBtn2.addEventListener('click', function(){
        displayNone2();                                                                   // displayNone(pictures);
        imgNumber2--;
    
        if(imgNumber2 === -1){
            imgNumber2 = sections2.length -1;                                         
        }
    
        sections2[imgNumber2].style.display = 'flex';
    });
});


// SLIDER DIV 3 \\
let rightBtn3 = document.querySelectorAll('.build2__arrowleft');
let leftBtn3 = document.querySelectorAll('.build2__arrowright');
let sections3 = document.querySelectorAll('.build2__part');
let imgNumber3 = 0;                                                                  // img position (Prva slika koja se prikazuje)

function displayNone3(){                                                              // function displayNone(elements){ 
    sections3.forEach(function(section3){                                            // elements.forEach(function(imgg){
        section3.style.display = 'none';                     
    });                                                                                                     
};

rightBtn3.forEach(function (rBtn3){
    rBtn3.addEventListener('click', function(){
        displayNone3();                                                                   // displayNone(pictures);
        imgNumber3++;
    
        if(imgNumber3 === sections3.length){
            imgNumber3 = 0;
        }
    
        sections3[imgNumber3].style.display = 'flex';
    });
});


leftBtn3.forEach(function (lBtn3){
    lBtn3.addEventListener('click', function(){
        displayNone3();                                                                   // displayNone(pictures);
        imgNumber3--;
    
        if(imgNumber3 === -1){
            imgNumber3 = sections3.length -1;                                         
        }
    
        sections3[imgNumber3].style.display = 'flex';
    });
});


// SLIDER DIV 1 \\
let rightBtn4 = document.querySelectorAll('.contacts__swipperright');
let leftBtn4 = document.querySelectorAll('.contacts__swipperleft');
let sections4 = document.querySelectorAll('.contacts__contact');
let imgNumber4 = 0;     

function displayNone4(){                                                              // function displayNone(elements){ 
    sections4.forEach(function(section4){                                            // elements.forEach(function(imgg){
        section4.style.display = 'none';                     
    });                                                                                                     
};

rightBtn4.forEach(function (rBtn4){
    rBtn4.addEventListener('click', function(){
        displayNone4();                                                                   // displayNone(pictures);
        imgNumber4++;
    
        if(imgNumber4 === sections4.length){
            imgNumber4 = 0;
        }
    
        sections4[imgNumber4].style.display = 'flex';
    });
});


leftBtn4.forEach(function (lBtn4){
    lBtn4.addEventListener('click', function(){
        displayNone4();                                                                   // displayNone(pictures);
        imgNumber4--;
    
        if(imgNumber4 === -1){
            imgNumber4 = sections4.length -1;                                         
        }
    
        sections4[imgNumber4].style.display = 'flex';
    });
});