function getFormElements() {
	var i, text = "";
	var locationArray = document.forms[0].elements;
	for (i = 0; i < document.forms.length; i++){
		for (j = 0; j < locationArray.length; j++){
			locationArray = document.forms[i].elements;
			if (locationArray[j].getAttribute("name") == "category"){
				text += "Type is category: ";
			} else {
				text += locationArray[j].getAttribute("name") + ": " ;
			}
				text += locationArray[j].value + "<br>";
			}
		}
	document.getElementById("demox").innerHTML = text;
}
