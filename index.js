window.addEventListener("DOMContentLoaded", (event) => {
	const body = document.querySelector("body");
	const { backgroundColor, backgroundImage } = randomGradientGenerator();
	body.style.backgroundColor = backgroundColor;
	body.style.backgroundImage = backgroundImage;
    customizedGradient();
});

function randomColorGenerator() {
	let x = Math.random();
	let randomColor = Math.floor(x * 16777215).toString(16);
	return `#${randomColor}`;
}

function randomGradientGenerator({angle='90deg', randomColor1 = randomColorGenerator(), randomColor2 = randomColorGenerator()} = {}) {
	return {
		backgroundColor: `${randomColor1}`,
		backgroundImage: `linear-gradient(${angle}, ${randomColor1} 0%, ${randomColor2} 100%)`,
	};
}

const customizedGradient = (input) => {
    document.querySelector('.copied').classList.remove('copied-active');
	const { backgroundColor, backgroundImage } = randomGradientGenerator();
	const ele = document.querySelector("#gradient_container");
	ele.style.backgroundColor = backgroundColor;
	ele.style.backgroundImage = backgroundImage;
    console.log('Hi');
    const output_display = document.querySelector('#gradient_output');
    console.log('1', output_display);
    output_display.innerHTML = `background: ${backgroundColor};<br/>background-image: ${backgroundImage};`;
};

const copyCSS = () => {
    const copyText = document.querySelector("#gradient_output").innerHTML.replace('<br>', '\n').replace('<br/>', '\n');
    navigator.clipboard.writeText(copyText);
    document.querySelector('.copied').classList.add('copied-active');
}