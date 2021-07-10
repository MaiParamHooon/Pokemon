// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
	const pokemon = document.createElement("div"); // yeh div asli meh bna h .. can change its property using CSS jaise html ki karta tha

	pokemon.classList.add("pokemon"); // class add krhi h pta h class h toh . nhi ainge jismeh explicity nhi likha usmeh symbol use honge

	const label = document.createElement("span");
	label.innerText = `#${i}`;

	const newImg = document.createElement("img");
	newImg.src = `${baseURL}${i}.png`; // variable bnaya h ilsiye $ yeh use kr rhe backtick ke sath

	pokemon.appendChild(newImg); //img daali
	pokemon.appendChild(label); // label daala div meh
	container.appendChild(pokemon); // div ko section with id container meh dala
}
