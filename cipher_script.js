const plaintext = "Test message";

function setUp() {
	const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	const scrambled = shuffle(alphabet);
	let ciphertext = "";
	
	for (let x = 0; x < 26; x++) {
		document.getElementById("0-" + x.toString()).innerText = alphabet[x];
		document.getElementById("1-" + x.toString()).innerText = scrambled[x];
	}
	for (let i = 0; i < plaintext.length; i++) {
		let a = alphabet.findIndex(checkCharacter, plaintext[i]);
		if (a != -1) {
			ciphertext = ciphertext.concat(scrambled[a]);
		}
		else {
			ciphertext = ciphertext.concat(plaintext[i]);
		}
	}
	
	document.getElementById("cipher_phrase").innerText = ciphertext;
}

const showModal = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}

const checkPassphrase = () => {
    console.log("checking key");
	if (document.getElementById("phrase").value == plaintext){
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
 
function checkCharacter(target) {
	return target == this;
}