const checkAnswers = () => {
    console.log("checking answers");
	if (document.getElementById("q1").value == "redundancy" && 
	document.getElementById("q2").value == "at rest" && 
	document.getElementById("q3").value == "true"){
		console.log("answers correct");
		showModal();
	}
	else {
		console.log("answers incorrect");
	}
}

const showModal = () => {
    document.getElementById('message').innerText = "Correct!";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
