const value1 = 13;
const value2 = 24;
const value3 = 6;

const showModal = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}

const checkPadlock = () => {
    console.log("checking key");
	if (document.getElementById("pad1").value == value1.toString() && 
	document.getElementById("pad2").value == value2.toString() && 
	document.getElementById("pad3").value == value3.toString()){
		console.log("key correct");
		showModal();
	}
	else {
		console.log("key incorrect");
	}
}