let tg = window.Telegram.WebApp;
let params = (new URL(document.location)).searchParams;
let mod = JSON.parse(params.get("data"));
let item_list = []

console.log(typeof mod)

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.sendData()
tg.MainButton.setText("Купить");


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let rebtn1 = document.getElementById("rebtn1");
let rebtn2 = document.getElementById("rebtn2");
let rebtn3 = document.getElementById("rebtn3");
let rebtn4 = document.getElementById("rebtn4");
let rebtn5 = document.getElementById("rebtn5");
let rebtn6 = document.getElementById("rebtn6");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

let durger_dict =  {"Durger_1": 0, 
					"Durger_2": 0, 
					"Durger_3": 0, 
					"Durger_4": 0, 
					"Durger_5": 0, 
					"Durger_6": 0,
				}

btn1.addEventListener("click", function(){
	item_list.push("Durger_1");
	durger_dict["Durger_1"] ++
	if(item_list.length >0){
		tg.MainButton.show();
	}
	else{
		tg.MainButton.hide();
	}
});

btn2.addEventListener("click", function(){
	item_list.push("Durger_2");
	durger_dict["Durger_2"] ++
	if(item_list.length >0){
		tg.MainButton.show();
	}
	else{
		tg.MainButton.hide();
	}
});

btn3.addEventListener("click", function(){
	item_list.push("Durger_3");
	durger_dict["Durger_3"] ++
	if(item_list.length >0){
		tg.MainButton.show();
	}
	else{
		tg.MainButton.hide();
	}
});

btn4.addEventListener("click", function(){
	item_list.push("Durger_4");
	durger_dict["Durger_1"] ++
	if(item_list.length >0){
		tg.MainButton.show();
	}
	else{
		tg.MainButton.hide();
	}
});

btn5.addEventListener("click", function(){
	item_list.push("Durger_5");
	durger_dict["Durger_5"] ++
	if(item_list.length >0){
		tg.MainButton.show();
	}
	else{
		tg.MainButton.hide();
	}
});

btn6.addEventListener("click", function(){
	item_list.push("Durger_6");
	durger_dict["Durger_6"] ++
	if(item_list.length >0){
		tg.MainButton.show();
	}
	else{
		tg.MainButton.hide();
	}
});



// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 1!");
// 		item = "1";
// 		tg.MainButton.show();
// 	}
// });

// btn2.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 2!");
// 		item = "2";
// 		tg.MainButton.show();
// 	}
// });

// btn3.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 3!");
// 		item = "3";
// 		tg.MainButton.show();
// 	}
// });

// btn4.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 4!");
// 		item = "4";
// 		tg.MainButton.show();
// 	}
// });

// btn5.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 5!");
// 		item = "5";
// 		tg.MainButton.show();
// 	}
// });

// btn6.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
// 		tg.MainButton.setText("Вы выбрали товар 6!");
// 		item = "6";
// 		tg.MainButton.show();
// 	}
// });


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item_list);
});

let p = document.createElement("p");

p.innerText = `Вы взяли ${""}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








