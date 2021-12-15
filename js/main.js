const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("scroll!");
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //to-top 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //to-top 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
      // 요소를 찾아서 넣어줘도 되지만 css 선택자("#to-top")만 넣어줘도 된다.
    }
  }, 300)
);

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0, //window위치를 0으로 옮겨라
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const button_togglePromotion = document.querySelector(".toggle-promotion");
const promotionEl = document.querySelector(".promotion");
let isHidePromotion = false;
button_togglePromotion.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const floatingObj = (selector, delay, size) => {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size /* y축으로 얼마만큼 이동하면서 애니메이션을 처리할 것인가 */,
    repeat: -1 /* -1: 무한 반복을 의미  */,
    yoyo: true /* 한번 재생된 애니메이션을 다시 뒤로 재생하는 것을 의미 */,
    ease: Power1.easeInOut /* greensock.com */,
    delay: random(0, delay),
  });
};
floatingObj(".floating1", 1, 15);
floatingObj(".floating2", 0.5, 15);
floatingObj(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // scrollMagic은 뷰포트가 시작하는 점을 0,
    //끝나는 점을 1이라고 판단, .8은 80퍼센트 쪽에 Hook을 걸어두고 걸리면
    // setClassToggle() 실행
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
