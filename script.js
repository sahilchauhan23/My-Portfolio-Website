   //smooth scrolling  ✔
   // ** attach loco scroll css ✔
   //attach locomotive scroll min✔
   //code from loco github for js✔
   
   //gsap
   // **  attch gsap

   //
   
   
   //scrolltrigger 
   
  // import LocomotiveScroll from 'locomotive-scroll';

  var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstPageAnim(){
    var tl= gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        ease: Expo,
        duration: 1.5,
        ease: Expo.easeInOut


    })

    tl.to(".boundingelem",{
        y:'0',
        duration: 2,
        ease: Expo.easeInOut,
        delay:-1,
        stagger: .2


    })

    tl.from("#landingPageFooter",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut



    } )
}

//we have to bring skew effect when mouse is moved
//and we can define minimum and maximum skew
//skew increases when mouse is moved and gets back to normal at still state

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();
  

//select three elem then add move move functionaltiy
//

/*document.querySelectorAll(".elem").forEach(function(elem){
  elem.addEventListener("mousemove", function(details){
   // console.log(details.clientX,details.clientY)
   gsap.to(elem.querySelector("img"), {
    opacity: 1,
    ease: Power1,
  })
});

});*/

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
   
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.7),
    });
  });
});

//TIME
let time= document.getElementById("time");
    
    setInterval(()=> {
    let d= new Date();
    time.innerHTML= d.toLocaleTimeString();
    },1000)
  


 






