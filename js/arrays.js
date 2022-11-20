function customCounter1(a) {

	let i = 0;
	return function () {
		return (i += a)
	};
}

const myCounter = customCounter1(5);
const result1 = myCounter();
console.log('result1 ', result1);
const result2 = myCounter();
console.log('result2 ', result2);
const result3 = myCounter();
console.log('result3 ', result3);
const result4 = myCounter();
console.log('result4 ', result4);

function customCounter2(b) {

	let j = 1;
	return function () {
		return (j += b)
	};
}

const myCounter1 = customCounter2(5);
const result5 = myCounter1();
console.log('result5 ', result5);
const result6 = myCounter1();
console.log('result6 ', result6);
const result7 = myCounter1();
console.log('result7 ', result7);

