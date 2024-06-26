console.clear();

select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

const stage = select(".stage");
const hero = select(".hero");
let gltl = gsap.timeline({ delay: 1 });
let sparks = gsap.utils.toArray(".spark");
let xDist = "100vw";
let tapped = false;

function animInCuboids() {
  let tl = gsap.timeline({
    delay: 0,
  });

  tl.from(
    ".hero__cuboid",
    {
      rotateY: 270,
      duration: 5,
      ease: "power4",
      stagger: 0.2,
      transformOrigin: "center center",
    },
    0
  )
    .from(
      ".hero__cuboid",
      {
        x: xDist,
        duration: 4,
        stagger: 0.4,
        ease: "power4",
      },
      0
    )
    .from(
      ".hero__cuboid",
      {
        rotationZ: 90,
        stagger: 0.2,
        duration: 6,
        ease: "power4",
      },
      0
    )
    .from(
      ".hero",
      {
        scale: 2.5,
        duration: 9,
        ease: "power4",
      },
      0
    )
    .to(
      ".face--right img",
      {
        opacity: 0,
        duration: 1.5,
        ease: "power4",
        stagger: 0.4,
      },
      0
    )
    .to(
      ".face--back img",
      {
        opacity: 0,
        duration: 5,
        ease: "power4",
        stagger: 0.4,
      },
      0
    )
    .to(
      ".face--left img",
      {
        opacity: 0,
        duration: 5,
        ease: "power4",
        stagger: 0.4,
        onComplete: initEvents,
      },
      0.5
    )
    .from(
      ".face--front img",
      {
        scale: 1.5,
        transformOrigin: "right top",
        duration: 9,
        ease: "power3.out",
        // stagger: 0.4
      },
      1.5
    );

  return tl;
}

let roTL = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "sine.inOut",
  },
});

let rot = 90;

function addRotAnim() {
  roTL
    .to(".hero__cuboid--1", {
      keyframes: [
        {
          x: "-75%",
          ease: "power4.inOut",
        },
        {
          rotationY: -rot,
          delay: -1,
          ease: "power4.inOut",
        },
      ],
    })
    .to(
      ".hero__cuboid--1 .face--front img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0
    )
    .from(
      ".hero__cuboid--1 .face--right img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0.1
    )
    .fromTo(
      ".hero__cuboid--1 .face--back img",
      {
        opacity: 0,
      },
      {
        opacity: 0.2,
        ease: "power2.inOut",
      },
      0
    )
    .to(
      ".hero__cuboid--2",
      {
        keyframes: [
          {
            x: "-25%",
            ease: "power4.inOut",
          },
          {
            rotationY: -rot,
            delay: -1,
            ease: "power4.inOut",
          },
        ],
      },
      0
    )
    .to(
      ".hero__cuboid--2 .face--front img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0
    )
    .from(
      ".hero__cuboid--2 .face--right img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0.1
    )
    .fromTo(
      ".hero__cuboid--2 .face--back img",
      {
        opacity: 0,
      },
      {
        opacity: 0.2,
        ease: "power2.inOut",
      },
      0.1
    )
    .to(
      ".hero__cuboid--3",
      {
        keyframes: [
          {
            x: "25%",
            ease: "power4.inOut",
          },
          {
            rotationY: rot,
            delay: -1,
            ease: "power4.inOut",
          },
        ],
      },
      0
    )
    .to(
      ".hero__cuboid--3 .face--front img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0
    )
    .from(
      ".hero__cuboid--3 .face--left img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0.1
    )
    .fromTo(
      ".hero__cuboid--3 .face--back img",
      {
        opacity: 0,
      },
      {
        opacity: 0.2,
        ease: "power2.inOut",
      },
      0.1
    )
    .to(
      ".hero__cuboid--4",
      {
        keyframes: [
          {
            x: "75%",
            ease: "power4.inOut",
          },
          {
            rotationY: rot,
            delay: -1,
            ease: "power4.inOut",
          },
        ],
      },
      0
    )
    .to(
      ".hero__cuboid--4 .face--front img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0
    )
    .from(
      ".hero__cuboid--4 .face--left img",
      {
        opacity: 0,
        ease: "power2.inOut",
      },
      0.05
    )
    .fromTo(
      ".hero__cuboid--4 .face--back img",
      {
        opacity: 0,
      },
      {
        opacity: 0.2,
        ease: "power2.inOut",
      },
      0.1
    )
    .pause();
}

function initEvents() {
  gsap.set(".face img", { opacity: 1 });
  addRotAnim();
  hero.addEventListener(
    "mouseenter",
    function (event) {
      roTL.play();
    },
    false
  );

  hero.addEventListener(
    "mouseleave",
    function (event) {
      roTL.reverse();
    },
    false
  );
  hero.addEventListener("touchstart", function (event) {
    if (!tapped) {
      tapped = true;
      roTL.play();
    } else {
      tapped = false;
      roTL.reverse();
    }
  });
}

function init() {
  gsap.set(stage, { autoAlpha: 1 });
  gsap.set(".hero__inner", { z: -135 });
  gltl.add(animInCuboids());
}

function resize() {
  let vw = window.innerWidth;
  let hw = hero.offsetWidth;
  if (vw / hw < 1.3) {
    xDist = "150vw";
  } else {
    xDist = "100vw";
  }
}

window.onresize = resize;

window.onload = () => {
  resize();
  init();
};
