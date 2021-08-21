// scroll change logo opacity.
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  var currentScroll = window.pageYOffset;
  if (currentScroll > lastScrollTop) {
    $(".logo").attr("style","opacity: 0; pointer-events: none;")
  } else {
    $(".logo")[0].removeAttribute("style")
  }
  lastScrollTop = currentScroll;
  // change color Logo and Menu in dark zone.
  const darkZone = document.querySelectorAll(".dark-zone");
  darkZone.forEach((el) => {
    isDarkZone(scriptOnTabletMobile, el);
  });
});

function isDarkZone(mediaquery, darkzone) {
let menuWrapper = $(".menu-btn");
let audioBtn = $('.audio-btn-wrapper')
let logo = $(".main-header-wrapper");
  if(mediaquery.matches){
    ScrollTrigger.create({
      trigger: darkzone,
      start: "top top",
      onEnter: function () {
        menuWrapper.addClass("light-btn");
        logo.addClass("change-color");
      },
      onLeave: function () {
        menuWrapper.removeClass("light-btn");
        logo.removeClass("change-color");
      },
      onEnterBack: function () {
        menuWrapper.addClass("light-btn");
        logo.addClass("change-color");
      },
      onLeaveBack: function () {
        menuWrapper.removeClass("light-btn");
        logo.removeClass("change-color");
      },
    });
  }else{
    ScrollTrigger.create({
      trigger: darkzone,
      start: "top center",
      end:'bottom center',
      onEnter: function () {
        menuWrapper.addClass("light-btn");
        audioBtn.addClass("light-btn");
        logo.addClass("change-color");
      },
      onLeave: function () {
        menuWrapper.removeClass("light-btn");
        audioBtn.removeClass("light-btn");
        logo.removeClass("change-color");
      },
      onEnterBack: function () {
        menuWrapper.addClass("light-btn");
        audioBtn.addClass("light-btn");
        logo.addClass("change-color");
      },
      onLeaveBack: function () {
        menuWrapper.removeClass("light-btn");
        audioBtn.removeClass("light-btn");
        logo.removeClass("change-color");
      },
    });
  }
}
// Menu handle
menuHandle(scriptOnPc);
function menuHandle(mediaquery) {
  // menu for PC
  if (mediaquery.matches) {
    $(".menu-btn-hitzone").mouseenter(() => {
      $(".menu-wrapper").addClass("active");
      (function(){
        gsap.from(".main-link", {
          duration: 0.2,
          y: 8,
          opacity: 0,
          stagger: 0.1,
        });
      })()
    });
    $(".inner-menu").mouseleave(() => {
      $(".menu-wrapper").removeClass("active");
    });
  } 
  // menu for Tablet/Mobile
  else {
    $(".menu-btn-hitzone").click(() => {
      $(".menu-wrapper").toggleClass("active");
      gsap.from(".menu-wrapper.active .main-link", {
            duration: 0.2,
            delay: 0.3,
            y: 8,
            opacity: 0,
            stagger: 0.1,
          });
    });
    // click body to close menu.
    $(".page-main").click(() => {
      $(".menu-wrapper").removeClass("active");
    });
  }
}