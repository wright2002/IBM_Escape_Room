
function setUp() {
    
}

const checkPasskey = () => {
    console.log("checking key");
	if (document.getElementById("key1").value == "7" && 
	document.getElementById("key2").value == "1" && 
	document.getElementById("key3").value == "4"){
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