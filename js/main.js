console.log("hey");

for (var i = 0; i<10; i++) {
	console.log(i);
}

for (var i = 0; i<=100; i+=5) {
	console.log(i);
}


// Defined function
function sayHi(x) {
	var x = "fucker"
	console.log("Hey " + x);
}
// calling function
sayHi();

// defined multiply function
function times (x,y) {
	console.log(x * y);
}

times(10,10);

var answer = prompt("What is your age");

console.log(answer);

if (answer === "30") {
	console.log("You are dumb and young")
}

else {
	console.log("You are OLD as HELL")
}