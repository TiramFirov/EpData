//Логика окон

let list_emp = document.getElementById('list-emp');
let add_emp = document.getElementById('add-emp');
let list_of_emp = document.getElementById('list-of-emp');
let add_new_emp = document.getElementById('add-new-emp');

list_emp.addEventListener('click', changeSelectedTabOnAdd);
add_emp.addEventListener('click', changeSelectedTabOnList);

function changeSelectedTabOnAdd() {
	if (!list_emp.classList.contains("active")) {
		//Изменение состояния кнопок
		list_emp.classList.add("active");
		add_emp.classList.remove("active");
		add_emp.classList.remove("btn-dark");
		add_emp.classList.add("btn-outline-dark");

		//Изменение видимости окон
		add_new_emp.classList.add("d-none");
		list_of_emp.classList.remove("d-none");
	}

}

function changeSelectedTabOnList(){
	//Изменение состояния кнопок
	if (!add_emp.classList.contains("active")) {
		add_emp.classList.add("active");
		list_emp.classList.remove("active");
		list_emp.classList.remove("btn-dark");
		list_emp.classList.add("btn-outline-dark");
	

		//Изменение видимости окон
		list_of_emp.classList.add("d-none");
		add_new_emp.classList.remove("d-none");
	}
}







