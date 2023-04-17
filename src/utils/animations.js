import gsap from "gsap";

export function openSearch(input, modal) {
  gsap.fromTo(
    modal,
    {
      backdropFilter: "blur(0px)",
      pointerEvents: "none",
      opacity: 0,
    },
    {
      backdropFilter: "blur(40px)",
      pointerEvents: "auto",
      opacity: 1,
      duration: 0.25,
    }
  );

  gsap.fromTo(
    input,
    {
      opacity: 0,
      pointerEvents: "none",
    },
    {
      opacity: 1,
      duration: 0.25,
      pointerEvents: "auto",
    }
  );
}

export function closeSearch(input, modal) {
  gsap.fromTo(
    modal,
    {
      backdropFilter: "blur(40px)",
      pointerEvents: "auto",
      opacity: 1,
    },
    {
      backdropFilter: "blur(0px)",
      pointerEvents: "none",
      opacity: 0,
      duration: 0.25,
    }
  );

  gsap.fromTo(
    input,
    {
      opacity: 1,
      pointerEvents: "auto",
    },
    {
      opacity: 0,
      duration: 0.25,
      pointerEvents: "none",
    }
  );
}
