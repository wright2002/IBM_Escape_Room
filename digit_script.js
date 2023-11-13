const value1 = getRandomInt(1, 9);
const value2 = getRandomInt(1, 9);
const value3 = getRandomInt(1, 9);


function setUp() {
	let ul = document.querySelectorAll('li');
	
	const tiles= ["", "", "", "", "", "", 
				"", "", "", "", "", "", 
				"", "", "", "", "", "", 
				"", "", "", "", "", "", 
				"", "", "", "", "", "", 
				"", "", "", "", "", ""]
				
	for (let a = 0; a < value1; a++) {
		tiles[a] = "key1";
	}
	for (let b = 12; b < value2 + 12; b++) {
		tiles[b] = "key2";
	}
	for (let c = 24; c < value3 + 24; c++) {
		tiles[c] = "key3";
	}

    fillGrid(ul, tiles);
}

const showModal = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}

const checkPasskey = () => {
    console.log("checking key");
	if (document.getElementById("key1").value == value1.toString() && 
	document.getElementById("key2").value == value2.toString() && 
	document.getElementById("key3").value == value3.toString()){
		console.log("key correct");
		showModal();
	}
	else {
		console.log("key incorrect");
	}
}

const shuffle = (arr) => {
    const copy = [...arr];
    // loop over the array
    for(let i = 0; i < copy.length; i++) {
        // for each index,i pick a random index j 
        let j = parseInt(Math.random()*copy.length);
        // swap elements at i and j
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }   
	console.log(copy);
    return copy;
 }

const fillGrid = (items, tiles) => {
    let shuffled = shuffle(tiles);
	
	for(let i = 0; i < tiles.length; i++) {
		console.log("loop");
		if (shuffled[i] != "")
			document.getElementById(i.toString()).className = shuffled[i];
	}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
