function checkPasskey(){
	var passkey = document.forms.passkey_entry.passkey.value;
	
	console.log(passkey);
	
	if (passkey == "hello") {
		console.log("valid");
		window.location.href = "crypto_info.html";
	}
	return true;
}