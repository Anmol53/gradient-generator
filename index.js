window.addEventListener("DOMContentLoaded", (event) => {
	const body = document.querySelector("body");
	const { backgroundColor, backgroundImage } = randomGradientGenerator();
	body.style.backgroundColor = backgroundColor;
	body.style.backgroundImage = backgroundImage;
});

function randomColorGenerator() {
	let x = Math.random();
	let randomColor = Math.floor(x * 16777215).toString(16);
	return `#${randomColor}`;
}

function randomGradientGenerator() {
	let randomColor1 = randomColorGenerator();
	let randomColor2 = randomColorGenerator();
	return {
		backgroundColor: `#${randomColor1}`,
		backgroundImage: `linear-gradient(90deg, ${randomColor1} 0%, ${randomColor2} 100%)`,
	};
}
