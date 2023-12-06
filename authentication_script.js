const checkAnswers = () => {
    console.log("checking answers");
	if (document.getElementById("q1").value.toLowerCase() == "multi-factor authentication" &&
		document.getElementById("q2").value.toLowerCase() == "true" &&
		document.getElementById("q3").value.toLowerCase() == "resources"){
		console.log("answers correct");
		document.getElementById("q1").setAttribute("class", "correct");
		document.getElementById("q2").setAttribute("class", "correct");
		document.getElementById("q3").setAttribute("class", "correct");
		showModal();
	}
	else {
		console.log("answers incorrect");
		if (document.getElementById("q1").value.toLowerCase() != "multi-factor authentication") {
			document.getElementById("q1").setAttribute("class", "incorrect");
		}
		else {
			document.getElementById("q1").classList.remove("incorrect");
			document.getElementById("q1").setAttribute("class", "correct");
		}
		if (document.getElementById("q2").value.toLowerCase() != "true") {
			document.getElementById("q2").setAttribute("class", "incorrect");
		}
		else {
			document.getElementById("q2").classList.remove("incorrect");
			document.getElementById("q2").setAttribute("class", "correct");
		}
		if (document.getElementById("q3").value.toLowerCase() != "resources") {
			document.getElementById("q3").setAttribute("class", "incorrect");
		}
		else {
			document.getElementById("q3").classList.remove("incorrect");
			document.getElementById("q3").setAttribute("class", "correct");
		}
	}
}

const showModal = () => {
    document.getElementById('message').innerText = "Padlock Number 2: 24";
    document.getElementById('modal').classList.remove("hide");
}

const hideModal = () => {
    document.getElementById('modal').classList.add("hide");
}
