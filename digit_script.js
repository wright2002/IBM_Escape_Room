const value1 = 7;
const value2 = 1;
const value3 = 4;

let ul = document.querySelectorAll('li');
const tiles= ["1", "2", "3", "", "", "", 
			"", "", "", "", "", "", 
			"", "", "", "", "", "",
			"", "", "", "", "", "", 
			"", "", "", "", "", "", 
			"", "", "", "", "", ""]


function setUp() {
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

const fillGrid = (items, tiles) => {
    let shuffled = shuffle(tiles);

    items.forEach((item, i) => {
        item.innerText = shuffled[i];
    })
}

fillGrid(ul, tiles);

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
    return copy;
 }