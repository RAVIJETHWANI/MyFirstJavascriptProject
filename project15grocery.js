const alert= document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitbtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearbtn = document.querySelector(".clear-btn");

let editElement;
let editFlag=false;
let editId="";

form.addEventListener("submit",addItem);

function addItem(e){
	e.preventDefault();
	const id = new Date().getTime().toString();
	const value = grocery.value;
	if(value && !editFlag){
		const element= document.createElement("article");
		element.classList.add("grocery-item");
		const attr= document.createAttribute("data-id");
		attr.value=id;
		element.setAttributeNode(attr);
		element.innerHTML=`<p class="title">${value}</p>
				<div class="btn-container">
					<button class="edit-btn" type="button">
						<i class="fas fa-edit"></i>
					</button>
					<button class="delete-btn" type="button">
						<i class="fas fa-trash"></i>
					</button>`
		list.appendChild(element);
		displayAlert("items added to the list", "success");
		container.classList.add("show-container");
	}else if( value && editFlag){
		console.log("editing");
	}else{
		displayAlert("please enter the value","danger");
	}
}

function displayAlert(text,action){
	alert.innerText=text;
		alert.classList.add(`alert-${action}`);
		
setInterval(function(){
	alert.innerText="";
		alert.classList.remove(`alert-${action}`);
},2000)
}