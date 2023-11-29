const checkAnswers = () => {
    console.log("checking answers");
	if (document.getElementById("q1").value == "Multi-Factor Authentication" &&
		document.getElementById("q2").value == "True" &&
		document.getElementById("q3").value == "Resources"){
		console.log("answers correct");
		showModal();
	}
	else {
		console.log("answers incorrect");
	}
}

const showModal = () => {
    document.getElementById('message').innerText = "Padlock Number 2: 24";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
