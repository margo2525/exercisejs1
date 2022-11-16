//0 Створити числовий масив та проініціалізувати його (*випадковими числами).
const arr = [];
for (i = 0; i < 20; i++) {
	arr.push(Math.round(Math.random() * 100));
}
function printArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log('arr[i] :>> ', arr[i]);
	}
}
printArray(arr);

//1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
//2 Вивести розмір масиву.
//3 Зробити копію масиву.
console.log('arr.pop() :>> ', arr.pop()); // повертає і видаляє останній елемент
console.log('arr.shift(10) :>> ', arr.shift()); // повертає і видаляє перший елемент
arr.unshift(-5); // додає на початок масива елемент
arr.push(6);

console.log('arr.length :>> ', arr.length);//розмір масиву.
//копію масиву.
const arr1 = Array.from(arr);
console.log('arr1 :>> ', arr1);


//4 Вивести елементи з парними індексами.
for (key in arr) {
	console.log(`arr[${key}]`, arr[key]);
}


function isindex(index) {
	return index % 2 === 0;
}
const arr2 = arr.filter(isindex);
console.log('arr2', arr2)


const arr3 = arr.filter((_, index) => index % 2 === 0);
console.log('arr3', arr3)
// выводится з парними індексами  и  0 индех ???


//5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
function isOdd(item) {
	return item % 2 === 0;
}
const arr4 = arr.filter(isOdd);
console.log('arr4', arr4)



const arr5 = arr.map(arr => arr % 2 === 0 && arr)
console.log('arr5 :>> ', arr5);

//6 Вивести індекси нульових елементів (елемент дорівнює нулю).
const arr6 = [2, 3, 6, 10, 14, 17, 19];
function f(value) { return value == 0; }
const index = arr6.findIndex(f);
alert('0 знайдено в масиві за індексом: ' + index);

//7 Підрахувати кількість нульових елементів.



// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
//8 Отримати новий масив із заданого, який міститиме лише
//ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
const arr7 = [-1, 5, 0, 9, -10];
const arr8 = arr7.map(arr7 => arr7 > !0 && arr7)
console.log('arr8', arr8)

//9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного,
//поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
const arr9 = [99, 5, 0, 9, 30];
const arr10 = arr9.map(arr9 => arr9 / 100)
console.log('arr10', arr10)

//10 Вивести елементи масиву, зведені у куб.
const arr11 = [3, 4, 5]
function mapArray(currentValue) {
	return Math.pow(currentValue, 3);
}
const arr12 = arr6.map(mapArray);
console.log('arr12', arr12)

//11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його,
//або видати діагностичне повідомлення, якщо такого елементу не існує.

function f(value) { return value == (10); }
const index100 = arr6.findIndex(f);
alert('100 знайдено в масиві за індексом: ' + index);

//12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
function isPrime(n) {
	let k = Math.sqrt(n);
	for (let i = 2; i <= k; i++)
		if (n % i === 0)
			return false;
	return true;
}
const arr13 = arr.map(isPrime);
console.log('arr13', arr13)


//13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
//просматрива информацию по уроку нашла  такую функцию- пробовала применить не получилось

//constarr.out.println("Від'ємні елементи:");
// проглядаємо кожен елемент масиву
//for (i = 0; i < 20; i++) {
	// якщо елемент від'ємний, показуємо його
	//if (a[i] < 0) arr.out.println("a[" + i + "]=" + a[i]);
//}