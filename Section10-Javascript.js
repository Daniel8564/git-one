//// JavaScript Document
////
////"hello"[4]
////
////"To see a backslash: \\";
////
////"My favorite".length;
////var x=45;
////
////var y=34;
//// x+y;
//
////var name="Ryan";
////var h="Hello there: ";
//// h + name;
//
////var currentP="Dan";
////currentP=null;
////
////alert("Hello there");
//////console.log("Hello from console");
////var userName = prompt ("What is your name");
//////var userName=prompt("What is your name?");
////
//////119. Writing JavaScript in Separate file
////
////alert("Nice to meet you, " + userName);
////console.log("Also great to meet you, " + userName);
//
//
////var firstName=prompt("What is your first name? ");
////var lastName=prompt("What is your last name? ");
////var age=prompt("How old are you (year)? ");
////var day=age*365;
////
////alert("Your full name is " + firstName +" "+ lastName );
////alert("You are " + age+" years, which equals to "+ day + " days.");
////console.log("You are " + age+" years, which equals to "+ day + " days.");
//
//
////var x=10;
////var y="a";
////
////y==="b" || x>=10
//
////var x=3;
////var y=8;
////!(x=="3" || x===y) && !(y!=8 && x<=y)
//
////Flase Values
////!!0;
////!!"";
////!!null;
////!!NaN;
////!!undefined;
////
////var str="";
////var msg="hahah";
////var i="false";
////
////!((str || msg) && i)
//
var age=prompt("How old are you (years)? ");
if(age<18){
	alert("Sorry, you are not allowed to enter the venue.");
}
else if (age<21){
	alert("You can enter but you are not allowed to have drinks.");
}
else {
	alert("You are old enough to enter the venue and have drinks!");
////}
//
//
////var age=Number(prompt("How old are you (years)? "));
////var i=age%2;
////if(i===0){
////	alert("You have even age!");
////}
////else {
////	alert("You have odd age!");
////}
////if(age===21) {
////	alert("Happy your 21th birthday!");
////}
////if (age % Math.sqrt(age)===0) {
////	alert("Your age is square!");
////}
////
////var i=Number(prompt("Guess a Number? "));
////while(i !==7){
////if (i===7){
////	alert("You guessed a right number! Congrats!");
////}
////else if (i>100){
////	alert("Your number is too high, guess a lower number (less than 20)");
////}
////else if (i>7){
////	alert("Your number is high, guess a lower number");
////}
////else {
////	alert("Your number is low, guess a higher number");
////}
////	var i=Number(prompt("Guess a Number? "));
////	}
////alert("You guessed a right number! Congrats!");
//
////var i=0;
////while (i<=50){
////	console.log("Count is: "+ i );
////	i+=5;
////}
////
////var str="hello";
////
////var i=0;
////while(i<str.length){
////	console.log(str[i]);
////	i++;
////}
//
////var i=-10;
////while (i<=19){
////	console.log("Number is: " + i);
////	i++;
////}
//
////var i=5;
////while (i<=20){
////	console.log("Even Number is: " + 2*i);
////	i++;
////}
//
////var i=300;
////while (i<=333) {
////	if (i % 2 !== 0){
////	console.log("Odd Number is: " + i );
////		}
////	i++;
////
////	}
//
////var k=5;
////while (k<=50){
////	if (k%3===0 && k%5===0){
////		console.log("The number divided by 5 and 3 is: " + k);
////	}
////	k++;
////}
//
////var i=0;
////while (i<100){
////var k=prompt("Are we there yet?");
////	if (k==="yes" || k==="yeah"){
////		i=101;
////	}
////	
////		i++;
////	
////}
////alert("Yay, we finally made it!");
//
////var i=prompt("Are we there yet?");
////while (i.indexOf("yes")===-1 && i.indexOf("yeah")===-1){
////	var i=prompt("Are we there yet?");
////}
////alert("Yay, we made it!!");
////
////for(var i=1; i<6; i++){
////	console.log(i);
////}
////
////var str="Hello";
////for (var i=0; i<str.length; i++) {
////	console.log(str[i]);
////}
////console.log("All Numbers between -10 and 19");
////for (var i=-10; i<=19; i++){
////	console.log(i);
////}
////
////console.log("Even Number between 10 and 40");
//// for (var j=10; j<=40; j++){
////	 if (j%2===0){
////		 console.log(j);
////	 }
//// }
////
////console.log("Odd Number between 300 and 333");
////for (var k=300; k<=333; k++) {
////	if (k%2 !== 0){
////		console.log(k);
////	}
////}
////
////console.log("Divisible Numbers by 5&3 Beween 5-50");
////for (var l=5; l<=50; l++){
////	if (l%5===0 && l%3===0){
////		console.log(l);
////		}
////	}
//
////function sing(){
////	console.log("Twinkle, twinkle, little star,");
////	console.log("How I wander what you are!");
////}
////sing();
//
////function square(i){
////	console.log(i*i);
////}
////square(10);
////square(3);
////square(25);
//
////function area(l,w){
////	console.log(l*w);
////}
////area (9,3);
////
////function greet(p1,p2,p3){
////	console.log("Hi "+p1);
////	console.log("Hi "+p2);
////	console.log("Hi "+p3);
////}
////greet("Daniel","Barney","Kalpit");
//
////function square(i){
////	return i*i;
////}
////var k=square(10);
////console.log("Square of 6 is: "+square(6));
////console.log("Square of 10 is: "+k);
//
////function capitalise(str){
////	return str.charAt(0).toUpperCase()+ str.slice(1);
////}
////var city="melbourne";
////console.log(capitalise(city));
//
////
////function capitalise(str){
////	if (typeof str==="number"){
////		return "that is not a string!";
////	}
////	
////	return str.charAt(0).toUpperCase()+ str.slice(1);
////}
////var city="melbourne";
////console.log(capitalise(city));
////var num=35;
////console.log(capitalise(num));
//
////
////var capitalise=function(str){
////	return str.charAt(0).toUpperCase()+ str.slice(1);
////};
////console.log(capitalise("sydney"));
//
////function isEven(num){
////	if(num%2===0){
////		return true;
////	}
////	else{
////		return false;
////	}
////}
////var a=isEven(104);
////var b=isEven(5);
////console.log("104 is an Even number!" +a);
////console.log("5 is not an Even number!" + b);
//
////function factorial(i){
////	var k=1;
////	while (i>1){
////		 k=k*i;
////		i--;
////	}
////	return k;
////	}
////
////	console.log(factorial (5));
////	console.log(factorial (4));
////	console.log(factorial (3));
//
////function kebabToSnake(str) {
////	var i = 0;
////	while (i < str.length) {
////		str = str.replace("-", "_");
////		i++;
////	}
////	return str;
////}
////console.log("I-am to change to snake " + kebabToSnake("I-am-cool-guy"));
//
//
////Higher Order Function
////
////function sing(){
////	console.log("Twinkel, Twinkle");
////	console.log("How I wonder");
////}
////setInterval(sing, 1000);
//
////var friend=["Daniel","Sima","Ryan", "Mahmoud", "Fatima"];
////console.log(friend);
////console.log(friend[0]);
////console.log(friend[1]+" <3 "+friend[2]);
////friend[4]="Barney";
////console.log("Length of Array friend is " + friend.length) ;
//
////Push and Pop
////var color=["red","blue","green","yellow"];
////color.push("purple");
////var col=color.pop();
////console.log(col);
////console.log(color);
////
//////Shift & Unshift
////var color2=["red","blue","green","yellow"];
////color2.unshift("white");
////console.log(color2);
////var col2=color2.shift();
////console.log(col2);
////
//////IndexOf
////var friends=["Charlie","Sima","Barney", "Stuart", "Daniel"];
////var index1= friends.indexOf("Daniel");
////console.log(index1);
////var index2= friends.indexOf("David");
////console.log(index2);
////
//////Slice To copy parts of an Array
////var fruits=['Banana','Orange','Lemon','Apple','pear'];
////var citrus=fruits.slice(1,3);
////console.log(fruits);
////console.log(citrus);
////
////var nums=[1,2,3];
////var othernums=nums.slice();
////console.log(othernums);
//
////var todos=[];
////
////	var input=prompt("What would you like to do? ");
////
////while (input!=="quit"){
////
////if (input==="list"){
////	console.log(todos);
////}
////else if (input==="new"){
////	var newTodo=prompt("Enter new todo? ");
////	todos.push(newTodo);
////}
////	
////	
////input=prompt("What would you like to do? ");
////	
////}
////console.log("OK, you quit the App");
//
//
//
////For Loops
////var colors=["red","Orange","blue","yellow"];
////for (var i=0; i<colors.length; i++){
////	console.log(colors[i]);
////	alert(colors[i]);
////}
//
////ForEach
////var colors1=["red","Orange","blue","yellow"];
////colors1.forEach(function(col){
////	console.log(col);
////			   });
////
////function printcolor(color){
////	console.log("************************");
////	console.log(color);
////	console.log("************************");
////	
////}
////colors1.forEach(printcolor);
//
////var nums=[1,2,3,4,5,6,7,8,9,10];
////for (var i=0; i<nums.length; i++){
////	if (nums[i]%3===0){
////		console.log(nums[i]);
////	}
////}
//
//
////var todos = ["Buy new Turtule"];
//////
////var input = prompt("What would you like to do? ");
////
////while (input !== "quit") {
////
////	if (input === "list") {
////		listTodo();
////		//		console.log("****************");
////		//		todos.forEach(function (todo, i) {
////		//			console.log(i + ": " + todo);
////		//			console.log("****************");
////		//
////		//		});
////		//		console.log("****************");
////
////		//	console.log(todos);
////	} else if (input === "new") {
////		var newTodo = prompt("Enter new todo? ");
////		todos.push(newTodo);
////	} else if (input === "delete") {
////		var index = prompt("Enter the index of todo to delete?");
////		todos.splice(index, 1);
////	}
////
////
////
////	input = prompt("What would you like to do? ");
////
////}
////console.log("OK, you quit the App");
////
////function listTodo() {
////	console.log("****************");
////	todos.forEach(function (todo, i) {
////		console.log(i + ": " + todo);
////		console.log("****************");
////
////	});
////	console.log("****************");
////
////}
//
////var input=prompt("Enter the array of numbers or strings to see the reverse order in [] format? ");
//
////Print Reverse Problem:
//
////function printReverse(arr){
////
////var k=arr.length;
////		for (var j=k-1; j>=0; j--){
////		console.log(arr[j]);
////	}	
////	
////}
////
////printReverse([1,2,3,4]);
//
//
////Uniform Function
//
////function isUniform(arr){
////	
////	for (var i=0; i<arr.length; i++){
////		if (arr[i]===arr[i+1]){
////			return true;
////		}
////		else {
////			return false;
////		}
////	}
////}
//
////forEach is not a good optin in this case:
//
////function isUniform(arr){	
////var first=arr[0];
////	arr.forEach(function(element){
////		if (element!==first){
////			return false;
////		}
////		
////	});
////	return true;
////}
//
////isUniform([1,1,1,1]);
////isUniform([1,"a",1,1]);
////isUniform(["a","a","a","a"]);
//
////****Sum Array Function:****
////function sumArray(arr){
////	var k=arr[0];
////	for (var i=1; i<arr.length; i++){
////		k=k+arr[i];
////	}
////	return k;
////}
////
////function sumArray(arr) {
////	var k = 0;
////	arr.forEach(function (element) {
////		k += element;
////
////	});
////	return k;
////
////}
////
////sumArray([1, 2, 3, 4]);
//
//
////************Max Function Array************
////function max(arr){
////	var k=arr[0];
////	for(var i=1; i<arr.length;i++){
////		if (arr[i]>k){
////			k=arr[i];
////		}
////		}
////	return k;
////}
//
////function max(arr){
////	var k=arr[0];
////	arr.forEach(function(element){
////	if(element>k){
////		k=element;
////	}	
////	});
////	return k;
////}
////
////max([5,2,3,5,10,30,4]);
//
//
////*****************Objects*****************************
//var person = {
//	name: "Daniel",
//	age: 21,
//	city: "Melbourne"
//};
//console.log(person.name);
//console.log(person["city"]);
//person.city = "Sydney";
//person.age += 1;
//
//var person2 = {};
//person2.name = "Sima";
//person2.age = 36;
//person2.city = "Melbourne";
//
//var person3 = new Object();
//person3.name = "Ryan";
//person3.age = 5;
//person3.city = "Melbourne";
//
////	*********Objects inside an Array**********
//var posts = [
//
//	{
//		title: "Water absorption from Air!",
//		author: "Daniel Ramezani",
//		comments: ["Awesome psot", "Terrible post"]
//	}, {
//		title: "Urine decentralised option",
//		author: "Daniel Ramezani"
//	}
//
//];
//
////var someObject={};
////var prop="color";
////someObject[prop]="red";
//
//var someObject = {
//	friends: [{
//		name: "Malfoy"
//	}, {
//		name: "Crabbe"
//	}, {
//		name: "Goyle"
//	}],
//	color: "baby blue",
//	isEvil: true
//};
//
//someObject.friends[0].name;
//
////**************Movie Exercise***********
//function movie(movieDB) {
//	var movieDB = [{
//		title: "In Bruges",
//		rating: 5,
//		hasWatched: true
//	}, {
//		title: "Frozen",
//		rating: 4.5,
//		hasWatched: false
//	}, {
//		title: "Mad Max",
//		rating: 5,
//		hasWatched: true
//	}, {
//		title: "Mission Impossible",
//		rating: 3.5,
//		hasWatched: false
//	}];
//	for (var i = 0; i < movieDB.length; i++) {
//		if (movieDB[i].hasWatched === true) {
//			console.log("You have watched " +"\"" +movieDB[i].title+"\"" + "_" + movieDB[i].rating + " stars.");
//
//		} else {
//			console.log("You have not seen " +"\""+ movieDB[i].title +"\""+ "_" + movieDB[i].rating + " stars.");
//		}
//	}
////
//}
//movie();
////
////**************METHODS***************
//var obj={
//	name:"Emily",
//	age:"32",
//	add: function(x,y){
//		return x+y;
//	}
//};
//obj.add(10,2);
//
//var dogspace={};
//dogspace.speak=function(){
//	return "Woof!";
//};
//var catspace={};
//catspace.speak=function(){
//	return "Meow!";
//};
//
//var comments={};
//comments.data=["Good Job!","Bye","Lame..."];
//comments.prints=function (){
//	this.data.forEach(function(el){
//		console.log(el);
//	});
//};


//***********************DOM (Document Object Model)*****************
//document.url;
//document.links;
//document.body;
//document.head;

//var tag=document.getElementById("highlight");
//console.dir(tag);
//
//var tags=document.getElementsByClassName("bolded");
//console.log(tags[1]);
//console.dir(tags[0]);
//
//var tags2=document.getElementsByTagName("li");
//console.log(tags2);
//console.dir(tags2);
//
//var tags3=document.getElementsByTagName("h1");
//console.log(tags3);
////console.dir(tags3);
//
//var tags4=document.getElementsByTagName("body")[0];
////console.log(tags4);
//console.dir(tags4);
//
//var tag5=document.querySelector("#highlight");
//console.log(tag5);
//
//var tag6=document.querySelector(".bolded");
//console.log(tag6);
//
//var tag7=document.querySelectorAll("li");
//console.log(tag7);
//
//var tag8=document.querySelectorAll(".bolded");
//console.log(tag8[1]);
//
//var tagP=document.getElementById("first");
////console.dir(tagP);
//console.log(tagP);
//
//var tagP2=document.getElementsByClassName("special");
////console.dir(tagP2);
//console.log(tagP2);
//
//var tagP3=document.querySelectorAll("p");
////console.dir(tagP3[2]);
//console.log(tagP3[2]);
//
//var tagP4=document.querySelector("#last");
////console.dir(tagP4);
//console.log(tagP4);
//
//tag.style.color="yellow";
//tag.style.border="2px solid blue";
//
//var p=document.querySelector(".Corgi");
//console.log(p.textContent);
//console.log(p.innerHTML);
//
//var ul=document.querySelector(".DOM");
//console.log(ul.textContent);
//console.log(ul.innerHTML);
//
//var img1=document.querySelectorAll("img");
//console.log(img1[3]);
//img1[3].setAttribute("src", "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
//
//var a1=document.querySelectorAll("a");
//console.log(a1[4]);
//a1[4].setAttribute("href", "https://www.udemy.com/");
//a1[4].textContent="Link to Udemy";
//
//var logo=document.querySelector("#lga");
//logo.setAttribute("src","https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
//logo.style.width="200px";
//logo.style.height="100px";
//logo.style.border="2px solid purple";
//var links=document.getElementsByTagName("a");
//for (var i=0;i<links.length;i++){
//	links[i].style.background="pink";
//	links[i].style.color="orange";
//	links[i].style.border="1px dashed purple";
//links[i].setAttribute("href","https://www.udemy.com/");
////	console.log(links[i].textContent);
//}


//**************************ADVANCED DOM**************************
//var a1=document.querySelectorAll("a");
////console.log(a1[4]);
//a1[4].addEventListener("click", function(){
//	alert("a tag was clicked!");
//	a1[4].style.background="orange";
//});
//
//var ul1=document.querySelectorAll("ul");
////console.log(ul1[2]);
//ul1[2].addEventListener("click",function(){
//	console.log("UL was clicked!");
//	
//});
//
//for (var i=0; i<ul1.length; i++){
//	ul1[i].addEventListener("click", function(){
//	this.style.color="pink"	;					
//							
//							});}
//
//var but1=document.querySelectorAll("button");
//var isPurple=true;
//
//but1[1].addEventListener("click",function (){
//	if (isPurple){
//	this.style.background="white";
////	isPurple=false; 
//	}
//	else {
//		this.style.background="purple";
////	isPurple=true;
//	}
//		isPurple= !isPurple;
//});
//
//console.log(but1[1]);

//		document.body.background="blue";


//var but1=document.querySelectorAll("button");
////var isPurple=true;
//
//but1[1].addEventListener("click",function (){
//	
//	this.style.classList.toggle("purple");
//		
//});

//*****************Score Keeper Project***************
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1D = document.querySelector("#p1Display");
var p2D = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var input1 = document.querySelector("input");
var p = document.querySelector("#pNo");

//console.log(p1D);
//console.log(reset);
//console.log(input1);
console.log(p);
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winScore = 5;
var inScore = 0;

p1button.addEventListener("click", function () {
	if (!gameOver) {
		p1score++;
		console.log(p1score, winScore);
		if (p1score === winScore) {
			//			console.log("Game Over!");
			p1D.classList.add("winner");
			gameOver = true;
		}
		p1D.textContent = p1score;
	}

	//		console.log(p1score);
});

p2button.addEventListener("click", function () {
	if (!gameOver) {
		p2score++;
		if (p2score === winScore) {
			//			console.log("Game Over!");
			p2D.classList.add("winner");
			gameOver = true;
		}
		p2D.textContent = p2score;
	}
});

reset.addEventListener("click", function () {
	resetf();
});

//input1.addEventListener("click",function(){
//	inScore++
//	winScore=inScore;
//});

input1.addEventListener("change", function () {
	winScore = Number(this.value);
	p.textContent = winScore;
	resetf();
});

function resetf() {
	p1score = 0;
	p1D.textContent = p1score;
	p2score = 0;
	p2D.textContent = p2score;
	gameOver = false;
	//	console.log("reset Cicked!");
	p1D.classList.remove("winner");
	p2D.classList.remove("winner");
}

//****************TO DO PROJECT**************
//*****************QuerySelectorAll is not good opetion for Add Event*************


//var firstLi=document.querySelector(".first-ToDo");
//console.log(firstLi);
//
//firstLi.addEventListener("mouseover", function () {
////	console.log("Mouse Over addEventListener!");
//	this.style.color="green";
//});
//
//firstLi.addEventListener("mouseout", function () {
////	console.log("Mouse Over addEventListener!");
//	this.style.color="black";
//});


var Lis = document.querySelectorAll(".first-ToDo");
console.log(Lis);

for (var i = 0; i < Lis.length; i++) {
	Lis[i].addEventListener("mouseover", function () {
		//	console.log("Mouse Over addEventListener!");
		this.classList.add("selected");
	});

	Lis[i].addEventListener("mouseout", function () {
		//	console.log("Mouse Over addEventListener!");
		//	this.style.color="black";
		this.classList.remove("selected");
	});
	Lis[i].addEventListener("click", function () {

		this.classList.toggle("done");
	});


}

var as = document.querySelectorAll("a");
console.log(as.length);









var numOfElements = 6;
var colors = generateRandomColor(numOfElements);

//var colors=[
//	"rgb(255, 0, 0)",
//	"rgb(255, 255, 0)",
//	"rgb(0, 255, 0)",
//	"rgb(0, 255, 255)",
//	"rgb(0, 0, 255)",
//	"rgb(255, 0, 255)",
//];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
//var messageDisplay=document.getElementsByClassName("message");
var messageDisplay = document.querySelector(".message");
console.log(messageDisplay);
colorDisplay.textContent = pickedColor;

var h1 = document.querySelector(".h1Background");
var newColor = document.querySelector(".NewButt");
var gameOverColor = false;
var easyGame = document.querySelector(".easy");
var hardGame = document.querySelector(".hard");


easyGame.addEventListener("click", function () {
	numOfElements = 3;
	colors = generateRandomColor(numOfElements);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardGame.addEventListener("click", function () {
	numOfElements = 6;
	colors = generateRandomColor(numOfElements);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}

});




for (var i = 0; i < squares.length; i++) {
	//	Add initial colors
	squares[i].style.backgroundColor = colors[i];

	//	Add ClickListeners to squares
	squares[i].addEventListener("click", function () {
		//		console.log("Clciked squares[i]");
		if (!gameOverColor) {
			var clickedColor = this.style.backgroundColor;

			//		*************This is for checkin the bug***********
			//		console.log(clickedColor,pickedColor);
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				//			newColor.textContent="Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				//			alert("Right!");
				gameOverColor = true;
				messageDisplay.textContent = "Play Again? (Just press New Color)";


			} else {
				this.style.backgroundColor = "#f5d9d5";
				messageDisplay.textContent = "Try Again";
				//			alert("Wrong!");

			}

		}
	});
}

newColor.addEventListener("click", function () {

	resetColor();

});


function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	//	console.log(random);
}

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var redNum = Math.floor(Math.random() * 256);
	var blueNum = Math.floor(Math.random() * 256);
	var greenNum = Math.floor(Math.random() * 256);

	//	***If there is not space afte "," there is not mathced between pickedColor and clickedColor***

	return "rgb(" + redNum + ", " + blueNum + ", " + greenNum + ")";
}

function resetColor() {
	gameOverColor = false;
	colors = generateRandomColor(numOfElements);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		//	Add initial colors
		squares[i].style.backgroundColor = colors[i];
	}
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#f5d9d5";
	messageDisplay.textContent = "";
//	messageDisplay.textContent = "New Color";

}

//***************jQuery****************
//$("h1").css("color","yellow");

//var style = {
//	color: "red",
//	backgroundColor: "white", 
//	border: "2px solid purple"
//};
////$("h1").css(style);

$("a").css("font-size","20px");

//$("li").css({
//	fontSize: "10px",
//	border: "3px dashed purple",
//	backgroundColor: "rgba(89, 45, 20, 0.5)"
//});

//*******************jQuery Exercise********************
//$(".jQ").css("backgroundColor", "purple");
$("div.highlighted").css("width", "50px");
$("#third").css({
	border:"2px solid orange"
});

//$("div:first-of-type").css("color","pinke");

//*************jQuery Methods**************
$("h1").text();
$('ul').text();
//$("li:first-of-type").text("New Text!!!");
$("li").html();
//$("ul").html("<li>I hacked your ul!</li>");
$(".imgJQ").css("width","500px");
//$(".imgJQ").attr("src","https://images.unsplash.com/photo-1569289522127-c0452f372d46?ixlib=rb-1.2.1&auto=format&fit=crop&w=629&q=80");
//$("input");
//$("#inpJQ").attr("type","checkbox");
$("img").last().attr("src","https://images.unsplash.com/photo-1569289522127-c0452f372d46?ixlib=rb-1.2.1&auto=format&fit=crop&w=629&q=80");
$("#inpJQ").val("Sima Khare");
$("#inpJQ").val("");
$("select").val();
$("h2").addClass("winner");
$("h2").removeClass("winner");
$("li").addClass("wrong");
$("li").removeClass("wrong");
//$("li").first().toggleClass("done");

//****************jQuery Events*****************
$(".jQEvent").click(function() {
	console.log("h2 is clicked!")
});

//$("button").click(function(){
//	console.log("buttons clicke!")
//});

$("button").click(function(){
	$(this).css("background","pink")
});

$("button").click(function(){
	var text=$(this).text();
	console.log("You clicked "+text);
});


//$("#inpJQ").keypress(function(){
//	console.log("You pressed a key!");
//	
//});

//$("#inpJQ").keypress(function(event){
//	//	console.log(event);
//	
//	if(event.which===13){
//		console.log("You hit Eneter!");
//	}
//	
//});
$("h2").on("click",function(){
	$(this).css("color","purple");
	
});

$("#inpJQ").on("keypress",function(e){
//	console.log("Keypressed!");
	if(e.which===13){
		console.log("You pressed an Enter!");
	}
	
});

$("button").on("mouseenter", function(){
	
//	console.log("Mouse Entered!");
	
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	
	$(this).css("font-weight", "normal");
});

//function Person(props) {
//	return (
//	<div className="person">
//		<h1>{props.name}</h1>
//		<p> Your Age: {props.age}</p>
//	</div>
//	);
//}
//
//ReactDOM.render(<Person name="Daniel" age="28" />, document.querySelector('#per1'));
//ReactDOM.render(<Person name="Sima" age="36" />, document.querySelector('#per2'));

//const myName="Daniel";
//console.log(myName);

//function printMyName(name){
//	console.log(name);
//}
//printMyName("Daniel");

//const printMyName=(name) => {
//	console.log(name);
//};
//printMyName("Daniel");


//const printMyName = name => {
//	console.log(name);
//};
//printMyName("Daniel");


//const printMyName = (name, age) => {
//	console.log(name,age);
//};
//printMyName("Daniel", 28);

//const multiply = (number) => {
//	return number*2;
//};
//console.log(multiply(3));
//
//const multiply = (number) => number*2;
//
//console.log(multiply(3));

//class Human {
//	constructor(){
//		this.gender = "male";
//	}
//	printGender (){
//		console.log(this.gender);
//	}
//}
//
//class Person extends Human {
//	constructor (){
//		super();
//		this.name="Daniel";
//		this.gender="female";
//		}
//	printMyName (){
//		console.log(this.name);
//	}
//}
//
//const person = new Person();
//person.printMyName();
//person.printGender();

//class Human {
//	
//		gender = "male";
//	
//	printGender = () => {
//		console.log(this.gender);
//	}
//}
//
//class Person extends Human {
//	
//		name="Daniel";
//		gender="female";
//		
//	printMyName = () => {
//		console.log(this.name);
//	}
//}
//
//const person = new Person();
//person.printMyName();
//person.printGender();

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person ={
	name:"Daniel"
};
const newPerson = {
	...person,
	age: "28"
}
console.log(newPerson);

const filter = (...args) => {
	return args.filter(el => el===1);
}
console.log(filter(1,2,3));


[num1, ,num3]=numbers;
console.log(num1, num3);

//const personReference = {
//	name:"Daniel R"
//};
//const secondperson = personReference;
//console.log(secondperson);
//personReference.name = "Ryan R";
//console.log(secondperson);

const personReference = {
	name:"Daniel R"
};
const secondperson = {
	...personReference
};
console.log(secondperson);
personReference.name = "Ryan R";
console.log(secondperson);

const doubleNumArray = numbers.map((num) => {
	return num * 2;
});
console.log(doubleNumArray);
