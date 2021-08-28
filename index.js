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
  while (randomColor.length < 6) {
    randomColor = `0${randomColor}`;
  }
  return `#${randomColor}`;
}

function gradientGenerator({
  angle = "90deg",
  color1 = randomColorGenerator(),
  color2 = randomColorGenerator(),
} = {}) {
  return {
    backgroundColor: `${color1}`,
    backgroundImage: `linear-gradient(${angle}, ${color1}, ${color2})`,
  };
}

let color1 = randomColorGenerator();
let color2 = randomColorGenerator();
let gradientAngle = "90deg";
let code = "";

const generateCode = ({ color1, color2, angle } = {}) => {
  const property1 = document.createElement("span");
  property1.style.color = "#654EA3";
  property1.innerText = "background";

  const value1 = document.createElement("span");
  value1.style.backgroundColor = color1;
  value1.style.color = "#FFFFFF";
  value1.innerText = color1;

  const comment = document.createElement("span");
  comment.style.color = "#AAAAAA";
  comment.innerText = "/* fallback for old browsers */";

  const property2 = document.createElement("span");
  property2.style.color = "#654EA3";
  property2.innerText = "background";

  const value2 = document.createElement("span");
  value2.style.color = "#a8ff78";
  value2.innerText = angle;

  const value3 = document.createElement("span");
  value3.style.backgroundColor = color1;
  value3.style.color = "#FFFFFF";
  value3.innerText = color1;

  const value4 = document.createElement("span");
  value4.style.backgroundColor = color2;
  value4.style.color = "#FFFFFFF";
  value4.innerText = color2;

  const code = `background: ${color1}; /* fallback for old browsers */\nbackground: linear-gradient(${angle}, ${color1}, ${color2});`;

  const codeElement = document.createElement("code");
  codeElement.style.color = "#CCCCCC";

  codeElement.appendChild(property1);
  codeElement.appendChild(document.createTextNode(": "));
  codeElement.appendChild(value1);
  codeElement.appendChild(document.createTextNode("; "));
  codeElement.appendChild(comment);
  codeElement.appendChild(document.createElement("br"));
  codeElement.appendChild(property2);
  codeElement.appendChild(document.createTextNode(": linear-gradient("));
  codeElement.appendChild(value2);
  codeElement.appendChild(document.createTextNode(", "));
  codeElement.appendChild(value3);
  codeElement.appendChild(document.createTextNode(", "));
  codeElement.appendChild(value4);
  codeElement.appendChild(document.createTextNode("); "));
  return {
    code,
    codeElement,
  };
};

const updateAngle = () => {
  const ele = document.querySelector("#angle_input");
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
  output_display.innerHTML = "";
  const css = generateCode({ color1, color2, angle: gradientAngle });
  output_display.appendChild(css.codeElement);
  code = css.code;
};

const generateGradient = (input) => {
  color1 = randomColorGenerator();
  color2 = randomColorGenerator();
  customizedGradient();
};

const copyCSS = () => {
  navigator.clipboard.writeText(code);
  document.querySelector(".copied").classList.add("copied-active");
};
