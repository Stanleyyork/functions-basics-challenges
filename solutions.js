console.log("ALL FUNCTIONS SHOULD EQUATE TO 'TRUE'...");


function multiply(a,b) {
	if (a !== undefined && b !== undefined) {
		return a * b;
	} else {
		console.log("Need two parameters!");
	}
}
console.log(" - multiply: " + (multiply(5, 7) === 35));


function isEven(n) {
	if (n !== undefined){
		return (n%2 === 0 ? true : false);
	}
}
console.log(" - isEven: " + (isEven(4) === true));


function swap(arr,x,y) {
	var b = arr[y];
	arr[y] = arr[x];
	arr[x] = b;
	return arr;
}
console.log(swap(['moe', 'larry', 'curly'], 0, 2));
console.log(" - swap: " + (swap(['moe', 'larry', 'curly'], 0, 2) === [ 'curly', 'larry', 'moe' ]) );


function getRand(min,max){
	return Math.floor(Math.random() * (max - min)) + .1 + min;
}
x = getRand(5, 10);
console.log(" - getRand: " + ((x < 10) && (x > 5)));


function randArr(n) {
	var arr = [];
	for(var i = 0; i<n; i++){
		arr.push(Math.floor(Math.random() * 100));
	}
	return arr;
}
y = randArr(3);
if (y.length === 3){
	for(var i=0;i<3;i++){
		if(y[i]>0){
			if(y[i]<101){
			} else {
				randArrtf = false;
				break;
			}
		} else {
			randArrtf = false;
			break;
		}
	randArrtf = true;
	}
} else {
	randArrtf = false;
}
console.log(" - randArr: " + randArrtf);