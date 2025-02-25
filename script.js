document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const footerLink = document.querySelector("footer a");
  const links = [...navLinks, footerLink];
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  const methodologySteps = document.querySelectorAll(".methodology .step");
  let animationInProgress = false;

  methodologySteps.forEach((step, index) => {
    step.addEventListener("click", () => {
      if (index === 0) {
        if (animationInProgress) return;

        const anyStepOpen = Array.from(methodologySteps).some((step) =>
          step.querySelector(".step-description").classList.contains("active")
        );

        if (!anyStepOpen) {
          animationInProgress = true;

          methodologySteps.forEach((stepItem, i) => {
            setTimeout(() => {
              const description = stepItem.querySelector(".step-description");
              description.classList.add("active");

              if (i === methodologySteps.length - 1) {
                setTimeout(() => {
                  animationInProgress = false;
                }, 400);
              }
            }, i * 400);
          });
        } else {
          methodologySteps.forEach((stepItem) => {
            const description = stepItem.querySelector(".step-description");
            description.classList.remove("active");
          });
        }
      } else {
        const description = step.querySelector(".step-description");
        if (description.classList.contains("active")) {
          description.classList.remove("active");
        } else {
          description.classList.add("active");
        }
      }
    });
  });
});
