const checkAnswers = () => {
    console.log("checking answers");
	if (document.getElementById("q1").value == "True" &&
		document.getElementById("q2").value == "Quantum" &&
		document.getElementById("q3").value == "At Rest"){
		console.log("answers correct");
		showModal();
	}
	else {
		console.log("answers incorrect");
	}
}

const showModal = () => {
    document.getElementById('message').innerText = "Padlock Number 3: 6";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
