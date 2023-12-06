const checkAnswers = () => {
    console.log("checking answers");
	if (document.getElementById("q1").value.toLowerCase() == "multi-factor authentication" &&
		document.getElementById("q2").value.toLowerCase() == "true" &&
		document.getElementById("q3").value.toLowerCase() == "resources"){
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
