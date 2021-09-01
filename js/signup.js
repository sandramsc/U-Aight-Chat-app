const form = document.querySelector(".signup form"),
enterChatBtn = form.querySelector(".button input"),
//from index.php
errorText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
	e.preventDefault(); //prevents form from submitting
}

enterChatBtn.onclick = ()=>{
	//console.log("Hello World");
	
	//AJAX starts here
	let xhr = new XMLHttpRequest(); //creates XML Object
	xhr.open("POST","php/signup.php", true);
	xhr.onload = ()=>{
		//gives response of entered url
		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
				let data = xhr.response;
				//console.log(data);
				if(data == "SUCCESS"){
					location.href = "users.php";
				}else{
					errorText.textContent = data;
					errorText.style.display ="block"
			}
				
			}
			
		}
		
    }
	//sending signup form data to PHP through AJAX
	let formData = new FormData(form); //creates new formData object
	xhr.send(formData); //sending form data to PHP
}