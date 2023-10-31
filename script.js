const search_box =  document.getElementById("input-box");
const listContainer=  document.getElementById("list-container");


function AddList(){
	if(search_box.value === ''){
		alert("Type something to add task!");
	}
	else{
		let li =document.createElement("li");
		li.innerHTML = search_box.value;
		listContainer.appendChild(li);
		let span_element = document.createElement("span");
		span_element.innerHTML = '\u00d7';
		li.appendChild(span_element);
	}
	search_box.value ="";
	saveData();

}


listContainer.addEventListener("click",function(e){

	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);


function saveData(){
	localStorage.setItem("data",listContainer.innerHTML)
}

function  showTask(){
	listContainer.innerHTML =  localStorage.getItem("data");
}
showTask()