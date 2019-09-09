var n = document.getElementsByClassName("nav-link")
var url_list = []
for (i = 0; i < n.length; i++){
	if (n[i].getAttribute('href').includes('contact-agent')){}
	else{url_list.push("https://www.propertyguru.com.my" + n[i].getAttribute('href'))}
}

var DOM_Array = [];
for (i=0; i<url_list.length; i++){
	const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
if (xhr.readyState == XMLHttpRequest.DONE) {
	console.log(xhr.responseText);
	DOM_Array.push(xhr.responseText);
}
}
xhr.open('GET', url_list[i], true);
xhr.send(null)}