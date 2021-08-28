window.addEventListener("DOMContentLoaded", (event) => {
  const body = document.querySelector("body");
  const { backgroundColor, backgroundImage } = gradientGenerator();
  body.style.backgroundColor = backgroundColor;
  body.style.backgroundImage = backgroundImage;
  customizedGradient();
});

function randomColorGenerator() {
  let x = Math.random();
  let randomColor = Math.floor(x * 16777215).toString(16);
  return `#${randomColor}`;
}

function gradientGenerator({
  angle = "90deg",
  color1 = randomColorGenerator(),
  color2 = randomColorGenerator(),
} = {}) {
  return {
    backgroundColor: `${color1}`,
    backgroundImage: `linear-gradient(${angle}, ${color1} 0%, ${color2} 100%)`,
  };
}

let color1 = randomColorGenerator();
let color2 = randomColorGenerator();
let gradientAngle = "90deg";

const updateAngle = () => {
  const ele = document.querySelector('#angle_input');
  const display = document.querySelector(`#${ele.name}_display`);
  display.innerText = `${ele.value}${ele.getAttribute("data-unit")}`;
  gradientAngle = `${ele.value}deg`;
  customizedGradient();
};

const customizedGradient = () => {
  document.querySelector(".copied").classList.remove("copied-active");
  const { backgroundColor, backgroundImage } = gradientGenerator({
    angle: gradientAngle,
    color1,
    color2,
  });
  const ele = document.querySelector("#gradient_container");
  ele.style.backgroundColor = backgroundColor;
  ele.style.backgroundImage = backgroundImage;
  const output_display = document.querySelector("#gradient_output");
  output_display.innerHTML = `background: ${backgroundColor};<br/>background-image: ${backgroundImage};`;
};

const generateGradient = (input) => {
  color1 = randomColorGenerator();
  color2 = randomColorGenerator();
  customizedGradient();
};

const copyCSS = () => {
  const copyText = document
    .querySelector("#gradient_output")
    .innerHTML.replace("<br>", "\n")
    .replace("<br/>", "\n");
  navigator.clipboard.writeText(copyText);
  document.querySelector(".copied").classList.add("copied-active");
};
