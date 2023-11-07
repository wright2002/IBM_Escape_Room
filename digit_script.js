const value1 = 7;
const value2 = 1;
const value3 = 4;


function setUp() {
    
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

const showModal = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}